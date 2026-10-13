"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sun, Moon, ArrowRight, Sparkles, Eye, X, Droplets } from "lucide-react";

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
    },
  ];

  const currentSteps = activeTab === "morning" ? morningSteps : nightSteps;

  // Measure path length and track sticky scroll progress
  useEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength();
        if (len > 0) setTotalLength(len);
      } catch {}
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const current = -rect.top;
      const progress = Math.min(Math.max(current / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Compute exact tip coordinates on SVG wave
      if (pathRef.current && totalLength > 0) {
        try {
          const pt = pathRef.current.getPointAtLength(Math.min(totalLength, Math.max(0, totalLength * progress)));
          setTipPosition({ x: pt.x, y: pt.y });
        } catch {}
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalLength]);

  // Arched & bowed bezier wave (cresting high between 1 & 2, dipping low between 2 & 3, cresting high between 3 & 4)
  // Matching the user's hand sketch in media_1791895270485_fbd7af4d.png
  const curvedPathD =
    "M 100,230 C 160,50 310,50 370,110 C 430,290 570,290 630,230 C 690,50 830,50 890,110";

  return (
    <section
      ref={containerRef}
      id="routine"
      className="relative bg-[#FAF7EE] text-[#310F10] min-h-[175vh]"
    >
      {/* Pinned Sticky Stage during the scroll sequence */}
      <div className="sticky top-16 md:top-20 min-h-[calc(100vh-80px)] flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#46462A]/10 border border-[#46462A]/20 text-[#46462A] text-xs uppercase font-bold tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#74070D]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#310F10] leading-tight mb-2">
            {t.title}
          </h2>

          {/* Routine Tabs: Routine du matin & Routine du soir */}
          <div className="inline-flex p-1 rounded-full bg-[#F4EEDC] border border-[#F3E3B2] shadow-inner mt-2">
            <button
              onClick={() => setActiveTab("morning")}
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
              onClick={() => setActiveTab("night")}
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

        {/* Winding Circular Sequence with Curved Connecting Line */}
        <div className="relative max-w-5xl mx-auto w-full my-auto py-2">

          {/* Connecting Curved Wave SVG - only active line drawn on scroll */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 340"
              fill="none"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Active progressive path drawn as user scrolls */}
              <path
                ref={pathRef}
                d={curvedPathD}
                stroke="#74070D"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={totalLength}
                style={{
                  strokeDashoffset: totalLength * (1 - scrollProgress),
                  transition: "stroke-dashoffset 0.15s ease-out",
                }}
              />
              {/* Animated glowing travelling dot at the tip of the line */}
              {tipPosition && scrollProgress > 0.02 && scrollProgress < 0.98 && (
                <circle
                  cx={tipPosition.x}
                  cy={tipPosition.y}
                  r="5"
                  fill="#74070D"
                  className="filter drop-shadow-[0_0_8px_rgba(116,7,13,0.8)] animate-pulse"
                />
              )}
            </svg>
          </div>

          {/* 4 Circles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10 items-start">
            {currentSteps.map((item, idx) => {
              // Alternating wave height: idx 0 (low), idx 1 (high), idx 2 (low), idx 3 (high)
              const isHigh = idx === 1 || idx === 3;
              
              // Progressive scroll reveal thresholds:
              // Step 0: always visible once in section (progress >= 0.0)
              // Step 1: appears as line reaches circle 2 (progress >= 0.22)
              // Step 2: appears as line reaches circle 3 (progress >= 0.52)
              // Step 3: appears as line reaches circle 4 (progress >= 0.80)
              const threshold = idx === 0 ? 0 : idx === 1 ? 0.22 : idx === 2 ? 0.52 : 0.80;
              const isRevealed = scrollProgress >= threshold;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center transition-all duration-500 ease-out ${
                    idx === 0 ? "md:-translate-x-5" : ""
                  } ${
                    isHigh ? "md:-translate-y-4 md:pt-0" : "md:translate-y-8 md:pt-6"
                  } ${
                    isRevealed
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-80 translate-y-6 pointer-events-none"
                  }`}
                >
                  {/* Step Badge on Top of the Circle */}
                  <div className="mb-2 text-center">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#74070D] text-[#F3E3B2] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
                      Étape {item.step}
                    </span>
                  </div>

                  {/* Circular Container with Product */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-[#FAF7EE] via-[#F4EEDC] to-[#EAE0CA] border-2 border-[#74070D] shadow-[0_8px_18px_rgba(116,7,13,0.14)] hover:shadow-[0_12px_24px_rgba(116,7,13,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center p-3 group">
                    
                    {/* Inner gold accent ring */}
                    <div className="absolute inset-1.5 rounded-full border border-[#F3E3B2] pointer-events-none" />

                    {/* Isolated Product Image */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.product}
                        className="h-24 sm:h-28 md:h-32 max-h-[125px] w-auto object-contain drop-shadow-[0_8px_12px_rgba(49,15,16,0.25)] animate-float-product pointer-events-none relative z-10"
                      />
                    )}

                    {/* Subtle ground reflection */}
                    <div className="absolute bottom-2.5 w-16 h-2 bg-[#74070D]/15 blur-xs rounded-full pointer-events-none" />
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
                <div className="w-24 h-24 shrink-0 rounded-full bg-[#F4EEDC] border-2 border-[#74070D] p-2 flex items-center justify-center shadow-inner">
                  <img
                    src={selectedStep.image}
                    alt={selectedStep.product}
                    className="max-h-full w-auto object-contain drop-shadow-md"
                  />
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
