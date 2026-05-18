import type { Dictionary } from "../_dictionaries/types";

type Props = {
  dict: Dictionary;
};

export default function Science({ dict }: Props) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/60 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
            {dict.science.eyebrow}
          </div>
          <h2 className="headline mt-5 text-[clamp(2rem,5vw,3.5rem)]">
            {dict.science.title}
          </h2>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/40 p-7 sm:p-9">
            <p className="text-[15px] sm:text-base leading-relaxed text-[var(--color-text)]">
              {dict.science.body}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-primary)]/40 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-bg-lift)] to-[var(--color-bg-lift)] p-7 sm:p-9">
            <div
              className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[var(--color-primary)]/25 blur-3xl"
              aria-hidden
            />
            <div className="relative flex items-start gap-4">
              <span
                className="mt-1.5 inline-block h-2 w-8 rounded-full bg-gradient-to-r from-[var(--color-primary-bright)] to-[var(--color-secondary)]"
                aria-hidden
              />
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--color-text)]">
                {dict.science.pull}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
