// Palette options exposed in the landing-page switcher.
// Sourced from /color_palettes/*.json. The swatch trio is what we
// render in the chip + dropdown — pick three values that are
// recognisable for the palette: bg, primary, secondary.

export const PALETTES = [
  {
    id: "jukebox-chrome",
    name: "Jukebox Chrome",
    caption: "Chrome, vinyl red, and diner neon.",
    swatches: ["#222120", "#d42b2b", "#f5d800"],
  },
  {
    id: "tube-glow",
    name: "Tube Glow",
    caption: "Amber warmth of vacuum tubes.",
    swatches: ["#2e1e0a", "#e8860a", "#f5c875"],
  },
  {
    id: "reel-to-reel",
    name: "Reel to Reel",
    caption: "Olive greens and burnt orange.",
    swatches: ["#1e2518", "#d4620a", "#c5d854"],
  },
  {
    id: "rainbow-pride",
    name: "Rainbow Pride",
    caption: "Festival magenta against indigo sky.",
    swatches: ["#1f1635", "#ff3d8b", "#3dd4ff"],
  },
] as const;

export type PaletteId = (typeof PALETTES)[number]["id"];

export const DEFAULT_PALETTE: PaletteId = "jukebox-chrome";
export const PALETTE_STORAGE_KEY = "pitch-palette";

export function isPaletteId(value: string): value is PaletteId {
  return PALETTES.some((p) => p.id === value);
}
