import type { Locale } from "@/context/LanguageContext";

interface ProductTranslation {
  id: string;
  arabicName?: string;
  type: string;
  presentation: string;
  benefits: string[];
  keyActives: string[];
  shortBenefit: string;
  timing?: string;
}

interface PillarTranslation {
  stepNum: string;
  stepName: string;
  title: string;
  productName: string;
  description: string;
  role: string;
  note: string;
}

interface TranslationSet {
  navbar: {
    home: string;
    pack: string;
    products: string;
    routine: string;
    order: string;
    orderFullPack: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    giftBadge: string;
    ctaButton: string;
    originalPrice: string;
    specialPrice: string;
    trust1Title: string;
  };
  ticker: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
  };
  packIntro: {
    title: string;
    subtitle: string;
    stepLabel?: string;
    integratedStep?: string;
    keyActivesLabel: string;
    scrollPrompt: string;
    scrollComplete: string;
    quote: string;
    quoteAuthor: string;
    pillars: PillarTranslation[];
  };
  products: {
    sectionTitle: string;
    sectionSubtitle: string;
    stepBadge: string;
    unitPrice: string;
    viewDetails: string;
    items: ProductTranslation[];
    modal: {
      close: string;
      bottle: string;
      model: string;
      unitPrice: string;
      essentialActives: string;
      keyActions: string;
      orderPack: string;
    };
  };
  routine: {
    sectionSubtitle: string;
    tabAll: string;
    tabMorning: string;
    tabEvening: string;
    stepLabel: string;
    timingMorningOnly: string;
    timingMorningEvening: string;
    keyRole: string;
  };
  order: {
    sectionTitle: string;
    sectionSubtitle: string;
    recap: {
      title: string;
      subtitle: string;
      giftBadge: string;
      giftName: string;
      giftSub: string;
      freeTag: string;
      totalTitle: string;
      totalSub: string;
      totalOriginalPrice: string;
      totalSpecialPrice: string;
      freeShipping: string;
      cod: string;
    };
    form: {
      title: string;
      subtitle: string;
      firstNameLabel: string;
      firstNamePlaceholder: string;
      lastNameLabel: string;
      lastNamePlaceholder: string;
      cityLabel: string;
      phoneLabel: string;
      phonePlaceholder: string;
      submitButton: string;
      submitting: string;
      notice: string;
      errors: {
        firstName: string;
        lastName: string;
        city: string;
        phone: string;
        phoneTooShort: string;
        phoneTooLong: string;
        phoneInvalidFormat: string;
      };
    };
    confirmation: {
      badge: string;
      thankYou: string;
      recorded: string;
      callWaitingTitle: string;
      callWaitingText1: string;
      callWaitingText2: string;
      phoneTip: string;
      destinataire: string;
      city: string;
      phone: string;
      article: string;
      articleValue: string;
      total: string;
      shippingFree: string;
      newOrderBtn: string;
    };
  };
  floatingButton: {
    order: string;
    subtext: string;
  };
  footer: {
    slogan: string;
    description: string;
    quickLinks: string;
    followUs: string;
    customerService: string;
    customerServiceText: string;
    copyright: string;
    terms: string;
    privacy: string;
  };
}

