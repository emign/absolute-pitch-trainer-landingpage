# landingpage

Marketing landing page for **Pitch Trainer** (iOS). Next.js 16 + React 19 +
Tailwind 4, fully prerendered, deployable to Vercel out of the box.

## Locales

Six localised routes, mirroring the in-app language set:

```
/en   /de   /fr   /es   /ja   /zh-Hans
```

Each route is statically generated via `generateStaticParams`. The root
path `/` redirects to `/en`. Visitors can switch language from the chip
in the top-right of every page.

Dictionaries live in `src/app/[locale]/_dictionaries/<locale>.ts` and are
keyed against the schema in `types.ts`. Headlines for the screenshot
strip are sourced from `/MARKETING.md` so the landing page stays in sync
with the App Store screenshot captions.

## Design

- Palette: **Jukebox Chrome** from `/color_palettes/jukebox-chrome.json`,
  set as Tailwind 4 design tokens in `src/app/globals.css`.
- Typography: Plus Jakarta Sans (300–800), display-weight headlines with
  tight tracking.
- Iconography: inline SVG (see `_components/Icons.tsx`) — no extra deps.
- 2026 idiom: aurora gradient hero, glassmorphic chips, generous
  whitespace, subtle film grain, drift animation on the hero phone.

## Screenshots

The `/public/screens/<locale>/` directory holds the four App Store
screenshots used in the hero and showcase grid. They're populated by
running:

```
pnpm copy:screens
```

That script copies the 1125×2436 PNGs out of
`/marketing-screenshots/exports/<asc-locale>/` and renames them to
`{01-hero,02-onfire,03-progress,04-rank}.png`. Re-run it whenever the
master screenshot set in `/marketing-screenshots/exports/` changes.

## Develop

```
pnpm install
pnpm dev          # http://localhost:3000  → redirects to /en
pnpm build        # static prerender all 6 locales
```

## Deploy to Vercel

The directory is a standalone Next.js project. Either:

1. **Set the project root to `landingpage/`** in the Vercel dashboard,
   and Vercel auto-detects Next.js 16 with no extra config.
2. Or run `vercel --cwd landingpage` from this repo's root.

Add a `pnpm-workspace.yaml` entry if you want to share dependencies with
`/marketing-screenshots`. As shipped, `landingpage/` is self-contained.
