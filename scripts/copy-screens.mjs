#!/usr/bin/env node
// Pull the 1125x2436 marketing screenshots from /marketing-screenshots/exports
// and lay them out under /landingpage/public/screens/<locale>/<NN>-<slug>.png
// so the landing page can reference them with a stable, locale-aware path.

import { cp, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const SRC = path.join(ROOT, "marketing-screenshots", "exports");
const DEST = path.join(__dirname, "..", "public", "screens");
// The default static favicon + apple-touch-icon. Same neon-red
// tuning-fork art that ships as AppIcon.appiconset/AppIcon.png in
// the iOS bundle. The palette switcher swaps this at runtime to the
// matching /public/app-icons/<palette>.png on selection.
const ICON_SRC = path.join(ROOT, "app_icons", "icon_jukebox_glow.png");
const ICON_DESTS = [
  path.join(__dirname, "..", "public", "app-icon.png"),
  path.join(__dirname, "..", "src", "app", "icon.png"),
  path.join(__dirname, "..", "src", "app", "apple-icon.png"),
];

// One PNG per palette → /public/app-icons/<palette>.png. Source files
// come from /app_icons/ at the repo root.
const PALETTE_ICONS = [
  { from: "icon_jukebox_glow.png", to: "jukebox-chrome.png" },
  { from: "icon_tube_glow.png",    to: "tube-glow.png" },
  { from: "icon_reel_to_reel.png", to: "reel-to-reel.png" },
  { from: "icon_rainbow_pride.png", to: "rainbow-pride.png" },
];
const PALETTE_ICONS_DEST = path.join(__dirname, "..", "public", "app-icons");

const SIZE = "1125x2436";
const SCREENS = ["01-hero", "02-onfire", "03-progress", "04-rank"];
const LOCALES = [
  { id: "en",      folder: "en-US",   token: "en" },
  { id: "de",      folder: "de-DE",   token: "de" },
  { id: "fr",      folder: "fr-FR",   token: "fr" },
  { id: "es",      folder: "es-MX",   token: "es" },
  { id: "ja",      folder: "ja",      token: "ja" },
  { id: "zh-Hans", folder: "zh-Hans", token: "zh-Hans" },
];

async function main() {
  if (!existsSync(SRC)) {
    console.error(`[copy-screens] missing ${SRC} — run pnpm export:screenshots in /marketing-screenshots first.`);
    process.exit(1);
  }

  await mkdir(DEST, { recursive: true });
  if (existsSync(ICON_SRC)) {
    for (const dest of ICON_DESTS) {
      await copyFile(ICON_SRC, dest);
    }
    console.log(`[copy-screens] icon → public/app-icon.png + src/app/{icon,apple-icon}.png`);
  }

  await mkdir(PALETTE_ICONS_DEST, { recursive: true });
  for (const pi of PALETTE_ICONS) {
    const from = path.join(ROOT, "app_icons", pi.from);
    if (!existsSync(from)) {
      console.warn(`[copy-screens] palette icon missing: ${from}`);
      continue;
    }
    await copyFile(from, path.join(PALETTE_ICONS_DEST, pi.to));
  }
  console.log(`[copy-screens] palette icons → public/app-icons/{${PALETTE_ICONS.map((p) => p.to).join(", ")}}`);

  for (const loc of LOCALES) {
    const localeDest = path.join(DEST, loc.id);
    await mkdir(localeDest, { recursive: true });
    for (const slug of SCREENS) {
      const filename = `${slug}-${loc.token}-${SIZE}.png`;
      const from = path.join(SRC, loc.folder, filename);
      const to = path.join(localeDest, `${slug}.png`);
      if (!existsSync(from)) {
        console.warn(`[copy-screens] skip (missing): ${from}`);
        continue;
      }
      await cp(from, to);
    }
    console.log(`[copy-screens] ${loc.id} ← ${loc.folder}`);
  }

  console.log("[copy-screens] done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