// ─────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────
const fr: TranslationSet = {
  navbar: {
    home: "Accueil",
    pack: "Le Pack",
    products: "Produits",
    routine: "Routine",
    order: "Commander",
    orderFullPack: "Commander le Pack Complet",
  },
  hero: {
    badge: "Nouveau Pack Exclusif",
    titlePart1: "Le Pack ",
    titleHighlight: "Vinillia",
    titlePart2: " pour une peau éclatante",
    subtitle:
      "6 soins coréens d'exception sélectionnés pour transformer votre routine beauté et révéler l'éclat naturel de votre peau.",
    giftBadge: "Trousse Sol de Janeiro OFFERTE",
    ctaButton: "Commander Maintenant",
    originalPrice: "2 023 DH",
    specialPrice: "1 500 DH",
    trust1Title: "100% Authentique",
  },
  ticker: {
    item1: "100% Authentique",
    item2: "Livraison 24-48h",
    item3: "Paiement à la livraison",
    item4: "Satisfaction Garantie",
  },
  packIntro: {
    title: "Pourquoi le Pack Vinillia ?",
    subtitle:
      "6 soins coréens d'exception soigneusement sélectionnés pour une routine complète et efficace.",
    stepLabel: "ÉTAPE",
    integratedStep: "Étape intégrée",
    keyActivesLabel: "Actifs clés",
    scrollPrompt: "Défilez pour découvrir",
    scrollComplete: "Routine complète !",
    quote:
      "« Chaque étape du Pack Vinillia a été pensée pour vous offrir une expérience de soin complète, du premier geste au dernier. »",
    quoteAuthor: "Vinillia Beauty",
    pillars: [
      {
        stepNum: "01",
        stepName: "TONIFIER",
        title: "Éclat & Préparation",
        productName: "I'm From Rice Toner",
        description:
          "Une lotion tonique culte formulée avec 77,78% d'extrait de riz de Yeoju. Hydrate, unifie le teint et prépare la peau à absorber les soins suivants.",
        role: "Extrait de Riz 77,78% · Niacinamide · Adénosine",
        note: "✨ La base lumineuse de votre routine",
      },
      {
        stepNum: "02",
        stepName: "RÉGÉNÉRER",
        title: "Fermeté & Jeunesse",
        productName: "Medicube PDRN Pink Peptide Serum",
        description:
          "Un sérum haute performance au Saumon PDRN 10 000 ppm et 5 peptides. Relance l'élasticité, lisse les ridules et procure l'éclat Glass Skin.",
        role: "PDRN 10 000 ppm · 5 Peptides · Collagène",
        note: "🧬 Le secret de l'éclat Glass Skin",
      },
      {
        stepNum: "03",
        stepName: "APAISER",
        title: "Hydratation & Confort",
        productName: "Anua Heartleaf 70% Daily Relief Lotion",
        description:
          "Une lotion apaisante concentrée à 70% d'Heartleaf. Calme les rougeurs, hydrate en profondeur et renforce la barrière cutanée.",
        role: "Heartleaf 70% · Céramide NP · Triple HA",
        note: "🌿 Le bouclier apaisant de votre peau",
      },
      {
        stepNum: "04",
        stepName: "CIBLER",
        title: "Regard Sublimé",
        productName: "AXIS-Y Vegan Collagen Eye Serum",
        description:
          "Un soin contour des yeux au collagène végan et 5 peptides avec applicateur métallique rafraîchissant. Décongestionne, lisse et illumine le regard.",
        role: "Collagène Végan · 5 Peptides · Niacinamide 2%",
        note: "👁️ Le regard lumineux et défatigué",
      },
      {
        stepNum: "05",
        stepName: "SCELLER",
        title: "Éclat Glass Skin",
        productName: "Medicube Collagen Jelly Cream",
        description:
          "La célèbre crème-gelée coréenne au collagène. Sa texture fond sur la peau pour sceller l'hydratation et offrir un fini miroir ultra-lumineux.",
        role: "Collagène · Niacinamide · Squalane",
        note: "✨ Le fini miroir signature Vinillia",
      },
      {
        stepNum: "06",
        stepName: "PROTÉGER",
        title: "Protection Solaire",
        productName: "Medicube Collagen Sun Cream SPF50+",
        description:
          "Un soin solaire hybride SPF50+ PA++++ au collagène 5 000 ppm. Protection maximale, zéro trace blanche, fini velouté sous le maquillage.",
        role: "SPF50+ PA++++ · Collagène 5 000 ppm · Céramide NP",
        note: "☀️ Le bouclier final de votre routine",
      },
    ],
  },
  products: {
    sectionTitle: "Les 6 Soins du Pack Vinillia",
    sectionSubtitle:
      "Découvrez chaque produit de votre routine coréenne d'exception.",
    stepBadge: "ÉTAPE",
    unitPrice: "Prix unitaire",
    viewDetails: "Voir détails",
    items: [
      {
        id: "im-from-rice-toner",
        type: "Toner / Lotion tonique",
        presentation:
          "Une lotion tonique culte formulée avec 77,78% d'extrait de riz de Yeoju. Hydrate, unifie le teint et prépare la peau.",
        benefits: [
          "Hydrate intensément dès la première étape",
          "Éclaircit et unifie le teint",
          "Affine le grain de peau",
        ],
        keyActives: [
          "Extrait de Riz 77,78%",
          "Niacinamide",
          "Adénosine",
        ],
        shortBenefit: "Éclat instantané & hydratation préparatrice",
        timing: "Matin & Soir",
      },
      {
        id: "medicube-pdrn",
        type: "Sérum régénérant & élasticité",
        presentation:
          "Un sérum haute performance au Saumon PDRN 10 000 ppm et 5 peptides pour l'éclat Glass Skin.",
        benefits: [
          "Stimule l'élasticité cutanée",
          "Lisse les ridules",
          "Apporte un éclat frais rosé",
        ],
        keyActives: [
          "Saumon PDRN 10 000 ppm",
          "5 Peptides",
          "Niacinamide",
        ],
        shortBenefit: "Élasticité, éclat rosé & fermeté cutanée",
        timing: "Matin & Soir",
      },
      {
        id: "anua-lotion",
        type: "Lotion hydratante & apaisante",
        presentation:
          "Lotion apaisante concentrée à 70% d'Heartleaf. Calme les rougeurs et hydrate en profondeur.",
        benefits: [
          "Apaise les rougeurs et irritations",
          "Hydrate en profondeur",
          "Renforce la barrière cutanée",
        ],
        keyActives: [
          "Heartleaf 70%",
          "Céramide NP",
          "Triple Acide Hyaluronique",
        ],
        shortBenefit: "Hydratation légère & apaisement durable",
        timing: "Matin & Soir",
      },
      {
        id: "axisy-eye-serum",
        type: "Sérum contour des yeux",
        presentation:
          "Soin contour des yeux au collagène végan avec applicateur métallique rafraîchissant.",
        benefits: [
          "Décongestionne les poches",
          "Estompe les cernes",
          "Lisse les ridules",
        ],
        keyActives: [
          "Collagène Végan 450 ppm",
          "5 Peptides",
          "Niacinamide 2%",
        ],
        shortBenefit: "Regard défatigué, lissé & anti-cernes",
        timing: "Matin & Soir",
      },
      {
        id: "medicube-jelly-cream",
        type: "Crème hydratante effet Glass Skin",
        presentation:
          "Crème-gelée coréenne au collagène pour sceller l'hydratation et offrir un fini miroir.",
        benefits: [
          "Éclat miroir Glass Skin",
          "Scelle l'hydratation",
          "Restaure la tonicité",
        ],
        keyActives: [
          "Collagène",
          "Niacinamide",
          "Squalane Végétal",
        ],
        shortBenefit: "Rebond, éclat miroir & maintien d'hydratation",
        timing: "Matin & Soir",
      },
      {
        id: "medicube-sunscreen",
        type: "Crème solaire raffermissante SPF50+ PA++++",
        presentation:
          "Soin solaire hybride SPF50+ PA++++ au collagène 5 000 ppm. Fini invisible et velouté.",
        benefits: [
          "Protection UVA/UVB maximale",
          "Renforce la fermeté",
          "Zéro trace blanche",
        ],
        keyActives: [
          "SPF50+ PA++++",
          "Collagène 5 000 ppm",
          "Niacinamide",
        ],
        shortBenefit: "Très haute protection UVA/UVB & soutien fermeté",
        timing: "Matin uniquement",
      },
    ],
    modal: {
      close: "Fermer",
      bottle: "Produit",
      model: "Modèle",
      unitPrice: "Prix unitaire",
      essentialActives: "Actifs Essentiels",
      keyActions: "Actions Principales",
      orderPack: "Commander le Pack Complet",
    },
  },
  routine: {
    sectionSubtitle:
      "L'ordre parfait pour appliquer vos 6 soins coréens Vinillia, du premier geste au dernier.",
    tabAll: "Routine Complète",
    tabMorning: "Matin",
    tabEvening: "Soir",
    stepLabel: "ÉTAPE",
    timingMorningOnly: "Matin uniquement",
    timingMorningEvening: "Matin & Soir",
    keyRole: "Rôle clé :",
  },
  order: {
    sectionTitle: "Commandez votre Pack Vinillia",
    sectionSubtitle:
      "Remplissez le formulaire ci-dessous pour recevoir votre Pack de 6 soins coréens d'exception + la trousse Sol de Janeiro offerte.",
    recap: {
      title: "Le Pack Vinillia",
      subtitle: "6 soins coréens d'exception + trousse offerte",
      giftBadge: "CADEAU OFFERT",
      giftName: "Trousse Beija Flor Jet Set — Sol de Janeiro",
      giftSub: "Set de voyage 3 soins corps & parfum",
      freeTag: "GRATUIT",
      totalTitle: "TOTAL PACK",
      totalSub: "6 soins + trousse offerte",
      totalOriginalPrice: "2 023 DH",
      totalSpecialPrice: "1 500 DH",
      freeShipping: "🚚 Livraison gratuite",
      cod: "💵 Paiement à la livraison",
    },
    form: {
      title: "Vos informations de livraison",
      subtitle: "Tous les champs sont obligatoires",
      firstNameLabel: "Prénom",
      firstNamePlaceholder: "Votre prénom",
      lastNameLabel: "Nom",
      lastNamePlaceholder: "Votre nom de famille",
      cityLabel: "Ville",
      phoneLabel: "Téléphone",
      phonePlaceholder: "06 12 34 56 78",
      submitButton: "Confirmer ma commande",
      submitting: "Envoi en cours…",
      notice: "Paiement sécurisé à la livraison",
      errors: {
        firstName: "Veuillez saisir votre prénom",
        lastName: "Veuillez saisir votre nom",
        city: "Veuillez sélectionner votre ville",
        phone: "Veuillez saisir votre numéro de téléphone",
        phoneTooShort: "Le numéro doit contenir 10 chiffres",
        phoneTooLong: "Le numéro ne doit pas dépasser 10 chiffres",
        phoneInvalidFormat: "Format invalide (ex: 06 12 34 56 78)",
      },
    },
    confirmation: {
      badge: "Commande Validée",
      thankYou: "Merci",
      recorded:
        "Votre commande a bien été enregistrée. Notre équipe va vous contacter très prochainement pour confirmer les détails de livraison.",
      callWaitingTitle: "En attente d'appel de confirmation",
      callWaitingText1: "Nous allons vous appeler au",
      callWaitingText2: "pour confirmer la livraison à",
      phoneTip: "📞 Gardez votre téléphone à portée de main",
      destinataire: "Destinataire",
      city: "Ville",
      phone: "Téléphone",
      article: "Article",
      articleValue: "Pack Vinillia (6 soins + trousse)",
      total: "Total",
      shippingFree: "(livraison offerte)",
      newOrderBtn: "Nouvelle commande",
    },
  },
  floatingButton: {
    order: "COMMANDER",
    subtext: "Livraison gratuite 🚚",
  },
  footer: {
    slogan: "\"Votre rituel beauté coréen, livré chez vous.\"",
    description:
      "Vinillia sélectionne les meilleurs soins coréens authentiques pour révéler l'éclat naturel de votre peau. Livraison rapide partout au Maroc.",
    quickLinks: "Liens Utiles",
    followUs: "Suivez-nous",
    customerService: "Service Client",
    customerServiceText:
      "Besoin d'aide ? Notre équipe est disponible pour vous accompagner dans le choix de votre routine.",
    copyright: "© 2024 Vinillia Beauty. Tous droits réservés.",
    terms: "Conditions Générales",
    privacy: "Politique de Confidentialité",
  },
};

