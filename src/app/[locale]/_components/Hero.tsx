import Image from "next/image";
import { AppleIcon, ArrowRightIcon, MusicNoteIcon } from "./Icons";
import { APP_STORE_URL, type Locale } from "../_dictionaries/config";
import type { Dictionary } from "../_dictionaries/types";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

const NOTE_LABELS = ["C", "D", "E", "F", "G", "A", "B"] as const;

export default function Hero({ locale, dict }: Props) {
  const screenSrc = `/screens/${locale}/01-hero.png`;
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-rule)]/60">
      <div className="aurora absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-x-0 -top-32 -z-10 h-[420px] bg-gradient-to-b from-[var(--color-primary)]/20 via-transparent to-transparent blur-3xl" aria-hidden />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div className="text-left">
          {/* Keyword-bearing H1 for SEO + screen readers. Visible hero
              below stays as the brand-voice display headline (h2). */}
          <h1 className="sr-only">{dict.hero.seoHeadline}</h1>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[var(--color-secondary)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
            {dict.hero.eyebrow}
          </div>

          <h2 className="headline mt-6 text-[clamp(2.6rem,7vw,5.5rem)] text-[var(--color-text)]" aria-hidden>
            {dict.hero.headline.map((line, i) => (
              <span key={i} className="block">
                {i === dict.hero.headline.length - 1 ? (
                  <span className="bg-gradient-to-r from-[var(--color-primary-bright)] via-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            {dict.hero.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              className="pulse-ring group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-2xl shadow-[var(--color-primary)]/40 hover:bg-[var(--color-primary-bright)] transition"
            >
              <AppleIcon size={20} />
              <span>{dict.hero.cta}</span>
              <ArrowRightIcon
                size={18}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-rule)] px-5 py-3.5 text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--color-surface)] transition"
            >
              {dict.hero.secondary}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <MusicNoteIcon size={14} />
              {dict.hero.badge}
            </span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-rule)]" />
            <span className="tracking-widest uppercase">
              {NOTE_LABELS.join("  ·  ")}
            </span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] drift">
          <div
            className="absolute -inset-10 -z-10 rounded-full bg-[var(--color-primary)]/15 blur-3xl"
            aria-hidden
          />
          <div className="phone-frame">
            <div className="phone-screen aspect-[9/19.5]">
              <Image
                src={screenSrc}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 380px, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
