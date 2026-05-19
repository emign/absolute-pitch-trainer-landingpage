import type { Dictionary } from "../_dictionaries/types";

type Props = {
  dict: Dictionary;
};

export default function FAQ({ dict }: Props) {
  return (
    <section className="relative mx-auto max-w-4xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/60 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
          {dict.faq.eyebrow}
        </div>
        <h2 className="headline mt-5 text-[clamp(2rem,5vw,3.5rem)]">
          {dict.faq.title}
        </h2>
      </div>

      <div className="mt-12 sm:mt-16 space-y-4">
        {dict.faq.items.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/40 px-6 py-5 sm:px-8 sm:py-6 transition-colors open:bg-[var(--color-bg-lift)]/70 open:border-[var(--color-secondary)]/30"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <h3 className="text-base sm:text-lg font-bold leading-snug text-[var(--color-text)]">
                {item.q}
              </h3>
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-rule)] text-lg leading-none text-[var(--color-text-muted)] transition-transform group-open:rotate-45 group-open:border-[var(--color-secondary)]/60 group-open:text-[var(--color-secondary)]"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[var(--color-text-muted)]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
