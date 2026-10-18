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
    videoPlay: string;
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
      file: "01-hero" | "02-survival" | "03-weaknotes" | "04-onfire" | "05-progress" | "06-rank";
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
  consent: {
    body: string;
    accept: string;
    decline: string;
  };
  footer: {
    tagline: string;
    support: string;
    privacy: string;
    legalNotice: string;
    copyright: string;
    appBy: string;
    languageLabel: string;
    themeLabel: string;
  };
};
