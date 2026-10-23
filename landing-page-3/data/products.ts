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
    id: "marvis",
    name: "Jasmin Mint Toothpaste",
    brand: "Marvis",
    category: "Soin Bucco-dentaire & Fraîcheur Florale",
    step: "Soin Quotidien",
    volume: "85 ml",
    timeOfDay: "matin_soir",
    badge: "Jasmin & Menthe",
    image: "/images/products/marvis-v2.png",
    subtitle: "Dentifrice italien iconique associant la délicatesse florale du jasmin à une fraîcheur mentholée durable.",
    descriptionFr:
      "Formule italienne prestigieuse mariant l'arôme floral raffiné du jasmin à l'intensité de la menthe fraîche. Enrichi en fluorure pour renforcer l'émail des dents, en xylitol pour prévenir la plaque dentaire et en silice douce pour un nettoyage efficace et un sourire éclatant sans agresser les gencives.",
    keyActives: [
      "Extrait de Jasmin & Menthe Douce",
      "Fluorure de Sodium (Émail & Caries)",
      "Xylitol Protecteur",
      "Silice Nettoyante Douce",
    ],
  },
  {
    id: "sun-serum",
    name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++",
    brand: "SKIN1004",
    category: "Protection Solaire & Hydratation",
    step: "Étape Finale Matin",
    volume: "50 ml",
    timeOfDay: "matin",
    badge: "SPF50+ PA++++",
    image: "/images/products/sun-serum-v2.png",
    subtitle: "Écran solaire sérum ultra-léger et invisible à la Centella et acide hyaluronique.",
    descriptionFr:
      "Protection solaire quotidienne haute tolérance à la texture sérum ultra-fluide au fini totalement invisible, sans traces blanches ni film gras. Formulé avec le complexe exclusif Hyalu-Cica (Centella Asiatica pure de Madagascar et acide hyaluronique) combiné à la niacinamide pour hydrater, apaiser et protéger les peaux les plus sensibles.",
    keyActives: [
      "Centella Asiatica Pure de Madagascar",
      "Complexe Hyalu-Cica (Acide Hyaluronique)",
      "Niacinamide Éclat",
      "Filtres SPF50+ PA++++ Invisibles",
    ],
  },
  {
    id: "cleansing-foam",
    name: "Madagascar Centella Poremizing Deep Cleansing Foam",
    brand: "SKIN1004",
    category: "Nettoyage Profond & Pores",
    step: "Étape 1 Nettoyage",
    volume: "125 ml",
    timeOfDay: "matin_soir",
    badge: "Deep Cleansing",
    image: "/images/products/cleansing-foam-v2.png",
    subtitle: "Mousse nettoyante riche au sel rose de l'Himalaya pour désincruster et resserrer les pores.",
    descriptionFr:
      "Nettoyant moussant onctueux enrichi au sel rose pur de l'Himalaya riche en 84 minéraux essentiels et en enzyme de papaïne naturelle. Il désincruste les pores en profondeur, régule l'excès de sébum et élimine les impuretés tout en préservant l'hydratation grâce à la Centella Asiatica apaisante.",
    keyActives: [
      "Sel Rose de l'Himalaya (84 Minéraux)",
      "Centella Asiatica Apaisante",
      "Papaïne (Enzyme de Papaye Exfoliante)",
      "Argile Kaolin Purifiante",
    ],
  },
  {
    id: "relief-cream",
    name: "345 Relief Cream",
    brand: "Dr. Althea",
    category: "Crème Barrière & Réparation Post-Acné",
    step: "Étape Hydratation & Réparation",
    volume: "50 ml",
    timeOfDay: "matin_soir",
    badge: "Réparation Intense",
    image: "/images/products/relief-cream-v2.png",
    subtitle: "Crème gel régénérante post-acné aux céramides, panthénol et resvératrol.",
    descriptionFr:
      "Soin gel crème hautement réparateur conçu pour reconstruire la barrière cutanée fragilisée et estomper les taches et cicatrices post-acné. Sa formule associe une concentration puissante de panthénol (vitamine B5), des céramides NP, de la niacinamide et du resvératrol antioxydant pour calmer immédiatement les rougeurs et régénérer l'épiderme en profondeur.",
    keyActives: [
      "Panthénol 10 000 ppm (Vitamine B5)",
      "Céramides NP & Niacinamide",
      "Resvératrol Antioxydant",
      "Centella & Houttuynia Cordata",
    ],
  },
  {
    id: "niacinamide",
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "Sérum Anti-Imperfections & Sébum",
    step: "Étape Traitement Actif",
    volume: "30 ml",
    timeOfDay: "matin_soir",
    badge: "Anti-Taches & Sébum",
    image: "/images/products/niacinamide-v2.png",
    subtitle: "Sérum purifiant haute concentration pour réguler le sébum, resserrer les pores et unifier le teint.",
    descriptionFr:
      "Formule dermatologique culte combinant une concentration optimale de 10% de Niacinamide (vitamine B3) et 1% de Zinc PCA. Ce sérum régule activement la production de sébum, décongestionne les pores dilatés, réduit visiblement les rougeurs et taches pigmentaires pour révéler un teint net, lisse et uniforme.",
    keyActives: [
      "Niacinamide 10% (Vitamine B3)",
      "Zinc PCA 1% (Sébo-régulateur)",
      "Formule Purifiante Haute Tolérance",
    ],
  },
  {
    id: "retinal-shot",
    name: "Retinol Shot Tightening Booster",
    brand: "Celimax",
    category: "Anti-Âge, Fermeté & Rétinol",
    step: "Étape Nuit Traitement",
    volume: "20 ml",
    timeOfDay: "soir",
    badge: "Anti-Âge Puissant",
    image: "/images/products/retinal-shot-v2.png",
    subtitle: "Booster raffermissant au rétinol pur, peptides Matrixyl et technologie 20 000 micro-shots.",
    descriptionFr:
      "Soin de nuit régénérant haute performance combinant 0,03% de rétinol pur, 3% de peptides Matrixyl® 3000 brevetés et 1% de panthénol apaisant. Équipé de la technologie innovante 20 000 Micro-Shots (spicules biomimétiques) qui stimule intensément la pénétration des actifs, accélère la production de collagène, raffermit l'ovale du visage et lisse les ridules.",
    keyActives: [
      "Rétinol Pur 0.03%",
      "Peptides MATRIXYL® 3000 3%",
      "Panthénol 1% Apaisant",
      "Technologie 20 000 Micro-Shots",
    ],
  },
];

export const PACK_INFO = {
  title: "Pack Skincare Glow & Pureté",
  subtitle: "Routine Complète Coréenne & Dermatologique de 6 Soins d'Exception",
  priceOriginal: 1900,
  pricePromo: 1300,
  savings: 600,
  delivery: "Gratuite dans tout le Maroc (24h - 48h)",
  warranty: "Paiement à la livraison (Cash On Delivery) & Produits 100% Authentiques",
};
