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

const locales = process.argv.slice(2);
const targets = locales.length ? locales : ["en"];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
});

try {
  for (const locale of targets) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    const url = `http://localhost:3000/${locale}`;
    process.stdout.write(`→ ${url}  `);
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
    const out = path.join(OUT, `${locale}.png`);
    await page.screenshot({ path: out, fullPage: true });
    console.log(`✓ ${out}`);
    await page.close();
  }
} finally {
  await browser.close();
}
