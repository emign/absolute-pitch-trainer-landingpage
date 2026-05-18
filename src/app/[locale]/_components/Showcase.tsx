import Image from "next/image";
import type { Locale } from "../_dictionaries/config";
import type { Dictionary } from "../_dictionaries/types";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function Showcase({ locale, dict }: Props) {
  return (
    <section className="relative border-y border-[var(--color-rule)]/60 bg-[var(--color-bg-lift)]/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-bg)]/60 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
              {dict.screens.eyebrow}
            </div>
            <h2 className="headline mt-5 text-[clamp(2rem,5vw,3.5rem)]">
              {dict.screens.title}
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.screens.list.map((s, idx) => {
            const headlineParts = s.headline.split("/").map((p) => p.trim());
            return (
              <figure
                key={idx}
                className="group relative flex flex-col"
              >
                <div className="relative phone-frame transition-transform group-hover:-translate-y-1">
                  <div className="phone-screen aspect-[9/19.5]">
                    <Image
                      src={`/screens/${locale}/${s.file}.png`}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className="mt-5">
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-secondary)]">
                    {s.label}
                  </div>
                  <div className="mt-2 text-base sm:text-lg font-extrabold leading-tight text-[var(--color-text)]">
                    {headlineParts.map((p, i) => (
                      <span key={i} className="block">
                        {p}
                      </span>
                    ))}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
