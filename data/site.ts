/**
 * Données du site — contenu réel d'Alric (CV + ancien portfolio).
 * Visuels projets à déposer dans /public (sinon placeholder monochrome).
 */

export const profile = {
  name: "Alric",
  fullName: "Hononta Alric",
  wordmark: "PORTFOLIO",
  baseline: "UI/UX DESIGNER · COTONOU",
  heroLines: ["EXPLOREZ MON", "PORTFOLIO"],
  heroIntro:
    "JE TRANSFORME DES PROBLÈMES COMPLEXES EN INTERFACES INTUITIVES, ÉLÉGANTES ET CENTRÉES SUR L'UTILISATEUR",
  skills: [
    "UI DESIGN",
    "UX RESEARCH",
    "WIREFRAMING",
    "PROTOTYPAGE",
    "WORDPRESS",
  ],
  aboutText:
    "HONONTA ALRIC — UI/UX DESIGNER BASÉ À COTONOU. JE COMBINE MARKETING DIGITAL ET DESIGN POUR CRÉER DES INTERFACES QUI ONT DU SENS, ESTHÉTIQUEMENT ET STRATÉGIQUEMENT.",
  // Portrait N&B détouré du hero (fond transparent + fondu bas vers le blanc dans Hero.tsx)
  portrait: "/alric-hero.png",
};

export const nav = [
  { label: "ACCUEIL", href: "#home" },
  { label: "À PROPOS", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROCESSUS", href: "#process" },
  { label: "PROJETS", href: "#projects" },
];

export const stats = [
  { value: 10, suffix: "+", label: "PROJETS RÉALISÉS" },
  { value: 2, suffix: "", label: "FORMATIONS ACTIVES" },
  { value: 2, suffix: "", label: "HACKATHONS" },
];

/* ------------------------------------------------------------------ */
/* SERVICES — « ce que je propose » (contenu de la maquette)           */
/* ------------------------------------------------------------------ */
export type Service = {
  num: string;
  title: string;
  desc: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    num: "01",
    title: "Recherche UX",
    desc: "Entretiens, personas et analyse des besoins pour des décisions fondées sur l'utilisateur.",
  },
  {
    num: "02",
    title: "Wireframing & Architecture",
    desc: "Arborescence, user flows et wireframes pour des parcours clairs et logiques.",
  },
  {
    num: "03",
    title: "UI Design",
    desc: "Maquettes haute-fidélité élégantes, lisibles et fidèles à votre identité.",
    featured: true,
  },
  {
    num: "04",
    title: "Design System",
    desc: "Composants, styles et règles réutilisables pour une cohérence à grande échelle.",
  },
  {
    num: "05",
    title: "Prototypage interactif",
    desc: "Prototypes cliquables pour tester, valider et présenter avant de coder.",
  },
  {
    num: "06",
    title: "Design mobile & desktop",
    desc: "Des interfaces responsive, pensées pour chaque écran, du mobile au desktop.",
  },
];

export const servicesIntro =
  "DE LA RECHERCHE UTILISATEUR À L'INTERFACE FINALE, JE CONÇOIS DES PRODUITS DIGITAUX COHÉRENTS, ESTHÉTIQUES ET CENTRÉS SUR VOS OBJECTIFS.";

/* ------------------------------------------------------------------ */
/* PROCESSUS — méthode réelle en 4 étapes                              */
/* ------------------------------------------------------------------ */
export type ProcessStep = {
  num: string;
  title: string;
  desc: string;
};

export const processIntro =
  "Chaque projet suit une méthode rigoureuse en 4 étapes, de la compréhension du problème à la livraison d'une interface qui fonctionne vraiment.";

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Recherche",
    desc: "Comprendre le problème avant de chercher une solution : interviews, analyse concurrentielle, personas et identification des pain points.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Structurer l'information et les parcours avant l'esthétique : user flow, sitemap, wireframes basse-fidélité, hiérarchie claire.",
  },
  {
    num: "03",
    title: "Design UI",
    desc: "Donner vie à l'interface : charte graphique, design system, maquettes haute-fidélité et responsive, jusqu'au moindre détail.",
  },
  {
    num: "04",
    title: "Prototype & Livraison",
    desc: "Prototyper, tester, itérer et livrer : prototype interactif Figma, handoff développeur, intégration WordPress si besoin.",
  },
];

/* ------------------------------------------------------------------ */
/* PROJETS + études de cas (réels — liens Figma)                       */
/* ------------------------------------------------------------------ */
export type ProjectCategory = "APP MOBILE" | "WEB DESIGN";

export type Persona = {
  name: string;
  role: string;
  age: string;
  location: string;
  context?: string;
  quote?: string;
  goals: string[];
  frustrations: string[];
  needs: string[];
};

export type StakeholderGroup = {
  group: string;
  items: { name: string; desc: string }[];
};

export type Insight = { value: string; label: string };

export type JourneyStep = {
  stage: string;
  emotion: string;
  action: string;
  pain: string;
  opportunity: string;
};

export type Flow = { name: string; steps: string[] };

export type PaletteColor = { name: string; hex: string; usage: string };

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  kicker: string;
  image: string;
  year: string;
  role: string;
  services: string[];
  liveUrl?: string;
  summary: string;
  problem: string;
  approach: string[];
  solution: string;
  gallery: string[];
  finalImage: string;
  /* Sections d'étude de cas approfondie (optionnelles) */
  context?: string;
  researchMethod?: string;
  objectives?: string[];
  stakeholders?: StakeholderGroup[];
  personas?: Persona[];
  insights?: Insight[];
  sitemap?: { tab: string; items: string[] }[];
  sitemapRoot?: string;
  journey?: { scenario: string; steps: JourneyStep[] };
  tension?: { today: string[]; tomorrow: string[] };
  truths?: { surface: string; real: string }[];
  flows?: Flow[];
  designSystem?: { note?: string; palette: PaletteColor[] };
};

