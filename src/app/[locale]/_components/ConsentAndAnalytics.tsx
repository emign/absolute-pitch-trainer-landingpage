"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import type { Dictionary } from "../_dictionaries/types";
import { PRIVACY_URL } from "../_dictionaries/config";

/// DSGVO/TTDSG-konform: Vercel Analytics wird NUR geladen, nachdem
/// der Besucher explizit zugestimmt hat. Bis dahin zeigt ein
/// Consent-Banner. Die Entscheidung wird in localStorage persistiert
/// (`pitch-analytics-consent` = `accepted` | `declined`).
///
/// Was technisch passiert:
/// - "pending" (kein Eintrag): Banner sichtbar, kein Analytics-Script
/// - "accepted": <Analytics /> wird gerendert, Banner unsichtbar
/// - "declined": kein Analytics, Banner unsichtbar
///
/// Vercel Analytics setzt keine Cookies und keine persistenten
/// Browser-Identifier. Es verarbeitet aber HTTP-Anfragen serverseitig
/// (inkl. IP-Adresse, die täglich rotierend gehasht wird) — unter
/// strenger TTDSG-§-25-Auslegung gilt das als Zugriff auf das
/// Endgerät und ist daher einwilligungspflichtig.

type Decision = "pending" | "accepted" | "declined";
const STORAGE_KEY = "pitch-analytics-consent";

type Props = {
  dict: Dictionary;
};

export default function ConsentAndAnalytics({ dict }: Props) {
  const [decision, setDecision] = useState<Decision>("pending");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setDecision(stored);
      }
    } catch {
      // localStorage can throw in private-mode Safari etc. — treat as pending.
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Persist best-effort; the in-memory decision still applies for this session.
    }
    setDecision(value);
  };

  // Don't render anything during SSR/first paint to avoid hydration mismatch
  // (localStorage isn't available on the server).
  if (!hydrated) return null;

  return (
    <>
      {decision === "accepted" && <Analytics />}
      {decision === "pending" && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none">
          <div
            role="dialog"
            aria-modal="false"
            aria-labelledby="consent-body"
            className="pointer-events-auto mx-auto max-w-2xl rounded-2xl border border-[var(--color-rule)] bg-[var(--color-surface)]/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl"
          >
            <p id="consent-body" className="text-sm leading-relaxed text-[var(--color-text)]">
              {dict.consent.body}{" "}
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener"
                className="underline underline-offset-2 text-[var(--color-primary)] hover:text-[var(--color-primary-bright)]"
              >
                {dict.footer.privacy}
              </a>
              .
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={() => decide("declined")}
                className="rounded-full border border-[var(--color-rule)] px-4 py-2 text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-bg-lift)] transition"
              >
                {dict.consent.decline}
              </button>
              <button
                onClick={() => decide("accepted")}
                className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[var(--color-primary-bright)] transition"
              >
                {dict.consent.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
