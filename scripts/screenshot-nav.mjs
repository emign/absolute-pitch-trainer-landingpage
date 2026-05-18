#!/usr/bin/env node
// Zoomed crop of the nav strip for verifying the per-palette logo swap.
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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

const palettes = ["jukebox-chrome", "tube-glow", "reel-to-reel", "rainbow-pride"];

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
try {
  for (const palette of palettes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 200, deviceScaleFactor: 2 });
    await page.evaluateOnNewDocument((p) => {
      try { localStorage.setItem("pitch-palette", p); } catch {}
    }, palette);
    await page.goto("http://localhost:3000/en", { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 300));
    const out = path.join(OUT, `nav-${palette}.png`);
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1280, height: 80 } });
    console.log(`✓ ${out}`);
    await page.close();
  }
} finally {
  await browser.close();
}
