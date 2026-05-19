import type { Dictionary } from "./types";

const fr: Dictionary = {
  nav: {
    appStore: "App Store",
    download: "Télécharger",
  },
  hero: {
    eyebrow: "FORMATION · AUDITIVE · 2026",
    headline: ["Écoute la note.", "Nomme-la."],
    sub: "L'app de formation auditive pour les musiciens adultes qui n'ont jamais abandonné l'oreille absolue. Huit niveaux de difficulté, un défi quotidien et une approche scientifique que tu peux vraiment tenir.",
    cta: "Télécharger sur l'App Store",
    secondary: "Comment ça marche",
    badge: "iPhone · iOS 17+",
  },
  features: {
    eyebrow: "Pour de vraies oreilles",
    title: "Tout ce qu'il te faut. Rien de superflu.",
    list: [
      {
        icon: "levels",
        title: "Huit niveaux de difficulté",
        body: "De trois notes colorées pour débutants absolus à des suites d'accords et mélodies complètes pour étudiants sérieux.",
      },
      {
        icon: "ear",
        title: "Deux modes de jeu",
        body: "Entraînement — calme, sans pression. Quiz — chronométré, noté, classé.",
      },
      {
        icon: "flame",
        title: "Séries en feu",
        body: "Enchaîne assez de bonnes réponses — le quiz s'enflamme. Série quotidienne et série en quiz côte à côte.",
      },
      {
        icon: "calendar",
        title: "Défi quotidien",
        body: "Un nouveau test chaque jour pour garder l'habitude — et le calendrier — en vie.",
      },
      {
        icon: "chart",
        title: "Stats que tu vas vraiment lire",
        body: "Courbe de précision sur 7, 30, 90 jours et une année entière. Anneaux de maîtrise pour chaque classe de hauteur.",
      },
      {
        icon: "trophy",
        title: "Classements Game Center",
        body: "Compare XP de carrière et meilleur score de quiz à travers le monde. Succès du Commun au Légendaire.",
      },
      {
        icon: "tuning",
        title: "Diapason de référence",
        body: "Touche pour une gamme C-D-E-F-G-A-B propre. Synthèse de hauteur pure, sans formes d'onde floues.",
      },
      {
        icon: "palette",
        title: "Quatre palettes accordées à la main",
        body: "Tube Glow, Jukebox Chrome, Reel-to-Reel, Rainbow Pride. Plus des icônes d'app alternatives.",
      },
      {
        icon: "shield",
        title: "Privé par conception",
        body: "Aucun compte, aucun tracker, aucune télémétrie. Ton historique reste sur ton iPhone.",
      },
    ],
  },
  screens: {
    eyebrow: "Un coup d'œil dedans",
    title: "Conçue comme un instrument.",
    list: [
      { label: "ENTRAÎNE TON OREILLE", headline: "Écoute la note. / Nomme-la.", file: "01-hero" },
      { label: "SÉRIES EN FEU", headline: "Reste / dans la zone.", file: "02-onfire" },
      { label: "TES PROGRÈS", headline: "Chaque note, / chaque jour, / plus juste.", file: "03-progress" },
      { label: "GRIMPE DANS LES RANGS", headline: "Monte de niveau. / Garde tes séries.", file: "04-rank" },
    ],
  },
  science: {
    eyebrow: "La science",
    title: "Les oreilles adultes continuent d'apprendre.",
    body: "La sagesse populaire dit que l'oreille absolue est « innée ou jamais ». Ce n'est qu'une moitié de l'histoire. Les enfants peuvent développer une oreille absolue complète pendant une fenêtre critique de l'enfance — surtout avec une formation musicale précoce. Mais les oreilles adultes continuent d'apprendre aussi : un entraînement répété et concentré affine encore la reconnaissance des notes à tout âge. Nous avons bâti l'app sur la partie de la science qui fonctionne pour les cerveaux adultes.",
    pull: "Il n'est pas trop tard pour commencer.",
  },
  cta: {
    eyebrow: "Prêt quand tu l'es",
    title: "Entraîne l'oreille dont les musiciens rêvent pendant des années.",
    body: "Gratuit au départ. Premium débloque les niveaux supérieurs, les statistiques avancées et les icônes exclusives.",
    button: "Télécharger sur l'App Store",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Réponses honnêtes sur l'entraînement de l'oreille.",
    items: [
      {
        q: "Les adultes peuvent-ils vraiment apprendre l'oreille absolue ?",
        a: "En partie — et la nuance compte. L'oreille absolue classique complète — nommer n'importe quelle note à froid — se développe le plus fiablement pendant une fenêtre critique de l'enfance. Mais les oreilles adultes continuent de progresser avec une pratique répétée et concentrée : identification plus rapide, moins d'erreurs de proximité, et de vrais progrès sur l'échelle que tu entraînes vraiment. Nous avons bâti l'app sur la partie de la science qui fonctionne pour les cerveaux adultes.",
      },
      {
        q: "Quelle est la différence entre oreille absolue et oreille parfaite ?",
        a: "C'est la même chose. « Oreille absolue » est le terme académique, « oreille parfaite » est ce que la plupart des gens recherchent. Les deux signifient nommer une note sans référence.",
      },
      {
        q: "En quoi est-ce différent d'une app d'oreille relative ou d'intervalles ?",
        a: "La plupart des apps de formation auditive entraînent les intervalles — la distance entre deux notes — soit l'oreille relative. Cette app entraîne l'oreille absolue depuis la base : trois notes codées par couleur au départ, puis 8 niveaux jusqu'aux suites d'accords et mélodies. Les intervalles arrivent aux niveaux supérieurs, mais la fondation est l'identification de notes isolées.",
      },
      {
        q: "Combien de temps pour voir des résultats ?",
        a: "La plupart des gens voient leur courbe de précision bouger dans les 7 premiers jours de pratique quotidienne. C'est pour ça que l'écran Stats affiche des graphes sur 7, 30, 90 jours et un an complet — le changement est petit d'un jour à l'autre, évident d'une semaine à l'autre.",
      },
      {
        q: "Est-ce gratuit ?",
        a: "Oui — l'entraînement de base est gratuit pour toujours. Premium débloque les niveaux supérieurs (accords, mélodies), les statistiques avancées et les icônes exclusives. Pas de compte, pas de tracker, pas de pub.",
      },
    ],
  },
  footer: {
    tagline: "Écoute la note. Nomme-la.",
    privacy: "Politique de confidentialité",
    legalNotice: "Mentions légales",
    copyright: "© 2026 Nicolai Emig. Non affilié à Apple Inc.",
    appBy: "Une app de Nicolai Emig",
    languageLabel: "Langue",
    themeLabel: "Thème",
  },
};

export default fr;
