export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  step: string;
  volume: string;
  timeOfDay: "matin" | "soir" | "matin_soir";
  badge: string;
  image: string;
  subtitle: string;
  descriptionFr: string;
  keyActives: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "laroche-posay",
    name: "Effaclar Gel Moussant Purifiant",
    brand: "La Roche-Posay",
    category: "Nettoyage Purifiant & Équilibre Sébum",
    step: "Étape 1 : Nettoyer",
    volume: "200 ml",
    timeOfDay: "matin_soir",
    badge: "Microbiome Science",
    image: "/images/products/laroche-posay-effaclar.png",
    subtitle: "Gel moussant purifiant haute tolérance pour peaux grasses à tendance acnéique.",
    descriptionFr:
      "Formule dermatologique pionnière intégrant la science du microbiome cutané et l'eau thermale apaisante de La Roche-Posay. Il élimine en douceur l'excès de sébum, purifie les pores sans altérer le film hydrolipidique et rééquilibre le pH physiologique pour une peau fraîche et nette dès la première utilisation.",
    keyActives: [
      "Eau Thermale Minéralisante La Roche-Posay",
      "Zinc PCA Sébo-Régulateur Purifiant",
      "Base Lavante Douce Haute Tolérance pH 5.5",
      "Technologie Phylobioma Équilibre Cutané",
    ],
  },
  {
    id: "anua-azelaic",
    name: "Azelaic Acid 10+ Hyaluron Redness Soothing Serum",
    brand: "Anua",
    category: "Sérum Apaisant Anti-Rougeurs & Imperfections",
    step: "Étape 2 : Apaiser & Traiter",
    volume: "30 ml",
    timeOfDay: "matin_soir",
    badge: "10+ Azelaic Acid",
    image: "/images/products/anua-azelaic.png",
    subtitle: "Sérum haute concentration à l'Acide Azélaïque 10% pour calmer instantanément rougeurs et acné.",
    descriptionFr:
      "Formule coréenne d'exception combinant 10% d'acide azélaïque hautement purifié et un complexe d'acide hyaluronique apaisant. Il traite efficacement les rougeurs diffuses, la rosacée, les marques d'acné et le grain de peau irrégulier tout en hydratant intensément sans aucune irritation.",
    keyActives: [
      "Acide Azélaïque Purifié 10% (Anti-Rougeurs & Acné)",
      "Complexe Hyaluronique Multi-Poids Moléculaire",
      "Extrait Botanique de Centella Asiatica",
      "Zinc PCA Purifiant & Apaisant",
    ],
  },
  {
    id: "axis-y-eye-serum",
    name: "Vegan Collagen Eye Serum",
    brand: "AXIS-Y",
    category: "Soin Contour des Yeux & Anti-Cernes",
    step: "Étape 3 : Regard",
    volume: "15 ml",
    timeOfDay: "matin_soir",
    badge: "Collagène Végétal & Peptides",
    image: "/images/products/axis-y-eye-serum.png",
    subtitle: "Sérum yeux raffermissant avec embout applicateur roll-on bille métallique rafraîchissante.",
    descriptionFr:
      "Équipé d'un embout applicateur ergonomique à bille métallique rafraîchissante qui procure un massage cryo-décongestionnant instantané. Sa texture légère gorgée de collagène végétal fermenté, d'un complexe de 6 peptides et de triple acide hyaluronique relance la microcirculation, lisse les ridules et réduit visiblement les poches et cernes foncés.",
    keyActives: [
      "Collagène Végétal Fermenté Haute Assimilation",
      "Complexe Raffermissant de 6 Peptides",
      "Triple Acide Hyaluronique Multi-Poids",
      "Applicateur Métallique Cryo-Massage 360°",
    ],
  },
  {
    id: "embryolisse-lait-creme",
    name: "Lait-Crème Concentré Multi-fonctions",
    brand: "Laboratoires Embryolisse",
    category: "Soin Hydratant Nutritif 6-en-1",
    step: "Étape 4 : Hydrater & Nourrir",
    volume: "75 ml",
    timeOfDay: "matin_soir",
    badge: "Culte Dermatologique",
    image: "/images/products/embryolisse-lait-creme.png",
    subtitle: "Le soin universel culte des dermatologues et maquilleurs professionnels depuis 1950.",
    descriptionFr:
      "Le soin star français multi-fonctions adoré des peaux sensibles. Riche en acides gras essentiels et vitamines d'origine naturelle (beurre de karité, cire d'abeille, aloe vera et protéines de soja), il hydrate en profondeur, répare la barrière cutanée fragilisée et laisse un voile satiné protecteur sans graisser la peau.",
    keyActives: [
      "Beurre de Karité Végétal Nourrissant",
      "Cire d'Abeille Protectrice Barrière",
      "Extrait Pur d'Aloe Vera Apaisant",
      "Protéines de Soja Lissantes & Repulpantes",
    ],
  },
  {
    id: "vaseline-gluta-hya",
    name: "Healthy Bright™ Gluta-Hya Dewy Radiance",
    brand: "Vaseline",
    category: "Lotion Sérum Burst Éclat & Hydratation",
    step: "Étape 5 : Illuminer",
    volume: "200 ml",
    timeOfDay: "matin_soir",
    badge: "10X Plus Puissant que Vit C",
    image: "/images/products/vaseline-gluta-hya.png",
    subtitle: "Technologie sérum burst qui se transforme en micro-gouttelettes d'eau ultra-pénétrantes.",
    descriptionFr:
      "Une texture inédite ultralégère qui éclate en micro-gouttes d'eau au contact de la peau pour une absorption instantanée. Sa technologie GlutaGlow™ brevetée est 10 fois plus puissante que la Vitamine C pour neutraliser les radicaux libres, éliminer le teint terne et offrir un fini dewy glowy miroitant et frais.",
    keyActives: [
      "Technologie GlutaGlow™ 10X Vitamine C",
      "Micro-Acide Hyaluronique Repulpant",
      "Niacinamide Éclat & Anti-Teint Terne",
      "Formule Sérum Burst Absorption Immédiate",
    ],
  },
  {
    id: "seoul-1988-sun",
    name: "SEOUL 1988 SUN : Pine Tree + Ceramide",
    brand: "K-SECRET",
    category: "Protection Solaire Haute Efficacité & Barrière",
    step: "Étape 6 : Protéger & Renforcer",
    volume: "50 ml",
    timeOfDay: "matin",
    badge: "SPF 50+ PA++++",
    image: "/images/products/seoul-1988-sun.png",
    subtitle: "Écran solaire coréen haute protection SPF 50+ PA++++ à l'extrait de pin et céramides.",
    descriptionFr:
      "Soin solaire dermatologique coréen d'élite assurant une protection maximale contre les UVA et UVB avec un indice SPF 50+ PA++++. Formulé à base d'extrait d'aiguilles de pin coréen et de céramides réparatrices, il hydrate, apaise les irritations dues au soleil et fortifie la barrière cutanée sans aucun effet blanc ni brillance.",
    keyActives: [
      "Filtres Solaires Haute Tolérance SPF 50+ PA++++",
      "Extrait de Pin Coréen Apaisant (Pine Tree)",
      "Céramides NP Protectrices de la Barrière",
      "Niacinamide Éclat & Anti-Oxydant",
    ],
  },
];

