import type { MetadataRoute } from "next";
import { HTML_LANG, LOCALES } from "./[locale]/_dictionaries/config";

// Same host as metadataBase and the canonical tags, so sitemap and
// canonicals agree.
const SITE = "https://absolutepitchtrainer.app";

const languages = Object.fromEntries(
  LOCALES.map((l) => [HTML_LANG[l], `${SITE}/${l}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const localePages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${SITE}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));

  return [
    ...localePages,
    { url: `${SITE}/support`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
