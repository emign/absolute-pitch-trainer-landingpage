import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function EarIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M6 9a6 6 0 1 1 12 0c0 2-1 3-2 4s-2 2-2 4a3 3 0 1 1-6 0" />
      <path d="M10 9a2 2 0 1 1 4 0c0 1.2-1 1.8-1.5 2.5" />
    </svg>
  );
}

export function LevelsIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="3" y="14" width="4" height="7" rx="1" />
      <rect x="10" y="9" width="4" height="12" rx="1" />
      <rect x="17" y="4" width="4" height="17" rx="1" />
    </svg>
  );
}

export function FlameIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 3c1 4 5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3-1-3 0-6 1-8z" />
      <path d="M10 17a2 2 0 0 0 4 0c0-1.5-1-2-2-3-1 1.5-2 2-2 3z" />
    </svg>
  );
}

export function CalendarIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
      <circle cx="8.5" cy="14.5" r="0.6" fill="currentColor" />
      <circle cx="12" cy="14.5" r="0.6" fill="currentColor" />
      <circle cx="15.5" cy="14.5" r="0.6" fill="currentColor" />
      <circle cx="8.5" cy="17.5" r="0.6" fill="currentColor" />
      <circle cx="12" cy="17.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ChartIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M3 17l5-6 4 3 8-9" />
      <path d="M14 5h6v6" />
    </svg>
  );
}

export function TrophyIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" />
      <path d="M16 5h3v2a3 3 0 0 1-3 3M8 5H5v2a3 3 0 0 0 3 3" />
      <path d="M10 14h4" />
      <path d="M9 21h6" />
      <path d="M12 14v7" />
    </svg>
  );
}

export function TuningIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M9 3v9a3 3 0 0 0 6 0V3" />
      <path d="M12 15v6" />
      <path d="M9 21h6" />
    </svg>
  );
}

export function ShieldIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function PaletteIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-.5-1.5 0-2c.5-.5 1.5-.5 2.5-.5 2 0 4.5-2 4.5-5.5A9 9 0 0 0 12 3z" />
      <circle cx="7" cy="11" r="1" fill="currentColor" />
      <circle cx="10" cy="7" r="1" fill="currentColor" />
      <circle cx="15" cy="7" r="1" fill="currentColor" />
      <circle cx="17.5" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function AppleIcon({ size = 22, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M17.05 12.04c-.03-2.85 2.33-4.22 2.43-4.29-1.32-1.94-3.39-2.2-4.12-2.23-1.76-.18-3.43 1.04-4.32 1.04-.9 0-2.27-1.01-3.74-.98-1.92.03-3.7 1.12-4.7 2.84-2 3.49-.51 8.66 1.45 11.5.95 1.39 2.08 2.96 3.56 2.9 1.43-.06 1.97-.93 3.7-.93 1.72 0 2.21.93 3.71.9 1.53-.03 2.5-1.42 3.44-2.82 1.08-1.62 1.53-3.2 1.55-3.28-.03-.01-2.98-1.15-3.01-4.54zM14.21 4.07c.79-.96 1.32-2.29 1.17-3.62-1.13.05-2.5.76-3.32 1.71-.73.85-1.37 2.21-1.2 3.51 1.26.1 2.54-.65 3.35-1.6z" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function MusicNoteIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export type FeatureIconName =
  | "ear"
  | "levels"
  | "flame"
  | "calendar"
  | "chart"
  | "trophy"
  | "tuning"
  | "shield"
  | "palette";

export function FeatureIcon({
  name,
  size = 26,
  ...rest
}: IconProps & { name: FeatureIconName }) {
  const map: Record<FeatureIconName, typeof EarIcon> = {
    ear: EarIcon,
    levels: LevelsIcon,
    flame: FlameIcon,
    calendar: CalendarIcon,
    chart: ChartIcon,
    trophy: TrophyIcon,
    tuning: TuningIcon,
    shield: ShieldIcon,
    palette: PaletteIcon,
  };
  const Cmp = map[name];
  return <Cmp size={size} {...rest} />;
}
