import { FeatureIcon } from "./Icons";
import type { Dictionary } from "../_dictionaries/types";

type Props = {
  dict: Dictionary;
};

export default function Features({ dict }: Props) {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32"
    >
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/60 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
          {dict.features.eyebrow}
        </div>
        <h2 className="headline mt-5 text-[clamp(2rem,5vw,3.5rem)]">
          {dict.features.title}
        </h2>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.features.list.map((f, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-3xl border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/60 p-6 sm:p-7 transition hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface)]/70"
          >
            <div
              className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--color-primary)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition"
              aria-hidden
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-rule)] bg-[var(--color-surface)] text-[var(--color-secondary)] group-hover:text-[var(--color-primary-bright)] transition">
              <FeatureIcon name={f.icon} size={26} />
            </div>
            <h3 className="relative mt-5 text-lg font-extrabold tracking-tight text-[var(--color-text)]">
              {f.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {f.body}
            </p>
            <div
              className="relative mt-5 h-px w-12 bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent"
              aria-hidden
            />
          </article>
        ))}
      </div>
    </section>
  );
}
