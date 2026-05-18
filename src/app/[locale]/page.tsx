import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, LOCALES, HTML_LANG } from "./_dictionaries/config";
import { getDictionary } from "./_dictionaries";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Showcase from "./_components/Showcase";
import Science from "./_components/Science";
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

  return (
    <main className="relative">
      <Nav locale={locale} dict={dict} />
      <Hero locale={locale} dict={dict} />
      <Features dict={dict} />
      <Showcase locale={locale} dict={dict} />
      <Science dict={dict} />
      <CTA dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
