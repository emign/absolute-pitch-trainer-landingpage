import "server-only";
import type { Dictionary } from "./types";
import type { Locale } from "./config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  de: () => import("./de").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
  ja: () => import("./ja").then((m) => m.default),
  "zh-Hans": () => import("./zh-Hans").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
