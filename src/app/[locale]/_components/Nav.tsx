import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { AppleIcon } from "./Icons";
import type { Locale } from "../_dictionaries/config";
import { APP_STORE_URL } from "../_dictionaries/config";
import type { Dictionary } from "../_dictionaries/types";
// Static import — Turbopack content-hashes the emitted URL so the browser
// cache evicts automatically whenever the PNG changes.
import appIcon from "../../../../public/app-icon.png";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function Nav({ locale, dict }: Props) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-[var(--color-rule)]/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 group"
          aria-label="Pitch Trainer"
        >
          <span className="relative h-9 w-9 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/40">
            <Image
              src={appIcon}
              alt=""
              fill
              sizes="36px"
              priority
              className="object-cover"
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Pitch
            </span>
            <span className="text-sm font-extrabold tracking-tight">
              Trainer
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher current={locale} label={dict.footer.languageLabel} />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--color-primary-bright)] transition shadow-lg shadow-[var(--color-primary)]/30"
          >
            <AppleIcon size={18} />
            <span className="hidden sm:inline">{dict.nav.download}</span>
            <span className="sm:hidden">{dict.nav.appStore}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
