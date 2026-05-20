"use client";

import { useEffect, useState } from "react";

/// Email + phone obfuscation. Bots that don't run JS see
/// "info (at) absolutepitchtrainer (dot) app" and a written-out
/// phone number; real browsers get clickable mailto: + tel: links
/// once mounted. Mirrors the pattern from the legacy legal/index.html
/// so the level of bot-protection stays equivalent.

export function ObfuscatedEmail() {
  const [revealed, setRevealed] = useState<string | null>(null);
  useEffect(() => {
    setRevealed("info" + "@" + "absolutepitchtrainer.app");
  }, []);
  if (revealed === null) return <span>info (at) absolutepitchtrainer (dot) app</span>;
  return (
    <a
      href={`mailto:${revealed}`}
      className="underline underline-offset-2 text-[var(--color-primary)] hover:text-[var(--color-primary-bright)]"
    >
      {revealed}
    </a>
  );
}

export function ObfuscatedPhone() {
  const [revealed, setRevealed] = useState<{ href: string; display: string } | null>(null);
  useEffect(() => {
    setRevealed({ href: "+4915140419958", display: "0151 / 404 199 5 8" });
  }, []);
  if (revealed === null) {
    return (
      <span>
        null&zwj;eins&zwj;fünf&zwj;eins — vier&zwj;null&zwj;vier — eins&zwj;neun&zwj;neun — fünf&zwj;acht
      </span>
    );
  }
  return (
    <a
      href={`tel:${revealed.href}`}
      className="underline underline-offset-2 text-[var(--color-primary)] hover:text-[var(--color-primary-bright)]"
    >
      {revealed.display}
    </a>
  );
}