// ─────────────────────────────────────────────────────
// ARABIC
// ─────────────────────────────────────────────────────
const ar: TranslationSet = {
  navbar: {
    home: "الرئيسية",
    pack: "الباك",
    products: "المنتجات",
    routine: "الروتين",
    order: "اطلبي الآن",
    orderFullPack: "اطلبي الباك الكامل",
  },
  hero: {
    badge: "باك حصري جديد",
    titlePart1: "باك ",
    titleHighlight: "فينيليا",
    titlePart2: " لبشرة مشرقة",
    subtitle:
      "6 مستحضرات كورية استثنائية تم اختيارها بعناية لتحويل روتين جمالك والكشف عن إشراق بشرتك الطبيعي.",
    giftBadge: "حقيبة Sol de Janeiro هدية",
    ctaButton: "اطلبي الآن",
    originalPrice: "\u202A2 023\u202C درهم",
    specialPrice: "\u202A1 500\u202C درهم",
    trust1Title: "أصلي 100%",
  },
  ticker: {
    item1: "منتجات أصلية 100%",
    item2: "توصيل خلال 24-48 ساعة",
    item3: "الدفع عند الاستلام",
    item4: "ضمان الرضا",
  },
  packIntro: {
    title: "لماذا باك فينيليا؟",
    subtitle:
      "6 مستحضرات كورية استثنائية تم اختيارها بعناية لروتين متكامل وفعال.",
    stepLabel: "الخطوة",
    integratedStep: "خطوة متكاملة",
    keyActivesLabel: "المكونات الفعالة",
    scrollPrompt: "مرري للاكتشاف",
    scrollComplete: "روتين كامل!",
    quote:
      "« كل خطوة في باك فينيليا صُممت لتمنحك تجربة عناية متكاملة، من أول لمسة إلى آخر لمسة. »",
    quoteAuthor: "Vinillia Beauty",
    pillars: [
      {
        stepNum: "01",
        stepName: "تنظيف",
        title: "إشراق وتحضير",
        productName: "I'm From Rice Toner",
        description:
          "لوشن تونر بتركيز 77.78% من خلاصة الأرز. يرطب البشرة ويوحد لونها ويحضرها لامتصاص المستحضرات التالية.",
        role: "خلاصة الأرز 77.78% · نياسيناميد · أدينوزين",
        note: "✨ الأساس المشرق لروتينك",
      },
      {
        stepNum: "02",
        stepName: "تجديد",
        title: "مرونة وشباب",
        productName: "Medicube PDRN Pink Peptide Serum",
        description:
          "سيروم عالي الأداء بتركيز 10,000 جزء من PDRN السلمون و5 ببتيدات. يعيد المرونة ويملأ الخطوط الدقيقة ويمنح إشراقة Glass Skin.",
        role: "PDRN 10,000 · 5 ببتيدات · كولاجين",
        note: "🧬 سر إشراقة Glass Skin",
      },
      {
        stepNum: "03",
        stepName: "تهدئة",
        title: "ترطيب وراحة",
        productName: "Anua Heartleaf 70% Daily Relief Lotion",
        description:
          "لوشن مهدئ بتركيز 70% من Heartleaf. يهدئ الاحمرار ويرطب البشرة بعمق ويقوي حاجز البشرة.",
        role: "Heartleaf 70% · سيراميد NP · حمض الهيالورونيك الثلاثي",
        note: "🌿 درع الحماية المهدئ لبشرتك",
      },
      {
        stepNum: "04",
        stepName: "استهداف",
        title: "نظرة متألقة",
        productName: "AXIS-Y Vegan Collagen Eye Serum",
        description:
          "عناية بمحيط العين بالكولاجين النباتي و5 ببتيدات مع أداة تطبيق معدنية منعشة. يزيل الانتفاخ ويملأ ويضيء النظرة.",
        role: "كولاجين نباتي · 5 ببتيدات · نياسيناميد 2%",
        note: "👁️ نظرة مشرقة ومنتعشة",
      },
      {
        stepNum: "05",
        stepName: "قفل",
        title: "إشراقة Glass Skin",
        productName: "Medicube Collagen Jelly Cream",
        description:
          "كريم جيلي كوري شهير بالكولاجين. قوامه يذوب على البشرة لقفل الترطيب ومنح لمسة مرآة فائقة اللمعان.",
        role: "كولاجين · نياسيناميد · سكوالان",
        note: "✨ لمسة المرآة المميزة من فينيليا",
      },
      {
        stepNum: "06",
        stepName: "حماية",
        title: "حماية من الشمس",
        productName: "Medicube Collagen Sun Cream SPF50+",
        description:
          "واقي شمس هجين SPF50+ PA++++ بتركيز 5,000 جزء من الكولاجين. حماية قصوى، بدون أثر أبيض، لمسة مخملية تحت المكياج.",
        role: "SPF50+ PA++++ · كولاجين 5,000 · سيراميد NP",
        note: "☀️ الدرع الأخير في روتينك",
      },
    ],
  },
  products: {
    sectionTitle: "المستحضرات الـ 6 في باك فينيليا",
    sectionSubtitle:
      "اكتشفي كل منتج في روتينك الكوري الاستثنائي.",
    stepBadge: "الخطوة",
    unitPrice: "السعر الفردي",
    viewDetails: "عرض التفاصيل",
    items: [
      {
        id: "im-from-rice-toner",
        arabicName: "تونر الأرز من آيم فروم",
        type: "تونر / لوشن منظف",
        presentation:
          "لوشن تونر بتركيز 77.78% من خلاصة أرز يوجو. يرطب ويوحد لون البشرة ويحضرها.",
        benefits: [
          "ترطيب مكثف من أول خطوة",
          "توحيد لون البشرة وإشراقها",
          "تنعيم ملمس البشرة",
        ],
        keyActives: [
          "خلاصة الأرز 77.78%",
          "نياسيناميد",
          "أدينوزين",
        ],
        shortBenefit: "إشراق فوري وترطيب تحضيري",
        timing: "صباحاً ومساءً",
      },
      {
        id: "medicube-pdrn",
        arabicName: "سيروم ميديكيوب PDRN بالببتيدات",
        type: "سيروم مجدد ومرن",
        presentation:
          "سيروم عالي الأداء بـ PDRN السلمون 10,000 جزء و5 ببتيدات لإشراقة Glass Skin.",
        benefits: [
          "تحفيز مرونة البشرة",
          "تنعيم الخطوط الدقيقة",
          "إشراقة وردية منعشة",
        ],
        keyActives: [
          "PDRN السلمون 10,000",
          "5 ببتيدات",
          "نياسيناميد",
        ],
        shortBenefit: "مرونة، إشراقة وردية وتماسك البشرة",
        timing: "صباحاً ومساءً",
      },
      {
        id: "anua-lotion",
        arabicName: "لوشن أنوا بالهارتليف",
        type: "لوشن مرطب ومهدئ",
        presentation:
          "لوشن مهدئ بتركيز 70% من Heartleaf. يهدئ الاحمرار ويرطب بعمق.",
        benefits: [
          "تهدئة الاحمرار والتهيج",
          "ترطيب عميق",
          "تقوية حاجز البشرة",
        ],
        keyActives: [
          "Heartleaf 70%",
          "سيراميد NP",
          "حمض الهيالورونيك الثلاثي",
        ],
        shortBenefit: "ترطيب خفيف وتهدئة مستمرة",
        timing: "صباحاً ومساءً",
      },
      {
        id: "axisy-eye-serum",
        arabicName: "سيروم العين من أكسيس واي",
        type: "سيروم محيط العين",
        presentation:
          "عناية بمحيط العين بالكولاجين النباتي مع أداة تطبيق معدنية منعشة.",
        benefits: [
          "إزالة الانتفاخ",
          "تخفيف الهالات السوداء",
          "تنعيم الخطوط الدقيقة",
        ],
        keyActives: [
          "كولاجين نباتي 450",
          "5 ببتيدات",
          "نياسيناميد 2%",
        ],
        shortBenefit: "نظرة منتعشة وناعمة ومضادة للهالات",
        timing: "صباحاً ومساءً",
      },
      {
        id: "medicube-jelly-cream",
        arabicName: "كريم جيلي ميديكيوب بالكولاجين",
        type: "كريم مرطب بمفعول Glass Skin",
        presentation:
          "كريم جيلي كوري بالكولاجين لقفل الترطيب ومنح لمسة مرآة.",
        benefits: [
          "إشراقة مرآة Glass Skin",
          "قفل الترطيب",
          "استعادة التماسك",
        ],
        keyActives: [
          "كولاجين",
          "نياسيناميد",
          "سكوالان نباتي",
        ],
        shortBenefit: "مرونة، إشراقة مرآة والحفاظ على الترطيب",
        timing: "صباحاً ومساءً",
      },
      {
        id: "medicube-sunscreen",
        arabicName: "واقي شمس ميديكيوب بالكولاجين",
        type: "واقي شمس مُحكم SPF50+ PA++++",
        presentation:
          "واقي شمس هجين SPF50+ PA++++ بالكولاجين 5,000 جزء. لمسة مخملية غير مرئية.",
        benefits: [
          "حماية قصوى UVA/UVB",
          "تعزيز التماسك",
          "بدون أثر أبيض",
        ],
        keyActives: [
          "SPF50+ PA++++",
          "كولاجين 5,000",
          "نياسيناميد",
        ],
        shortBenefit: "حماية عالية جداً UVA/UVB ودعم التماسك",
        timing: "صباحاً فقط",
      },
    ],
    modal: {
      close: "إغلاق",
      bottle: "المنتج",
      model: "التطبيق",
      unitPrice: "السعر الفردي",
      essentialActives: "المكونات الأساسية",
      keyActions: "الفوائد الرئيسية",
      orderPack: "اطلبي الباك الكامل",
    },
  },
  routine: {
    sectionSubtitle:
      "الترتيب المثالي لتطبيق مستحضراتك الكورية الست من فينيليا، من أول خطوة إلى آخر خطوة.",
    tabAll: "الروتين الكامل",
    tabMorning: "صباح",
    tabEvening: "مساء",
    stepLabel: "الخطوة",
    timingMorningOnly: "صباحاً فقط",
    timingMorningEvening: "صباحاً ومساءً",
    keyRole: "الدور الرئيسي:",
  },
  order: {
    sectionTitle: "اطلبي باك فينيليا",
    sectionSubtitle:
      "املئي النموذج أدناه لاستلام باك الـ 6 مستحضرات الكورية الاستثنائية + حقيبة Sol de Janeiro هدية.",
    recap: {
      title: "باك فينيليا",
      subtitle: "6 مستحضرات كورية استثنائية + حقيبة هدية",
      giftBadge: "هدية مجانية",
      giftName: "حقيبة Beija Flor Jet Set — Sol de Janeiro",
      giftSub: "مجموعة سفر 3 عنايات بالجسم والعطر",
      freeTag: "مجاني",
      totalTitle: "المجموع",
      totalSub: "6 مستحضرات + حقيبة هدية",
      totalOriginalPrice: "\u202A2 023\u202C درهم",
      totalSpecialPrice: "\u202A1 500\u202C درهم",
      freeShipping: "🚚 توصيل مجاني",
      cod: "💵 الدفع عند الاستلام",
    },
    form: {
      title: "معلومات التوصيل",
      subtitle: "جميع الحقول مطلوبة",
      firstNameLabel: "الاسم الأول",
      firstNamePlaceholder: "اسمك الأول",
      lastNameLabel: "اسم العائلة",
      lastNamePlaceholder: "اسم عائلتك",
      cityLabel: "المدينة",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "06 12 34 56 78",
      submitButton: "تأكيد الطلب",
      submitting: "جارٍ الإرسال…",
      notice: "دفع آمن عند الاستلام",
      errors: {
        firstName: "الرجاء إدخال اسمك الأول",
        lastName: "الرجاء إدخال اسم العائلة",
        city: "الرجاء اختيار مدينتك",
        phone: "الرجاء إدخال رقم هاتفك",
        phoneTooShort: "الرقم يجب أن يحتوي على 10 أرقام",
        phoneTooLong: "الرقم لا يجب أن يتجاوز 10 أرقام",
        phoneInvalidFormat: "صيغة غير صحيحة (مثال: \u202A06 12 34 56 78\u202C)",
      },
    },
    confirmation: {
      badge: "تم تأكيد الطلب",
      thankYou: "شكراً",
      recorded:
        "تم تسجيل طلبك بنجاح. فريقنا سيتصل بك قريباً لتأكيد تفاصيل التوصيل.",
      callWaitingTitle: "في انتظار مكالمة التأكيد",
      callWaitingText1: "سنتصل بك على الرقم",
      callWaitingText2: "لتأكيد التوصيل إلى",
      phoneTip: "📞 أبقي هاتفك قريباً منك",
      destinataire: "المرسل إليه",
      city: "المدينة",
      phone: "الهاتف",
      article: "المنتج",
      articleValue: "باك فينيليا (6 مستحضرات + حقيبة)",
      total: "المجموع",
      shippingFree: "(التوصيل مجاني)",
      newOrderBtn: "طلب جديد",
    },
  },
  floatingButton: {
    order: "اطلبي الآن",
    subtext: "توصيل مجاني 🚚",
  },
  footer: {
    slogan: "\"طقوس جمالك الكورية، توصل لبابك.\"",
    description:
      "فينيليا تختار لك أفضل المستحضرات الكورية الأصلية للكشف عن إشراق بشرتك الطبيعي. توصيل سريع لكافة مدن المغرب.",
    quickLinks: "روابط مفيدة",
    followUs: "تابعينا",
    customerService: "خدمة العملاء",
    customerServiceText:
      "محتاجة مساعدة؟ فريقنا متاح لمساعدتك في اختيار روتينك المناسب.",
    copyright: "© 2024 Vinillia Beauty. جميع الحقوق محفوظة.",
    terms: "الشروط العامة",
    privacy: "سياسة الخصوصية",
  },
};

// ─────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────
export const TRANSLATIONS: Record<Locale, TranslationSet> = { fr, ar };
