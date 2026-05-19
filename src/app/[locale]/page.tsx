import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { APP_STORE_URL, isLocale, LOCALES, HTML_LANG } from "./_dictionaries/config";
import { getDictionary } from "./_dictionaries";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Showcase from "./_components/Showcase";
import Science from "./_components/Science";
import FAQ from "./_components/FAQ";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const title = `Absolute Pitch Trainer — ${dict.hero.headline.join(" ")}`;
  return {
    title,
    description: dict.hero.sub,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [HTML_LANG[l], `/${l}`])),
    },
    openGraph: {
      title,
      description: dict.hero.sub,
      locale: HTML_LANG[locale],
    },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  const softwareApplicationLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Absolute Pitch Trainer",
    description: dict.hero.sub,
    applicationCategory: "MusicApplication",
    operatingSystem: "iOS 17+",
    inLanguage: HTML_LANG[locale],
    url: APP_STORE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: HTML_LANG[locale],
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Nav locale={locale} dict={dict} />
      <Hero locale={locale} dict={dict} />
      <Features dict={dict} />
      <Showcase locale={locale} dict={dict} />
      <Science dict={dict} />
      <FAQ dict={dict} />
      <CTA dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
