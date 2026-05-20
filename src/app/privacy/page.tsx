import type { Metadata } from "next";
import Link from "next/link";
import { ObfuscatedEmail, ObfuscatedPhone } from "./ObfuscatedContact";
import RevokeConsent from "./RevokeConsent";

/// Single-page privacy notice + Impressum, locale-agnostic (English
/// Privacy + German Impressum, mirroring the original
/// `legal/index.html` from emign/absolute-pitch-trainer-legal). The
/// canonical privacy URL for the iOS app and the App Store listing is
/// `https://absolutepitchtrainer.app/privacy`.

export const metadata: Metadata = {
  title: "Privacy Policy & Impressum — Absolute Pitch Trainer",
  description: "Privacy Policy and Impressum for Absolute Pitch Trainer (iOS) and absolutepitchtrainer.app.",
  alternates: { canonical: "/privacy" },
  // Privacy pages don't need to be heavily indexed; allow but de-prioritise.
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Last updated: 20 May 2026
        </p>
      </header>

      <p className="mt-8">
        Absolute Pitch Trainer is an iOS app for ear training, plus this
        marketing website at <code className="px-1 py-0.5 rounded bg-[var(--color-bg-lift)]">absolutepitchtrainer.app</code>.
        This page explains what data either of them handles and how to
        reach the developer.
      </p>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Summary</h2>
        <p>
          <strong>The Pitch Trainer iOS app does not collect, store, or
          transmit any personal data.</strong> Everything you do in the
          app stays on your device. The marketing website uses an opt-in
          anonymous analytics service (see <em>Analytics</em> below).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">What the iOS app does not do</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>No analytics or telemetry SDKs.</li>
          <li>No third-party trackers, advertising IDs (IDFA), or marketing pixels.</li>
          <li>No account system, sign-up, or login.</li>
          <li>No data is sent to the developer or to any third party.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">What stays on your device</h2>
        <p>
          Your profile, settings, achievements, statistics, and practice
          history are stored locally on your iPhone using Apple&apos;s{" "}
          <em>SwiftData</em> framework. This data never leaves your
          device. If you delete the app, this data is removed from your
          device by iOS.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Subscriptions and purchases</h2>
        <p>
          Premium subscriptions are processed entirely by Apple through
          the App Store. Pitch Trainer does not see, store, or process
          your payment information. Apple&apos;s privacy policy applies
          to those transactions and is available at{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            className="underline underline-offset-2 text-[var(--color-primary)] hover:text-[var(--color-primary-bright)]"
            target="_blank"
            rel="noopener"
          >
            apple.com/legal/privacy
          </a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Analytics on this website</h2>
        <p>
          This marketing site (<code className="px-1 py-0.5 rounded bg-[var(--color-bg-lift)]">absolutepitchtrainer.app</code>)
          uses <strong>Vercel Web Analytics</strong> to count pageviews
          per route. It does not use cookies, does not store anything on
          your device, and does not track you across other sites.
        </p>
        <p className="mt-3">
          When you visit a page <em>and have given consent</em>, Vercel
          processes your IP address, the URL you visited, the referring
          URL, your browser&apos;s User-Agent, and your approximate
          country. The IP address is hashed daily and discarded after
          24 hours; only aggregated counts remain.
        </p>
        <p className="mt-3">
          <strong>We only load the Vercel Analytics script after you
          explicitly click &ldquo;Accept&rdquo; in the consent banner at
          the bottom of the page.</strong> If you click &ldquo;Decline&rdquo;
          or never decide, no analytics events are sent — the script
          never runs.
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-1">
          <li><strong>Legal basis</strong>: your consent (Art. 6(1)(a) GDPR; § 25(1) TTDSG).</li>
          <li><strong>Processor</strong>: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Data transfer to the USA on the basis of EU Standard Contractual Clauses.</li>
          <li><strong>Retention</strong>: hashed identifier 24 h; aggregated counts 12 months.</li>
          <li><strong>Right to withdraw</strong>: you can withdraw consent at any time. The button below clears the saved decision and re-shows the consent banner on the next visit.</li>
        </ul>
        <RevokeConsent
          revokeLabel="Withdraw analytics consent"
          acceptedLabel="Current status: analytics consent given. Pageviews are being recorded on this device."
          declinedLabel="Current status: analytics declined. No pageviews are recorded on this device."
          pendingLabel="Current status: no decision made yet. The consent banner will appear on the next page load."
          doneLabel="Done. Reload any page on this site to see the banner again."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Children</h2>
        <p>
          Pitch Trainer does not knowingly collect any data from anyone,
          including children under 13. The iOS app collects no data at
          all. The website only loads analytics if a visitor consents,
          and the analytics provider receives only a hashed IP plus the
          path visited — no PII.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Your rights under GDPR</h2>
        <p>
          Since the iOS app collects no personal data, there is no
          personal data to access, correct, export, or delete on the
          server side. All in-app data lives on your device and can be
          removed by deleting the app from your iPhone.
        </p>
        <p className="mt-3">
          For the website&apos;s analytics: because the only identifier
          (the daily-rotated IP hash) is non-reversible and rotated every
          24 hours, individual data subjects cannot be re-identified
          after that window — there is no record to look up, export, or
          erase. The standard data-subject rights under Art. 15–21 GDPR
          still apply; contact details are below.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Changes to this policy</h2>
        <p>
          If this policy changes in the future, the updated version
          will be published at this URL with a new &ldquo;Last
          updated&rdquo; date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-3">Contact</h2>
        <p>
          Questions about this policy or to exercise GDPR rights:{" "}
          <ObfuscatedEmail />
        </p>
      </section>

      <hr className="my-14 border-[var(--color-rule)]" />

      <section>
        <h2 className="text-2xl font-bold tracking-tight">Impressum (§ 5 TMG)</h2>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Required by German law for commercially operated online services.
        </p>

        <p className="mt-6">
          Nicolai Emig<br />
          Odilostr. 2A<br />
          86932 Pürgen<br />
          Deutschland
        </p>

        <h3 className="text-base font-semibold mt-6 mb-2">Kontakt</h3>
        <p>
          E-Mail: <ObfuscatedEmail />
          <br />
          Telefon: <ObfuscatedPhone />
        </p>

        <h3 className="text-base font-semibold mt-6 mb-2">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h3>
        <p>
          Nicolai Emig<br />
          [Anschrift wie oben]
        </p>

        <h3 className="text-base font-semibold mt-6 mb-2">EU-Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener"
            className="underline underline-offset-2 text-[var(--color-primary)] hover:text-[var(--color-primary-bright)]"
          >
            ec.europa.eu/consumers/odr
          </a>
          . Ich bin nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <footer className="mt-16 pt-6 border-t border-[var(--color-rule)] text-sm text-[var(--color-text-muted)]">
        © 2026 EmigLabs. Pitch Trainer is not affiliated with Apple
        Inc. App Store and iPhone are trademarks of Apple Inc.
      </footer>
    </main>
  );
}
