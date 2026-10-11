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

// Same link with App Store campaign tokens, for every download button on
// the page: App Store Connect → Analytics → Campaigns then shows how many
// downloads come from the website (campaign "website"; it appears once
// 5 Apple Accounts installed through it). `pt` is the provider token of
// the developer account. Keep APP_STORE_URL bare for structured data.
export const APP_STORE_CAMPAIGN = "pt=117720297&ct=website";
export const APP_STORE_DOWNLOAD_URL = `${APP_STORE_URL}?${APP_STORE_CAMPAIGN}&mt=8`;

// The privacy policy + Impressum now live on the landing page itself
// (see `src/app/privacy/page.tsx`). The legacy GitHub-Pages URL at
// `emign.github.io/absolute-pitch-trainer-legal/` is no longer
// referenced — keep the page alive there for old App Store reviewers
// who cached the previous URL, but new references go to /privacy.
export const PRIVACY_URL = "https://absolutepitchtrainer.app/privacy";

// Support + feedback page (`src/app/support/page.tsx`). Also the App
// Store listing's Support URL and the iOS app's no-mail-client fallback.
export const SUPPORT_URL = "https://absolutepitchtrainer.app/support";
