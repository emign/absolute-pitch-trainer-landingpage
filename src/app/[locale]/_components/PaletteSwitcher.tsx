"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./Icons";
import {
  DEFAULT_PALETTE,
  PALETTES,
  PALETTE_STORAGE_KEY,
  isPaletteId,
  type PaletteId,
} from "./palettes";
import { PALETTE_CHANGE_EVENT } from "./usePalette";

type Props = {
  label: string;
};

function SwatchTrio({ colors, size = 12 }: { colors: readonly string[]; size?: number }) {
  return (
    <span className="inline-flex items-center" aria-hidden>
      {colors.map((c, i) => (
        <span
          key={i}
          className="rounded-full border border-black/40 shadow-sm"
          style={{
            background: c,
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -size * 0.35,
          }}
        />
      ))}
    </span>
  );
}

export default function PaletteSwitcher({ label }: Props) {
  const [current, setCurrent] = useState<PaletteId>(DEFAULT_PALETTE);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Hydrate from <html data-palette> which the pre-hydration script
  // already set (or fall back to DEFAULT_PALETTE).
  useEffect(() => {
    const attr = document.documentElement.dataset.palette ?? "";
    if (isPaletteId(attr)) setCurrent(attr);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function apply(next: PaletteId) {
    setCurrent(next);
    document.documentElement.dataset.palette = next;
    try {
      window.localStorage.setItem(PALETTE_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode, blocked) — palette still
      // applies for the current session via the dataset attribute.
    }
    // Notify other client components (nav + footer logos, etc.).
    window.dispatchEvent(new CustomEvent(PALETTE_CHANGE_EVENT, { detail: next }));
    // Swap the tab favicon to the matching app-icon. We bust the
    // browser favicon cache by appending a per-palette query string.
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (link) link.href = `/app-icons/${next}.png?v=${next}`;
    const apple = document.querySelector<HTMLLinkElement>('link[rel="apple-touch-icon"]');
    if (apple) apple.href = `/app-icons/${next}.png?v=${next}`;
    setOpen(false);
  }

  const currentPalette =
    PALETTES.find((p) => p.id === current) ?? PALETTES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/60 backdrop-blur px-2.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--color-text)] hover:bg-[var(--color-surface)] transition"
      >
        <SwatchTrio colors={currentPalette.swatches} />
        <ChevronDownIcon
          size={14}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label={label}
          className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/95 backdrop-blur shadow-2xl shadow-black/60 z-50"
        >
          {PALETTES.map((p) => {
            const isCurrent = p.id === current;
            return (
              <button
                key={p.id}
                role="option"
                aria-selected={isCurrent}
                onClick={() => apply(p.id)}
                className={`flex w-full items-start gap-3 px-3.5 py-2.5 text-left transition hover:bg-[var(--color-surface)] ${
                  isCurrent ? "bg-[var(--color-surface)]/60" : ""
                }`}
              >
                <SwatchTrio colors={p.swatches} size={14} />
                <span className="flex-1">
                  <span
                    className={`block text-sm font-semibold ${
                      isCurrent
                        ? "text-[var(--color-secondary)]"
                        : "text-[var(--color-text)]"
                    }`}
                  >
                    {p.name}
                  </span>
                  <span className="block text-[11px] text-[var(--color-text-muted)] leading-snug">
                    {p.caption}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
