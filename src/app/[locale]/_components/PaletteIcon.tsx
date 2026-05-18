"use client";

import Image, { type StaticImageData } from "next/image";
import type { PaletteId } from "./palettes";
import { usePalette } from "./usePalette";

// Static imports → Turbopack content-hashed URLs that auto-bust the
// browser cache whenever an icon file changes.
import jukeboxChrome from "../../../../public/app-icons/jukebox-chrome.png";
import tubeGlow from "../../../../public/app-icons/tube-glow.png";
import reelToReel from "../../../../public/app-icons/reel-to-reel.png";
import rainbowPride from "../../../../public/app-icons/rainbow-pride.png";

const ICONS: Record<PaletteId, StaticImageData> = {
  "jukebox-chrome": jukeboxChrome,
  "tube-glow": tubeGlow,
  "reel-to-reel": reelToReel,
  "rainbow-pride": rainbowPride,
};

type Props = {
  sizes: string;
  priority?: boolean;
  className?: string;
};

export default function PaletteIcon({ sizes, priority, className }: Props) {
  const palette = usePalette();
  return (
    <Image
      src={ICONS[palette]}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
