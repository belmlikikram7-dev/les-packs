import type { Locale } from "@/context/LanguageContext";

export interface RoutineStepTrans {
  num: string;
  stepLabel: string;
  title: string;
  desc: string;
  tag: string;
}

export interface ProductItemTrans {
  name: string;
  step: string;
  category: string;
  badge: string;
  subtitle: string;
  description: string;
  keyActives: string[];
}

export interface TranslationSet {
  navbar: {
    home: string;
    products: string;
    gift: string;
    routine: string;
    order: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    titleHighlight: string;
    subtitle: string;
    ctaButton: string;
    desktopPill1: string;
    desktopPill2: string;
  };
  products: {
    titleMain: string;
    titleBadge: string;
    subtitle: string;
    viewDetails: string;
    modal: {
      close: string;
      benefitsLabel: string;
      keyActivesLabel: string;
      orderCta: string;
    };
    items: Record<string, ProductItemTrans>;
  };
  spotlight: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    desc: string;
    ctaButton: string;
    floatingBadge: string;
  };
  routine: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    matinTab: string;
    soirTab: string;
    stepCounter: string;
    morningSteps: RoutineStepTrans[];
    eveningSteps: RoutineStepTrans[];
  };
  order: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    form: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      phoneHint: string;
      cityLabel: string;
      citySelectDefault: string;
      otherCityOption: string;
      customCityPlaceholder: string;
      submitBtn: string;
      submitting: string;
      priceNote: string;
    };
    trust: {
      freeShipping: string;
      shippingDelay: string;
      cod: string;
      codSub: string;
      original: string;
      originalSub: string;
    };
    errors: {
      fullNameRequired: string;
      phoneRequired: string;
      phoneTooShort: string;
      phoneTooLong: string;
      phoneInvalid: string;
      cityRequired: string;
    };
    success: {
      badge: string;
      thankYou: string;
      desc: string;
      client: string;
      phone: string;
      city: string;
      totalToPay: string;
      freeShipping: string;
      confirmWhatsapp: string;
      newOrder: string;
    };
  };
  footer: {
    slogan: string;
    desc: string;
    quickLinksTitle: string;
    customerServiceTitle: string;
    customerServiceText: string;
    copyright: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  floatingButton: {
    order: string;
    price: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationSet> = {
  fr: {
    navbar: {
      home: "Accueil",
      products: "Les 6 soins",
      gift: "Cadeau Offert",
      routine: "Routine",
      order: "Commander",
    },
    hero: {
      badge: "Pack Skincare Coréen Complet • 6 Soins",
      titlePart1: "Révélez l'éclat pur",
      titlePart2: ". et .",
      titleHighlight: "la jeunesse de votre peau",
      subtitle:
        "Le rituel coréen d'exception pour une peau lisse, hydratée et éclatante au quotidien.",
      ctaButton: "Commander le Pack (1300 DH)",
      desktopPill1: "Groupe 1 (Produits 1-3)",
      desktopPill2: "Groupe 2 (Produits 4-6)",
    },
    products: {
      titleMain: "Les 6 Soins",
      titleBadge: "du Pack",
      subtitle:
        "Une sélection rigoureuse d'actifs cliniquement reconnus pour traiter l'acné, les pores dilatés, les taches pigmentaires et les premiers signes de l'âge.",
      viewDetails: "Voir détails",
      modal: {
        close: "Fermer",
        benefitsLabel: "Bienfaits & Mode d'action :",
        keyActivesLabel: "Actifs Clés :",
        orderCta: "Commander ce soin dans le pack",
      },
      items: {
        marvis: {
          name: "Jasmin Mint Toothpaste",
          step: "Soin Quotidien",
          category: "Soin Bucco-dentaire & Fraîcheur Florale",
          badge: "Jasmin & Menthe",
          subtitle: "Dentifrice italien iconique associant la délicatesse florale du jasmin à une fraîcheur mentholée durable.",
          description:
            "Formule italienne prestigieuse mariant l'arôme floral raffiné du jasmin à l'intensité de la menthe fraîche. Enrichi en fluorure pour renforcer l'émail des dents, en xylitol pour prévenir la plaque dentaire et en silice douce pour un nettoyage efficace et un sourire éclatant sans agresser les gencives.",
          keyActives: [
            "Extrait de Jasmin & Menthe Douce",
            "Fluorure de Sodium (Émail & Caries)",
            "Xylitol Protecteur",
            "Silice Nettoyante Douce",
          ],
        },
        "sun-serum": {
          name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++",
          step: "Étape Finale Matin",
          category: "Protection Solaire & Hydratation",
          badge: "SPF50+ PA++++",
          subtitle: "Écran solaire sérum ultra-léger et invisible à la Centella et acide hyaluronique.",
          description:
            "Protection solaire quotidienne haute tolérance à la texture sérum ultra-fluide au fini totalement invisible, sans traces blanches ni film gras. Formulé avec le complexe exclusif Hyalu-Cica (Centella Asiatica pure de Madagascar et acide hyaluronique) combiné à la niacinamide pour hydrater, apaiser et protéger les peaux les plus sensibles.",
          keyActives: [
            "Centella Asiatica Pure de Madagascar",
            "Complexe Hyalu-Cica (Acide Hyaluronique)",
            "Niacinamide Éclat",
            "Filtres SPF50+ PA++++ Invisibles",
          ],
        },
        "cleansing-foam": {
          name: "Madagascar Centella Poremizing Deep Cleansing Foam",
          step: "Étape 1 Nettoyage",
          category: "Nettoyage Profond & Pores",
          badge: "Deep Cleansing",
          subtitle: "Mousse nettoyante riche au sel rose de l'Himalaya pour désincruster et resserrer les pores.",
          description:
            "Nettoyant moussant onctueux enrichi au sel rose pur de l'Himalaya riche en 84 minéraux essentiels et en enzyme de papaïne naturelle. Il désincruste les pores en profondeur, régule l'excès de sébum et élimine les impuretés tout en préservant l'hydratation grâce à la Centella Asiatica apaisante.",
          keyActives: [
            "Sel Rose de l'Himalaya (84 Minéraux)",
            "Centella Asiatica Apaisante",
            "Papaïne (Enzyme de Papaye Exfoliante)",
            "Argile Kaolin Purifiante",
          ],
        },
        "relief-cream": {
          name: "345 Relief Cream",
          step: "Étape Hydratation & Réparation",
          category: "Crème Barrière & Réparation Post-Acné",
          badge: "Réparation Intense",
          subtitle: "Crème gel régénérante post-acné aux céramides, panthénol et resvératrol.",
          description:
            "Soin gel crème hautement réparateur conçu pour reconstruire la barrière cutanée fragilisée et estomper les taches et cicatrices post-acné. Sa formule associe une concentration puissante de panthénol (vitamine B5), des céramides NP, de la niacinamide et du resvératrol antioxydant pour calmer immédiatement les rougeurs et régénérer l'épiderme en profondeur.",
          keyActives: [
            "Panthénol 10 000 ppm (Vitamine B5)",
            "Céramides NP & Niacinamide",
            "Resvératrol Antioxydant",
            "Centella & Houttuynia Cordata",
          ],
        },
        niacinamide: {
          name: "Niacinamide 10% + Zinc 1%",
          step: "Étape Traitement Actif",
          category: "Sérum Anti-Imperfections & Sébum",
          badge: "Anti-Taches & Sébum",
          subtitle: "Sérum purifiant haute concentration pour réguler le sébum, resserrer les pores et unifier le teint.",
          description:
            "Formule dermatologique culte combinant une concentration optimale de 10% de Niacinamide (vitamine B3) et 1% de Zinc PCA. Ce sérum régule activement la production de sébum, décongestionne les pores dilatés, réduit visiblement les rougeurs et taches pigmentaires pour révéler un teint net, lisse et uniforme.",
          keyActives: [
            "Niacinamide 10% (Vitamine B3)",
            "Zinc PCA 1% (Sébo-régulateur)",
            "Formule Purifiante Haute Tolérance",
          ],
        },
        "retinal-shot": {
          name: "Retinol Shot Tightening Booster",
          step: "Étape Nuit Traitement",
          category: "Anti-Âge, Fermeté & Rétinol",
          badge: "Anti-Âge Puissant",
          subtitle: "Booster raffermissant au rétinol pur, peptides Matrixyl et technologie 20 000 micro-shots.",
          description:
            "Soin de nuit régénérant haute performance combinant 0,03% de rétinol pur, 3% de peptides Matrixyl® 3000 brevetés et 1% de panthénol apaisant. Équipé de la technologie innovante 20 000 Micro-Shots (spicules biomimétiques) qui stimule intensément la pénétration des actifs, accélère la production de collagène, raffermit l'ovale du visage et lisse les ridules.",
          keyActives: [
            "Rétinol Pur 0.03%",
            "Peptides MATRIXYL® 3000 3%",
            "Panthénol 1% Apaisant",
            "Technologie 20 000 Micro-Shots",
          ],
        },
      },
    },
    spotlight: {
      badge: "Cadeau Exclusif Offert",
      titleLine1: "Votre Coffret Cadeau",
      titleHighlight: "Offert Avec Le Pack",
      desc: "Pour toute commande du Pack Skincare aujourd'hui, recevez gratuitement ce somptueux coffret cadeau de soin capillaire. Un rituel complet comprenant le Shampooing Anti-Chute à la Caféine, les Ampoules Fortifiantes et le Soin Botanique Naturel pour nourrir et fortifier vos cheveux en profondeur.",
      ctaButton: "Commander le Pack + Cadeau Gratuit",
      floatingBadge: "Cadeau Offert • Valeur 450 DH",
    },
    routine: {
      badge: "Guide d'utilisation",
      titlePrefix: "Votre Routine",
      titleHighlight: "Skincare",
      subtitle: "Scrollez pour découvrir les étapes du rituel pas à pas.",
      matinTab: "Routine Matin",
      soirTab: "Routine Soir",
      stepCounter: "Étape {current} sur 4",
      morningSteps: [
        {
          num: "01",
          stepLabel: "Étape 1 • Nettoyage",
          title: "Nettoyage Pores & Douceur",
          desc: "Nettoie délicatement le visage avec une mousse onctueuse pour éliminer l'excès de sébum sans assécher.",
          tag: "Nettoyage Matin",
        },
        {
          num: "02",
          stepLabel: "Étape 2 • Sérum Actif",
          title: "Régulation & Éclat",
          desc: "Quelques gouttes pour réguler la brillance, affiner le grain de peau et prévenir les imperfections.",
          tag: "Anti-Sébum",
        },
        {
          num: "03",
          stepLabel: "Étape 3 • Hydratation",
          title: "Hydratation & Barrière",
          desc: "Crème apaisante qui restaure la barrière protectrice cutanée et calme immédiatement les rougeurs.",
          tag: "Apaisant 345",
        },
        {
          num: "04",
          stepLabel: "Étape 4 • Protection UV",
          title: "Protection UV Invisible",
          desc: "Écran solaire léger à l'acide hyaluronique sans traces blanches pour protéger toute la journée.",
          tag: "SPF50+ PA++++",
        },
      ],
      eveningSteps: [
        {
          num: "01",
          stepLabel: "Étape 1 • Double Nettoyage",
          title: "Nettoyage Profond Nocturne",
          desc: "Élimine la pollution, les impuretés et les résidus de crème solaire accumulés durant la journée.",
          tag: "Purification",
        },
        {
          num: "02",
          stepLabel: "Étape 2 • Sérum Actif",
          title: "Anti-Taches & Uniformité",
          desc: "Agit durant la nuit pour atténuer visiblement les taches pigmentaires et homogénéiser le teint.",
          tag: "Teint Uni",
        },
        {
          num: "03",
          stepLabel: "Étape 3 • Rénovation",
          title: "Lifting & Rénovation Cellulaire",
          desc: "Soin anti-âge concentré au rétinol qui stimule le renouvellement cellulaire et raffermit les traits.",
          tag: "Anti-Âge Rétinol",
        },
        {
          num: "04",
          stepLabel: "Étape 4 • Nutrition",
          title: "Réparation & Nutrition Nuit",
          desc: "Couche protectrice qui scelle l'hydratation et permet à la peau de se régénérer pendant le sommeil.",
          tag: "Régénération Nuit",
        },
      ],
    },
    order: {
      badge: "Offre Spéciale Limitée",
      titlePrefix: "Commandez Votre",
      titleHighlight: "Pack Skincare",
      subtitle:
        "Profitez de la livraison gratuite partout au Maroc. Payez uniquement en espèces quand vous recevez votre colis entre vos mains.",
      form: {
        fullNameLabel: "Nom et Prénom",
        fullNamePlaceholder: "Ex: Salma Mansouri",
        phoneLabel: "Numéro de Téléphone (10 chiffres)",
        phonePlaceholder: "Ex: 06 12 34 56 78",
        phoneHint: "Format requis : 10 chiffres (commençant par 06, 07 ou 05)",
        cityLabel: "Ville de Livraison",
        citySelectDefault: "-- Sélectionnez votre ville --",
        otherCityOption: "Autre ville",
        customCityPlaceholder: "Précisez votre ville...",
        submitBtn: "Confirmer Ma Commande (1300 DH)",
        submitting: "Validation en cours...",
        priceNote: "Paiement en espèces à la livraison • Livraison 100% offerte",
      },
      trust: {
        freeShipping: "Livraison 0 DH",
        shippingDelay: "24h - 48h",
        cod: "Paiement COD",
        codSub: "À la livraison",
        original: "100% Original",
        originalSub: "Certifié",
      },
      errors: {
        fullNameRequired: "Veuillez renseigner votre nom et prénom.",
        phoneRequired: "Veuillez renseigner votre numéro de téléphone.",
        phoneTooShort: "Le numéro doit comporter exactement 10 chiffres.",
        phoneTooLong: "Le numéro ne doit pas dépasser 10 chiffres.",
        phoneInvalid: "Veuillez entrer un numéro valide de 10 chiffres (ex: 06 12 34 56 78).",
        cityRequired: "Veuillez choisir ou indiquer votre ville.",
      },
      success: {
        badge: "Commande Enregistrée",
        thankYou: "Merci",
        desc: "Votre commande du Pack Skincare a été enregistrée avec succès. Notre équipe vous appellera dans les plus brefs délais pour confirmer l'expédition.",
        client: "Client :",
        phone: "Téléphone :",
        city: "Ville :",
        totalToPay: "Total à payer à la livraison :",
        freeShipping: "Gratuite (24h-48h)",
        confirmWhatsapp: "Confirmer sur WhatsApp",
        newOrder: "Nouvelle Commande",
      },
    },
    footer: {
      slogan: "Votre rituel beauté coréen d'exception, chez vous au Maroc.",
      desc: "Vinilia réunit les soins les plus réputés de la K-Beauty pour vous offrir des résultats visibles : grain de peau affiné, éclat naturel et protection durable.",
      quickLinksTitle: "Navigation Rapide",
      customerServiceTitle: "Service Client & Conseil",
      customerServiceText:
        "Une question sur votre routine ou votre livraison ? Notre équipe dédiée est à votre écoute 7j/7 pour vous accompagner.",
      copyright: "© 2026 Vinilia Beauty & Skincare. Tous droits réservés.",
      badge1: "Produits 100% Authentiques",
      badge2: "Livraison Partout au Maroc",
      badge3: "Paiement à la Réception",
    },
    floatingButton: {
      order: "Commander le Pack",
      price: "1300 DH",
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      products: "المنتجات الستة",
      gift: "هدية الباك",
      routine: "الروتين",
      order: "اطلبي الآن",
    },
    hero: {
      badge: "باك العناية الكوري المتكامل • 6 منتجات",
      titlePart1: "اكشفي عن الإشراق النقي",
      titlePart2: ". و .",
      titleHighlight: "شباب ونضارة بشرتك",
      subtitle:
        "الطقس الكوري الاستثنائي لبشرة ناعمة، مرطبة، ومشرقة بالحيوية كل يوم.",
      ctaButton: "اطلبي الباك (1300 درهم)",
      desktopPill1: "المجموعة 1 (المنتجات 1-3)",
      desktopPill2: "المجموعة 2 (المنتجات 4-6)",
    },
    products: {
      titleMain: "المنتجات الـ 6",
      titleBadge: "في الباك",
      subtitle:
        "تشكيلة مختارة بدقة من أقوى المكونات الفعالة المثبتة علمياً لعلاج حب الشباب، تضييق المسام، توحيد لون البشرة ومحاربة علامات التقدم في السن.",
      viewDetails: "التفاصيل",
      modal: {
        close: "إغلاق",
        benefitsLabel: "الفوائد وطريقة التأثير :",
        keyActivesLabel: "المكونات الأساسية :",
        orderCta: "اطلبي هذا المنتج ضمن الباك",
      },
      items: {
        marvis: {
          name: "Jasmin Mint Toothpaste",
          step: "عناية يومية",
          category: "عناية الفم والأسنان • انتعاش الياسمين",
          badge: "ياسمين ونعناع",
          subtitle: "معجون أسنان إيطالي أيقوني يجمع بين عبير زهر الياسمين الفاخر وانتعاش النعناع الحيوي.",
          description:
            "تركيبة إيطالية استثنائية تمزج بين نفحات زهر الياسمين العطرة وانتعاش النعناع المنعش. غني بفلوريد الصوديوم المقوي لمينا الأسنان، والإكسيليتول الطبيعي لمقاومة البكتيريا والترسبات، والسيليكا اللطيفة لتبييض وتنظيف الأسنان بأمان تام مع حماية اللثة.",
          keyActives: [
            "مستخلص زهر الياسمين والنعناع",
            "فلوريد الصوديوم (تقوية المينا ومكافحة التسوس)",
            "إكسيليتول لحماية الفم ومقاومة البكتيريا",
            "سيليكا ميكرونية لتنظيف لطيف وتبييض طبيعي",
          ],
        },
        "sun-serum": {
          name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++",
          step: "المرحلة الصباحية الأخيرة",
          category: "حماية شمسية وترطيب عميق",
          badge: "SPF50+ PA++++",
          subtitle: "واقي شمس سيروم غير مرئي فائق الخفة بالسينتيلا وحمض الهيالورونيك.",
          description:
            "حماية يومية فائقة الفعالية من أشعة الشمس بقوام سيروم مائي خفيف للغاية، شفاف كلياً بدون أي خطوط بيضاء أو ملمس دهني. مدعم بمركب هيالو-سيكا الحصري (سينتيلا أسياتيكا نقية من مدغشقر وحمض الهيالورونيك) والنياسيناميد لتهدئة البشرة، حمايتها وترطيبها بعمق.",
          keyActives: [
            "خلاصة السينتيلا أسياتيكا النقية من مدغشقر",
            "مركب هيالو-سيكا (حمض الهيالورونيك المرطب)",
            "نياسيناميد لتفتيح وتوحيد لون البشرة",
            "فلاتر SPF50+ PA++++ واسعة الطيف وغير مرئية",
          ],
        },
        "cleansing-foam": {
          name: "Madagascar Centella Poremizing Deep Cleansing Foam",
          step: "المرحلة 1 • تنظيف عميق",
          category: "تنظيف المسام وتنقيتها",
          badge: "Deep Cleansing",
          subtitle: "رغوة منظفة غنية بملح الهيمالايا الوردي لتنقية المسام وتضييقها.",
          description:
            "منظف كريمي فاخر غني بملح الهيمالايا الوردي النقي المحتوي على 84 معدناً أساسياً وإنزيم البابايا الطبيعي. يزيل الدهون الزائدة والرواسب من أعماق المسام ويقشر الخلايا الميتة بلطف، مع الحفاظ على ترطيب البشرة ومرونتها بفضل السينتيلا المهدئة.",
          keyActives: [
            "ملح الهيمالايا الوردي النقي (84 معدناً)",
            "خلاصة السينتيلا المهدئة والمضادة للتهيج",
            "إنزيم البابايا المقشر بلطف (Papaïne)",
            "طين الكاولين المنقي لامتصاص الزيوت",
          ],
        },
        "relief-cream": {
          name: "345 Relief Cream",
          step: "مرحلة الترطيب والترميم",
          category: "كريم ترميم حاجز البشرة وآثار الحبوب",
          badge: "ترميم مكثف",
          subtitle: "كريم جل مهدئ ومعالج لآثار الحبوب وغني بالسيراميدات والبانثينول والريسفيراترول.",
          description:
            "عناية جل مجددة فائقة الفعالية مصممة لإعادة بناء حاجز البشرة المتضرر وتفتيح آثار وندبات الحبوب. تجمع تركيبته تركيزاً قوياً من البانثينول (فيتامين B5)، وسيراميدات NP، ونياسيناميد مع مادة الريسفيراترول المضادة للأكسدة لتهدئة الاحمرار فوراً ومنح البشرة مظهراً نضراً وصحياً.",
          keyActives: [
            "بانثينول 10,000 ppm (فيتامين B5)",
            "سيراميدات NP ونياسيناميد",
            "ريسفيراترول (Resvératrol) مضاد للأكسدة",
            "خلاصة السينتيلا والهوتونيا كورداتا",
          ],
        },
        niacinamide: {
          name: "Niacinamide 10% + Zinc 1%",
          step: "مرحلة العلاج وتوحيد اللون",
          category: "سيروم إزالة البقع وتنظيم الدهون",
          badge: "مضاد للبقع والدهون",
          subtitle: "سيروم مكثف لتنظيم إفراز الدهون، تضييق المسام وتوحيد لون البشرة.",
          description:
            "التركيبة العالمية الشهيرة التي تجمع بين تركيز 10% من النياسيناميد النقي (فيتامين B3) و1% من زنك PCA. ينظم إفراز الدهون بدقة، يقلص حجم المسام الواسعة، ويخفف مظهر البقع الداكنة والتصبغات للحصول على بشرة صافية ومشرقة.",
          keyActives: [
            "نياسيناميد نقي 10% (فيتامين B3)",
            "زنك PCA 1% موازن للدهون ومضاد للبثور",
            "تركيبة مائية خفيفة عالية الفعالية",
          ],
        },
        "retinal-shot": {
          name: "Retinol Shot Tightening Booster",
          step: "مرحلة العناية الليلية",
          category: "شد البشرة ومقاومة التجاعيد",
          badge: "مضاد شيخوخة قوي",
          subtitle: "بوستر ليلي بالريتينول النقي وببتيدات ماتريكسيل وتقنية 20,000 مايكرو شوتس لشد البشرة.",
          description:
            "عناية ليلية متطورة تجمع بين 0.03% من الريتينول النقي، و3% من ببتيدات ماتريكسيل® 3000 المجددة للكولاجين، و1% من البانثينول المهدئ. مدعومة بتقنية 20,000 مايكرو شوتس الحيوية التي تعزز وصول المكونات الفعالة لعمق البشرة، مما يشد ملامح الوجه وينعم الخطوط الدقيقة والتجاعيد بفعالية.",
          keyActives: [
            "ريتينول نقي 0.03%",
            "ببتيدات MATRIXYL® 3000 بتركيز 3%",
            "بانثينول 1% مهدئ ومضاد للتحسس",
            "تقنية 20,000 مايكرو شوتس (Micro-Shots)",
          ],
        },
      },
    },
    spotlight: {
      badge: "هدية حصرية مجانية",
      titleLine1: "علبة الهدايا الفاخرة",
      titleHighlight: "مهداة مع الباك",
      desc: "مع كل طلبية لباك العناية بالبشرة اليوم، ستصلك مجاناً هذه العلبة الفاخرة للعناية المكثفة بالشعر. روتين متكامل يحتوي على شامبو الكافيين المقاوم للتساقط، أمبولات تقوية الجذور والسيروم النباتي المغذي للشعر من العمق.",
      ctaButton: "اطلبي الباك + الهدية مجاناً",
      floatingBadge: "هدية مجانية • القيمة 450 درهم",
    },
    routine: {
      badge: "دليل الاستخدام اليومي",
      titlePrefix: "روتين",
      titleHighlight: "العناية بالبشرة",
      subtitle: "اسحبي لاكتشاف خطوات الروتين خطوة بخطوة.",
      matinTab: "روتين الصباح",
      soirTab: "روتين المساء",
      stepCounter: "المرحلة {current} من 4",
      morningSteps: [
        {
          num: "01",
          stepLabel: "المرحلة 1 • تنظيف لطيف",
          title: "تنظيف المسام ونعومة الملمس",
          desc: "تنظيف الوجه بلطف برغوة غنية وناعمة لإزالة الدهون الزائدة الصباحية دون التسبب في الجفاف.",
          tag: "غسول الصباح",
        },
        {
          num: "02",
          stepLabel: "المرحلة 2 • سيروم فعال",
          title: "تنظيم الدهون وإشراق الوجه",
          desc: "قطرات قليلة لتنظيم لمعان البشرة، تقليص حجم المسام والوقاية من ظهور الشوائب.",
          tag: "ضبط الدهون",
        },
        {
          num: "03",
          stepLabel: "المرحلة 3 • ترطيب وحماية",
          title: "ترطيب عميق وتقوية الحاجز",
          desc: "كريم مهدئ يعمل على ترميم الحاجز الواقي للبشرة وتهدئة أي احمرار أو تهيج فوراً.",
          tag: "مهدئ 345",
        },
        {
          num: "04",
          stepLabel: "المرحلة 4 • حماية من الشمس",
          title: "حماية غير مرئية من الأشعة UV",
          desc: "واقي شمس خفيف بحمض الهيالورونيك لا يترك أي أثر أبيض ليحمي بشرتك طيلة اليوم.",
          tag: "SPF50+ PA++++",
        },
      ],
      eveningSteps: [
        {
          num: "01",
          stepLabel: "المرحلة 1 • تنظيف عميق",
          title: "تنقية ليلية للمسام",
          desc: "يزيل آثار التلوث والشوائب وبقايا واقي الشمس المتراكمة خلال النهار.",
          tag: "تنقية المسام",
        },
        {
          num: "02",
          stepLabel: "المرحلة 2 • سيروم معالج",
          title: "إزالة التصبغات وتوحيد اللون",
          desc: "يعمل أثناء الليل على تفتيح التصبغات والبقع الداكنة وتوحيد لون البشرة.",
          tag: "بشرة موحدة",
        },
        {
          num: "03",
          stepLabel: "المرحلة 3 • تجديد خلوي",
          title: "شد الوجه وتجديد الخلايا",
          desc: "عناية ليلية مركزة بالريتينول تحفز الكولاجين وتجدد خلايا البشرة لشد الملامح.",
          tag: "ريتينول مضاد للتجاعيد",
        },
        {
          num: "04",
          stepLabel: "المرحلة 4 • تغذية وترميم",
          title: "ترميم وتغذية ليلية مكثفة",
          desc: "طبقة واقية تحبس الرطوبة وتساعد البشرة على التعافي والتجدد خلال النوم.",
          tag: "تجدد ليلي",
        },
      ],
    },
    order: {
      badge: "عرض خاص ومحدود",
      titlePrefix: "اطلبي الآن",
      titleHighlight: "باك العناية بالبشرة",
      subtitle:
        "استفيدي من التوصيل المجاني إلى جميع مدن المغرب. الدفع نقداً عند استلام طلبيتك بين يديك.",
      form: {
        fullNameLabel: "الاسم الكامل (الاسم والنسب)",
        fullNamePlaceholder: "مثال: سلمى المنصوري",
        phoneLabel: "رقم الهاتف (10 أرقام)",
        phonePlaceholder: "مثال: 06 12 34 56 78",
        phoneHint: "المطلوب: 10 أرقام تبدأ بـ 06 أو 07 أو 05",
        cityLabel: "مدينة التوصيل",
        citySelectDefault: "-- اختاري مدينتك --",
        otherCityOption: "مدينة أخرى",
        customCityPlaceholder: "اكتبي اسم مدينتك هنا...",
        submitBtn: "تأكيد الطلب الآن (1300 درهم)",
        submitting: "جاري تسجيل طلبك...",
        priceNote: "الدفع نقداً عند الاستلام • التوصيل مجاني 100%",
      },
      trust: {
        freeShipping: "توصيل 0 درهم",
        shippingDelay: "24 - 48 ساعة",
        cod: "الدفع عند الاستلام",
        codSub: "نقداً بعد المعاينة",
        original: "أصلي 100%",
        originalSub: "مضمون ومرخص",
      },
      errors: {
        fullNameRequired: "يرجى إدخال الاسم والنسب.",
        phoneRequired: "يرجى إدخال رقم الهاتف.",
        phoneTooShort: "رقم الهاتف يجب أن يتكون من 10 أرقام بالضبط.",
        phoneTooLong: "رقم الهاتف لا يجب أن يتجاوز 10 أرقام.",
        phoneInvalid: "يرجى إدخال رقم هاتف صحيح من 10 أرقام (مثال: 0612345678).",
        cityRequired: "يرجى اختيار أو كتابة مدينتك.",
      },
      success: {
        badge: "تم تسجيل الطلب بنجاح",
        thankYou: "شكراً لكِ",
        desc: "تم تسجيل طلبك لباك العناية بالبشرة بنجاح. سيتصل بك فريقنا في أقرب وقت لتأكيد موعد التسليم.",
        client: "الزبونة :",
        phone: "الهاتف :",
        city: "المدينة :",
        totalToPay: "المجموع المؤدى عند الاستلام :",
        freeShipping: "مجاني (خلال 24-48 ساعة)",
        confirmWhatsapp: "تأكيد فوري عبر واتساب",
        newOrder: "طلب جديد",
      },
    },
    footer: {
      slogan: "طقس الجمال الكوري الأصيل، يصلك أينما كنتِ في المغرب.",
      desc: "تجمع فينيليا أفضل مستحضرات العناية الكورية المعتمدة لتمنحك نتائج حقيقية وملموسة: مسام ملساء، إشراقة طبيعية وحماية تدوم طويلاً.",
      quickLinksTitle: "روابط سريعة",
      customerServiceTitle: "خدمة الزبناء والاستشارة",
      customerServiceText:
        "هل لديكِ أي استفسار حول روتينك أو موعد التوصيل؟ فريقنا في خدمتك طيلة أيام الأسبوع لمساعدتك والإجابة على كل أسئلتك.",
      copyright: "© 2026 فينيليا بيوتي. جميع الحقوق محفوظة.",
      badge1: "منتجات أصلية 100%",
      badge2: "توصيل لجميع مدن المغرب",
      badge3: "الدفع عند الاستلام",
    },
    floatingButton: {
      order: "اطلبي الباك",
      price: "1300 درهم",
    },
  },
};
