import Image from "next/image";
import { PRIVACY_URL, type Locale } from "../_dictionaries/config";
import type { Dictionary } from "../_dictionaries/types";
import appIcon from "../../../../public/app-icon.png";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-[var(--color-rule)]/60 bg-[var(--color-bg-lift)]/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/40">
              <Image
                src={appIcon}
                alt=""
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Pitch Trainer
              </div>
              <div className="text-sm font-extrabold tracking-tight">
                {dict.footer.tagline}
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs text-[var(--color-text-muted)]">
            {dict.footer.appBy}
          </p>
        </div>

        <div className="sm:text-right text-xs text-[var(--color-text-muted)]">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--color-text)] transition"
            >
              {dict.footer.privacy}
            </a>
            <a
              href={`${PRIVACY_URL}#impressum`}
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--color-text)] transition"
            >
              {dict.footer.legalNotice}
            </a>
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--color-text)] transition"
            >
              EULA
            </a>
          </nav>
          <p className="mt-5">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