export const GIFT_INFO = {
  id: "sol-de-janeiro-gift",
  name: "Sol de Janeiro Brazilian Bum Bum Cream",
  brand: "Sol de Janeiro",
  volume: "75 ml",
  badge: "Cadeau 100% Offert",
  image: "/images/gift-box-circle.webp",
  title: "Votre Cadeau Bien-Être Offert avec le Pack",
  subtitle: "Soin Corporel d'Exception Raffermissant & Coffret Cadeau de Luxe",
  description:
    "Recevez gratuitement avec votre pack le soin culte mondial Sol de Janeiro. Enrichi en extrait de guarana énergisant, beurre de cupuaçu nourrissant et huile d'açaí, avec sa fragrance irrésistible Cheirosa 62 aux notes de pistache et caramel salé. Une peau irrésistiblement douce, ferme et lumineuse.",
  points: [
    "Soin corps raffermissant au guarana & cupuaçu",
    "Fragrance emblématique Cheirosa 62 caramel & pistache",
    "100% offert dans chaque commande de pack aujourd'hui",
  ],
};

export const PACK_INFO = {
  title: "Le Pack Skincare Complet PureGlow",
  subtitle: "Routine Complète Coréenne & Dermatologique de 6 Soins d'Exception",
  priceOriginal: 1950,
  pricePromo: 1349,
  savings: 601,
  delivery: "Gratuite dans tout le Maroc (24h - 48h)",
  warranty: "Paiement à la livraison (Cash On Delivery) & Produits 100% Authentiques",
};
