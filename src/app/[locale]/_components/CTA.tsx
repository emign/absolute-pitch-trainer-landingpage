import { AppleIcon, ArrowRightIcon } from "./Icons";
import { APP_STORE_URL } from "../_dictionaries/config";
import type { Dictionary } from "../_dictionaries/types";

type Props = {
  dict: Dictionary;
};

export default function CTA({ dict }: Props) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 sm:px-8 pb-24 sm:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-rule)] bg-gradient-to-br from-[var(--color-bg-lift)] via-[var(--color-surface)] to-[var(--color-bg-lift)] p-8 sm:p-14">
        <div
          className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[var(--color-primary)]/25 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-[var(--color-secondary)]/20 blur-3xl"
          aria-hidden
        />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-secondary)]/5 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[var(--color-secondary)] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
            {dict.cta.eyebrow}
          </div>
          <h2 className="headline mt-5 text-[clamp(2rem,5.5vw,4rem)]">
            {dict.cta.title}
          </h2>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            {dict.cta.body}
          </p>
          <div className="mt-9">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-primary)] px-7 py-4 text-sm sm:text-base font-bold text-white shadow-2xl shadow-[var(--color-primary)]/40 hover:bg-[var(--color-primary-bright)] transition"
            >
              <AppleIcon size={22} />
              <span>{dict.cta.button}</span>
              <ArrowRightIcon
                size={18}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
