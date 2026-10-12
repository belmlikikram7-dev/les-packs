export interface Product {
  id: string;
  orderNumber: string;
  brand: string;
  name: string;
  type: string;
  volume: string;
  price: number;
  priceFormatted: string;
  image: string;
  modelImage?: string;
  badge?: string;
  shortBenefit: string;
  presentation: string;
  benefits: string[];
  keyActives: string[];
  keyActivesDetails: { name: string; role: string }[];
  ingredients: string;
  usage: string;
  caution?: string;
  routineStep: number;
  routineTiming: "Matin & Soir" | "Matin uniquement";
  highlight: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "im-from-rice-toner",
    orderNumber: "01",
    brand: "I'M FROM",
    name: "I'm From Rice Toner",
    type: "Toner / Lotion tonique",
    volume: "150 ml",
    price: 324,
    priceFormatted: "324 DH",
    image: "/products/rice-toner-transparent.png",
    modelImage: "/models/rice-toner-model.webp",
    badge: "77,78% Extrait de Riz",
    shortBenefit: "Éclat instantané & hydratation préparatrice",
    presentation:
      "Une lotion tonique culte de la routine Vinillia formulée avec 77,78% d'extrait de riz de Yeoju. Sa texture lactée biphasée gorge la peau d'hydratation, affine le grain et apporte une clarté lumineuse dès la première étape.",
    benefits: [
      "Hydrate intensément dès la première étape du rituel",
      "Éclaircit et unifie le teint pour un éclat naturel radieux",
      "Affine le grain de peau et adoucit les zones rugueuses",
      "Nourrit la barrière cutanée sans sensation de lourdeur",
      "Prépare l'épiderme à recevoir les sérums et crèmes suivants",
    ],
    keyActives: [
      "Extrait de Riz de Yeoju 77,78%",
      "Niacinamide (Vitamine B3)",
      "Extrait de Son de Riz 0,1%",
      "Extrait de Pourpier (Portulaca)",
      "Adénosine",
    ],
    keyActivesDetails: [
      {
        name: "Extrait de Riz de Yeoju (77,78%)",
        role: "Riche en acides aminés, vitamines et minéraux, il illumine le teint et revitalise la peau terne.",
      },
      {
        name: "Niacinamide (Vitamine B3)",
        role: "Unifie le teint, estompe les taches d'hyperpigmentation et resserre visuellement les pores.",
      },
      {
        name: "Extrait de Son de Riz (0,1%)",
        role: "Concentré d'acides gras essentiels apportant nutrition douce et velouté à la peau.",
      },
      {
        name: "Extrait de Pourpier & Racine d'Orme",
        role: "Apaise instantanément les irritations et maintient les réserves hydriques cellulaires.",
      },
      {
        name: "Adénosine",
        role: "Molécule anti-âge reconnue pour lisser les ridules et soutenir la souplesse cutanée.",
      },
    ],
    ingredients:
      "Oryza Sativa (Rice) Extract (77.78%), Methylpropanediol, Triethylhexanoin, Hydrogenated Poly(C6-14 Olefin), Niacinamide, Pentylene Glycol, Portulaca Oleracea Extract, Oryza Sativa (Rice) Bran Extract (0.1%), Ulmus Davidiana Root Extract, Amaranthus Caudatus Seed Extract, Hydrogenated Lecithin, Water, Polyglyceryl-10 Myristate, Butylene Glycol, Adenosine, Cellulose Gum, Ethylhexylglycerin, 1,2-Hexanediol.",
    usage:
      "Bien agiter le flacon avant utilisation pour mélanger les 2 phases. Appliquer une quantité généreuse sur peau propre avec les paumes des mains et tapoter délicatement jusqu'à absorption complète.",
    caution:
      "Bien secouer avant chaque application pour émulsionner la phase nourrissante et la phase hydratante. Usage externe uniquement.",
    routineStep: 1,
    routineTiming: "Matin & Soir",
    highlight: "77,78% d'extrait de riz bio fermenté de Yeoju",
  },
  {
    id: "medicube-pdrn",
    orderNumber: "02",
    brand: "MEDICUBE",
    name: "Medicube PDRN Pink Peptide Serum",
    type: "Sérum régénérant & élasticité",
    volume: "30 ml",
    price: 331,
    priceFormatted: "331 DH",
    image: "/products/medicube-pdrn-v3.png",
    modelImage: "/models/medicube-pdrn-model.webp",
    badge: "Bestseller PDRN",
    shortBenefit: "Élasticité, éclat rosé & fermeté cutanée",
    presentation:
      "Un sérum haute performance combinant 10 000 ppm de Saumon PDRN bio-compatible, un complexe de 5 peptides et de la niacinamide. Il relance l'apparence de la fermeté cutanée, lisse les ridules et procure le fameux éclat Glass Skin.",
    benefits: [
      "Stimule l'apparence de l'élasticité et le rebond cutané",
      "Aide à régénérer et renforcer la barrière épidermique",
      "Lisse visuellement les ridules et rides d'expression",
      "Apporte un éclat frais rosé caractéristique de la jeunesse",
      "Hydrate en profondeur grâce au multi-acide hyaluronique",
    ],
    keyActives: [
      "Saumon PDRN (Sodium DNA 10 000 ppm)",
      "Complexe 5 Peptides",
      "Niacinamide",
      "Collagène de saumon & Coenzyme Q10",
      "Acide Hyaluronique Multicouche",
    ],
    keyActivesDetails: [
      {
        name: "Saumon PDRN (Sodium DNA 10 000 ppm)",
        role: "Actif dermatologique coréen identique à 95% à l'ADN humain, stimulant la réparation cellulaire et la tonicité.",
      },
      {
        name: "Complexe 5 Peptides",
        role: "Synergie peptidique (Copper Tripeptide-1, Acetyl Hexapeptide-8...) soutenant la structure collagénique.",
      },
      {
        name: "Niacinamide",
        role: "Illumine le teint, estompe les taches brunes et harmonise la carnation.",
      },
      {
        name: "Collagène de saumon & Coenzyme Q10",
        role: "Protection antioxydante majeure contre le vieillissement prématuré et maintien de la fermeté.",
      },
      {
        name: "Extraits botaniques de Curcuma & Basilic",
        role: "Propriétés anti-inflammatoires conférant sa belle teinte rosée 100% naturelle au sérum.",
      },
    ],
    ingredients:
      "Water, Disodium EDTA, Niacinamide, Hydrolyzed Collagen, Sodium DNA (Salmon PDRN 10,000ppm), Panicum Miliaceum (Millet) Seed Extract, Copper Tripeptide-1, Acetyl Hexapeptide-8, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Butylene Glycol, 1,2-Hexanediol, Glycerin, Dipropylene Glycol, Polyglycerin-3, Glyceryl Acrylate/Acrylic Acid Copolymer, PVM/MA Copolymer, Sodium Hyaluronate, Ethylhexylglycerin, Glycereth-26, Adenosine, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Isopropyl Myristate, Ubiquinone (Coenzyme Q10), Caprylyl Glycol, Tromethamine, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Caprylyl/Capryl Glucoside, Sorbitan Oleate, Atelocollagen, Salmon Egg Extract, Cyanocobalamin (Vitamin B12), Melia Azadirachta Leaf Extract, Melia Azadirachta Flower Extract, Curcuma Longa (Turmeric) Root Extract, Ocimum Sanctum Leaf Extract, Corallina Officinalis Extract, Fragrance.",
    usage:
      "Après le toner, prélever 2 à 3 gouttes à l'aide de la pipette. Répartir délicatement sur l'ensemble du visage et du cou en effectuant des mouvements circulaires doux jusqu'à pénétration.",
    caution:
      "Usage cosmétique externe. Conserver à l'abri de la lumière directe et de la chaleur.",
    routineStep: 2,
    routineTiming: "Matin & Soir",
    highlight: "Sérum régénérant aux 10 000 ppm de Saumon PDRN & 5 Peptides",
  },
  {
    id: "anua-lotion",
    orderNumber: "03",
    brand: "ANUA",
    name: "Anua Heartleaf 70% Daily Relief Lotion",
    type: "Lotion hydratante & apaisante",
    volume: "200 ml",
    price: 257,
    priceFormatted: "257 DH",
    image: "/products/anua-lotion-transparent.png",
    modelImage: "/models/anua-lotion-model.webp",
    badge: "70% Heartleaf Apaisant",
    shortBenefit: "Hydratation légère & apaisement durable",
    presentation:
      "Une lotion hydratante ultra-confortable concentrée à 70% d'extrait de Heartleaf (Houttuynia Cordata). Elle apaise instantanément les rougeurs et irritations tout en assurant une hydratation continue sans alourdir ni graisser la peau.",
    benefits: [
      "Apaise immédiatement les rougeurs, tiraillements et irritations",
      "Hydrate en profondeur grâce à une synergie de 3 acides hyaluroniques",
      "Texture fluide et légère à absorption instantanée, zéro film collant",
      "Renforce et protège la barrière cutanée contre les agressions",
      "Rétablit l'équilibre hydrique idéal des peaux sensibles ou mixtes",
    ],
    keyActives: [
      "70% Heartleaf (Houttuynia Cordata)",
      "Phytosqualane Végétal",
      "Céramide NP",
      "Triple Acide Hyaluronique",
      "Beurre de Karité & Bêta-Glucane",
    ],
    keyActivesDetails: [
      {
        name: "Extrait d'Houttuynia Cordata (70%)",
        role: "Actif phare de la routine Vinillia aux propriétés anti-inflammatoires, antibactériennes et apaisantes intenses.",
      },
      {
        name: "Phytosqualane Végétal",
        role: "Maintient le taux d'hydratation et fortifie le film hydrolipidique sans sensation de gras.",
      },
      {
        name: "Céramide NP",
        role: "Cimente les cellules cutanées pour une barrière épidermique résistante et réparée.",
      },
      {
        name: "Triple Acide Hyaluronique",
        role: "Trois poids moléculaires pour hydrater la surface et les couches épidermiques plus profondes.",
      },
      {
        name: "Beurre de Karité & Bêta-Glucane",
        role: "Nutrition protectrice douce apaisant les tiraillements des peaux sensibles.",
      },
    ],
    ingredients:
      "Houttuynia Cordata Extract (70%), Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Butylene Glycol, 1,2-Hexanediol, Phytosqualane, Laminaria Japonica Extract, Eclipta Prostrata Leaf Extract, Amaranthus Caudatus Seed Extract, Hydrogenated Lecithin, Sodium Hyaluronate, Glyceryl Stearate, Cetearyl Glucoside, Water, Sodium Stearoyl Glutamate, Carbomer, Butyrospermum Parkii (Shea) Butter, Arginine, Fructooligosaccharides, Beta-Glucan, Glucose, Hydrolyzed Hyaluronic Acid, Ceramide NP, Sodium Acetylated Hyaluronate, Ethylhexylglycerin.",
    usage:
      "Appliquer une dose adaptée sur l'ensemble du visage et du cou après le sérum. Masser légèrement jusqu'à pénétration complète.",
    caution:
      "Usage cosmétique externe. Éviter le contact direct avec l'intérieur des yeux.",
    routineStep: 3,
    routineTiming: "Matin & Soir",
    highlight: "Formule apaisante à 70% d'extrait pur de Heartleaf",
  },
  {
    id: "axisy-eye-serum",
    orderNumber: "04",
    brand: "AXIS-Y",
    name: "AXIS-Y Vegan Collagen Eye Serum",
    type: "Sérum contour des yeux",
    volume: "10 ml",
    price: 236,
    priceFormatted: "236 DH",
    image: "/products/axisy-eye-serum-transparent.png",
    modelImage: "/models/axisy-eye-serum-model.webp",
    badge: "Applicateur Massant Frais",
    shortBenefit: "Regard défatigué, lissé & anti-cernes",
    presentation:
      "Un soin d'exception spécialement calibré pour la finesse du contour de l'œil. Équipé d'un embout applicateur métallique rafraîchissant, il associe collagène végan, 5 peptides, 2% de niacinamide et triple acide hyaluronique pour illuminer et décongestionner.",
    benefits: [
      "Décongestionne visiblement les poches sous les yeux avec l'embout effet glaçon",
      "Aide à estomper les cernes bleutés et pigmentaires grâce à la Niacinamide 2%",
      "Lisse et comble l'aspect des ridules de déshydratation et de la patte d'oie",
      "Hydrate intensément la zone délicate et vulnérable du contour de l'œil",
      "Raffermit la paupière et défatigue instantanément le regard",
    ],
    keyActives: [
      "Collagène Végan (450 ppm)",
      "Complexe 5 Peptides",
      "Niacinamide 2%",
      "Triple Acide Hyaluronique",
      "Centella Asiatica & Céramide NP",
    ],
    keyActivesDetails: [
      {
        name: "Collagène Végan (450 ppm)",
        role: "Collagène fermenté végétal à haute assimilation apportant tonicité et souplesse au contour des yeux.",
      },
      {
        name: "Complexe 5 Peptides",
        role: "Peptides ciblés (Acetyl Hexapeptide-8 'effet botox-like', Copper Tripeptide-1) lissant les rides d'expression.",
      },
      {
        name: "Niacinamide (2%)",
        role: "Action éclaircissante ciblée sur les cernes foncés pour réveiller la lumière du regard.",
      },
      {
        name: "Triple Acide Hyaluronique",
        role: "Hydratation repulpante sans risque de gonflement des poches sous les yeux.",
      },
      {
        name: "Centella Asiatica & Céramide NP",
        role: "Répare et apaise le film lipidique fragile du contour péri-orbitaire.",
      },
    ],
    ingredients:
      "Water, Methylpropanediol, Glycerin, 1,2-Hexanediol, Niacinamide, Adenosine, Collagen (Vegan 450ppm), Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Acetylated Hyaluronate, Tripeptide-1, Palmitoyl Pentapeptide-4, Hexapeptide-9, Acetyl Hexapeptide-8, Copper Tripeptide-1, Pyrus Malus (Apple) Fruit Extract, Prunus Mume Fruit Extract, Vitis Vinifera (Grape) Fruit Extract, Helianthus Annuus (Sunflower) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Limnanthes Alba (Meadowfoam) Seed Oil, Carica Papaya (Papaya) Fruit Extract, Centella Asiatica Extract, Ficus Carica (Fig) Fruit Extract, Ulmus Davidiana Root Extract, Amaranthus Caudatus Seed Extract, Ceramide NP, Hydrogenated Lecithin, Leuconostoc/Radish Root Ferment Filtrate, Butylene Glycol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, C13-14 Alkane, Sodium Acrylic Acid/MA Copolymer, C15-23 Alkane, Ethylhexylglycerin, Decyl Glucoside, Caprylyl Glycol, Polyglyceryl-10 Stearate, Tocopherol.",
    usage:
      "Presser délicatement le tube pour faire perler une goutte sur l'embout métallique. Glisser l'applicateur de l'intérieur vers l'extérieur du contour de l'œil en mouvements drainants, puis tapoter légèrement du bout des doigts.",
    caution:
      "Ne pas introduire dans l'œil. En cas de contact, rincer abondamment à l'eau claire.",
    routineStep: 4,
    routineTiming: "Matin & Soir",
    highlight: "Embout rafraîchissant en acier chirurgical & Collagène Végan",
  },
  {
    id: "medicube-jelly-cream",
    orderNumber: "05",
    brand: "MEDICUBE",
    name: "Medicube Collagen Jelly Cream",
    type: "Crème hydratante effet Glass Skin",
    volume: "110 ml",
    price: 351,
    priceFormatted: "351 DH",
    image: "/products/medicube-jelly-cream-v2.png",
    modelImage: "/models/medicube-jelly-cream-model.webp",
    badge: "Effet Glass Skin Culte",
    shortBenefit: "Rebond, éclat miroir & maintien d'hydratation",
    presentation:
      "La célèbre crème-gelée coréenne au collagène lyophilisé, niacinamide et squalane. Sa texture gelée rose à mémoire de forme fond sur la peau pour sceller l'hydratation, repulper immédiatement les traits et offrir un fini miroir ultra-lumineux.",
    benefits: [
      "Offre un éclat miroir spectaculaire façon Glass Skin coréenne",
      "Scelle durablement l'hydratation de toutes les étapes précédentes",
      "Restaure visiblement la tonicité, le rebond et l'élasticité cutanée",
      "Texture gelée fraîche fondante, non comédogène et sans résidu gras",
      "Protège et reconstitue la barrière lipidique grâce au squalane végétal",
    ],
    keyActives: [
      "Collagène Hydrolysé & Soluble",
      "Niacinamide (Vitamine B3)",
      "Squalane Végétal",
      "Élastine Hydrolysée & Protéoglycane",
      "Cyanocobalamine (Vitamine B12)",
    ],
    keyActivesDetails: [
      {
        name: "Collagène Hydrolysé & Soluble",
        role: "Micro-molécules de collagène hautement assimilables pour restaurer la fermeté et lisser la peau.",
      },
      {
        name: "Niacinamide (Vitamine B3)",
        role: "Améliore la clarté du teint, resserre les pores et illumine les teints ternes et fatigués.",
      },
      {
        name: "Squalane Végétal",
        role: "Mime les lipides naturels de la peau pour verrouiller l'eau sans boucher les pores.",
      },
      {
        name: "Élastine Hydrolysée & Protéoglycane",
        role: "Assure la souplesse, le rebond et la résilience tissulaire face aux agressions.",
      },
      {
        name: "Cyanocobalamine (Vitamine B12) & Chlorella",
        role: "Revitalisation cellulaire conférant la teinte rose naturelle et fraîche à la texture gelée.",
      },
    ],
    ingredients:
      "Water, Propanediol, Dipropylene Glycol, Butylene Glycol, Methylpropanediol, Diethoxyethyl Succinate, Ethoxydiglycol, Ammonium Acryloyldimethyltaurate/Beheneth-25 Methacrylate Crosspolymer, Niacinamide, Trehalose, 1,2-Hexanediol, Chlorella Vulgaris Extract, Collagen, Hydrolyzed Collagen, Cynanchum Atratum Extract, Althaea Rosea Flower Extract, Soluble Collagen, Allium Sativum (Garlic) Bulb Extract, Avena Sativa (Oat) Kernel Extract, Bertholletia Excelsa Seed Extract, Brassica Oleracea Italica (Broccoli) Extract, Camellia Sinensis Seed Extract, Salmon Egg Extract, Solanum Lycopersicum (Tomato) Fruit Extract, Spinacia Oleracea (Spinach) Leaf Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Wine Extract, Polyglyceryl-10 Isostearate, Tromethamine, Glucose, Polyglyceryl-10 Oleate, Ethylhexylglycerin, Fructooligosaccharides, Fructose, Adenosine, Sodium Phytate, Cyanocobalamin, Tocopherol, Pullulan, Glycerin, Hydroxypropyltrimonium Hyaluronate, Squalane, Soluble Proteoglycan, Hydrolyzed Elastin, Sodium DNA, Carbomer, Xanthan Gum, Fragrance(Parfum).",
    usage:
      "Prélever une noisette de texture gelée à l'aide d'une spatule ou des doigts. Appliquer sur le visage et le cou en massant doucement vers le haut jusqu'à absorption complète.",
    caution:
      "Usage externe uniquement. Conserver à température ambiante à l'abri du soleil direct.",
    routineStep: 5,
    routineTiming: "Matin & Soir",
    highlight: "Texture gelée rose à mémoire de forme enrichie en collagène & squalane",
  },
  {
    id: "medicube-sunscreen",
    orderNumber: "06",
    brand: "MEDICUBE",
    name: "Medicube Collagen Firming Sun Cream SPF50+",
    type: "Crème solaire raffermissante SPF50+ PA++++",
    volume: "50 ml",
    price: 230,
    priceFormatted: "230 DH",
    image: "/products/medicube-sunscreen-transparent.png",
    modelImage: "/models/medicube-sunscreen-model.webp",
    badge: "SPF50+ PA++++ Fermeté",
    shortBenefit: "Très haute protection UVA/UVB & soutien fermeté",
    presentation:
      "Un soin solaire hybride coréen d'exception combinant une très haute protection à large spectre SPF50+ PA++++ et un complexe raffermissant de 5 000 ppm de collagène. Fini invisible, toucher soyeux, zéro trace blanche et sans effet gras.",
    benefits: [
      "Protège efficacement contre les rayons UVA (anti-âge) et UVB (anti-brûlures)",
      "Renforce la fermeté de la peau grâce aux 5 000 ppm de collagène actif",
      "Ne laisse aucun film blanc, fini velouté parfait sous le maquillage",
      "Hydrate et prévient le dessèchement solaire avec 17 acides aminés",
      "Étape protectrice finale essentielle pour verrouiller les bienfaits de la routine",
    ],
    keyActives: [
      "Filtres Solaires Haute Performance SPF50+ PA++++",
      "Complexe Collagène 5 000 ppm",
      "17 Acides Aminés Essentiels",
      "Céramide NP & Aqua Céramide",
      "Niacinamide & Adénosine",
    ],
    keyActivesDetails: [
      {
        name: "Filtres Solaires SPF50+ PA++++",
        role: "Protection maximale certifiée contre les rayons destructeurs de collagène et créateurs de taches.",
      },
      {
        name: "Complexe Collagène (5 000 ppm)",
        role: "Hydrolysé, soluble et extrait de collagène pour préserver la fermeté et prévenir le photo-vieillissement.",
      },
      {
        name: "Complexe de 17 Acides Aminés",
        role: "Fournit les briques fondamentales nécessaires à la souplesse et au tonus cellulaire.",
      },
      {
        name: "Céramide NP",
        role: "Restaure le ciment intercellulaire et préserve l'hydratation face à la chaleur.",
      },
      {
        name: "Niacinamide & Adénosine",
        role: "Synergie anti-taches et anti-rides agissant en continu pendant l'exposition.",
      },
    ],
    ingredients:
      "Water, Propanediol, Titanium Dioxide (CI 77891), Isononyl Isononanoate, Aluminum Hydroxide, Stearic Acid, Polyhydroxystearic Acid, Polyglyceryl-2 Dipolyhydroxystearate, Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Coco-Caprylate/Caprate, Diisostearyl Malate, Dipentaerythrityl Hexa C5-9 Acid Esters, Polyglyceryl-6 Stearate, Polyglyceryl-6 Behenate, Acrylates Copolymer, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Niacinamide, C14-22 Alcohols, C12-20 Alkyl Glucoside, Glucose, Ethylhexyl Triazone, Chlorella Vulgaris Extract, Fructooligosaccharides, Fructose, Butylene Glycol, 1,2-Hexanediol, Ethylhexylglycerin, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Decyl Glucoside, Glycerin, Xanthan Gum, Polyacrylate-13, Polyisobutene, Polysorbate 20, Sorbitan Isostearate, Behenyl Alcohol, Potassium Cetyl Phosphate, Panthenol, Hydrolyzed Collagen, Collagen Extract, Soluble Collagen, Sodium Hyaluronate, Adenosine, Ceramide NP, Hydrogenated Lecithin, Glycine, Serine, Glutamic Acid, Aspartic Acid, Leucine, Alanine, Lysine, Arginine, Tyrosine, Phenylalanine, Proline, Threonine, Valine, Isoleucine, Histidine, Cysteine, Methionine, Hydrolyzed Glycosaminoglycans, Sodium Hyaluronate Crosspolymer, Hydrolyzed Hyaluronic Acid, Hyaluronic Acid, Sodium Acetylated Hyaluronate, Fragrance(Parfum).",
    usage:
      "Appliquer généreusement et uniformément sur le visage, le cou et les oreilles comme dernière étape de votre routine matinale, 15 minutes avant l'exposition. Renouveler toutes les 2 heures en cas d'exposition continue.",
    caution:
      "Usage externe. Renouveler l'application après avoir nagé, transpiré ou s'être essuyé.",
    routineStep: 6,
    routineTiming: "Matin uniquement",
    highlight: "Soin SPF50+ PA++++ raffermissant aux 5 000 ppm de collagène",
  },
];

export const ROUTINE_STEPS = [...PRODUCTS].sort((a, b) => a.routineStep - b.routineStep);

export const GIFT_ITEM = {
  name: "Trousse Beija Flor Jet Set — Sol de Janeiro",
  subtitle: "Set de voyage 3 soins corps & parfum dans sa trousse rose exclusive",
  value: 294,
  valueFormatted: "294 DH",
  priceFormatted: "0 DH (Offert)",
  image: "/gift-trousse.png",
};

export const TOTAL_PACK_ORIGINAL_PRICE = PRODUCTS.reduce((sum, p) => sum + p.price, 0); // 1729 DH
export const PACK_SPECIAL_PRICE = 1500;
export const PACK_SPECIAL_PRICE_FORMATTED = "1 500 DH";
export const PACK_ORIGINAL_TOTAL_VALUE = TOTAL_PACK_ORIGINAL_PRICE + GIFT_ITEM.value; // 2023 DH
export const PACK_ORIGINAL_TOTAL_VALUE_FORMATTED = "2 023 DH";

