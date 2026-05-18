"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABELS,
  type Locale,
} from "../_dictionaries/config";
import { ChevronDownIcon } from "./Icons";

type Props = {
  current: Locale;
  label: string;
};

export default function LanguageSwitcher({ current, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  function switchTo(next: Locale) {
    // pathname looks like "/en" or "/en/foo" — swap the first segment.
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = next;
    const target = "/" + segments.join("/");
    router.push(target);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/60 backdrop-blur px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--color-text)] hover:bg-[var(--color-surface)] transition"
      >
        <span aria-hidden className="text-[var(--color-secondary)]">◐</span>
        <span>{LOCALE_LABELS[current].native}</span>
        <ChevronDownIcon
          size={14}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label={label}
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/95 backdrop-blur shadow-2xl shadow-black/60 z-50"
        >
          {LOCALES.map((loc) => {
            const isCurrent = loc === current;
            return (
              <button
                key={loc}
                role="option"
                aria-selected={isCurrent}
                onClick={() => switchTo(loc)}
                className={`flex w-full items-center justify-between px-3.5 py-2.5 text-sm transition hover:bg-[var(--color-surface)] ${
                  isCurrent
                    ? "text-[var(--color-secondary)]"
                    : "text-[var(--color-text)]"
                }`}
              >
                <span className="font-semibold">
                  {LOCALE_LABELS[loc].native}
                </span>
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  {loc}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
