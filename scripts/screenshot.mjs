#!/usr/bin/env node
// Quick visual smoke-test: open each locale page in headless Chrome,
// wait for fonts + Next/Image to settle, save a full-page PNG.
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Reuse the puppeteer instance from /marketing-screenshots so we don't have
// to add another 300MB dependency to /landingpage.
const puppeteerPath = path.resolve(
  __dirname,
  "..",
  "..",
  "marketing-screenshots",
  "node_modules",
  "puppeteer",
  "lib",
  "esm",
  "puppeteer",
  "puppeteer.js"
);
const mod = await import(pathToFileURL(puppeteerPath).href);
const puppeteer = mod.default ?? mod;

const OUT = path.resolve(__dirname, "..", "preview");
await mkdir(OUT, { recursive: true });

// Args: each entry is either "locale" or "locale:palette".
// Examples:
//   node scripts/screenshot.mjs en
//   node scripts/screenshot.mjs en:tube-glow en:rainbow-pride
const rawArgs = process.argv.slice(2);
const targets = (rawArgs.length ? rawArgs : ["en"]).map((entry) => {
  const [locale, palette] = entry.split(":");
  return { locale, palette: palette || null };
});

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
});

try {
  for (const { locale, palette } of targets) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    if (palette) {
      // Seed localStorage before any document loads from this origin so
      // the pre-hydration palette init script picks it up on first paint.
      await page.evaluateOnNewDocument((p) => {
        try {
          localStorage.setItem("pitch-palette", p);
        } catch {}
      }, palette);
    }
    const url = `http://localhost:3000/${locale}`;
    const tag = palette ? `${locale} [${palette}]` : locale;
    process.stdout.write(`→ ${tag.padEnd(28)}  `);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    // Scroll through the whole document so Next/Image lazy-loaded
    // images below the fold actually fire their network requests.
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      const step = window.innerHeight * 0.6;
      for (let y = 0; y < h; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    // Settle: wait for any in-flight image requests triggered by scrolling.
    await page
      .waitForNetworkIdle({ idleTime: 600, timeout: 8000 })
      .catch(() => {});
    // Give the drift animation a moment to settle on a frame
    await new Promise((r) => setTimeout(r, 400));
    const filename = palette ? `${locale}-${palette}.png` : `${locale}.png`;
    const out = path.join(OUT, filename);
    await page.screenshot({ path: out, fullPage: true });
    console.log(`✓ ${out}`);
    await page.close();
  }
} finally {
  await browser.close();
}
