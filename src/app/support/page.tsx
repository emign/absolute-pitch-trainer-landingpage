import type { Metadata } from "next";
import Link from "next/link";
import { ObfuscatedEmail } from "../privacy/ObfuscatedContact";

/// Support + feedback page, locale-agnostic like `/privacy`. This is
/// the App Store listing's Support URL and the fallback the iOS app
/// opens from Settings → Feedback when no mail client is configured
/// (`AppConstants.supportURL`), so keep the path stable.

export const metadata: Metadata = {
  title: "Support & Feedback — Absolute Pitch Trainer",
  description:
    "Get help with Absolute Pitch Trainer for iOS, report a problem, or request a feature.",
  alternates: { canonical: "/support" },
  robots: { index: true, follow: true },
};

const QUESTIONS: { q: string; a: React.ReactNode }[] = [
  {
    q: "I bought Premium but it's still locked",
    a: (
      <>
        Open <strong>Profile → Settings → Restore Purchases</strong> while
        signed in to the App Store with the Apple Account you bought it
        with. Premium Lifetime is a one-time purchase and restores on every
        device that uses the same Apple Account.
      </>
    ),
  },
  {
    q: "How do I turn the daily reminders off?",
    a: (
      <>
        <strong>Profile → Settings → Streak Reminders.</strong> Switching it
        off cancels both the morning and the evening reminder. This needs
        version 1.0.6 or later — in earlier versions the switch had no
        effect, so please update first.
      </>
    ),
  },
  {
    q: "Can I mute the app?",
    a: (
      <>
        <strong>Settings → Sound Effects</strong> mutes the correct / wrong
        / level-up sounds. The notes you&apos;re asked to identify always
        play — they are the exercise. Haptics have their own switch right
        below.
      </>
    ),
  },
  {
    q: "Will my progress move to a new iPhone?",
    a: (
      <>
        Your streak, XP and unlocked levels are stored only on your device.
        They move over when you set up the new iPhone from an iCloud or
        device backup (or with Quick Start). A fresh install without a
        backup starts from zero — your Premium purchase can still be
        restored.
      </>
    ),
  },
  {
    q: "How do I get a refund?",
    a: (
      <>
        Apple handles all App Store payments and refunds. Request one at{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2 text-[var(--color-primary)] hover:text-[var(--color-primary-bright)]"
        >
          reportaproblem.apple.com
        </a>
        .
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 sm:px-8 pt-12 sm:pt-16 pb-24 text-[var(--color-text)]">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition"
      >
        ← Absolute Pitch Trainer
      </Link>

      <header className="mt-6 pb-6 border-b border-[var(--color-rule)]">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Support &amp; Feedback
        </h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Help with the app, problem reports, and feature requests.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Get in touch</h2>
        <p>
          Write to <ObfuscatedEmail /> — in English or German. Absolute Pitch Trainer
          is built by one developer, and every message is read by a human.
        </p>
        <p className="mt-3">
          The quickest route is inside the app:{" "}
          <strong>Profile → Settings → Feedback</strong>. It opens an email
          with your app version, iOS version and device model already filled
          in, which saves a round of questions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Request a feature</h2>
        <p>
          Missing an instrument, an exercise type, or a setting? Say what
          you&apos;d like to do and why it matters for your practice — the
          &ldquo;why&rdquo; is what makes a request buildable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Report a problem</h2>
        <p>These details make a bug much faster to find:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>What you did, what you expected, and what happened instead.</li>
          <li>The level and game mode you were playing.</li>
          <li>A screenshot or screen recording, if you have one.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Common questions</h2>
        <div className="space-y-3">
          {QUESTIONS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/40 px-5 py-4 open:bg-[var(--color-bg-lift)]/70"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-rule)] leading-none text-[var(--color-text-muted)] transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm text-[var(--color-text-muted)]">
        How your message is handled is described in the{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-2 hover:text-[var(--color-primary)]"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </main>
  );
}
