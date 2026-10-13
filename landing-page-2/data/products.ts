import type { Locale } from "@/context/LanguageContext";

export interface ProductItem {
  id: string;
  name: string;
  arabicName: string;
  category: string;
  volume: string;
  tag: string;
  keyActives: string[];
  description: string;
  benefits: string[];
  usage: string;
  image?: string;
}

export const SEOUL_PRODUCTS: ProductItem[] = [
  {
    id: "cleansing-foam",
    name: "Seoul 1988 Cleansing Foam",
    arabicName: "رغوة منظفة سول 1988",
    category: "Nettoyant Doux Purifiant",
    volume: "150ml",
    tag: "Étape 1",
    keyActives: ["Centella Asiatica", "Acide Hyaluronique", "Extrait de Riz"],
    description: "Une mousse onctueuse et délicate qui élimine en profondeur le sébum, la pollution et les impuretés sans assécher ni fragiliser la barrière cutanée.",
    benefits: [
      "Nettoyage doux respectant le pH naturel",
      "Élimine les impuretés et l'excès de sébum",
      "Laisse la peau fraîche, hydratée et veloutée",
    ],
    usage: "Matin & Soir : masser sur peau humide en mouvements circulaires puis rincer à l'eau tiède.",
    image: "/products/cleansing-foam.png",
  },
  {
    id: "eye-cream",
    name: "Seoul 1988 Eye Cream",
    arabicName: "كريم محيط العينين سول 1988",
    category: "Soin Contour des Yeux",
    volume: "30ml",
    tag: "Étape 2",
    keyActives: ["Peptides", "Caféine", "Niacinamide"],
    description: "Formule soyeuse ciblée pour lisser les ridules d'expression, estomper les poches et éclaircir les cernes pour un regard visiblement reposé et éclatant.",
    benefits: [
      "Atténue les cernes foncés et les poches",
      "Lisse les ridules du contour de l'œil",
      "Texture fine qui pénètre instantanément sans fini gras",
    ],
    usage: "Matin & Soir : tapoter délicatement du bout de l'annulaire autour de l'orbite oculaire.",
    image: "/products/eye-cream.png",
  },
  {
    id: "serum-retinal",
    name: "Seoul 1988 Serum Retinal Liposome 2% + Black Ginseng",
    arabicName: "سيروم ريتينال ليبوزوم 2% + الجينسنغ الأسود",
    category: "Sérum Régénérant & Anti-âge",
    volume: "30ml",
    tag: "Étape 3 — Culte",
    keyActives: ["Retinal Liposome 2%", "Ginseng Noir Fermenté", "Bakuchiol"],
    description: "Concentré puissant associant le rétinal encapsulé en liposomes pour une tolérance optimale et le ginseng noir pour accélérer le renouvellement cellulaire et stimuler le collagène.",
    benefits: [
      "Lisse rides et ridules sans irritation",
      "Raffermit et améliore la densité cutanée",
      "Illumine et unifie le teint en profondeur",
    ],
    usage: "Le soir uniquement : appliquer 3 à 4 gouttes sur peau propre avant la crème de nuit.",
    image: "/products/serum-retinal.png",
  },
  {
    id: "cream-retinal",
    name: "Seoul 1988 Cream Retinal Liposome 1% + Fermented Rice",
    arabicName: "كريم ريتينال ليبوزوم 1% + الأرز المخمر",
    category: "Crème Nuit Lissante & Fermeté",
    volume: "50ml",
    tag: "Étape 4 (Nuit)",
    keyActives: ["Retinal Liposome 1%", "Extrait de Riz Fermenté", "Adénosine"],
    description: "Une crème de nuit régénératrice qui nourrit intensément, repulpe l'épiderme pendant le sommeil et répare les signes de vieillissement grâce au riz fermenté nourrissant.",
    benefits: [
      "Booste la fermeté et l'élasticité nocturne",
      "Hydrate et répare la barrière cutanée",
      "Réveil avec une peau souple, lisse et repulpée",
    ],
    usage: "Le soir : appliquer uniformément sur le visage et le cou après le sérum rétinal.",
    image: "/products/cream-retinal.png",
  },
  {
    id: "cream-snail",
    name: "K-Secret Seoul 1988 Cream Snail Mucin 93% + Rice",
    arabicName: "كريم إفرازات الحلزون 93% + الأرز 100 مل",
    category: "Crème Réparatrice & Glass Skin",
    volume: "100ml",
    tag: "Étape 4 (Jour)",
    keyActives: ["Mucine d'Escargot 93%", "Extrait de Riz", "Panthénol"],
    description: "Formule iconique à 93% de bave d'escargot purifiée associée au riz coréen. Répare instantanément les rougeurs, apaise les cicatrices et confère cet effet Glass Skin ultra-glowy.",
    benefits: [
      "Effet Glass Skin éclatant et repulpant",
      "Accélère la réparation des cicatrices et rougeurs",
      "Hydratation longue durée non comédogène",
    ],
    usage: "Le matin (et/ou le soir) : masser généreusement jusqu'à absorption complète.",
    image: "/products/cream-snail.png",
  },
  {
    id: "sun-pine",
    name: "Seoul 1988 Sun : Pine Tree + Ceramide",
    arabicName: "واقي شمس سول 1988 : شجر الصنوبر + سيراميد",
    category: "Protection Solaire Apaisante SPF 50+",
    volume: "50ml",
    tag: "Étape 5 (Matin)",
    keyActives: ["Extrait de Pin", "Céramides NP", "Filtres UV Nouvelle Génération"],
    description: "Écran solaire coréen haute protection SPF 50+ PA++++ léger et invisible. Il protège contre les rayons UV tout en renforçant la barrière cutanée et en calmant les inflammations.",
    benefits: [
      "Haute protection solaire UVA/UVB sans traces blanches",
      "Renforce la barrière cutanée grâce aux céramides",
      "Fini léger, non gras, parfait sous le maquillage",
    ],
    usage: "Le matin : appliquer généreusement 15 minutes avant toute exposition au soleil.",
    image: "/products/sun-pine.png",
  },
];

export interface GiftItem {
  id: string;
  name: string;
  arabicName: string;
  brand: string;
  category: string;
  description: string;
  value: string;
  image?: string;
}

export const GIFTS: GiftItem[] = [
  {
    id: "fino-mask",
    name: "Fino Premium Touch Hair Mask",
    arabicName: "ماسك الشعر الفاخر فينو بريميوم تاتش",
    brand: "Shiseido Japan",
    category: "Masque Capillaire Réparateur Intense",
    description: "Le masque capillaire culte japonais enrichi en gelée royale et squalane pour réparer les cheveux abîmés, leur redonner une brillance miroir et une douceur incomparable.",
    value: "180 DH",
    image: "/gifts/kado-2-fino.png",
  },
  {
    id: "vaseline-lip",
    name: "Vaseline Lip Therapy",
    arabicName: "فازلين ليب ثيرابي لعلاج وترطيب الشفاه",
    brand: "Vaseline",
    category: "Soin des Lèvres Nourrissant",
    description: "Le baume à lèvres indispensable pour apaiser, hydrater et protéger les lèvres sèches ou gercées pour un sourire doux et repulpé toute la journée.",
    value: "60 DH",
    image: "/gifts/kado-1-vaseline.png",
  },
];
