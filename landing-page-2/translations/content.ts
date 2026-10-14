import type { Locale } from "@/context/LanguageContext";

interface TranslationSet {
  navbar: {
    home: string;
    pack: string;
    products: string;
    routine: string;
    order: string;
    orderPack: string;
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
    trust1Sub: string;
    trust2Title: string;
    trust2Sub: string;
    trust3Title: string;
    trust3Sub: string;
  };
  ticker: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
  };
  packIntro: {
    badge: string;
    title: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
  };
  productsSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    closeModal: string;
    keyActives: string;
    benefitsTitle: string;
    usageTitle: string;
  };
  routineSection: {
    badge: string;
    title: string;
    subtitle: string;
    morningTab: string;
    nightTab: string;
    morningTitle: string;
    morningDesc: string;
    nightTitle: string;
    nightDesc: string;
    learnMore: string;
    stepBadge: string;
  };
  giftsSection: {
    badge: string;
    title: string;
    subtitle: string;
    gift1Tag: string;
    gift2Tag: string;
    valueLabel: string;
    totalValueBadge: string;
    includedNote: string;
    offered: string;
  };
  order: {
    badge: string;
    title: string;
    subtitle: string;
    recap: {
      packTitle: string;
      packDesc: string;
      giftsTitle: string;
      freeGiftLabel: string;
      totalTitle: string;
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
      cityPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      phoneHelper: string;
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
      article: string;
      articleValue: string;
      total: string;
      shippingFree: string;
      orderNew: string;
    };
  };
  footer: {
    brandTag: string;
    description: string;
    quickLinks: string;
    guarantees: string;
    followUs: string;
    copyright: string;
    tiktok: string;
    instagram: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationSet> = {
  fr: {
    navbar: {
      home: "Accueil",
      pack: "Le Pack",
      products: "Les Produits",
      routine: "La Routine",
      order: "Commander",
      orderPack: "Commander le Pack",
    },
    hero: {
      badge: "Rituel Coréen Haute Performance",
      titlePart1: "Le Pack ",
      titleHighlight: "Seoul 1988",
      titlePart2: " au Rétinal & Ginseng",
      subtitle:
        "6 soins coréens d'exception formulés au Rétinal Liposomique, Ginseng Noir et Mucine d'Escargot pour une peau lisse, ferme et radieuse. + 2 Cadeaux offerts.",
      giftBadge: "2 Cadeaux Culte Offerts : Masque Fino + Vaseline Lip",
      ctaButton: "Commander Maintenant",
      originalPrice: "1 900 DH",
      specialPrice: "1 500 DH",
      trust1Title: "100% Authentique",
      trust1Sub: "Import direct de Corée & Japon",
      trust2Title: "Livraison 24-48h",
      trust2Sub: "Partout au Maroc",
      trust3Title: "Paiement à la Livraison",
      trust3Sub: "Vérifiez avant de payer",
    },
    ticker: {
      item1: "Produits 100% Authentiques de Corée",
      item2: "Livraison Rapide 24/48h Gratuite",
      item3: "Paiement Sécurisé à la Réception",
      item4: "2 Cadeaux de Luxe Inclus dans Chaque Commande",
    },
    packIntro: {
      badge: "Pourquoi Choisir Seoul 1988 ?",
      title: "L'Alliance de la Tradition Hanbang & de la Science Moderne",
      subtitle:
        "Inspirée de la pharmacopée coréenne ancestrale et sublimée par la technologie liposomique de pointe.",
      feature1Title: "Rétinal Liposomique 2%",
      feature1Desc: "11x plus rapide que le rétinol classique, encapsulé pour une tolérance parfaite sans rougeurs.",
      feature2Title: "Ginseng Noir Précieux",
      feature2Desc: "Puissant antioxydant fermenté qui stimule le collagène et raffermit les traits en profondeur.",
      feature3Title: "Mucine d'Escargot 93%",
      feature3Desc: "Régénération cutanée intense et hydratation pour un effet Glass Skin visible dès la première semaine.",
      feature4Title: "Céramides & Pin",
      feature4Desc: "Protection solaire haute efficacité SPF 50+ qui renforce la barrière et apaise instantanément.",
    },
    productsSection: {
      badge: "Les 6 Soins du Pack",
      title: "Une Routine Complète pour une Peau Parfaite",
      subtitle: "Chaque produit a été sélectionné pour agir en synergie avec les autres.",
      viewDetails: "Voir la fiche détaillée",
      closeModal: "Fermer",
      keyActives: "Actifs Clés",
      benefitsTitle: "Bienfaits Majeurs",
      usageTitle: "Conseils d'Utilisation",
    },
    routineSection: {
      badge: "Protocole d'Application",
      title: "Votre Routine Jour & Nuit",
      subtitle: "Simple, efficace et adaptée à tous les types de peau.",
      morningTab: "☀️ Routine du Matin",
      nightTab: "🌙 Routine du Soir",
      morningTitle: "Éclat, Hydratation & Protection UV",
      morningDesc: "Prépare votre peau, infuse une hydratation Glass Skin et forme un bouclier invisible contre le soleil et la pollution.",
      nightTitle: "Régénération Intense & Anti-Âge au Rétinal",
      nightDesc: "Nettoie en profondeur, traite le contour des yeux et active le renouvellement cellulaire grâce au rétinal et ginseng.",
      learnMore: "En savoir plus",
      stepBadge: "Étape",
    },
    giftsSection: {
      badge: "Offre Spéciale Limitée",
      title: "Vos 2 Cadeaux Exclusifs Offerts",
      subtitle: "Recevez ces 2 soins cultes d'une valeur de 240 DH gratuitement avec votre pack.",
      gift1Tag: "Cadeau 1 • Masque Culte Japonais",
      gift2Tag: "Cadeau 2 • Soin Lèvres Réparateur",
      valueLabel: "Valeur :",
      totalValueBadge: "Valeur 240 DH • 100% Offerts",
      includedNote: "Livrés automatiquement dans votre colis sans frais supplémentaires",
      offered: "OFFERT",
    },
    order: {
      badge: "Commande Express",
      title: "Commandez Votre Pack Seoul 1988",
      subtitle: "Remplissez vos coordonnées ci-dessous. Paiement en espèces à la livraison.",
      recap: {
        packTitle: "Pack Seoul 1988 (6 Soins Complets)",
        packDesc: "Nettoyant + Contour Yeux + Sérum Rétinal + Crème Rétinal + Crème Snail + Écran Solaire",
        giftsTitle: "2 Cadeaux Inclus Offerts :",
        freeGiftLabel: "GRATUIT",
        totalTitle: "Total à Payer",
        totalOriginalPrice: "1 900 DH",
        totalSpecialPrice: "1 500 DH",
        freeShipping: "🚚 Livraison Gratuite",
        cod: "💵 Paiement à la Livraison",
      },
      form: {
        title: "Informations de Livraison",
        subtitle: "Tous les champs sont obligatoires",
        firstNameLabel: "Prénom",
        firstNamePlaceholder: "Votre prénom",
        lastNameLabel: "Nom",
        lastNamePlaceholder: "Votre nom de famille",
        cityLabel: "Ville",
        cityPlaceholder: "Sélectionnez votre ville",
        phoneLabel: "Numéro de Téléphone",
        phonePlaceholder: "06 12 34 56 78",
        phoneHelper: "Numéro à 10 chiffres (ex: 06 12 34 56 78) pour confirmer la livraison.",
        submitButton: "Confirmer la Commande",
        submitting: "Traitement en cours…",
        notice: "Paiement sécurisé à la livraison partout au Maroc",
        errors: {
          firstName: "Veuillez entrer votre prénom",
          lastName: "Veuillez entrer votre nom",
          city: "Veuillez choisir votre ville",
          phone: "Veuillez entrer votre numéro de téléphone",
          phoneTooShort: "Le numéro doit comporter exactement 10 chiffres",
          phoneTooLong: "Le numéro ne doit pas dépasser 10 chiffres",
          phoneInvalidFormat: "Format invalide (exemple : 06 12 34 56 78)",
        },
      },
      confirmation: {
        badge: "Commande Confirmée !",
        thankYou: "Merci pour votre confiance !",
        recorded: "Votre commande du Pack Seoul 1988 a été enregistrée avec succès. Notre équipe vous appellera dans les plus brefs délais pour confirmer l'expédition.",
        article: "Pack Commandé",
        articleValue: "Pack Seoul 1988 + 2 Cadeaux Offerts",
        total: "Montant Total",
        shippingFree: "(Livraison Gratuite)",
        orderNew: "Passer une autre commande",
      },
    },
    footer: {
      brandTag: "Seoul 1988 Beauty Collection",
      description: "Votre destination privilégiée pour les rituels de beauté coréens et japonais les plus authentiques et efficaces au Maroc.",
      quickLinks: "Navigation",
      guarantees: "Nos Engagements",
      followUs: "Suivez-nous",
      copyright: "Tous droits réservés.",
      tiktok: "TikTok",
      instagram: "Instagram",
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      pack: "الباك",
      products: "المنتجات",
      routine: "الروتين",
      order: "اطلبي الآن",
      orderPack: "طلب الباك الكامل",
    },
    hero: {
      badge: "روتين كوري متطور فائق الفعالية",
      titlePart1: "باك ",
      titleHighlight: "سول 1988",
      titlePart2: " بالريتينال والجينسنغ",
      subtitle:
        "6 مستحضرات كورية استثنائية معززة بالريتينال الليبوزومي والجينسنغ الأسود وإفرازات الحلزون لبشرة مشدودة، ناعمة ومشرقة. + هديتين مجاناً.",
      giftBadge: "هديتان فاخرتان مجاناً : ماسك فينو الياباني + فازلين ليب",
      ctaButton: "اطلبي الآن",
      originalPrice: "\u202A1 900\u202C درهم",
      specialPrice: "\u202A1 500\u202C درهم",
      trust1Title: "أصلي 100%",
      trust1Sub: "استيراد مباشر من كوريا واليابان",
      trust2Title: "توصيل خلال 24-48 ساعة",
      trust2Sub: "في جميع مدن المغرب",
      trust3Title: "الدفع عند الاستلام",
      trust3Sub: "تأكدي من طلبك قبل الدفع",
    },
    ticker: {
      item1: "منتجات أصلية 100% من كوريا الجنوبية",
      item2: "توصيل سريع ومجاني لجميع المدن",
      item3: "الدفع عند الاستلام بعد المعاينة",
      item4: "هديتان فاخرتان مجاناً مع كل طلب",
    },
    packIntro: {
      badge: "لماذا باك سول 1988؟",
      title: "تناغم الطب الكوري التقليدي مع أحدث العلوم التجميلية",
      subtitle:
        "مستوحى من كنوز هانبانغ الكورية القديمة ومدعوم بتقنية الليبوزوم المتطورة لنضارة لا مثيل لها.",
      feature1Title: "ريتينال ليبوزومي 2%",
      feature1Desc: "أسرع 11 مرة من الريتينول العادي ومغلف بتقنية الليبوزوم لمنع أي تحسس أو احمرار.",
      feature2Title: "الجينسنغ الأسود المخمر",
      feature2Desc: "مضاد أكسدة استثنائي يحفز إنتاج الكولاجين ويشد ملامح الوجه بعمق.",
      feature3Title: "إفرازات الحلزون 93%",
      feature3Desc: "ترميم مكثف للبشرة وتأثير Glass Skin الكوري الزجاجي النضر من أول أسبوع.",
      feature4Title: "السيراميد وخلاصة الصنوبر",
      feature4Desc: "حماية فائقة من الشمس SPF 50+ تعزز حاجز البشرة وتهدئ الالتهابات بشكل فوري.",
    },
    productsSection: {
      badge: "مستحضرات الباك الـ 6",
      title: "روتين متكامل ومدروس لبشرة مثالية",
      subtitle: "كل مستحضر صُمم ليعمل في تناغم تام مع باقي الخطوات لتحقيق أفضل نتيجة.",
      viewDetails: "عرض تفاصيل المنتج",
      closeModal: "إغلاق",
      keyActives: "المكونات الفعالة",
      benefitsTitle: "أبرز الفوائد",
      usageTitle: "طريقة الاستخدام",
    },
    routineSection: {
      badge: "خطوات الاستخدام",
      title: "روتينك اليومي صباحاً ومساءً",
      subtitle: "خطوات واضحة وسهلة تناسب جميع أنواع البشرة.",
      morningTab: "☀️ روتين الصباح",
      nightTab: "🌙 روتين المساء",
      morningTitle: "إشراقة، ترطيب وحماية من أشعة الشمس",
      morningDesc: "ينظف بلطف، يمنح ترطيباً زجاجياً Glass Skin، ويشكل درعاً واقياً ضد الشمس والتلوث.",
      nightTitle: "تجديد عميق ومقاومة التجاعيد بالريتينال",
      nightDesc: "ينظف المسام، يعالج محيط العين، وينشط تجديد الخلايا وإنتاج الكولاجين أثناء النوم.",
      learnMore: "اكتشفي المزيد",
      stepBadge: "الخطوة",
    },
    giftsSection: {
      badge: "عرض حصري لفترة محدودة",
      title: "هديتان مميزتان مجاناً مع كل باك",
      subtitle: "احصلي على مستحضرين من الأكثر مبيعاً بقيمة 240 درهم كهدية مجانية مع طلبك.",
      gift1Tag: "الهدية 1 • ماسك الشعر الياباني الشهير",
      gift2Tag: "الهدية 2 • مرطب الشفاه المغذي",
      valueLabel: "القيمة :",
      totalValueBadge: "بقيمة 240 درهم • مجاناً 100%",
      includedNote: "تصلك الهدايا تلقائياً داخل طردك مجاناً مع التوصيل",
      offered: "هدية مجانية",
    },
    order: {
      badge: "طلب سريع",
      title: "اطلبي الآن باك سول 1988",
      subtitle: "املئي معلوماتك أسفله. التوصيل مجاني والدفع نقداً عند الاستلام.",
      recap: {
        packTitle: "باك سول 1988 (6 مستحضرات كاملة)",
        packDesc: "منظف + كريم عيون + سيروم ريتينال + كريم ريتينال + كريم حلزون + واقي شمس",
        giftsTitle: "هديتان مرفقتان مجاناً :",
        freeGiftLabel: "مجاني",
        totalTitle: "المجموع الكلي",
        totalOriginalPrice: "\u202A1 900\u202C درهم",
        totalSpecialPrice: "\u202A1 500\u202C درهم",
        freeShipping: "🚚 توصيل مجاني",
        cod: "💵 الدفع عند الاستلام",
      },
      form: {
        title: "معلومات التوصيل",
        subtitle: "جميع الحقول مطلوبة",
        firstNameLabel: "الاسم الشخصي",
        firstNamePlaceholder: "اسمك الشخصي",
        lastNameLabel: "الاسم العائلي",
        lastNamePlaceholder: "اسم العائلة",
        cityLabel: "المدينة",
        cityPlaceholder: "اختاري مدينتك",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "06 12 34 56 78",
        phoneHelper: "رقم هاتفك المكون من 10 أرقام (مثال: 06 12 34 56 78) لتأكيد الشحن.",
        submitButton: "تأكيد الطلب الآن",
        submitting: "جارٍ الإرسال…",
        notice: "دفع آمن عند الاستلام في جميع أنحاء المغرب",
        errors: {
          firstName: "الرجاء إدخال اسمك الشخصي",
          lastName: "الرجاء إدخال اسم العائلة",
          city: "الرجاء اختيار مدينتك",
          phone: "الرجاء إدخال رقم هاتفك",
          phoneTooShort: "الرقم يجب أن يحتوي على 10 أرقام بالضبط",
          phoneTooLong: "الرقم لا يجب أن يتجاوز 10 أرقام",
          phoneInvalidFormat: "صيغة غير صحيحة (مثال: \u202A06 12 34 56 78\u202C)",
        },
      },
      confirmation: {
        badge: "تم تأكيد طلبك بنجاح !",
        thankYou: "شكراً على ثقتك !",
        recorded: "تم تسجيل طلبك لباك سول 1988 بنجاح. سيتصل بك فريقنا قريباً لتأكيد تفاصيل وموعد التوصيل.",
        article: "الباك المطلوب",
        articleValue: "باك سول 1988 + هديتان مجانيتان",
        total: "المبلغ الإجمالي",
        shippingFree: "(توصيل مجاني)",
        orderNew: "طلب باك آخر",
      },
    },
    footer: {
      brandTag: "مجموعة سول 1988 للعناية الفاخرة",
      description: "وجهتكم المعتمدة لأفضل وأحدث مستحضرات التجميل الكورية واليابانية الأصلية في المغرب.",
      quickLinks: "روابط سريعة",
      guarantees: "ضماناتنا",
      followUs: "تابعينا على",
      copyright: "جميع الحقوق محفوظة.",
      tiktok: "تيك توك",
      instagram: "إنستغرام",
    },
  },
};
