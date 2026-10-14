"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sun, Moon, ArrowRight, Eye, X, Droplets } from "lucide-react";

interface StepItem {
  id: string;
  step: string;
  title: string;
  arabicTitle: string;
  product: string;
  arabicProduct: string;
  volume: string;
  category: string;
  desc: string;
  arabicDesc: string;
  keyActives: string[];
  usage: string;
  image?: string;
  modelImage?: string;
}

export default function RoutineSection() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].routineSection;
  const [activeTab, setActiveTab] = useState<"morning" | "night">("morning");
  const [selectedStep, setSelectedStep] = useState<StepItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [totalLength, setTotalLength] = useState<number>(1000);
  const [tipPosition, setTipPosition] = useState<{ x: number; y: number } | null>(null);

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const morningSteps: StepItem[] = [
    {
      id: "cleansing-foam-am",
      step: "01",
      title: "Nettoyage Purifiant",
      arabicTitle: "تنظيف لطيف وتنقية",
      product: "Seoul 1988 Cleansing Foam",
      arabicProduct: "رغوة منظفة سول 1988",
      volume: "150ml",
      category: "Nettoyant Doux Purifiant",
      desc: "Élimine délicatement l'excès de sébum nocturne sans tirailler ni assécher la barrière cutanée.",
      arabicDesc: "تنظف بلطف الإفرازات الدهنية الليلية دون التسبب في أي جفاف أو شد للبشرة.",
      keyActives: ["Centella Asiatica", "Acide Hyaluronique", "Extrait de Riz"],
      usage: "Masser une noisette sur visage humide en mouvements circulaires puis rincer abondamment.",
      image: "/products/cleansing-foam.png",
      modelImage: "/images/model2/model-cleansing-foam.webp",
    },
    {
      id: "eye-cream-am",
      step: "02",
      title: "Contour des Yeux",
      arabicTitle: "عناية بمحيط العينين",
      product: "Seoul 1988 Eye Cream",
      arabicProduct: "كريم محيط العينين سول 1988",
      volume: "30ml",
      category: "Soin Contour des Yeux",
      desc: "Dégonfle le regard au réveil, illumine les cernes et hydrate la zone fine de l'œil.",
      arabicDesc: "يخفف انتفاخ الصباح، يفتح الهالات السوداء ويرطب منطقة حول العينين الحساسة.",
      keyActives: ["Peptides", "Caféine", "Niacinamide"],
      usage: "Tapoter délicatement une petite perle avec l'annulaire de l'intérieur vers l'extérieur.",
      image: "/products/eye-cream.png",
      modelImage: "/images/model2/model-eye-cream.webp",
    },
    {
      id: "cream-snail-am",
      step: "03",
      title: "Hydratation Glass Skin",
      arabicTitle: "ترطيب ونضارة زجاجية",
      product: "Cream Snail Mucin 93% + Rice",
      arabicProduct: "كريم إفرازات الحلزون 93% + الأرز",
      volume: "100ml",
      category: "Crème Réparatrice & Glow",
      desc: "Hydratation intense et effet Glass Skin coréen immédiat, apaise les rougeurs sans fini gras.",
      arabicDesc: "ترطيب مكثف يمنح البشرة توهجاً كورياً زجاجياً نضراً ويهدئ الاحمرار تماماً.",
      keyActives: ["Mucine d'Escargot 93%", "Extrait de Riz", "Panthénol"],
      usage: "Appliquer généreusement sur le visage et le cou en massant jusqu'à pénétration.",
      image: "/products/cream-snail.png",
      modelImage: "/images/model2/model-cream-snail.webp",
    },
    {
      id: "sun-pine-am",
      step: "04",
      title: "Bouclier UV Invisible",
      arabicTitle: "حماية فائقة من الشمس",
      product: "Seoul 1988 Sun Pine + Ceramide",
      arabicProduct: "واقي شمس سول 1988 : الصنوبر + سيراميد",
      volume: "50ml",
      category: "Protection Solaire SPF 50+",
      desc: "Protection solaire SPF 50+ PA++++ ultralégère, non collante, idéale sous le maquillage.",
      arabicDesc: "حماية قصوى SPF 50+ من أشعة الشمس، خفيفة جداً، غير دهنية ولا تترك أي بياض.",
      keyActives: ["Extrait de Pin", "Céramides NP", "Filtres Nouvelle Génération"],
      usage: "Appliquer en dernière étape le matin 15 minutes avant toute exposition extérieure.",
      image: "/products/sun-pine.png",
      modelImage: "/images/model2/model-sun-pine.webp",
    },
  ];

  const nightSteps: StepItem[] = [
    {
      id: "cleansing-foam-pm",
      step: "01",
      title: "Nettoyage en Profondeur",
      arabicTitle: "تنظيف المسام بعمق",
      product: "Seoul 1988 Cleansing Foam",
      arabicProduct: "رغوة منظفة سول 1988",
      volume: "150ml",
      category: "Nettoyant Doux Purifiant",
      desc: "Libère les pores des résidus de filtres solaires, du maquillage et de la pollution accumulée.",
      arabicDesc: "يزيل رواسب واقي الشمس والشوائب والتلوث المتراكمة طوال اليوم وينظف المسام.",
      keyActives: ["Centella Asiatica", "Acide Hyaluronique", "Extrait de Riz"],
      usage: "Faire mousser dans les mains avec un peu d'eau puis masser 60 secondes sur le visage.",
      image: "/products/cleansing-foam.png",
      modelImage: "/images/model2/model-cleansing-foam.webp",
    },
    {
      id: "eye-cream-pm",
      step: "02",
      title: "Soin Contour Réparateur",
      arabicTitle: "ترميم محيط العينين ليلاً",
      product: "Seoul 1988 Eye Cream",
      arabicProduct: "كريم محيط العينين سول 1988",
      volume: "30ml",
      category: "Soin Contour des Yeux",
      desc: "Nourrit intensément les paupières et prévient le vieillissement cutané pendant le sommeil.",
      arabicDesc: "يغذي الجفون بعمق ويحمي من الخطوط التعبيرية وظهور التجاعيد أثناء النوم.",
      keyActives: ["Peptides", "Caféine", "Niacinamide"],
      usage: "Appliquer en couche soyeuse avant vos sérums de nuit.",
      image: "/products/eye-cream.png",
      modelImage: "/images/model2/model-eye-cream.webp",
    },
    {
      id: "serum-retinal-pm",
      step: "03",
      title: "Activation Anti-Âge Liposomique",
      arabicTitle: "تجديد الخلايا بالريتينال",
      product: "Serum Retinal Liposome 2% + Ginseng",
      arabicProduct: "سيروم ريتينال ليبوزوم 2% + الجينسنغ الأسود",
      volume: "30ml",
      category: "Sérum Régénérant Culte",
      desc: "Stimule la production de collagène, accélère le renouvellement cellulaire et lisse les ridules.",
      arabicDesc: "يحفز إنتاج الكولاجين، يسرع تجديد خلايا البشرة ويشد الخطوط الرفيعة بفضل الريتينال.",
      keyActives: ["Retinal Liposome 2%", "Ginseng Noir Fermenté", "Bakuchiol"],
      usage: "Appliquer 3 à 4 gouttes sur peau sèche en évitant les muqueuses. Utilisation du soir uniquement.",
      image: "/products/serum-retinal.png",
      modelImage: "/images/model2/model-serum-retinal.webp",
    },
    {
      id: "cream-retinal-pm",
      step: "04",
      title: "Régénération & Fermeté",
      arabicTitle: "كريم ليلي لشد البشرة",
      product: "Cream Retinal Liposome 1% + Rice",
      arabicProduct: "كريم ريتينال ليبوزوم 1% + الأرز المخمر",
      volume: "50ml",
      category: "Crème Nuit Lissante",
      desc: "Scelle les actifs, nourrit profondément et régénère l'épiderme pour un réveil à la peau repulpée.",
      arabicDesc: "يحافظ على ترطيب البشرة ويغذيها بالأرز المخمر لتستيقظي ببشرة ممتلئة ومشدودة ومشرقة.",
      keyActives: ["Retinal Liposome 1%", "Extrait de Riz Fermenté", "Adénosine"],
      usage: "Appliquer sur l'ensemble du visage et du cou en couche protectrice finale.",
      image: "/products/cream-retinal.png",
      modelImage: "/images/model2/model-cream-retinal.webp",
    },
  ];

  const currentSteps = activeTab === "morning" ? morningSteps : nightSteps;

  // Exact 4 Node Coordinates matching the wave (viewBox="0 90 1600 740")
  const nodeCoords = [
    [220, 560],
    [610, 340],
    [1000, 560],
    [1390, 340],
  ];

  // Exact wave path from Mediast:
  // Starts flat at 60,560 -> node 1 at 220,560 -> rises to node 2 at 610,340 -> dips to node 3 at 1000,560 -> rises to node 4 at 1390,340 -> exits flat at 1540,340
  const mediastWavePath =
    "M 60,560 L 220,560 C 400,560 430,340 610,340 C 790,340 820,560 1000,560 C 1180,560 1210,340 1390,340 L 1540,340";

  // Dedicated refs for high-performance direct manipulation (identical to Mediast architecture)
  const markerRef = useRef<SVGGElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);
  const stepCircleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathMetaRef = useRef<{ len: number; at: number[] }>({ len: 0, at: [] });

  useEffect(() => {
    let ticking = false;

    // 1. Measure path and find normalized position (0 to 1) for each step
    const path = activePathRef.current;
    if (path) {
      try {
        const totalLen = path.getTotalLength();
        if (totalLen > 0) {
          path.style.strokeDasharray = `${totalLen}`;
          path.style.strokeDashoffset = `${totalLen}`;

          // Find exact normalized length t for each of the 4 circle centers
          const at = nodeCoords.map(([nx, ny]) => {
            let bestT = 0;
            let minDist = Infinity;
            for (let s = 0; s <= 600; s++) {
              const pt = path.getPointAtLength((totalLen * s) / 600);
              const dist = (pt.x - nx) ** 2 + (pt.y - ny) ** 2;
              if (dist < minDist) {
                minDist = dist;
                bestT = s / 600;
              }
            }
            return bestT;
          });

          pathMetaRef.current = { len: totalLen, at };
        }
      } catch {}
    }

    // 2. High performance render function called on scroll
    const render = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const rawProgress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      setScrollProgress(rawProgress);

      const pathEl = activePathRef.current;
      const markerEl = markerRef.current;
      const { len, at } = pathMetaRef.current;

      if (!pathEl || !markerEl || !len) return;

      // Progress normalized along the line
      const c = Math.min(1, rawProgress / 0.95);

      // Draw the path exactly with the scroll
      pathEl.style.strokeDashoffset = String(len * (1 - c));

      // Move marker exactly to the front tip of the line
      const pt = pathEl.getPointAtLength(len * c);
      markerEl.setAttribute("transform", `translate(${pt.x} ${pt.y})`);

      // Reveal / hide circles with smoothstep easing: c smoothly drives each circle
      at.forEach((stepT, idx) => {
        const el = stepCircleRefs.current[idx];
        if (!el) return;

        // Start reveal 0.08 before reaching node, complete when reached
        const startT = stepT - 0.08;
        const norm = Math.min(1, Math.max(0, (c - startT) / (stepT - startT)));
        // Smoothstep interpolation (Hermite: 3n^2 - 2n^3)
        const smoothVal = norm * norm * (3 - 2 * norm);

        el.style.opacity = String(smoothVal);
        el.style.transform = `scale(${0.75 + smoothVal * 0.25}) translateY(${(1 - smoothVal) * 16}px)`;
        el.style.pointerEvents = smoothVal > 0.5 ? "auto" : "none";
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          render();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    render();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="routine"
      className="relative bg-[#FAF7EE] text-[#310F10] min-h-[220vh]"
    >
      {/* Pinned Sticky Stage during the scroll sequence */}
      <div className="sticky top-16 md:top-20 min-h-[calc(100vh-80px)] flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#310F10] leading-tight mb-2">
            {t.title}
          </h2>

          {/* Routine Tabs: Routine du matin & Routine du soir */}
          <div className="inline-flex p-1 rounded-full bg-[#F4EEDC] border border-[#F3E3B2] shadow-inner mt-2">
            <button
              onClick={() => {
                if (activeTab !== "morning") {
                  setActiveTab("morning");
                  if (containerRef.current) {
                    const top = containerRef.current.offsetTop;
                    window.scrollTo({ top: top, behavior: "smooth" });
                  }
                }
              }}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "morning"
                  ? "bg-[#74070D] text-[#F3E3B2] shadow-md scale-102"
                  : "text-[#46462A] hover:text-[#310F10]"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{t.morningTab}</span>
            </button>
            <button
              onClick={() => {
                if (activeTab !== "night") {
                  setActiveTab("night");
                  if (containerRef.current) {
                    const top = containerRef.current.offsetTop;
                    window.scrollTo({ top: top, behavior: "smooth" });
                  }
                }
              }}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "night"
                  ? "bg-[#310F10] text-[#F3E3B2] shadow-md scale-102"
                  : "text-[#46462A] hover:text-[#310F10]"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>{t.nightTab}</span>
            </button>
          </div>
        </div>

        {/* Winding Circular Sequence with Curved Connecting Line (Mediast Architecture) */}
        <div className="relative max-w-6xl mx-auto w-full my-auto py-4">

          {/* Mediast SVG Wave Canvas with Dotted Guide & Active Red Line & Radial Glow Marker */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              viewBox="0 90 1600 740"
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Radial Glow Gradient for the leading process-marker (identical to Mediast) */}
                <radialGradient id="routine-process-marker" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#74070D" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#74070D" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. Dotted Background Guide Track (Exact Mediast style: stroke-dasharray="2 10") */}
              <path
                d={mediastWavePath}
                fill="none"
                stroke="#310F10"
                strokeOpacity="0.15"
                strokeWidth="2.5"
                strokeDasharray="3 10"
                strokeLinecap="round"
              />

              {/* 2. Active Progressive Line Drawn on Scroll in Brand Red #74070D */}
              <path
                ref={activePathRef}
                d={mediastWavePath}
                fill="none"
                stroke="#74070D"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* 3. Leading Marker Attached Directly to the Tip (Exact Mediast structure: glow circle r=44 + core circle r=12) */}
              <g ref={markerRef} transform="translate(60 560)">
                <circle r="44" fill="url(#routine-process-marker)" />
                <circle r="11" fill="#74070D" stroke="#FAF7EE" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* 4 Large Product Circles Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10 items-start">
            {currentSteps.map((item, idx) => {
              // Alternating wave height to match node coordinates:
              // idx 0: y=560 (lower)
              // idx 1: y=340 (higher)
              // idx 2: y=560 (lower)
              // idx 3: y=340 (higher)
              const isHigh = idx === 1 || idx === 3;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    stepCircleRefs.current[idx] = el;
                  }}
                  className={`flex flex-col items-center will-change-transform will-change-opacity ${
                    isHigh ? "lg:-translate-y-6 lg:pt-0" : "lg:translate-y-8 lg:pt-6"
                  }`}
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    transform: idx === 0 ? "scale(1) translateY(0px)" : "scale(0.75) translateY(16px)",
                  }}
                >
                  {/* Step Badge on Top of the Circle */}
                  <div className="mb-2 text-center">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#74070D] text-[#F3E3B2] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
                      Étape {item.step}
                    </span>
                  </div>

                  {/* Large Circular Container with Product - Soft ambient shadow & delicate border */}
                  <div
                    onClick={() => setSelectedStep(item)}
                    className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF7EE] to-[#EAE0CA] border border-[#74070D]/25 shadow-[0_8px_20px_-4px_rgba(116,7,13,0.12)] hover:shadow-[0_12px_24px_-4px_rgba(116,7,13,0.2)] hover:border-[#74070D]/40 hover:scale-105 transition-all duration-300 flex items-center justify-center p-3 group overflow-hidden cursor-pointer"
                  >
                    
                    {/* Isolated Product Image */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.product}
                        className="h-24 sm:h-28 md:h-32 max-h-[125px] w-auto object-contain drop-shadow-[0_8px_14px_rgba(49,15,16,0.22)] animate-float-product pointer-events-none relative z-10 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90"
                      />
                    )}

                    {/* Model Photo Revealed on Hover */}
                    {item.modelImage && (
                      <img
                        src={item.modelImage}
                        alt={`${item.product} modèle`}
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-105 group-hover:scale-100 z-20 pointer-events-none"
                      />
                    )}

                    {/* Subtle soft ground reflection */}
                    <div className="absolute bottom-2.5 w-16 h-2 bg-[#74070D]/10 blur-xs rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
                  </div>

                  {/* Product Info & "Voir" Button below Circle */}
                  <div className="mt-3 text-center flex flex-col items-center">
                    <h4 className="font-sans text-xs sm:text-[13px] font-bold text-[#310F10] leading-snug max-w-[160px] min-h-[34px] flex items-center justify-center text-center">
                      {item.product}
                    </h4>
                    <span className="text-[10px] sm:text-[11px] text-[#46462A] font-semibold mt-0.5">
                      {item.volume}
                    </span>

                    {/* Button "Voir" */}
                    <button
                      onClick={() => setSelectedStep(item)}
                      className="mt-2 px-3.5 py-1 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-[11px] font-bold tracking-wide shadow-xs hover:shadow-sm transition-all active:scale-95 flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Voir</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Product Details Modal (Opened via the "Voir" Button) */}
      {selectedStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#FAF7EE] rounded-3xl border-2 border-[#F3E3B2] shadow-2xl p-6 sm:p-8 text-[#310F10] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F3E3B2] text-[#310F10] hover:bg-[#74070D] hover:text-[#F3E3B2] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Step & Volume Badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#74070D] text-[#F3E3B2] text-[10px] font-bold uppercase tracking-wider">
                Étape {selectedStep.step}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#46462A] text-[#F3E3B2] text-[10px] font-semibold">
                {selectedStep.volume}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 mb-5">
              {selectedStep.image && (
                <div className="relative w-24 h-24 shrink-0 rounded-full bg-[#F4EEDC] border-2 border-[#74070D] p-2 flex items-center justify-center shadow-inner overflow-hidden group">
                  <img
                    src={selectedStep.image}
                    alt={selectedStep.product}
                    className="max-h-full w-auto object-contain drop-shadow-md transition-all duration-300 group-hover:opacity-0 group-hover:scale-90"
                  />
                  {selectedStep.modelImage && (
                    <img
                      src={selectedStep.modelImage}
                      alt={`${selectedStep.product} modèle`}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-all duration-300 scale-105 group-hover:scale-100"
                    />
                  )}
                </div>
              )}
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-2xl font-bold text-[#310F10] leading-snug">
                  {selectedStep.product}
                </h3>
                <p className="text-xs text-[#74070D] font-bold uppercase tracking-wider mt-1">
                  {selectedStep.title} • {selectedStep.category}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#46462A] leading-relaxed mb-5">
              {selectedStep.desc}
            </p>

            {/* Actives Clés */}
            <div className="mb-5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#310F10] block mb-2">
                Actifs Clés de la Formule :
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedStep.keyActives.map((a, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F4EEDC] text-[#310F10] text-[11px] font-medium border border-[#F3E3B2]"
                  >
                    <Droplets className="w-2.5 h-2.5 text-[#74070D]" />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Application Advice */}
            <div className="p-3.5 rounded-2xl bg-[#F4EEDC] border border-[#F3E3B2] text-xs text-[#46462A] mb-6">
              <strong className="text-[#310F10] block mb-0.5">Conseils d&apos;application :</strong>
              {selectedStep.usage}
            </div>

            <button
              onClick={() => {
                setSelectedStep(null);
                scrollTo("#commande");
              }}
              className="w-full py-3.5 rounded-full bg-[#74070D] text-[#F3E3B2] text-xs font-bold uppercase tracking-wider hover:bg-[#8D0910] transition-colors shadow-md"
            >
              Commander le Pack Complet
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
