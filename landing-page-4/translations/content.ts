import type { Locale } from "@/context/LanguageContext";

export interface RoutineStepTrans {
  num: string;
  stepLabel: string;
  title: string;
  desc: string;
  tag: string;
  volume: string;
  id: string;
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
    why: string;
    routine: string;
    products: string;
    gift: string;
    order: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    titleHighlight: string;
    subtitle: string;
    ctaButton: string;
    trust1: string;
    trust2: string;
    trust3: string;
    giftTag: string;
  };
  why: {
    badge: string;
    title: string;
    subtitle: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  routine: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    detailButton: string;
    orderButton: string;
    steps: RoutineStepTrans[];
    modal: {
      close: string;
      benefitsLabel: string;
      keyActivesLabel: string;
      orderCta: string;
    };
  };
  gift: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    desc: string;
    ctaButton: string;
    floatingBadge: string;
    points: string[];
  };
  order: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    packBadge: string;
    freeDeliveryTag: string;
    codTag: string;
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
      quantityLabel: string;
      quantityOption1: string;
      quantityOption2: string;
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
    description: string;
    quickLinks: string;
    contactUs: string;
    guarantee: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationSet> = {
  fr: {
    navbar: {
      home: "Accueil",
      why: "Pourquoi ce pack",
      routine: "Les 6 Soins du Pack",
      products: "Les 6 Soins",
      gift: "Cadeau Offert",
      order: "Commander",
    },
    hero: {
      badge: "LE PACK SKINCARE COMPLET",
      titlePart1: "Une peau saine,",
      titlePart2: "éclatante,",
      titleHighlight: "naturellement",
      subtitle:
        "6 soins essentiels pour nettoyer, hydrater, protéger et révéler la beauté naturelle de votre peau. Le tout dans un seul pack, avec un cadeau de luxe offert.",
      ctaButton: "Commander le Pack (1 349 DH)",
      trust1: "Ingrédients d'origine naturelle",
      trust2: "Convient à tous types de peau",
      trust3: "Livraison gratuite partout au Maroc",
      giftTag: "Votre cadeau : Soin brésilien Sol de Janeiro offert",
    },
    why: {
      badge: "POURQUOI CE PACK ?",
      title: "Une routine complète pour une peau saine et lumineuse",
      subtitle:
        "Spécialement formulé pour répondre à tous les besoins fondamentaux de l'épiderme en 6 étapes synergiques.",
      features: [
        {
          title: "Hydrate en profondeur",
          desc: "Retient l'eau au cœur des cellules pour une peau douce, fraîche et rebondie toute la journée.",
        },
        {
          title: "Renforce la barrière",
          desc: "Répare et fortifie le film hydrolipidique protecteur contre les agressions du quotidien.",
        },
        {
          title: "Réduit les signes de l'âge",
          desc: "Relance la synthèse naturelle de collagène et estompe visiblement rides et ridules.",
        },
        {
          title: "Unifie le teint & apaise",
          desc: "Corrige les rougeurs, l'hyperpigmentation et les marques pour révéler un éclat sans défaut.",
        },
        {
          title: "Protège durablement",
          desc: "Défense solaire SPF 50+ et antioxydante face aux UV, à la pollution et au stress.",
        },
      ],
    },
    routine: {
      badge: "LA ROUTINE EN 6 ÉTAPES",
      titlePrefix: "6 produits, 1 seule mission :",
      titleHighlight: "votre peau parfaite",
      subtitle:
        "Faites défiler pour découvrir les 6 soins d'exception qui composent votre routine quotidienne.",
      detailButton: "Voir Détails & Actifs",
      orderButton: "Commander ce Pack",
      steps: [
        {
          id: "laroche-posay",
          num: "1",
          stepLabel: "Étape 1 : Nettoyer",
          title: "Effaclar Gel Moussant",
          desc: "Purifie en douceur, régule l'excès de sébum et rééquilibre le microbiome cutané.",
          tag: "La Roche-Posay",
          volume: "200 ml",
        },
        {
          id: "anua-azelaic",
          num: "2",
          stepLabel: "Étape 2 : Apaiser & Traiter",
          title: "Azelaic Acid 10+ Hyaluron",
          desc: "Sérum apaisant à l'Acide Azélaïque 10% qui calme instantanément les rougeurs et l'acné.",
          tag: "Anua",
          volume: "30 ml",
        },
        {
          id: "axis-y-eye-serum",
          num: "3",
          stepLabel: "Étape 3 : Regard",
          title: "Vegan Collagen Eye Serum",
          desc: "Applicateur bille fraîche roll-on qui décongestionne les poches et lisse les cernes.",
          tag: "AXIS-Y",
          volume: "15 ml",
        },
        {
          id: "embryolisse-lait-creme",
          num: "4",
          stepLabel: "Étape 4 : Hydrater & Nourrir",
          title: "Lait-Crème Concentré",
          desc: "Soin culte multi-fonctions qui nourrit intensément et répare la barrière cutanée.",
          tag: "Laboratoires Embryolisse",
          volume: "75 ml",
        },
        {
          id: "vaseline-gluta-hya",
          num: "5",
          stepLabel: "Étape 5 : Illuminer",
          title: "Gluta-Hya Dewy Radiance",
          desc: "Technologie sérum burst 10X plus puissante que la Vitamine C pour un glow incomparable.",
          tag: "Vaseline",
          volume: "200 ml",
        },
        {
          id: "seoul-1988-sun",
          num: "6",
          stepLabel: "Étape 6 : Protéger & Renforcer",
          title: "SEOUL 1988 SUN : Pine Tree",
          desc: "Écran solaire coréen SPF 50+ PA++++ invisible aux céramides et extrait de pin apaisant.",
          tag: "K-SECRET",
          volume: "50 ml",
        },
      ],
      modal: {
        close: "Fermer",
        benefitsLabel: "Bienfaits & Actions Clés",
        keyActivesLabel: "Actifs Clés de la Formule",
        orderCta: "Commander ce Pack Complet (1 349 DH)",
      },
    },
    gift: {
      badge: "OFFRE SPÉCIALE EXCLUSIVE",
      titleLine1: "Votre cadeau bien-être",
      titleHighlight: "offert avec le pack",
      desc:
        "Pour toute commande du pack aujourd'hui, recevez gratuitement le soin brésilien culte Sol de Janeiro Brazilian Bum Bum Cream dans son élégant coffret avec ruban bleu de luxe. Un pur moment d'évasion et de douceur pour votre corps.",
      ctaButton: "Ajouter au panier & Profiter du cadeau",
      floatingBadge: "Cadeau 100% Offert",
      points: [
        "Soin corporel d'exception au guarana & beurre de cupuaçu",
        "Fragrance emblématique Cheirosa 62 caramel salé & pistache",
        "Coffret de luxe et ruban bleu satiné inclus gratuitement",
      ],
    },
    order: {
      badge: "COMMANDE EXPRESS MAROC",
      titlePrefix: "Recevez votre pack chez vous",
      titleHighlight: "Paiement à la Livraison",
      subtitle:
        "Remplissez simplement vos coordonnées ci-dessous. Notre équipe vous contactera par téléphone pour confirmer et expédier votre colis sous 24h à 48h.",
      packBadge: "Pack 6 Soins + Cadeau Sol de Janeiro Offert",
      freeDeliveryTag: "Livraison 100% Gratuite",
      codTag: "Paiement en Espèces à la Réception",
      form: {
        fullNameLabel: "Nom et Prénom",
        fullNamePlaceholder: "Ex: Salma Bennani",
        phoneLabel: "Numéro de Téléphone (WhatsApp)",
        phonePlaceholder: "Ex: 06 12 34 56 78",
        phoneHint: "Nous vous appellerons pour confirmer l'adresse de livraison.",
        cityLabel: "Votre Ville",
        citySelectDefault: "Sélectionnez votre ville",
        otherCityOption: "Autre ville (écrire manuellement)",
        customCityPlaceholder: "Tapez le nom de votre ville...",
        quantityLabel: "Quantité souhaitée",
        quantityOption1: "1 Pack (1 300 DH - Livraison Gratuite)",
        quantityOption2: "2 Packs (2 390 DH - Économisez 210 DH de plus)",
        submitBtn: "Confirmer Ma Commande",
        submitting: "Validation en cours...",
        priceNote: "Prix total tout compris avec livraison offerte et cadeau inclus.",
      },
      trust: {
        freeShipping: "Livraison Gratuite",
        shippingDelay: "Partout au Maroc en 24h à 48h",
        cod: "Paiement à la Livraison",
        codSub: "Réglez en espèces à la réception de votre colis",
        original: "100% Authentique",
        originalSub: "Produits originaux certifiés scellés",
      },
      errors: {
        fullNameRequired: "Veuillez entrer votre nom et prénom complet.",
        phoneRequired: "Veuillez renseigner votre numéro de téléphone.",
        phoneTooShort: "Le numéro de téléphone est trop court (10 chiffres requis).",
        phoneTooLong: "Le numéro de téléphone est trop long.",
        phoneInvalid: "Numéro de téléphone invalide. Veuillez vérifier votre saisie.",
        cityRequired: "Veuillez sélectionner ou renseigner votre ville.",
      },
      success: {
        badge: "Commande Enregistrée avec Succès !",
        thankYou: "Merci pour votre confiance !",
        desc: "Votre commande du Pack Skincare PureGlow a bien été prise en compte. Notre service client vous appellera sous peu pour confirmer l'expédition.",
        client: "Client :",
        phone: "Téléphone :",
        city: "Ville :",
        totalToPay: "Total à régler à la livraison :",
        freeShipping: "Livraison offerte (0 DH)",
        confirmWhatsapp: "Accélérer la confirmation sur WhatsApp",
        newOrder: "Passer une autre commande",
      },
    },
    footer: {
      slogan: "Beauté naturelle, chaque jour ♡",
      description:
        "La quintessence des soins coréens et de la dermatologie de pointe réunis pour sublimer votre peau au quotidien.",
      quickLinks: "Liens Rapides",
      contactUs: "Service Client",
      guarantee: "Garantie Authenticité & Sécurité",
      copyright: "© 2026 PureGlow Skincare. Tous droits réservés.",
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      why: "علاش هاد الباك",
      routine: "منتجات الباك الـ 6",
      products: "المنتجات",
      gift: "الهدية المهداة",
      order: "طلب الآن",
    },
    hero: {
      badge: "الباك الكامل للعناية بالبشرة",
      titlePart1: "بشرة صحية،",
      titlePart2: "مشرقة،",
      titleHighlight: "بشكل طبيعي",
      subtitle:
        "6 منتجات أساسية للتنظيف، الترطيب، الحماية وإبراز الجمال الطبيعي لبشرتك. كلشي فـ باك واحد متكامل، مع هدية فاخرة مهداة بالمجان.",
      ctaButton: "طلب الباك (1 349 درهم)",
      trust1: "مكونات طبيعية وأصلية 100%",
      trust2: "مناسب لجميع أنواع البشرة",
      trust3: "توصيل مجاني وسريع لجميع مدن المغرب",
      giftTag: "هديتك: كريم سول دي جانيرو البرازيلي الفاخر بالمجان",
    },
    why: {
      badge: "علاش تختاري هاد الباك ؟",
      title: "روتين متكامل لبشرة صحية، نضرة ومشرقة",
      subtitle:
        "تركيبة علمية دقيقة كتجمع بين العناية الكورية والطبية باش تعطي لبشرتك كل ما كتحتاج فـ 6 خطوات متناسقة.",
      features: [
        {
          title: "ترطيب عميق ومكثف",
          desc: "كيحبس الرطوبة داخل خلايا البشرة باش تبقا ناعمة، منتعشة ورطبة طوال اليوم.",
        },
        {
          title: "تقوية حاجز البشرة",
          desc: "كيعالج ويقوي الحاجز الدهني الواقي للبشرة ويحميها من التهيجات والجفاف.",
        },
        {
          title: "محاربة علامات التقدم فالسن",
          desc: "كيحفز إنتاج الكولاجين الطبيعي وكيخفف الخطوط التعبيرية والتجاعيد بشكل ملحوظ.",
        },
        {
          title: "توحيد لون البشرة وتهدئة الاحمرار",
          desc: "حمض الأزيليك كيقضي على الاحمرار وآثار الحبوب وكيمنحك بشرة صافية وموحدة.",
        },
        {
          title: "حماية فائقة من الشمس",
          desc: "حماية SPF 50+ ومضادات أكسدة كتحمي من أشعة الشمس، التلوث والعوامل الخارجية.",
        },
      ],
    },
    routine: {
      badge: "الروتين فـ 6 خطوات",
      titlePrefix: "6 منتجات، هدف واحد :",
      titleHighlight: "بشرة مثالية بدون عيوب",
      subtitle:
        "دوزي المنتجات لاكتشاف تفاصيل ومكونات كل منتج في روتينك اليومي.",
      detailButton: "التفاصيل والمكونات",
      orderButton: "طلب هذا الباك",
      steps: [
        {
          id: "laroche-posay",
          num: "1",
          stepLabel: "الخطوة 1 : التنظيف",
          title: "إيفاكلار جيل منظف",
          desc: "ينظف بلطف، ينظم إفراز الدهون ويعيد التوازن البيولوجي للبشرة.",
          tag: "لاروش بوزيه",
          volume: "200 مل",
        },
        {
          id: "anua-azelaic",
          num: "2",
          stepLabel: "الخطوة 2 : التهدئة والعلاج",
          title: "حمض الأزيليك 10+ هيالورون",
          desc: "سيروم كوري فعال بحمض الأزيليك 10% لتهدئة الاحمرار وإزالة آثار الحبوب.",
          tag: "أنوا",
          volume: "30 مل",
        },
        {
          id: "axis-y-eye-serum",
          num: "3",
          stepLabel: "الخطوة 3 : محيط العينين",
          title: "سيروم الكولاجين للعينين",
          desc: "برأس رول-أون معدني بارد كيحيد الانتفاخات وكيقلل الهالات والتجاعيد.",
          tag: "أكسيس واي",
          volume: "15 مل",
        },
        {
          id: "embryolisse-lait-creme",
          num: "4",
          stepLabel: "الخطوة 4 : الترطيب والتغذية",
          title: "ليه كريم كونصونطري",
          desc: "كريم فرنسي شهير يغذي بعمق، يرمم حاجز البشرة ويمنح نعومة مخملية.",
          tag: "إمبريوليس",
          volume: "75 مل",
        },
        {
          id: "vaseline-gluta-hya",
          num: "5",
          stepLabel: "الخطوة 5 : النضارة والإشراق",
          title: "جلوتا-هيا ديوي راديانس",
          desc: "سيروم بورست خفيف أسرع بـ 10 مرات من فيتامين سي لإنعاش البشرة وإعطاء اللمعان.",
          tag: "فازلين",
          volume: "200 مل",
        },
        {
          id: "seoul-1988-sun",
          num: "6",
          stepLabel: "الخطوة 6 : الحماية والترميم",
          title: "واقي الشمس سيول 1988",
          desc: "واقي شمس كوري خفيف SPF 50+ بخلاصة الصنوبر والسيراميد لتقوية حاجز البشرة.",
          tag: "كي-سيكريت",
          volume: "50 مل",
        },
      ],
      modal: {
        close: "إغلاق",
        benefitsLabel: "الفوائد والنتائج الرئيسية",
        keyActivesLabel: "المكونات الفعالة النشطة",
        orderCta: "طلب هذا الباك المتكامل (1 349 درهم)",
      },
    },
    gift: {
      badge: "عرض خاص وحصري اليوم",
      titleLine1: "هديتك الفاخرة",
      titleHighlight: "مهداة بالمجان مع الباك",
      desc:
        "مع كل طلبية للباك اليوم، غادي تحصلي بالمجان على كريم سول دي جانيرو البرازيلي الشهير عالمياً داخل علبة هدية فاخرة برباط أزرق سماوي أنيق. لمسة دلال ونعومة فائقة لجسمك برائحة الكراميل والفستق التي لا تقاوم.",
      ctaButton: "إضافة للطلب والاستفادة من الهدية",
      floatingBadge: "هدية 100% بالمجان",
      points: [
        "كريم الجسم البرازيلي لشد وتنعيم البشرة بالجوارانا وزبدة الكابواسو",
        "العطر الأيقوني الشهير Cheirosa 62 برائحة الكراميل المملح والفستق",
        "علبة هدايا فاخرة برباط أزرق ساتان مهدات بدون أي تكلفة إضافية",
      ],
    },
    order: {
      badge: "طلبية سريعة لجميع مدن المغرب",
      titlePrefix: "استلمي الباك ديالك حتى لباب الدار",
      titleHighlight: "والخلاص حتى تعايني السلعة",
      subtitle:
        "عمّري المعلومات ديالك فالاستمارة أسفله، وغادي يتصل بيك فريق خدمة الزبناء ديالنا لتأكيد العنوان وإرسال الطلبية ديالك فـ 24 حتى 48 ساعة.",
      packBadge: "الباك الكامل 6 منتجات + هدية سول دي جانيرو بالمجان",
      freeDeliveryTag: "التوصيل بالمجان 100%",
      codTag: "الدفع نقداً عند الاستلام (COD)",
      form: {
        fullNameLabel: "الاسم الكامل",
        fullNamePlaceholder: "مثال: مريم العلمي",
        phoneLabel: "رقم الهاتف (الواتساب)",
        phonePlaceholder: "مثال: 06 12 34 56 78",
        phoneHint: "غادي نتصلوا بيك هاتفياً لتأكيد العنوان والتوصيل.",
        cityLabel: "المدينة ديالك",
        citySelectDefault: "اختاري المدينة ديالك",
        otherCityOption: "مدينة أخرى (كتابة يدوية)",
        customCityPlaceholder: "كتبي سمية المدينة ديالك هنا...",
        quantityLabel: "الكمية المطلوبة",
        quantityOption1: "باك واحد (1 300 درهم - توصيل فابور)",
        quantityOption2: "2 باكات (2 390 درهم - وفري 210 درهم إضافية)",
        submitBtn: "تأكيد الطلب ديالي دابا",
        submitting: "جاري تسجيل الطلب...",
        priceNote: "السعر شامل كل شيء مع التوصيل المجاني والهدية المهداة.",
      },
      trust: {
        freeShipping: "توصيل مجاني",
        shippingDelay: "لجميع مدن المغرب فـ 24 إلى 48 ساعة",
        cod: "الدفع عند الاستلام",
        codSub: "ما تخلصي حتى توصلك السلعة وتعاينيها",
        original: "منتجات أصلية 100%",
        originalSub: "منتجات موثوقة ومختومة من الشركات المصنعة",
      },
      errors: {
        fullNameRequired: "يرجى كتابة الاسم الكامل.",
        phoneRequired: "يرجى إدخال رقم الهاتف للتواصل.",
        phoneTooShort: "رقم الهاتف غير مكتمل (10 أرقام مطلوبة).",
        phoneTooLong: "رقم الهاتف أطول من اللازم.",
        phoneInvalid: "رقم الهاتف غير صحيح، يرجى التأكد من الرقم.",
        cityRequired: "يرجى اختيار أو كتابة المدينة ديالك.",
      },
      success: {
        badge: "تم تسجيل الطلب ديالك بنجاح !",
        thankYou: "شكراً على ثقتك بنا !",
        desc: "الطلب ديالك للباك تسجل بنجاح فـ النظام ديالنا. فريق خدمة الزبناء غادي يتصل بيك فـ أقرب وقت لتأكيد موعد التسليم.",
        client: "الزبون :",
        phone: "الهاتف :",
        city: "المدينة :",
        totalToPay: "المبلغ الإجمالي عند الاستلام :",
        freeShipping: "التوصيل مجاني (0 درهم)",
        confirmWhatsapp: "تأكيد فوري عبر الواتساب",
        newOrder: "طلب باك آخر",
      },
    },
    footer: {
      slogan: "جمال طبيعي، كل يوم ♡",
      description:
        "أفضل ما جادت به العناية الكورية والطبية المتطورة مجتمعة لتمنح بشرتك إشراقة وصحة تدوم طويلاً.",
      quickLinks: "روابط سريعة",
      contactUs: "خدمة الزبناء",
      guarantee: "ضمان الجودة والأصالة",
      copyright: "© 2026 PureGlow Skincare. جميع الحقوق محفوظة.",
    },
  },
};
