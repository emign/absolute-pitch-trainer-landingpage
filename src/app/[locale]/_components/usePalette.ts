"use client";

import { useEffect, useState } from "react";
import { DEFAULT_PALETTE, isPaletteId, type PaletteId } from "./palettes";

export const PALETTE_CHANGE_EVENT = "palettechange";

/**
 * Subscribe to the current palette. On the server (and on the first
 * client render before hydration), this returns DEFAULT_PALETTE — the
 * pre-hydration script in src/app/layout.tsx will already have set
 * `<html data-palette>` so the CSS palette tokens swap before paint,
 * but the React state catches up after mount.
 */
export function usePalette(): PaletteId {
  const [palette, setPalette] = useState<PaletteId>(DEFAULT_PALETTE);

  useEffect(() => {
    const attr = document.documentElement.dataset.palette ?? "";
    if (isPaletteId(attr)) setPalette(attr);

    function handler(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      if (isPaletteId(detail)) setPalette(detail);
    }
    window.addEventListener(PALETTE_CHANGE_EVENT, handler);
    return () => window.removeEventListener(PALETTE_CHANGE_EVENT, handler);
  }, []);

  return palette;
}