export const projects: Project[] = [
  {
    id: "wedcar",
    slug: "wedcar",
    title: "WedCar",
    category: "APP MOBILE",
    kicker: "APP / WEB — MARIAGE · EN COURS",
    image: "/project-wedcar.png",
    year: "2026",
    role: "UX/UI Design",
    services: ["UX Research", "Mobile First", "Prototypage"],
    liveUrl:
      "https://www.figma.com/design/cs3gmS97Y63chDli8GZsu5/wedcar?node-id=0-1",
    summary:
      "Solution digitale pour rechercher, comparer et réserver des voitures de mariage à Cotonou.",
    context:
      "Dans un marché matrimonial béninois en pleine expansion où le prestige est central, l'accès aux véhicules d'exception reste entravé par une offre informelle, fragmentée et peu fiable. WedCar structure ce marché et rassure les couples en facilitant l'accès à ces services.",
    problem:
      "Réserver une voiture de mariage à Cotonou passe par le bouche-à-oreille et les réseaux sociaux : peu de choix visibles, prix opaques, prestataires difficiles à vérifier et risques de double réservation. Côté loueurs, la visibilité et la gestion restent 100 % manuelles.",
    researchMethod:
      "Trois questionnaires (futurs mariés, prestataires, location générale) complétés d'entretiens, pour cartographier les besoins, les frictions et les attentes de chaque partie prenante.",
    stakeholders: [
      {
        group: "Utilisateurs principaux",
        items: [
          {
            name: "Futurs mariés",
            desc: "Les demandeurs finaux : trouver, comparer et réserver une voiture fiable, adaptée au budget et au thème du mariage.",
          },
          {
            name: "Prestataires / propriétaires",
            desc: "Agences ou particuliers : rentabiliser leurs véhicules, gérer leur calendrier et gagner en visibilité.",
          },
          {
            name: "Couples déjà mariés",
            desc: "Valident le sérieux d'un prestataire via notes et avis (ponctualité du chauffeur, propreté, climatisation).",
          },
          {
            name: "Chauffeurs",
            desc: "Souvent oubliés : ils ont besoin d'horaires, d'itinéraires et d'attentes clients clairs.",
          },
        ],
      },
      {
        group: "Utilisateurs secondaires",
        items: [
          {
            name: "Wedding planners",
            desc: "Réservent pour le compte de plusieurs clients : des ambassadeurs potentiels.",
          },
          {
            name: "Comités d'organisation",
            desc: "Famille et amis chargés de « gérer la voiture » : prescripteurs clés au Bénin.",
          },
          {
            name: "Agences d'événementiel",
            desc: "Louent pour shootings, clips et accueil VIP en marge des mariages.",
          },
        ],
      },
    ],
    personas: [
      {
        name: "Naëlle",
        role: "Future mariée (cible principale)",
        age: "27 ans",
        location: "Cotonou",
        context:
          "Active et très à l'aise avec les réseaux sociaux. Elle veut une voiture élégante et prestigieuse, et une expérience fluide, sans stress, à la hauteur de l'événement.",
        goals: [
          "Trouver une voiture de luxe pour son mariage",
          "Un bon rapport qualité/prix",
          "S'assurer de la fiabilité du prestataire",
          "Gagner du temps dans la recherche",
        ],
        frustrations: [
          "Prix trop élevés (66,7 %)",
          "Manque de choix (50 %)",
          "Difficulté à trouver une voiture adaptée (50 %)",
          "Manque de confiance envers certains prestataires",
        ],
        needs: [
          "Voir plusieurs options au même endroit",
          "Comparer facilement les prix",
          "Des photos fiables et des avis clients",
          "Réserver rapidement, option chauffeur inclus",
        ],
      },
      {
        name: "Kossi",
        role: "Gérant d'agence — SION CAR BÉNIN (cible secondaire)",
        age: "34 ans",
        location: "Cotonou",
        context:
          "Entrepreneur indépendant depuis 3 ans. À l'aise sur les réseaux mais peu outillé : il gère toutes ses réservations sur WhatsApp, ce qui l'expose aux erreurs et aux pertes de clients.",
        goals: [
          "Attirer plus de clients sans dépenser en publicité",
          "Organiser ses réservations",
          "Éviter les doubles réservations",
          "Renforcer sa crédibilité et développer son activité",
        ],
        frustrations: [
          "Manque de visibilité malgré les réseaux (100 %)",
          "Gestion 100 % manuelle via WhatsApp",
          "A déjà vécu une double réservation",
          "Aucun système d'avis pour valoriser son service",
        ],
        needs: [
          "Un profil professionnel visible en ligne",
          "Un calendrier de disponibilité automatisé",
          "Des avis clients après chaque prestation",
          "Un tableau de bord simple pour ses réservations",
        ],
      },
    ],
    insights: [
      { value: "83 %", label: "intéressés par une plateforme de réservation en ligne" },
      { value: "66,7 %", label: "citent les prix trop élevés comme principal frein" },
      { value: "50 %", label: "ne trouvent pas facilement une voiture adaptée" },
      { value: "66,7 %", label: "cherchent via le bouche-à-oreille & les réseaux" },
    ],
    approach: [
      "UX Research (terminé) : 3 questionnaires + entretiens, parcours actuel et pain points cartographiés.",
      "User flow & wireframes (en cours) : recherche → filtre → fiche voiture → comparaison → réservation, en mobile-first.",
      "Maquettes haute-fidélité (à venir) : UI adaptée au marché béninois, intégration WordPress prévue.",
    ],
    solution:
      "Côté mariés : comparer, vérifier (avis) et réserver une voiture en quelques minutes. Côté prestataires : profil visible, calendrier automatisé et fin des doubles réservations. WedCar fait de la confiance le cœur du produit.",
    gallery: ["/project-wedcar-1.png", "/project-wedcar-2.png"],
    finalImage: "/project-wedcar-final.png",
  },
  {
    id: "pocketcare",
    slug: "pocketcare",
    title: "PocketCare",
    category: "APP MOBILE",
    kicker: "APP MOBILE — SANTÉ DIGITALE",
    image: "/project-pocketcare.png",
    year: "2025",
    role: "UX/UI Mobile (collaboration)",
    services: ["UX Research", "Mobile UI", "Design System"],
    liveUrl:
      "https://www.figma.com/design/TUq31VThXTR51HuJkWC8Dv/PocketCare?node-id=0-1",
    summary:
      "Application mobile de santé qui simplifie le suivi médical au quotidien, pour tous les profils.",
    problem:
      "Le suivi médical quotidien est fastidieux et peu accessible. PocketCare devait le rendre simple, clair et utilisable par tous.",
    approach: [
      "UX Research : personas santé, parcours patient, analyse des apps existantes.",
      "User flow & wireframes : 12 écrans principaux, navigation mobile-first.",
      "UI mobile haute-fidélité : design system de composants et prototype interactif Figma.",
    ],
    solution:
      "Une app claire et accessible qui rend le suivi médical simple et rassurant au quotidien.",
    gallery: ["/project-pocketcare-1.png", "/project-pocketcare-2.png"],
    finalImage: "/project-pocketcare-final.png",
  },
  {
    id: "modallas-event",
    slug: "modallas-event",
    title: "Modalla's Event",
    category: "WEB DESIGN",
    kicker: "SITE VITRINE & PORTFOLIO — ÉVÉNEMENTIEL",
    image: "/project-modallas.png",
    year: "2026",
    role: "UX/UI Design & Intégration",
    services: ["UX Design", "UI & Branding", "Intégration"],
    liveUrl:
      "https://www.figma.com/design/owl6iEMzvO3EcqMVcS2jVJ/Modallas_s-project?node-id=394-199",
    summary:
      "Site vitrine & portfolio pour Modalla's Event & Design, marque de décoration événementielle : affirmer une image haut de gamme et transformer la découverte visuelle en demandes de devis.",
    context:
      "Modalla's Event & Design est une marque de décoration événementielle (mariages, anniversaires, baptêmes, événements professionnels) basée à Zogbo, reconnue pour la qualité de ses décors. Elle communique surtout par bouche-à-oreille et réseaux sociaux. Sans site structuré, elle ne peut ni affirmer sa crédibilité haut de gamme, ni montrer l'ampleur de ses réalisations, ni guider les visiteurs vers des actions claires. L'enjeu : passer d'une simple découverte visuelle à une expérience digitale structurée, émotionnelle et engageante.",
    problem:
      "Sans site structuré, la marque ne peut pas affirmer pleinement sa crédibilité haut de gamme, montrer l'ampleur de ses réalisations, ni guider les utilisateurs vers des actions claires (devis, showroom, partenariat). Côté visiteur : difficulté à comprendre l'offre globale, manque de projection sans structure claire, incertitude sur le processus de travail, et hésitation à passer à l'action.",
    objectives: [
      "Affirmer la crédibilité haut de gamme de la marque.",
      "Montrer l'ampleur des réalisations (portfolio digital permanent).",
      "Guider vers des actions claires : devis, showroom, partenariat.",
      "Passer d'une découverte visuelle à une expérience structurée, émotionnelle et engageante.",
      "Centraliser les demandes (devis, contact, visite showroom).",
    ],
    researchMethod:
      "Analyse du brief et de l'existant (communication 100 % bouche-à-oreille et réseaux sociaux), puis cartographie des enjeux UX des deux côtés — utilisateurs (clients & partenaires) et marque — et modélisation de trois parcours : client particulier, client showroom et partenaire professionnel.",
    stakeholders: [
      {
        group: "Côté utilisateurs — UX élégante, émotionnelle, orientée confiance",
        items: [
          {
            name: "Comprendre l'offre",
            desc: "Difficulté à saisir l'offre globale sans structure claire → besoin de clarté et de réassurance rapide.",
          },
          {
            name: "Se projeter",
            desc: "Manque de projection sans réalisations structurées → besoin de preuves concrètes.",
          },
          {
            name: "Comprendre le processus",
            desc: "Incertitude sur la façon de travailler avec la marque → besoin d'être guidé.",
          },
          {
            name: "Passer à l'action",
            desc: "Besoin d'agir sans friction : devis, showroom ou contact direct.",
          },
        ],
      },
      {
        group: "Côté marque — UX maîtrisée, évolutive, professionnelle",
        items: [
          {
            name: "Affirmer le positionnement",
            desc: "Assumer une image créative et haut de gamme.",
          },
          {
            name: "Centraliser les demandes",
            desc: "Regrouper devis, contacts et visites showroom.",
          },
          {
            name: "Attirer & convertir",
            desc: "Clients, partenaires et visiteurs showroom.",
          },
          {
            name: "Portfolio digital permanent",
            desc: "Une vitrine évolutive qui valorise chaque réalisation.",
          },
        ],
      },
    ],
    journey: {
      scenario:
        "Client préparant un événement (mariage, anniversaire, fête privée), en quête d'inspiration et de prestataire depuis son smartphone. Objectif : le faire passer d'un visiteur inspiré à un prospect engagé et confiant.",
      steps: [
        {
          stage: "① Point d'entrée — Découverte",
          emotion: "Curieux, attentif",
          action:
            "Arrive via Google, Instagram ou recommandation, sur la page Accueil : univers visuel fort, slogan émotionnel et CTA visibles — Découvrir nos réalisations · Demander un devis · Visiter le showroom.",
          pain: "« Cette marque est-elle vraiment à la hauteur, haut de gamme ? »",
          opportunity:
            "Capter par l'univers visuel et orienter d'emblée vers les 3 actions clés.",
        },
        {
          stage: "② Exploration — Rassurance",
          emotion: "Rassuré, en confiance",
          action:
            "Navigue vers À propos et Services : découvre la vision de la marque, les expertises et les valeurs (élégance, émotion, professionnalisme).",
          pain: "Comprendre l'offre globale et qui se trouve derrière la marque.",
          opportunity: "Affirmer le positionnement et installer la confiance.",
        },
        {
          stage: "③ Projection — Inspiration",
          emotion: "Enthousiaste, projeté",
          action:
            "Consulte Réalisations et Types d'événements : galeries par catégories et descriptions courtes des projets.",
          pain: "Se projeter concrètement dans son propre événement.",
          opportunity:
            "Donner à voir l'ampleur des réalisations et nourrir la projection.",
        },
        {
          stage: "④ Maîtrise — Compréhension du processus",
          emotion: "Sécurisé",
          action:
            "Consulte la page Processus de travail : les étapes, la méthode et l'accompagnement.",
          pain: "Incertitude sur le déroulé du travail.",
          opportunity: "Clarifier le processus pour lever l'incertitude.",
        },
        {
          stage: "⑤ Preuve sociale — Validation",
          emotion: "Confiance renforcée",
          action:
            "Lit la page Témoignages : satisfaction client et professionnalisme confirmés.",
          pain: "Besoin de preuves concrètes avant de s'engager.",
          opportunity: "Apporter la preuve sociale au bon moment.",
        },
        {
          stage: "⑥ Action — Engagement",
          emotion: "Prêt à s'engager",
          action:
            "Accède à Contact : WhatsApp, formulaire de devis ou itinéraire vers le showroom.",
          pain: "La moindre friction peut retarder la demande.",
          opportunity: "Rendre la prise de contact immédiate et sans friction.",
        },
      ],
    },
    flows: [
      {
        name: "Client showroom — du digital au physique",
        steps: [
          "Accueil",
          "Réalisations",
          "Showroom & Boutique",
          "Visite physique",
          "Contact / devis",
        ],
      },
      {
        name: "Partenaire professionnel — vers la collaboration",
        steps: ["Accueil", "À propos", "Partenariats", "Contact"],
      },
    ],
    sitemapRoot: "Website Modalla's",
    sitemap: [
      {
        tab: "Accueil",
        items: [
          "Univers visuel & slogan",
          "CTA : réalisations · devis · showroom",
          "Aperçu des services",
          "Réalisations phares",
          "Témoignages",
          "Bloc réassurance",
        ],
      },
      {
        tab: "À propos",
        items: [
          "Vision de la marque",
          "Valeurs : élégance · émotion · professionnalisme",
          "Expertises",
          "Partenariats",
        ],
      },
      {
        tab: "Services",
        items: [
          "Mariages",
          "Anniversaires & baptêmes",
          "Événements professionnels",
          "Processus de travail",
        ],
      },
      {
        tab: "Réalisations",
        items: [
          "Galeries par catégories",
          "Types d'événements",
          "Descriptions des projets",
        ],
      },
      {
        tab: "Showroom & Boutique",
        items: ["Éléments décoratifs", "Visite physique", "Itinéraire & accès"],
      },
      {
        tab: "Contact",
        items: [
          "WhatsApp direct",
          "Formulaire de devis",
          "Itinéraire showroom",
          "Coordonnées",
        ],
      },
    ],
    approach: [
      "Analyse des enjeux UX des deux côtés : utilisateurs (clients & partenaires) et marque.",
      "Trois parcours modélisés : client particulier (principal), client showroom et partenaire professionnel.",
      "Architecture de l'information orientée confiance et conversion (Accueil, À propos, Services, Réalisations, Showroom, Contact).",
      "Direction artistique haut de gamme noir & or, maquettes haute-fidélité Figma, responsive mobile-first.",
      "Intégration : site vitrine/portfolio navigable, CTA devis/showroom/contact (WhatsApp, formulaire).",
    ],
    solution:
      "Un site vitrine & portfolio à la hauteur de la marque : univers visuel fort, réalisations mises en valeur, processus clarifié, preuve sociale et passage à l'action sans friction (devis, WhatsApp, showroom). Le site devient à la fois vitrine, portfolio, outil de conversion, pont vers le showroom et support de partenariat.",
    gallery: ["/project-modallas-1.png", "/project-modallas-2.png"],
    finalImage: "/project-modallas-final.png",
  },
  {
    id: "api-benin",
    slug: "api-benin",
    title: "Refonte API Bénin",
    category: "WEB DESIGN",
    kicker: "REFONTE UX — SANTÉ NATURELLE · PALUDISME",
    image: "/project-api-benin.png",
    year: "2025",
    role: "UX/UI Design",
    services: ["Analyse UX", "Architecture de l'information", "Prototypage"],
    liveUrl:
      "https://www.figma.com/design/VWg4Hx9PKzkAAej4e2tH2m/Projet-Alric?node-id=288-163",
    summary:
      "Refonte UX du site d'API-BENIN, organisation de solutions naturelles contre le paludisme : passer d'un site qui informe à un site qui fait comprendre et agir.",
    context:
      "API-BENIN œuvre pour l'indépendance sanitaire en Afrique grâce à des solutions naturelles, dont API-Palu contre le paludisme. Le site diffuse beaucoup d'informations — mais sans savoir si elles sont comprises, retenues, rassurantes ou convaincantes. L'enjeu identifié : passer d'un site « informatif » à un site « orienté compréhension et action ».",
    problem:
      "Le principal problème n'est pas l'absence d'information, mais le manque de structuration et d'orientation utilisateur. Le site diffuse un volume important de contenu sans guider le visiteur : il ne saisit pas immédiatement la mission, ne sait pas quoi faire ensuite, hésite à prendre contact et quitte souvent sans interaction.",
    tension: {
      today: [
        "API informe beaucoup",
        "Le visiteur comprend peu",
        "L'action reste faible",
      ],
      tomorrow: [
        "API explique clairement",
        "Le visiteur comprend rapidement",
        "L'action devient naturelle",
      ],
    },
    objectives: [
      "Faire comprendre la mission d'API-BENIN en quelques secondes.",
      "Transformer le scepticisme en crédibilité : distinctions, récompenses, engagement scientifique.",
      "Expliquer les produits — dont API-Palu — sans jargon complexe.",
      "Guider le visiteur vers l'action avec un contact simple et sans friction.",
      "Valoriser la recherche et générer plus de contacts et de partenariats.",
    ],
    researchMethod:
      "Analyse globale du site existant, puis cartographie des enjeux UX des deux côtés de l'écran : le visiteur (patient, parent, partenaire) qui cherche à être rassuré, et l'organisation qui cherche à valoriser son impact et à convertir.",
    stakeholders: [
      {
        group: "Côté visiteur — UX rassurante, claire, pédagogique",
        items: [
          {
            name: "Crédibilité immédiate",
            desc: "Être rassuré dès l'arrivée sur le sérieux et la fiabilité de l'organisation.",
          },
          {
            name: "Clarté sur les produits",
            desc: "Comprendre ce que sont les solutions naturelles, sans discours institutionnel dense.",
          },
          {
            name: "Confiance scientifique",
            desc: "Lever la peur des faux traitements et des promesses non prouvées.",
          },
          {
            name: "Contact facile",
            desc: "Pouvoir poser une question simplement, sans hésitation.",
          },
        ],
      },
      {
        group: "Côté organisation — UX stratégique, hiérarchisée, orientée conversion",
        items: [
          {
            name: "Valoriser la recherche",
            desc: "Mettre en avant distinctions, récompenses et engagement scientifique.",
          },
          {
            name: "Montrer l'impact réel",
            desc: "Prouver l'efficacité et l'utilité concrète des solutions.",
          },
          {
            name: "Visibilité & confiance",
            desc: "Renforcer la crédibilité institutionnelle auprès du public.",
          },
          {
            name: "Contacts & partenariats",
            desc: "Convertir l'audience en prises de contact et en collaborations.",
          },
        ],
      },
    ],
    personas: [
      {
        name: "Kossi A.",
        role: "Père de famille — cible principale",
        age: "34 ans",
        location: "Cotonou",
        context:
          "Bac +2, revenus moyens, navigue surtout au smartphone. Sa motivation : trouver une solution naturelle et fiable contre le paludisme pour protéger sa famille. Au départ inquiet et méfiant, en recherche de réassurance. Il arrive via Google, lit vite, scrolle beaucoup, ne clique que si le message est clair, et abandonne dès que le site devient confus.",
        quote:
          "Est-ce vraiment efficace et validé scientifiquement ? Et comment être sûr que ce n'est pas dangereux pour mon enfant ?",
        goals: [
          "Protéger sa famille contre le paludisme",
          "Trouver une alternative naturelle aux médicaments importés",
          "Comprendre clairement ce qu'il achète",
          "Être rassuré sur l'efficacité et la sécurité",
        ],
        frustrations: [
          "Méfiance face aux produits « miracles »",
          "Informations trop scientifiques, difficiles à comprendre",
          "Peur des arnaques en ligne",
          "Manque de clarté sur les dosages et l'utilisation",
          "Sites web mal organisés",
        ],
        needs: [
          "Un message simple et direct",
          "Des preuves visibles : distinctions, certifications, résultats",
          "Des explications claires des produits (ex : API-Palu)",
          "Un bouton de contact facile",
          "Un site mobile fluide",
        ],
      },
    ],
    journey: {
      scenario:
        "Kossi, père de famille inquiet, cherche une solution naturelle et fiable contre le paludisme pour son enfant. Parcours du doute à l'engagement, en cinq étapes.",
      steps: [
        {
          stage: "① Découverte — Accueil",
          emotion: "Curiosité prudente",
          action:
            "Arrive après une recherche Google sur les solutions naturelles contre le paludisme ; découvre le message d'indépendance sanitaire et une interface structurée et rassurante.",
          pain: "« Est-ce sérieux ? Est-ce fiable ? » — scepticisme initial.",
          opportunity:
            "Capter l'attention et réduire le scepticisme dès le premier écran.",
        },
        {
          stage: "② Compréhension — Organisation",
          emotion: "Rassuré progressivement",
          action:
            "Explore la mission & vision, les distinctions et récompenses, l'engagement scientifique et l'histoire de l'organisation.",
          pain: "« Ce n'est pas juste un produit : y a-t-il une vraie structure derrière ? »",
          opportunity: "Transformer le doute en crédibilité.",
        },
        {
          stage: "③ Recherche de solution — Solutions",
          emotion: "Espoir contrôlé",
          action:
            "Consulte les produits et la présentation d'API-Palu, les explications sur la lutte contre le paludisme et les bénéfices.",
          pain: "« Est-ce adapté à mon enfant ? Comment ça fonctionne ? » — crainte du jargon.",
          opportunity:
            "Simplifier l'information et éviter le jargon scientifique complexe.",
        },
        {
          stage: "④ Décision — Contact",
          emotion: "Engagement mesuré",
          action:
            "Trouve un formulaire simple et des coordonnées visibles, hésite quelques secondes puis décide d'envoyer un message.",
          pain: "La moindre friction peut le faire renoncer.",
          opportunity: "Rendre l'action simple, rapide et sans friction.",
        },
        {
          stage: "⑤ Résultat — Engagement",
          emotion: "Inquiet → Sceptique → Rassuré → Espérant → Engagé",
          action:
            "Repart en confiance, prêt à entrer en contact avec l'organisation.",
          pain: "—",
          opportunity: "Transformer un visiteur inquiet en utilisateur confiant.",
        },
      ],
    },
    sitemapRoot: "Website API-BENIN",
    sitemap: [
      { tab: "Accueil", items: ["Mission · solutions naturelles · réassurance"] },
      {
        tab: "Organisation",
        items: ["Mission & Vision", "Équipe", "Distinctions & Récompenses"],
      },
      {
        tab: "Solutions",
        items: [
          "Nos produits — API-Palu",
          "Autres solutions naturelles",
          "Recherche & Innovation",
          "Lutte contre le paludisme & autres maladies",
        ],
      },
      {
        tab: "Contact",
        items: ["Nous contacter", "Partenariats", "Informations pratiques"],
      },
    ],
    approach: [
      "Analyse globale du site : diagnostic de la communication, de la clarté et de la hiérarchie de l'information.",
      "Cartographie des enjeux UX : la tension entre une organisation qui informe beaucoup et un visiteur qui comprend peu.",
      "Persona & parcours émotionnel : Kossi, du doute à l'engagement (Accueil → Organisation → Solutions → Contact).",
      "Réarchitecture de l'information : une arborescence claire, orientée compréhension et action.",
      "Prototype Figma : message clair, preuves visibles, produits expliqués sans jargon, contact sans friction.",
    ],
    solution:
      "Un site qui ne se contente plus d'informer mais fait comprendre et agir : message clair sur la mission, crédibilité par les distinctions et la science, produits (dont API-Palu) expliqués sans jargon, et contact sans friction — pour transformer un visiteur inquiet en utilisateur confiant.",
    gallery: ["/project-api-benin-1.png", "/project-api-benin-2.png"],
    finalImage: "/project-api-benin-final.png",
  },
  {
    id: "esc-benin",
    slug: "esc-benin",
    title: "ESC Bénin",
    category: "WEB DESIGN",
    kicker: "SITE DE FORMATION — SAVONNERIE & COSMÉTIQUE",
    image: "/project-esc.png",
    year: "2025",
    role: "UX Research, UI & WordPress",
    services: ["UX Research", "UI Design", "WordPress"],
    liveUrl: "https://www.figma.com/design/jaxssysIUYLnXY2tfj23M2/ESC?node-id=29-4",
    summary:
      "Site web pour l'ESC, école de savonnerie & cosmétique artisanale : transformer l'intérêt du public en inscriptions qualifiées à des formations complètes.",
    context:
      "L'ESC forme à la savonnerie et aux soins artisanaux via des formations pratiques et structurées, orientées vers l'autonomie professionnelle. Malgré un réel intérêt du public, l'école souffre d'un manque de visibilité et d'une communication peu claire. Le site doit devenir un outil stratégique capable de transformer cet intérêt en inscriptions concrètes.",
    problem:
      "Au-delà de l'esthétique, la vraie question n'est pas « est-ce joli ? » mais : la visiteuse comprend-elle clairement les étapes ? Sent-elle qu'elle sera accompagnée ? Perçoit-elle la valeur réelle de la formation ? Se projette-t-elle dans le lancement de sa marque ? Le défi : lever ses freins — peur d'une formation trop théorique, peur de ne pas savoir vendre, peur de rester seule après — et transformer l'intérêt en inscription.",
    objectives: [
      "Que la visiteuse se reconnaisse dans les problématiques présentées.",
      "Montrer que l'ESC répond précisément à ses freins.",
      "La faire se projeter dans une transformation professionnelle concrète.",
      "La faire se sentir accompagnée avant même de s'inscrire.",
      "La faire passer à l'action : demande d'information ou inscription.",
    ],
    researchMethod:
      "Questionnaire auprès des femmes intéressées par la savonnerie et les soins artisanaux, puis lecture des insights : les vérités cachées derrière leurs réponses — ce qu'elles veulent vraiment, au-delà de ce qu'elles expriment directement.",
    personas: [
      {
        name: "Mariam",
        role: "Future créatrice de marque — cible principale",
        age: "34 ans",
        location: "Salariée du privé",
        context:
          "Elle s'intéresse depuis plusieurs mois à la savonnerie et aux soins artisanaux, et veut transformer cet intérêt en activité génératrice de revenus, avec une marque à son nom. Son blocage : aucun cadre clair pour structurer son projet, et elle ne sait pas comment passer de « j'apprends » à « je vends officiellement ».",
        quote:
          "Comment passer de « j'apprends » à « je vends officiellement » — sans me retrouver seule après la formation ?",
        goals: [
          "Construire une activité stable",
          "Gagner en indépendance financière",
          "Créer une marque sérieuse et respectée",
          "Être entourée et accompagnée",
          "Se sentir légitime dans ce qu'elle fait",
        ],
        frustrations: [
          "Investir dans une formation trop théorique",
          "Ne pas maîtriser les formules et les calculs",
          "Ne pas réussir à trouver des clients",
          "Se retrouver seule après la formation",
        ],
        needs: [
          "Un programme structuré étape par étape",
          "Des cours pratiques et applicables immédiatement",
          "Un suivi personnalisé",
          "Un accompagnement après la formation",
          "Une certification crédible",
          "Une communauté professionnelle active",
        ],
      },
      {
        name: "Nadia",
        role: "Entrepreneure ambitieuse — cible secondaire",
        age: "29 ans",
        location: "En lancement d'activité",
        context:
          "Elle veut se positionner rapidement sur le marché des soins et de la cosmétique artisanale et pense déjà en termes de marque, de rentabilité et de différenciation. Son blocage : l'ambition est là, mais pas encore la structure stratégique pour professionnaliser son projet et bâtir une offre rentable.",
        quote:
          "J'ai l'ambition, mais comment professionnaliser mon projet et construire une offre vraiment rentable ?",
        goals: [
          "Créer un business structuré",
          "Positionner sa marque sur le marché",
          "Développer une activité rentable",
          "Être reconnue comme entrepreneure",
          "Évoluer dans un environnement professionnel",
        ],
        frustrations: [
          "Se lancer sans stratégie claire",
          "Ne pas réussir à se démarquer",
          "Ne pas trouver de débouchés",
          "Perdre du temps dans une formation peu professionnalisante",
        ],
        needs: [
          "Une formation orientée business",
          "Des outils pour vendre et structurer son offre",
          "Une vision stratégique",
          "Un accompagnement vers la rentabilité",
          "Une crédibilité académique",
          "Un réseau professionnel solide",
        ],
      },
    ],
    truths: [
      {
        surface: "Pas seulement apprendre à fabriquer des produits artisanaux…",
        real: "…mais une activité capable de changer leur situation financière et de leur donner une vraie autonomie.",
      },
      {
        surface: "Pas seulement une formation « claire »…",
        real: "…mais un cadre structurant qui les guide pas à pas, sans jamais se sentir perdues.",
      },
      {
        surface: "Pas seulement la peur d'échouer techniquement…",
        real: "…mais la peur d'investir dans une formation qui ne leur permettra pas de vendre et de rentabiliser.",
      },
      {
        surface: "Pas seulement un certificat…",
        real: "…mais un accompagnement réel après la formation, pour ne pas avancer seules.",
      },
      {
        surface: "Pas seulement un réseau…",
        real: "…mais un sentiment d'appartenance à une communauté sérieuse et crédible.",
      },
      {
        surface: "Pas seulement « apprendre un métier »…",
        real: "…mais une transformation de vie et une indépendance durable.",
      },
    ],
    journey: {
      scenario:
        "Aïcha, salariée, s'intéresse à la savonnerie et veut lancer sa propre marque. Elle a déjà vu passer des formations mais hésite : peur d'échouer, de perdre de l'argent, d'être livrée à elle-même après. Elle découvre l'ESC via les réseaux sociaux — curieuse, mais méfiante.",
      steps: [
        {
          stage: "① Point d'entrée — Accueil",
          emotion: "Curieuse mais méfiante → rassurée",
          action:
            "Elle voit une promesse claire de transformation, un message d'autonomie et d'activité rentable, un bouton « Découvrir les formations ». En scrollant, elle reconnaît ses problèmes, découvre la méthode structurée, l'accompagnement post-formation et des témoignages.",
          pain: "« Encore une formation… est-ce sérieux ? Vais-je perdre mon argent ? »",
          opportunity:
            "Refléter ses freins et la rassurer dès le premier écran.",
        },
        {
          stage: "② Exploration — Nos formations",
          emotion: "Projection",
          action:
            "Elle compare les filières — savonnerie, soins correctifs, capillaire — puis clique sur une formation.",
          pain: "« Laquelle correspond vraiment à mon projet ? »",
          opportunity: "Rendre les filières lisibles et comparables d'un coup d'œil.",
        },
        {
          stage: "③ Décision — Détail formation",
          emotion: "Hésitation maîtrisée",
          action:
            "Elle lit le programme détaillé, les compétences acquises, les débouchés, l'accompagnement inclus et les modalités, puis regarde le prix — en vérifiant : y a-t-il un suivi ? une certification ? un accompagnement ?",
          pain: "« Le prix en vaut-il la peine ? Serai-je vraiment accompagnée ? »",
          opportunity:
            "Justifier la valeur et le prix par l'accompagnement et les débouchés.",
        },
        {
          stage: "④ Deux chemins — Contact ou Inscription",
          emotion: "Rassurée / engagée",
          action:
            "Si elle hésite : elle va sur Contact, pose ses questions, écrit via WhatsApp, lit la FAQ. Si elle est prête : elle clique sur « S'inscrire », remplit le formulaire, consulte les modalités et valide.",
          pain: "La moindre friction ou question sans réponse peut la faire renoncer.",
          opportunity:
            "Offrir une réponse humaine (WhatsApp) ET une inscription sans friction.",
        },
        {
          stage: "⑤ Résultat — Engagement",
          emotion: "De passionnée hésitante à future entrepreneure encadrée",
          action:
            "Le site a clarifié, rassuré, justifié le prix, accompagné la décision et converti.",
          pain: "—",
          opportunity: "Transformer une passionnée hésitante en apprenante engagée.",
        },
      ],
    },
    sitemapRoot: "Website ESC",
    sitemap: [
      {
        tab: "Accueil",
        items: [
          "Hero section",
          "Identification des freins",
          "La solution ESC",
          "Filières principales",
          "Comment ça fonctionne",
          "Témoignages",
          "Bloc réassurance",
          "CTA final",
        ],
      },
      {
        tab: "Formation",
        items: [
          "Introduction générale",
          "Présentation des 3 filières",
          "Détail du programme",
          "Compétences acquises",
          "Débouchés professionnels",
          "Accompagnement post-formation",
          "FAQ",
          "CTA inscription",
        ],
      },
      {
        tab: "À propos",
        items: [
          "Histoire de l'ESC",
          "Vision & mission",
          "La fondatrice",
          "Méthode pédagogique",
          "Valeurs",
          "Communauté",
          "CTA",
        ],
      },
      {
        tab: "Contact",
        items: [
          "Message rassurant",
          "Formulaire de contact",
          "WhatsApp direct",
          "FAQ rapide",
          "Coordonnées",
        ],
      },
      {
        tab: "Inscription",
        items: [
          "Introduction motivante",
          "Choix de la filière",
          "Formulaire d'inscription détaillé",
          "Modalités de paiement",
          "Confirmation après envoi",
          "Prochaines étapes",
        ],
      },
    ],
    approach: [
      "Questionnaire & insights : comprendre ce que les apprenantes veulent vraiment (transformation, sécurité, rentabilité), au-delà de ce qu'elles expriment.",
      "Personas : Mariam (créer sa marque) et Nadia (entrepreneure ambitieuse) pour guider chaque décision de design.",
      "Architecture de l'information : 5 pages (Accueil, Formation, À propos, Contact, Inscription) — l'accueil pensé pour presque suffire à lui seul.",
      "User flow d'Aïcha : du doute à l'inscription, avec un double chemin (contact humain ou inscription directe).",
      "Maquettes & intégration WordPress : ton rassurant et structuré, accompagnement et certification mis en avant.",
    ],
    solution:
      "Un site qui ne présente pas seulement une école, mais répond à un besoin profond de transformation et de sécurité : il reflète les freins de la visiteuse, met en avant la méthode structurée, l'accompagnement post-formation et la communauté, justifie le prix par la valeur, et la guide du doute à l'inscription — pour générer des inscriptions qualifiées.",
    gallery: ["/project-esc-1.png", "/project-esc-2.png"],
    finalImage: "/project-esc-final.png",
  },
  {
    id: "landing-pages",
    slug: "landing-pages",
    title: "Landing Pages",
    category: "WEB DESIGN",
    kicker: "LANDING PAGES — VOYAGE & STREAMING",
    image: "/project-landing.png",
    year: "2024",
    role: "UI Design & Conversion",
    services: ["UI Design", "Conversion", "Dark UI"],
    liveUrl:
      "https://www.figma.com/design/VWg4Hx9PKzkAAej4e2tH2m/Projet-Alric?node-id=288-163",
    summary:
      "Landing pages à fort taux de conversion pour une agence de voyage et une plateforme de streaming.",
    problem:
      "Deux secteurs, un même enjeu : convertir le visiteur en quelques secondes, sans friction.",
    approach: [
      "Objectifs & cible : message clé et parcours de conversion propres à chaque secteur.",
      "Structure & hiérarchie : hero, valeur ajoutée, social proof, CTA.",
      "UI & maquettes HF : design immersif pour le voyage, dark UI moderne pour le streaming.",
    ],
    solution:
      "Des landing pages optimisées pour la conversion, chacune avec sa propre identité forte.",
    gallery: ["/project-landing-1.png", "/project-landing-2.png"],
    finalImage: "/project-landing-final.png",
  },
  {
    id: "kliro",
    slug: "kliro",
    title: "Klirô",
    category: "APP MOBILE",
    kicker: "APP MOBILE — GREENTECH · LAVAGE SANS EAU",
    image: "/project-kliro.png",
    year: "2026",
    role: "UI/UX Design",
    services: ["UI Mobile", "Design System", "Prototypage"],
    liveUrl:
      "https://www.figma.com/design/sHaM2oZbYsNSki2OodGk55/KLIRO?node-id=0-1&t=Etiz7E9aDuLyLONg-1",
    summary:
      "Application mobile de Klirô, startup béninoise de lavage automobile sans eau : réserver un lavage à domicile en quelques gestes, suivre son technicien en temps réel — et préserver 200 litres d'eau à chaque lavage.",
    context:
      "Klirô révolutionne le lavage automobile à Cotonou avec une technologie waterless. Sa mission : apporter une clarté absolue aux véhicules tout en préservant les ressources en eau — chaque lavage économise environ 200 litres d'eau potable et préserve les nappes phréatiques de Cotonou.",
    problem:
      "Éliminer toute friction entre le besoin de propreté et l'impératif écologique. Réserver un service à domicile exige de la confiance : savoir qui vient, quand, à quel prix — et avec quelle preuve de résultat.",
    objectives: [
      "Rendre la réservation d'un lavage à domicile aussi simple qu'une commande VTC.",
      "Installer la confiance : technicien identifié, suivi en temps réel, preuves photo avant/après.",
      "Intégrer le paiement local MTN Mobile Money sans friction.",
      "Mettre l'impact écologique (0 L d'eau par lavage) au cœur de l'expérience.",
      "Fidéliser par l'abonnement et le parrainage.",
    ],
    insights: [
      { value: "0 L", label: "d'eau utilisée par lavage — technologie waterless" },
      { value: "200 L", label: "d'eau potable économisés par véhicule lavé" },
    ],
    flows: [
      {
        name: "Onboarding",
        steps: [
          "Splash screen",
          "Bienvenue",
          "Authentification OTP",
          "Configuration véhicule",
        ],
      },
      {
        name: "Réservation",
        steps: ["Choix de la formule", "Localisation", "Créneau", "Paiement MTN MoMo"],
      },
      {
        name: "Suivi d'intervention",
        steps: [
          "Réservation confirmée",
          "Technicien en route",
          "Technicien arrivé",
          "Protocole",
          "Preuves avant/après",
        ],
      },
    ],
    approach: [
      "Onboarding en 4 écrans : splash, bienvenue, authentification OTP et configuration du véhicule.",
      "Tableau de bord centralisé : état du véhicule (propre/sale), dernier lavage, statut d'abonnement.",
      "Tunnel de réservation : formule → localisation → créneau → paiement MTN MoMo.",
      "Suivi en direct sur la carte de Cotonou : technicien identifié, arrivée estimée, protocole d'intervention et preuves photo avant/après.",
      "Design system dédié : Urbanist pour l'affichage, DM Mono pour les données techniques, prix et statuts.",
    ],
    solution:
      "Une interface fluide qui élimine la friction entre propreté et écologie : réservation en quelques gestes, transparence totale de l'intervention (suivi temps réel, preuves avant/après), historique clair — « la clarté sans une goutte d'eau ».",
    gallery: ["/project-kliro-1.png", "/project-kliro-2.png"],
    finalImage: "/project-kliro-final.png",
  },
  {
    id: "depth",
    slug: "depth",
    title: "Depth",
    category: "WEB DESIGN",
    kicker: "DOSSIER UX — SITE VITRINE · SPORT",
    image: "/project-depth.png",
    year: "2026",
    role: "UX Design",
    services: ["Dossier UX", "Stratégie SEO", "Wireframes"],
    liveUrl:
      "https://www.figma.com/design/TUq31VThXTR51HuJkWC8Dv/PocketCare?node-id=0-1",
    summary:
      "Dossier UX complet pour Depth, marque d'équipement d'ultimate frisbee : un site vitrine de 4 pages qui installe la notoriété, performe en SEO et convertit les visiteurs millennials en abonnés de la communauté — calibré pour un délai client de 3 jours.",
    context:
      "Depth conçoit de l'équipement d'ultimate frisbee pensé pour durer, avec un double registre émotionnel : l'émerveillement et le calme. Particularité du brief : la conversion attendue n'est pas l'achat mais le suivi des réseaux sociaux — la boutique reste une vitrine qui crédibilise.",
    problem:
      "Comment un site vitrine de quatre pages peut-il transformer l'expertise et l'amour du sport de Depth en une expérience à la fois émerveillante et apaisée — qui installe la notoriété, la rende visible dans les moteurs de recherche et convertisse des visiteurs millennials en abonnés durables de sa communauté sociale ?",
    objectives: [
      "Faire comprendre en moins de 10 secondes qui est Depth et ce que la marque défend.",
      "Prouver — et pas seulement affirmer — la connaissance du sport (équipe incarnée, contenu signé).",
      "Produire de l'émerveillement sans agitation visuelle, fidèle au calme revendiqué.",
      "Amener naturellement vers le follow social, sans friction ni formulaire.",
      "Faire performer 4 pages en SEO par la concentration sémantique.",
    ],
    researchMethod:
      "Lecture critique du brief pour expliciter ses tensions (« intemporel » vs « tendance », « émerveillement » vs « calme », objectif SEO avec 4 pages) et les trancher avant de dessiner. Puis deux personas — un par canal d'acquisition : la recherche Google et les réseaux sociaux.",
    personas: [
      {
        name: "Maxime",
        role: "Le joueur exigeant — persona primaire (entrée SEO)",
        age: "32 ans",
        location: "Chef de projet informatique",
        context:
          "Joueur en club depuis 10 ans, capitaine d'équipe mixte. Il compare méthodiquement, lit les spécifications et croise les sources avant de décider. Il suit peu de marques, mais sa fidélité est forte quand la confiance est établie.",
        quote: "Je veux une marque qui respire l'ultimate, pas un catalogue de plus.",
        goals: [
          "Trouver du matériel fiable, homologué et durable pour la compétition",
          "Vérifier les caractéristiques précises avant de s'engager",
          "Identifier une marque qui respecte l'esprit du jeu",
        ],
        frustrations: [
          "Les catalogues e-commerce génériques, sans âme ni preuve d'expertise",
          "Les fiches produit incomplètes qui obligent à chercher ailleurs",
          "Les marques opportunistes qui « font du frisbee » sans connaître l'ultimate",
        ],
        needs: [
          "Des spécifications complètes : poids, grip, stabilité, homologation",
          "Des preuves : palmarès, bios de joueurs, contenu technique juste",
          "Un contenu signé par des joueurs qui pratiquent vraiment",
        ],
      },
      {
        name: "Aïcha",
        role: "La découvreuse lifestyle — persona secondaire (entrée sociale)",
        age: "30 ans",
        location: "Designeuse en agence",
        context:
          "Joueuse loisir — parties improvisées au parc le week-end. Mobile quasi exclusivement. Elle scrolle, sauvegarde, partage : son follow se décide en quelques secondes d'émotion, et la relation précède toujours la transaction.",
        quote: "Si l'univers me parle, je m'abonne — l'achat viendra après.",
        goals: [
          "Trouver des marques inspirantes dont l'esthétique nourrit son univers",
          "S'équiper simplement pour progresser, sans jargon intimidant",
          "Se projeter dans une communauté accueillante, mixte et bienveillante",
        ],
        frustrations: [
          "Les contenus trop techniques qui présupposent un niveau expert",
          "Les sites froids et transactionnels, sans histoire ni visages",
          "Les pages lentes sur mobile — jamais de deuxième chance",
        ],
        needs: [
          "Une continuité parfaite entre l'esthétique du reel et celle du site",
          "Des contenus incarnés : visages, coulisses, communauté",
          "Un site rapide et fluide sur mobile",
        ],
      },
    ],
    journey: {
      scenario:
        "Parcours de référence de Maxime, le joueur exigeant : de la requête Google au follow Instagram — la confiance se construit par paliers de preuve.",
      steps: [
        {
          stage: "① Recherche",
          emotion: "Sceptique",
          action:
            "Tape « quel disque ultimate compétition » sur Google et parcourt les résultats.",
          pain: "« Encore des boutiques génériques… »",
          opportunity: "Title et meta description du Guide travaillés ; balisage FAQ.",
        },
        {
          stage: "② Atterrissage",
          emotion: "Intéressé",
          action: "Ouvre l'article du Guide de Depth ; lit les critères de choix.",
          pain: "« Enfin quelqu'un qui sait de quoi il parle. »",
          opportunity: "Contenu signé par un joueur ; sommaire ancré ; lecture confortable.",
        },
        {
          stage: "③ Exploration",
          emotion: "Convaincu à moitié",
          action: "Remonte vers l'accueil via le header ; lit le manifeste.",
          pain: "« OK, c'est une vraie marque d'ultimate. »",
          opportunity: "Lien contextuel Guide → Accueil ; manifeste court et incarné.",
        },
        {
          stage: "④ Confiance",
          emotion: "Rassuré",
          action: "Parcourt la section « L'équipe » ; reconnaît des joueurs du circuit.",
          pain: "« Ils jouent vraiment. Je valide. »",
          opportunity: "Bios avec palmarès et années de jeu ; portraits authentiques.",
        },
        {
          stage: "⑤ Engagement",
          emotion: "Conquis",
          action: "Clique le CTA social et s'abonne à Instagram.",
          pain: "—",
          opportunity: "CTA « Suivez le vol » répété en fin de page ; lien direct profil.",
        },
      ],
    },
    flows: [
      {
        name: "Flux A — de la recherche au follow (Maxime)",
        steps: [
          "Résultat Google",
          "Article du Guide",
          "Accueil & manifeste",
          "L'équipe",
          "CTA social → Instagram",
        ],
      },
      {
        name: "Flux B — du reel au follow (Aïcha)",
        steps: [
          "Reel Instagram/TikTok",
          "Accueil (hero)",
          "Manifeste → produits → équipe",
          "Bandeau « Suivez le vol »",
          "Abonnement + partage",
        ],
      },
      {
        name: "Flux C — exploration produit",
        steps: [
          "Accueil ou header",
          "Boutique (grille)",
          "Fiche produit vitrine",
          "« Disponible chez nos revendeurs »",
          "Retour vers le flux social",
        ],
      },
    ],
    sitemapRoot: "Website Depth",
    sitemap: [
      {
        tab: "Accueil",
        items: [
          "Hero — le disque suspendu",
          "Le manifeste",
          "Produits phares",
          "L'équipe",
          "La communauté",
          "CTA « Suivez le vol »",
        ],
      },
      {
        tab: "Le Guide",
        items: [
          "L'esprit du jeu",
          "Choisir son disque",
          "Entretenir son matériel",
          "Questions fréquentes",
        ],
      },
      {
        tab: "Boutique",
        items: ["Disques", "Textile", "Accessoires"],
      },
      {
        tab: "Conditions",
        items: ["Mentions légales", "Données personnelles", "Propriété intellectuelle"],
      },
      {
        tab: "Réseaux (sortie)",
        items: ["Instagram", "TikTok", "YouTube"],
      },
    ],
    designSystem: {
      note: "Palette violette vérifiée WCAG 2.1 avant la phase UI : chaque couple texte/fond est calculé (AA exigé, AAA atteint) ; la lavande, insuffisante en contraste, est réservée au décoratif. Typographies : Fraunces (titres) + Inter (texte courant).",
      palette: [
        { name: "Violet 700", hex: "#6D28D9", usage: "Primaire — liens & boutons (7,10:1 · AAA)" },
        { name: "Violet 900", hex: "#4C1D95", usage: "Titres (10,95:1 · AAA)" },
        { name: "Violet 100", hex: "#EDE9FE", usage: "Fonds de sections teintés" },
        { name: "Lavande", hex: "#A78BFA", usage: "Décoratif uniquement (2,72:1 — échec texte)" },
        { name: "Gris 800", hex: "#1F2937", usage: "Texte courant" },
      ],
    },
    approach: [
      "Lecture critique du brief : expliciter les tensions et les trancher — intemporel dans la structure, tendance dans l'exécution.",
      "Personas & parcours : Maxime (entrée SEO) et Aïcha (entrée sociale), courbes émotionnelles et chemins d'échec anticipés avec leurs mitigations.",
      "Architecture : 4 pages qui travaillent double, les réseaux sociaux traités comme 5ᵉ destination — aucune page en impasse.",
      "Stratégie SEO : le Guide en hub de contenu expert, 5 requêtes cibles, données structurées, performance LCP < 2,5 s.",
      "Backlog MoSCoW calibré sur 3 jours, wireframes basse fidélité, palette accessible vérifiée — jusqu'au prompt de maquette prêt pour la phase UI.",
    ],
    solution:
      "Le concept directeur du « disque suspendu » : l'émerveillement vient de l'image, le calme du rythme. Un accueil en 7 zones avec le CTA « Suivez le vol » répété trois fois, un Guide qui prouve l'expertise et porte le SEO, une boutique vitrine qui crédibilise — et un plan d'exécution en 3 jours.",
    gallery: ["/project-depth-1.png", "/project-depth-2.png"],
    finalImage: "/project-depth-final.png",
  },
  {
    id: "portfolio-akogo",
    slug: "portfolio-akogo",
    title: "Portfolio M. Akogo",
    category: "WEB DESIGN",
    kicker: "MARQUE PERSONNELLE — CADRAGE UX · AGILE",
    image: "/project-akogo.png",
    year: "2026",
    role: "Scrum Master · UX/UI Design",
    services: ["Cadrage Agile", "Branding", "UI Design"],
    liveUrl:
      "https://www.figma.com/design/TUq31VThXTR51HuJkWC8Dv/PocketCare?node-id=0-1",
    summary:
      "Cadrage UX et conception du portfolio personnel d'Abdoul Malik Akogo, Product Manager & Technology Strategist béninois — mené en Scrum dual-track : traduire une double identité design + tech en une marque web crédible, et préparer un espace de délégation pour le surplus d'activité.",
    context:
      "Projet mené dans le cadre du cours « Gestion de projet Agile pour UX Designers » (EIG), en méthode Scrum dual-track — rôle de Scrum Master, avec Abdoul Malik Akogo en Product Owner (et instructeur du cours). Le client : un profil rare à l'intersection Design + Tech + Business + Enseignement — « Praticien qui transmet. Entrepreneur qui construit. Designer qui code. » Ses preuves : une app live (TIC Miton), un e-commerce qui livre (Naturo Pharma), une fondation active (FAAZ), un enseignement réel (EIG).",
    problem:
      "Deux problèmes à résoudre. Visibilité : sans portfolio, Abdoul est difficile à trouver et peine à inspirer confiance. Capacité : quand il est surchargé, aucun canal structuré ne lui permet de recruter et de déléguer le surplus. Le périmètre a donc été recadré en deux piliers : le portfolio d'abord (Release 1 — la crédibilité), puis un espace Collaboration & Délégation en boucle bornée — et non une marketplace ouverte.",
    tension: {
      today: [
        "Sans portfolio : difficile à trouver, difficile d'inspirer confiance",
        "En surcharge : aucun canal structuré pour déléguer",
        "Un volet « collaboration » flou au départ",
      ],
      tomorrow: [
        "Une marque qui prouve par l'exemple : app live, chiffres, enseignement",
        "Un contact sans friction — 3 actions maximum",
        "Une boucle de délégation bornée : publier → candidater → déléguer",
      ],
    },
    objectives: [
      "Présenter et crédibiliser : un prospect comprend l'offre en moins de 10 secondes.",
      "Prouver la compétence par l'exemple — app live, e-commerce qui livre, fondation active.",
      "Faciliter la prise de contact : formulaire, demande de devis en FCFA ou WhatsApp direct.",
      "À terme, recruter des collaborateurs pour déléguer le surplus (Release 2).",
      "Rester fluide sur mobile — l'audience africaine est majoritairement mobile.",
    ],
    researchMethod:
      "Cadrage mené en Scrum dual-track : la recherche et le design gardent un sprint d'avance sur le développement, avec validation du Product Owner à chaque étape. Sprint Goal : « Livrer la maquette haute fidélité du portfolio — Accueil, Projets (+ détail) et le parcours de contact. » Deux cibles cadrent les deux piliers du produit.",
    stakeholders: [
      {
        group: "Pilier 1 — Portfolio (Release 1 / MVP) · la visibilité",
        items: [
          {
            name: "Startups & PME",
            desc: "Cherchent un concepteur produit/tech fiable de bout en bout — persona Awa D.",
          },
          {
            name: "Porteurs de projets",
            desc: "Une idée à concrétiser, un budget en FCFA, un fort besoin de réassurance avant de s'engager.",
          },
        ],
      },
      {
        group: "Pilier 2 — Collaboration & Délégation (Release 2) · la capacité",
        items: [
          {
            name: "Jeunes devs & étudiants (vivier EIG)",
            desc: "Cherchent des projets réels et un revenu — persona Yves K.",
          },
          {
            name: "Freelances",
            desc: "Veulent des missions claires, publiées par Abdoul quand il est surchargé, et être re-sollicités.",
          },
        ],
      },
    ],
    personas: [
      {
        name: "Awa D.",
        role: "La prospecte — fondatrice de startup (cible principale)",
        age: "29 ans",
        location: "Cotonou",
        context:
          "Bac +3, surtout sur smartphone, revenus moyens. Elle a une idée de produit numérique et cherche le bon partenaire pour la concrétiser — pas seulement « coder », mais concevoir, piloter et livrer. Elle arrive via WhatsApp, LinkedIn ou le bouche-à-oreille, lit vite, scanne, et abandonne si c'est confus ou lent. Arc émotionnel visé : méfiante → intéressée → rassurée → convaincue → engagée.",
        quote:
          "Je veux quelqu'un de fiable qui me montre ce qu'il sait faire avant que je m'engage.",
        goals: [
          "Concrétiser son idée de produit numérique",
          "Trouver quelqu'un de fiable et compétent de bout en bout",
          "Comprendre l'offre et obtenir un devis dans son budget (FCFA)",
          "Être rassurée avant de s'engager",
        ],
        frustrations: [
          "Méfiance envers les faux « développeurs »",
          "Peur d'un travail bâclé ou jamais livré",
          "Manque de preuves concrètes, sites peu crédibles",
          "Le jargon qui exclut",
        ],
        needs: [
          "Des projets live (TIC Miton) et un impact chiffré",
          "La double casquette Design + Tech : un seul interlocuteur",
          "La posture d'enseignant — rigueur et pédagogie",
          "Un contact simple, dans son canal habituel",
        ],
      },
      {
        name: "Yves K.",
        role: "Le collaborateur — Release 2 (cible secondaire)",
        age: "23 ans",
        location: "Cotonou",
        context:
          "Étudiant en dev / jeune freelance, souvent issu du vivier EIG ou des réseaux d'Abdoul. Compétences naissantes, peu de projets concrets au compteur. Actif sur les réseaux, réactif sur WhatsApp — il postule vite quand l'offre est claire. Son rôle dans le produit : répondre aux besoins publiés quand Abdoul est surchargé. Arc visé : en recherche → repéré → retenu → en mission.",
        quote: "Donnez-moi une vraie mission et je prouve ce que je vaux.",
        goals: [
          "Décrocher des projets réels et gagner un revenu",
          "Se faire repérer par un profil senior crédible",
          "Construire sa propre crédibilité",
        ],
        frustrations: [
          "Opportunités opaques, pas de porte d'entrée claire",
          "Peur du travail non payé ou flou",
          "Difficile d'être pris au sérieux sans portfolio",
        ],
        needs: [
          "Des besoins publiés lisibles et crédibles (compétence, durée, type)",
          "Une candidature rapide et sans friction",
          "Une boucle de réponse claire, jusqu'à la mission",
        ],
      },
    ],
    journey: {
      scenario:
        "Awa, fondatrice de startup à Cotonou, arrive depuis un lien WhatsApp avec une idée de produit à concrétiser. Objectif : la faire passer de méfiante à engagée.",
      steps: [
        {
          stage: "① Découverte — Accueil",
          emotion: "Curiosité prudente",
          action:
            "Arrive via un lien WhatsApp : message clair (qui / pour qui), première impression premium et structurée.",
          pain: "« Qui est-ce ? Est-ce sérieux ? »",
          opportunity:
            "Capter l'attention et réduire le scepticisme en quelques secondes.",
        },
        {
          stage: "② Exploration — Projets",
          emotion: "Intérêt grandissant",
          action: "Parcourt la grille des 5 projets — visuel + domaine.",
          pain: "« Il a déjà construit des choses… voyons la qualité. »",
          opportunity: "Prouver la compétence par l'exemple.",
        },
        {
          stage: "③ Évaluation — Détail projet",
          emotion: "Espoir contrôlé",
          action:
            "Ouvre TIC Miton : contexte → rôle → défi → solution → impact, avec lien vers l'app live.",
          pain: "« Est-ce proche de mon besoin ? Sait-il gérer un vrai projet ? »",
          opportunity: "Démontrer la qualité, la méthode — et la preuve live.",
        },
        {
          stage: "④ Confiance — À propos & Expériences",
          emotion: "Rassurée progressivement",
          action:
            "Découvre le parcours, la double casquette Design + Tech, les entreprises et la posture d'enseignant.",
          pain: "« Ce n'est pas un amateur, c'est un vrai professionnel. »",
          opportunity: "Transformer l'intérêt en confiance.",
        },
        {
          stage: "⑤ Décision — Contact",
          emotion: "Engagement mesuré",
          action:
            "Choisit son canal : formulaire rapide, demande de projet structurée (devis FCFA) ou WhatsApp direct — décrit son projet et envoie.",
          pain: "La moindre friction peut la faire renoncer.",
          opportunity: "Action simple et rapide — le contact en 3 actions maximum.",
        },
      ],
    },
    flows: [
      {
        name: "Parcours secondaire — Yves, le collaborateur (Release 2)",
        steps: [
          "Découverte via l'EIG / réseaux",
          "Besoins ouverts",
          "Candidature (profil · dispo · portfolio)",
          "Sélection & réponse",
          "Mission déléguée",
        ],
      },
    ],
    sitemapRoot: "Portfolio Akogo",
    sitemap: [
      {
        tab: "Accueil",
        items: ["Hero — titre fort & tagline", "Proposition de valeur", "CTA Projets & Contact"],
      },
      {
        tab: "À propos",
        items: [
          "Parcours & positionnement",
          "Ce qui me différencie",
          "Compétences & stack",
        ],
      },
      {
        tab: "Projets",
        items: [
          "Grille : TIC Miton · Klirô · Karta · AI Forge · FAAZ",
          "Détail : Contexte → Rôle → Défi → Solution → Impact",
          "Lien réel (app live, site)",
        ],
      },
      {
        tab: "Expériences",
        items: [
          "Timeline : TIC · Yupi Global · Naturo Pharma",
          "Digital Future Lab · Nextmux",
        ],
      },
      {
        tab: "Enseignement",
        items: ["EIG — cours", "Hackathons (Scrum Master)", "Jury de soutenances"],
      },
      {
        tab: "Contact",
        items: [
          "Formulaire rapide",
          "Demande de projet (devis · FCFA)",
          "WhatsApp direct",
        ],
      },
      {
        tab: "Collaboration (R2)",
        items: [
          "Besoins ouverts",
          "Candidater à un besoin",
          "Espace propriétaire",
        ],
      },
    ],
    designSystem: {
      note: "Charte du brief : fonds charbon pour les heros (look premium), contenus sur crème, lime électrique sur les CTA et les chiffres clés — ratio lime/charbon vérifié pour l'accessibilité —, orange pour les badges de statut. Playfair Display en titres (40–64 px), Inter en corps (14–16 px), métriques clés en 46 px et plus.",
      palette: [
        { name: "Noir charbon", hex: "#131313", usage: "Fonds sombres, hero & textes" },
        { name: "Lime électrique", hex: "#C5FF45", usage: "Accents, CTA, chiffres clés" },
        { name: "Orange vif", hex: "#FF4800", usage: "Badges statut & alertes" },
        { name: "Crème papier", hex: "#F4F3EE", usage: "Corps de page & cartes" },
      ],
    },
    insights: [
      { value: "6 ans", label: "d'expérience professionnelle tech & produit" },
      { value: "20+", label: "projets tech réalisés" },
      { value: "2 100+", label: "commandes expédiées (Naturo Pharma)" },
      { value: "500+", label: "bénéficiaires de la Fondation FAAZ" },
    ],
    approach: [
      "Cadrage Agile : Scrum dual-track, rôle de Scrum Master avec Abdoul en Product Owner — recadrage du périmètre en 2 piliers et priorité à la Release 1 (le portfolio d'abord, la crédibilité étant le prérequis).",
      "Personas — un par pilier : Awa D. (la prospecte) et Yves K. (le collaborateur), avec leurs arcs émotionnels.",
      "Parcours utilisateurs : Awa, de la découverte WhatsApp au contact ; Yves, du besoin publié à la mission déléguée.",
      "Arborescence : 6 sections + l'espace Collaboration & Délégation (Release 2), chaque projet en page dédiée reliée à son URL réelle (ticmiton.com, yupiglobal.net, lafaaz.org).",
      "Charte appliquée (charbon, lime, orange, crème — Playfair Display + Inter) et maquette haute fidélité mobile-first : pages légères, images WebP, contraste lime/charbon vérifié.",
    ],
    solution:
      "Release 1 : un portfolio premium qui crédibilise — hero à fort impact, 5 projets prouvés par le live, expériences et enseignement en renfort de confiance, contact sans friction (formulaire, devis FCFA, WhatsApp). Release 2, une fois la marque établie : l'espace Collaboration & Délégation — une boucle bornée pour publier un besoin, recevoir des candidatures et déléguer le surplus.",
    gallery: ["/project-akogo-1.png", "/project-akogo-2.png"],
    finalImage: "/project-akogo-final.png",
  },
  {
    id: "urolib",
    slug: "urolib",
    title: "UROLIB",
    category: "WEB DESIGN",
    kicker: "REFONTE UX/UI — SANTÉ · ONE-PAGE WEBFLOW",
    image: "/project-urolib.png",
    year: "2026",
    role: "Direction UX/UI · Maquette Figma",
    services: ["Direction UX/UI", "Design System", "Figma → Webflow"],
    liveUrl:
      "https://www.figma.com/design/h1lZX7svxiadrbnOTMUsxj/Untitled?node-id=0-1&t=T3ueZx1461zP9rYN-1",
    summary:
      "Refonte du site du réseau UROLIB — 10 chirurgiens urologues, 3 cliniques en Franche-Comté : d'un site Wix multi-pages vieillissant à un one-page mobile-first pensé pour des patients seniors souvent anxieux, avec le rendez-vous Doctolib à un clic.",
    context:
      "UROLIB réunit 10 chirurgiens urologues répartis sur 3 cliniques (Besançon ×2, Vesoul). Périmètre : la direction UX/UI et la maquette Figma — one-page responsive, template CMS praticien et blog — pensées « Webflow-compatibles » pour un handoff propre ; l'agence gère la relation client, les contenus et le développement Webflow. Référence esthétique imposée : le site urolib-hifu.com, vitrine d'innovation de l'écosystème.",
    problem:
      "L'existant (Wix, 2022) souffre d'une navigation multi-pages éclatée, d'URLs en « copie-de- », d'aucun CTA dominant et d'aucune preuve sociale. Le vrai défi est ailleurs : le cœur de cible (cancer de la prostate, adénome, calculs) est une population masculine et âgée (48–70 ans), dans un contexte souvent anxiogène, qui navigue à ~90 % sur mobile. Principe directeur : un patient inquiet doit pouvoir, en moins de 30 secondes sur son téléphone, comprendre qui sont ces médecins, où ils exercent, et comment prendre rendez-vous.",
    tension: {
      today: [
        "Navigation multi-pages éclatée, pénible sur mobile",
        "Aucun CTA dominant — le rendez-vous n'est pas mis en avant",
        "Aucun avis patient, accréditation HAS invisible",
        "HIFU relégué en simple lien secondaire",
      ],
      tomorrow: [
        "Un one-page fluide, mobile-first (90 % du trafic)",
        "« Prendre rendez-vous » omniprésent — Doctolib en 1 clic",
        "Preuves de confiance en haut : HAS, chiffres clés, témoignages",
        "HIFU mis en avant — passerelle éditoriale de l'écosystème",
      ],
    },
    objectives: [
      "Un patient inquiet comprend en moins de 30 secondes qui sont les médecins, où ils exercent et comment prendre rendez-vous.",
      "Réduire la friction vers le rendez-vous : Doctolib en 1 clic depuis l'équipe et les fiches praticiens.",
      "Rassurer : accréditation HAS remontée très haut, avis patients, chiffres clés, photos réelles des praticiens.",
      "Accessibilité RGAA / WCAG 2.1 AA — public senior, contexte santé : un argument de qualité, pas une option.",
      "Sceller la cohérence visuelle avec le site HIFU (double logo, patterns partagés).",
    ],
    researchMethod:
      "Cadrage fondé sur le profil patient — et non sur un goût graphique : population majoritairement masculine et âgée (48–70 ans), contexte anxiogène, ~90 % de navigation mobile. Diagnostic de l'existant (ce qu'on jette, ce qu'on garde), puis audit des patterns du site HIFU, la référence imposée de l'écosystème.",
    stakeholders: [
      {
        group: "Le patient — senior, souvent anxieux, 90 % sur mobile",
        items: [
          {
            name: "Lisibilité prioritaire",
            desc: "Corps de texte ≥ 16 px (18 px sur mobile), pas de gris clair sur fond clair.",
          },
          {
            name: "Contraste élevé",
            desc: "WCAG 2.1 AA minimum, AAA sur le texte courant — le couple bleu foncé / blanc le permet naturellement.",
          },
          {
            name: "Cibles tactiles ≥ 44 px",
            desc: "Boutons, liens, items de navigation et accordéons dimensionnés pour tous.",
          },
          {
            name: "Ton rassurant et humain",
            desc: "Photos réelles des praticiens, langage clair, preuves de confiance visibles (HAS, avis, chiffres).",
          },
        ],
      },
      {
        group: "Le réseau UROLIB & l'agence",
        items: [
          {
            name: "Cohérence d'écosystème",
            desc: "Le site principal et le site HIFU se répondent : double logo, patterns et accent partagés.",
          },
          {
            name: "CMS administrable",
            desc: "Fiches praticiens et blog en collections Webflow, gérés par l'agence sans dette technique.",
          },
          {
            name: "RDV conditionnel",
            desc: "7 praticiens sur Doctolib, 3 sans — la carte praticien prévoit les deux variants (fallback téléphone).",
          },
          {
            name: "SEO & maintenance",
            desc: "Fin des URLs « copie-de- » de Wix ; fiches patients reliées à la source officielle AFU pour éviter l'obsolescence.",
          },
        ],
      },
    ],
    journey: {
      scenario:
        "Le parcours d'un patient inquiet sur mobile — l'ordre des sections suit sa courbe émotionnelle : la confiance d'abord, le détail médical ensuite, la conversion une fois rassuré.",
      steps: [
        {
          stage: "① Arrivée — Hero + bandeau HAS",
          emotion: "Inquiet",
          action:
            "Comprend en 3 secondes ce qu'est UROLIB (« Urologie de l'homme et de la femme en Franche-Comté ») ; l'accréditation Haute Autorité de Santé apparaît immédiatement.",
          pain: "« À qui ai-je affaire ? Est-ce sérieux ? »",
          opportunity: "Réassurance institutionnelle très tôt, CTA rendez-vous déjà visible.",
        },
        {
          stage: "② Crédibilité — Chiffres & technologies",
          emotion: "Attentif",
          action:
            "Découvre l'expertise coordonnée : 10 chirurgiens, 3 cliniques, 20 collaborateurs, et les technologies (robot, laser, HIFU).",
          pain: "« Sont-ils vraiment équipés pour mon cas ? »",
          opportunity: "Preuves chiffrées proéminentes — pattern repris du site HIFU.",
        },
        {
          stage: "③ Qui & où — Cliniques et équipe",
          emotion: "Rassuré progressivement",
          action:
            "Localise la clinique la plus proche et met des visages sur l'équipe : 10 portraits réels, fonction et rattachement.",
          pain: "« Y a-t-il un spécialiste près de chez moi ? »",
          opportunity: "Cartes cliniques → praticiens, chemin le plus court vers le bon médecin.",
        },
        {
          stage: "④ Compréhension — Urologie, avis, FAQ",
          emotion: "En confiance",
          action:
            "Parcourt les domaines de prise en charge, lit les témoignages de patients (48–70 ans) et les réponses aux 6 questions fréquentes.",
          pain: "« D'autres patients comme moi ont-ils été bien soignés ? »",
          opportunity: "Preuve sociale en charnière, pédagogie sans jargon, accordéons accessibles.",
        },
        {
          stage: "⑤ Action — Rendez-vous",
          emotion: "Décidé",
          action:
            "Prend rendez-vous : Doctolib en 1 clic depuis la carte praticien, ou téléphone de la clinique — le CTA est resté visible en permanence (header sticky).",
          pain: "La moindre friction peut le faire remettre à plus tard.",
          opportunity: "Conversion en fin de parcours, une fois la confiance établie.",
        },
      ],
    },
    flows: [
      {
        name: "Chemin vers le rendez-vous (le plus court possible)",
        steps: [
          "Header sticky ou section Équipe",
          "Carte praticien",
          "Doctolib en 1 clic (7 praticiens)",
          "Fallback téléphone clinique (3 praticiens)",
        ],
      },
      {
        name: "Ressources patients",
        steps: [
          "FAQ en accordéon (6 questions)",
          "Fiches patients — source officielle AFU / UroFrance",
          "QR code — 103 fiches",
          "Passerelle vers le site HIFU",
        ],
      },
    ],
    sitemapRoot: "Website UROLIB",
    sitemap: [
      {
        tab: "Confiance",
        items: [
          "Hero — promesse + CTA",
          "Bandeau accréditation HAS",
          "Chiffres clés",
          "Technologies & innovation",
        ],
      },
      {
        tab: "Qui & où",
        items: [
          "Les 3 cliniques",
          "L'équipe — 10 praticiens",
          "L'urologie — 6 domaines",
          "Avis patients",
        ],
      },
      {
        tab: "Ressources",
        items: [
          "Fiches patients (AFU)",
          "FAQ en accordéon",
          "Actualités — 3 articles",
          "Contact + carte",
        ],
      },
      {
        tab: "Fiche praticien (CMS)",
        items: [
          "Photo · nom · fonction · clinique",
          "Présentation + vidéo",
          "CTA Doctolib conditionnel",
          "LinkedIn (si fourni)",
        ],
      },
      {
        tab: "Blog (CMS)",
        items: [
          "Listing filtrable",
          "Template article",
          "CTA LinkedIn UROLIB",
          "Innovation · Prévention · Réseau",
        ],
      },
    ],
    designSystem: {
      note: "Deux décisions clés : conserver le bleu foncé du logo en primaire (l'ancre de marque, hex prélevé à la pipette) et sortir du rose pour un accent turquoise médical-tech aligné sur le site HIFU — même famille froide, ensemble apaisant adapté à un contexte anxiogène. Typographies : Fraunces (titres — humanité et crédibilité éditoriale) + Inter (corps — lisibilité senior). Corps ≥ 16 px, grille 8 pt, breakpoints Webflow 1440 / 768 / 375.",
      palette: [
        { name: "Bleu UROLIB", hex: "#0E2C4D", usage: "Primaire — ancre de marque (logo, fonds sombres)" },
        { name: "Turquoise médical", hex: "#16B8C6", usage: "Accent CTA & highlights — aligné sur le site HIFU" },
        { name: "Turquoise doux", hex: "#E6F7F9", usage: "Fonds de section légers" },
        { name: "Encre", hex: "#0E1726", usage: "Texte principal" },
        { name: "Gris ardoise", hex: "#475569", usage: "Texte secondaire" },
      ],
    },
    insights: [
      { value: "90 %", label: "de la navigation se fait sur mobile — le design part du 375 px" },
      { value: "10", label: "chirurgiens urologues, cartes avec CTA Doctolib conditionnel" },
      { value: "3", label: "cliniques : Besançon Sud, Besançon Nord, Vesoul" },
      { value: "103", label: "fiches patients AFU accessibles par QR code" },
    ],
    approach: [
      "Fondations par la cible : patients seniors, contexte anxiogène, 90 % mobile → lisibilité 16–18 px, contrastes AA/AAA, cibles tactiles 44 px, ton rassurant.",
      "Diagnostic de l'existant : abandonner la navigation éclatée et la dette Wix, remonter l'accréditation HAS, exploiter les portraits des 10 praticiens.",
      "Cohérence d'écosystème : reprise des patterns du site HIFU — eyebrow labels, titres « énoncés », preuves chiffrées, accordéons, carrousel d'avis, double logo.",
      "Architecture one-page en 12 sections : la confiance d'abord (HAS, chiffres), puis qui/où/quoi, les ressources, et la conversion en fin de parcours.",
      "Système Figma prêt pour Webflow : tokens et composants à variants (carte praticien avec/sans Doctolib), breakpoints 1440/768/375, checklist RGAA / WCAG 2.1 AA.",
    ],
    solution:
      "Un one-page rassurant et coordonné : preuves de confiance en haut (HAS, chiffres clés), 3 cliniques et 10 praticiens incarnés, rendez-vous Doctolib à un clic (avec fallback téléphone), ressources patients reliées à la source officielle AFU, blog CMS administrable — le tout dans le langage visuel de l'écosystème HIFU, du header sticky au double logo du footer.",
    gallery: ["/project-urolib-1.png", "/project-urolib-2.png"],
    finalImage: "/project-urolib-final.png",
  },
];

export type Social = {
  label: string;
  short: string;
  href: string;
};

export const socials: Social[] = [
  { label: "WhatsApp", short: "WA", href: "https://wa.me/2290160371971" },
  { label: "Email", short: "@", href: "mailto:alrichnt@gmail.com" },
];

export type Contact = {
  label: string;
  href: string;
  filled?: boolean;
};

export const footer = {
  labels: [
    "UI/UX DESIGN",
    "UX RESEARCH",
    "WIREFRAMING",
    "PROTOTYPAGE",
    "WORDPRESS",
    "COTONOU",
  ],
  title: "DISCUTONS",
  contacts: [
    { label: "WHATSAPP", href: "https://wa.me/2290160371971", filled: true },
    { label: "EMAIL", href: "mailto:alrichnt@gmail.com", filled: true },
    { label: "ME CONTACTER", href: "https://wa.me/2290160371971", filled: false },
  ] as Contact[],
};
