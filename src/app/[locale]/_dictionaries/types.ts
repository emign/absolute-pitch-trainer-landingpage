export type Dictionary = {
  nav: {
    appStore: string;
    download: string;
  };
  hero: {
    eyebrow: string;
    seoHeadline: string;
    headline: string[];
    sub: string;
    cta: string;
    secondary: string;
    badge: string;
  };
  features: {
    title: string;
    eyebrow: string;
    list: Array<{
      icon:
        | "ear"
        | "levels"
        | "flame"
        | "calendar"
        | "chart"
        | "trophy"
        | "tuning"
        | "shield"
        | "palette";
      title: string;
      body: string;
    }>;
  };
  screens: {
    title: string;
    eyebrow: string;
    list: Array<{
      label: string;
      headline: string;
      file: "01-hero" | "02-onfire" | "03-progress" | "04-rank";
    }>;
  };
  science: {
    eyebrow: string;
    title: string;
    body: string;
    pull: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  footer: {
    tagline: string;
    privacy: string;
    legalNotice: string;
    copyright: string;
    appBy: string;
    languageLabel: string;
    themeLabel: string;
  };
};
