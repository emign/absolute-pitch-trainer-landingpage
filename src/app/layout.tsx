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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} grain`}>{children}</body>
    </html>
  );
}
