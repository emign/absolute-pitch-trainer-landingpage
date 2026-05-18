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

// App Store URL — App Store Connect issues this after first approval.
// Placeholder until the live product page is provisioned.
export const APP_STORE_URL =
  "https://apps.apple.com/app/absolute-pitch-trainer/id0000000000";

export const PRIVACY_URL =
  "https://emign.github.io/absolute-pitch-trainer-legal/";
