import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    appStore: "App Store",
    download: "Download",
  },
  hero: {
    eyebrow: "EAR · TRAINING · 2026",
    seoHeadline: "Absolute Pitch Trainer — Perfect Pitch & Ear Training for iOS",
    headline: ["Hear the note.", "Name the note."],
    sub: "The ear-training app for adult musicians who never gave up on perfect pitch. Eight difficulty levels, a daily challenge, and a science-backed approach you can actually keep.",
    cta: "Download on the App Store",
    secondary: "How it works",
    badge: "iPhone · iOS 17+",
  },
  features: {
    eyebrow: "Built for real ears",
    title: "Everything you need. Nothing you don't.",
    list: [
      {
        icon: "levels",
        title: "Eight levels of difficulty",
        body: "From three coloured notes for absolute beginners to full chord progressions and melodies for serious students.",
      },
      {
        icon: "ear",
        title: "Two game modes",
        body: "Practice keeps the pressure off. Quiz puts your accuracy on the clock and on the scoreboard.",
      },
      {
        icon: "flame",
        title: "On Fire streaks",
        body: "Chain enough correct answers in a row and the quiz ignites — a daily-play streak plus a per-quiz streak running side by side.",
      },
      {
        icon: "calendar",
        title: "Daily Challenge",
        body: "A fresh test every day to keep the habit — and the calendar — alive.",
      },
      {
        icon: "chart",
        title: "Stats you'll actually read",
        body: "Accuracy curves across 7, 30, 90 days, and a full year. Per-note mastery rings for every pitch class.",
      },
      {
        icon: "trophy",
        title: "Game Center leaderboards",
        body: "Compare career XP and best quiz score with players around the world. Achievements span Common to Legendary.",
      },
      {
        icon: "tuning",
        title: "Reference tuning fork",
        body: "Tap for a clean C-D-E-F-G-A-B reference scale. Pure pitch synthesis, no muddy waveforms.",
      },
      {
        icon: "palette",
        title: "Four hand-tuned palettes",
        body: "Tube Glow, Jukebox Chrome, Reel-to-Reel, Rainbow Pride. Plus alternate app icons.",
      },
      {
        icon: "shield",
        title: "Private by design",
        body: "No accounts, no trackers, no telemetry. Your practice history stays on your iPhone.",
      },
    ],
  },
  screens: {
    eyebrow: "A look inside",
    title: "Designed like an instrument.",
    list: [
      { label: "TRAIN YOUR EAR", headline: "Hear the note. / Name the note.", file: "01-hero" },
      { label: "HOT STREAKS", headline: "Catch fire. / Stay on it.", file: "02-onfire" },
      { label: "YOUR PROGRESS", headline: "Every note, / every day, / sharper.", file: "03-progress" },
      { label: "CLIMB THE RANKS", headline: "Level up. / Lock in streaks.", file: "04-rank" },
    ],
  },
  science: {
    eyebrow: "The science",
    title: "Adult ears keep learning.",
    body: "Folk wisdom says perfect pitch is \"inborn or never.\" That's only half the story. Children can develop full absolute pitch during a critical childhood window — especially with early musical training. But adult ears keep learning too: focused, repeated practice still sharpens accurate note recognition at any age. We built the app on the part of the science that works for grown-up brains.",
    pull: "It's not too late to start.",
  },
  cta: {
    eyebrow: "Ready when you are",
    title: "Train the ear musicians spend years dreaming about.",
    body: "Free to start. Premium unlocks the higher difficulty levels, advanced statistics, and exclusive app icons.",
    button: "Download on the App Store",
  },
  faq: {
    eyebrow: "Common questions",
    title: "Honest answers about training pitch.",
    items: [
      {
        q: "Can adults really learn perfect pitch?",
        a: "Sort of, and the nuance matters. Full classical-style perfect pitch — naming any note you hear cold — develops most reliably during a childhood critical period. But adult ears keep getting better with focused, repeated practice: faster identification, fewer near-misses, and real progress on the scale you actually train. We built the app on the part of the science that works for grown-up brains.",
      },
      {
        q: "What's the difference between absolute pitch and perfect pitch?",
        a: "They're the same thing. \"Absolute pitch\" is the academic term, \"perfect pitch\" is what most people search for. Both mean naming a note you hear without a reference tone.",
      },
      {
        q: "How is this different from interval ear training apps?",
        a: "Most ear-training apps train intervals — the distance between two notes — which is relative pitch. This app trains absolute pitch from the ground up: starting with three colour-coded notes and progressing through 8 levels to full chord progressions and melodies. Intervals come in at the higher levels, but the foundation is identifying notes in isolation.",
      },
      {
        q: "How long does it take to see results?",
        a: "Most people see their accuracy curve move within the first 7 days of daily practice. That's why the Stats screen shows 7, 30, 90 day, and 1 year accuracy graphs — the change is small day-to-day and obvious week-to-week.",
      },
      {
        q: "Is the app free?",
        a: "Yes — the core training is free forever. Premium unlocks the higher difficulty levels (chords, melodies), advanced statistics, and exclusive app icons. No accounts, no trackers, no ads.",
      },
    ],
  },
  footer: {
    tagline: "Hear the note. Name the note.",
    privacy: "Privacy Policy",
    legalNotice: "Impressum",
    copyright: "© 2026 Nicolai Emig. Not affiliated with Apple Inc.",
    appBy: "An app by Nicolai Emig",
    languageLabel: "Language",
    themeLabel: "Theme",
  },
};

export default en;
