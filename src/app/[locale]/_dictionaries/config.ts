export const LOCALES = ["en", "de", "fr", "es", "ja", "zh-Hans"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  de: { native: "Deutsch", english: "German" },
  fr: { native: "Français", english: "French" },
  es: { native: "Español", english: "Spanish" },
  ja: { native: "日本語", english: "Japanese" },
  "zh-Hans": { native: "简体中文", english: "Chinese (Simplified)" },
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  de: "de",
  fr: "fr",
  es: "es",
  ja: "ja",
  "zh-Hans": "zh-Hans",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// Apple's region-neutral URL form: the bare app ID redirects each
// visitor to their own regional App Store. We avoid the /de/ form a
// multi-locale page would otherwise force on every visitor.
export const APP_STORE_URL =
  "https://apps.apple.com/app/absolutepitchtrainer/id6762354184";

// The privacy policy + Impressum now live on the landing page itself
// (see `src/app/privacy/page.tsx`). The legacy GitHub-Pages URL at
// `emign.github.io/absolute-pitch-trainer-legal/` is no longer
// referenced — keep the page alive there for old App Store reviewers
// who cached the previous URL, but new references go to /privacy.
export const PRIVACY_URL = "https://absolutepitchtrainer.app/privacy";
