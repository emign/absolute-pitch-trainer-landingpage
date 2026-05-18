import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Absolute Pitch Trainer — Hear the note. Name the note.",
  description:
    "The ear-training app for adult musicians who never gave up on perfect pitch. Eight difficulty levels, a daily challenge, and a science-backed approach you can actually keep.",
  metadataBase: new URL("https://absolutepitchtrainer.app"),
  openGraph: {
    title: "Absolute Pitch Trainer",
    description: "Hear the note. Name the note.",
    type: "website",
    images: ["/app-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Absolute Pitch Trainer",
    description: "Hear the note. Name the note.",
    images: ["/app-icon.png"],
  },
  // Favicon + apple-touch are picked up from src/app/icon.png and
  // src/app/apple-icon.png via the Next.js file convention.
};

// Runs synchronously before paint so the chosen palette is in place
// for the first frame — no flash of default theme. Also swaps the
// favicon <link> so returning visitors who saved e.g. tube-glow see
// the matching app-icon in the browser tab right away. Kept inline
// + minified by hand so it's a single tag, no bundler indirection.
const paletteInit = `(function(){try{var k='pitch-palette';var v=localStorage.getItem(k);var allow=['jukebox-chrome','tube-glow','reel-to-reel','rainbow-pride'];if(v&&allow.indexOf(v)>=0){document.documentElement.dataset.palette=v;requestAnimationFrame(function(){var u='/app-icons/'+v+'.png?v='+v;var l=document.querySelector('link[rel=\\\"icon\\\"]');if(l)l.href=u;var a=document.querySelector('link[rel=\\\"apple-touch-icon\\\"]');if(a)a.href=u;});}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: paletteInit }} />
      </head>
      <body className={`${font.className} grain`}>{children}</body>
    </html>
  );
}
