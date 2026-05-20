"use client";

import { useState, useEffect } from "react";

/// Clears the analytics-consent localStorage flag so the consent
/// banner re-appears on the next page load. Lets users withdraw
/// consent without having to manually clear site data in devtools.

const STORAGE_KEY = "pitch-analytics-consent";

type Props = {
  revokeLabel: string;
  acceptedLabel: string;
  declinedLabel: string;
  pendingLabel: string;
  doneLabel: string;
};

export default function RevokeConsent({
  revokeLabel,
  acceptedLabel,
  declinedLabel,
  pendingLabel,
  doneLabel,
}: Props) {
  const [current, setCurrent] = useState<"accepted" | "declined" | "pending" | null>(null);
  const [revoked, setRevoked] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setCurrent(stored);
      } else {
        setCurrent("pending");
      }
    } catch {
      setCurrent("pending");
    }
  }, []);

  const revoke = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // best-effort
    }
    setRevoked(true);
    setCurrent("pending");
  };

  if (current === null) return null;

  const stateLabel =
    current === "accepted" ? acceptedLabel : current === "declined" ? declinedLabel : pendingLabel;

  return (
    <div className="mt-4 rounded-xl border border-[var(--color-rule)] bg-[var(--color-bg-lift)]/50 p-4">
      <p className="text-sm text-[var(--color-text-muted)]">{stateLabel}</p>
      {!revoked && current !== "pending" && (
        <button
          onClick={revoke}
          className="mt-2 rounded-full border border-[var(--color-primary)]/40 px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition"
        >
          {revokeLabel}
        </button>
      )}
      {revoked && (
        <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">{doneLabel}</p>
      )}
    </div>
  );
}
