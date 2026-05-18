import { notFound } from "next/navigation";
import {
  HTML_LANG,
  LOCALES,
  isLocale,
} from "./_dictionaries/config";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  // The <html lang="..."> on the root layout is updated client-side via
  // suppressHydrationWarning + this attribute on the wrapper.
  return <div data-lang={HTML_LANG[locale]}>{children}</div>;
}
