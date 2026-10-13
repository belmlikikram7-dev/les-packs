"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sun, Moon, ArrowRight, Sparkles, X, Check, Droplets, ImagePlus } from "lucide-react";

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
  image?: string; // Prepared for user's isolated product PNG
}

export default function RoutineSection() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].routineSection;
  const [activeTab, setActiveTab] = useState<"morning" | "night">("morning");
  const [selectedStep, setSelectedStep] = useState<StepItem | null>(null);

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
      image: "/products/K-SECRET Cleansing Foam Pine Cica 1% + Probiotics-transparent.png",
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
      image: "/products/K-SECRET Eye Cream Retinal Liposome 4% + Fermented Bean-transparent.png",
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
      image: "/products/K-SECRET Cream Snail Mucin 93% + Rice-transparent.png",
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
      image: "/products/K-SECRET Cleansing Foam Pine Cica 1% + Probiotics-transparent.png",
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
      image: "/products/K-SECRET Eye Cream Retinal Liposome 4% + Fermented Bean-transparent.png",
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
      image: "/products/K-SECRET Serum Retinal Liposome 2% + Black Ginseng-transparent.png",
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
      image: "/products/K-SECRET Cream Retinal Liposome 1% + Fermented Rice-transparent.png",
    },
  ];

  const currentSteps = activeTab === "morning" ? morningSteps : nightSteps;

  return (
    <section id="routine" className="py-20 bg-[#FAF7EE] text-[#310F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#46462A]/10 border border-[#46462A]/20 text-[#46462A] text-xs uppercase font-bold tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#74070D]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed mb-8">
            {t.subtitle}
          </p>

          {/* Routine Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-[#F4EEDC] border border-[#F3E3B2] shadow-inner">
            <button
              onClick={() => setActiveTab("morning")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "morning"
                  ? "bg-[#74070D] text-[#F3E3B2] shadow-md scale-102"
                  : "text-[#46462A] hover:text-[#310F10]"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>{t.morningTab}</span>
            </button>
            <button
              onClick={() => setActiveTab("night")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "night"
                  ? "bg-[#310F10] text-[#F3E3B2] shadow-md scale-102"
                  : "text-[#46462A] hover:text-[#310F10]"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>{t.nightTab}</span>
            </button>
          </div>
        </div>

        {/* Routine Banner */}
        <div className="max-w-2xl mx-auto mb-12 p-4 rounded-2xl bg-[#F4EEDC] border border-[#F3E3B2] text-center">
          <h3 className="font-serif text-lg font-bold text-[#310F10] mb-1">
            {activeTab === "morning" ? t.morningTitle : t.nightTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#46462A]">
            {activeTab === "morning" ? t.morningDesc : t.nightDesc}
          </p>
        </div>

        {/* Steps Grid : Faithful translation of reference design into luxury palette */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {currentSteps.map((item) => (
            <div
              key={item.id}
              className="relative p-5 rounded-[2.2rem] bg-gradient-to-b from-[#74070D] to-[#4F0408] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden border border-[#F3E3B2]/30"
            >
              {/* Pill Arch Dome (identical to the rounded arched podium in reference) */}
              <div className="relative w-full aspect-[4/4.7] rounded-t-[4.5rem] rounded-b-[2rem] bg-[#F3E3B2]/20 border border-[#F3E3B2]/30 p-4 flex flex-col justify-between items-center overflow-hidden mb-4 shadow-inner">
                
                {/* Top Badge (ECO pill in reference -> Step Badge pill) */}
                <div className="w-full flex items-center justify-between z-10 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold tracking-wider uppercase">
                    <Sparkles className="w-3 h-3 text-[#F3E3B2]" />
                    <span>{t.stepBadge} {item.step}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#F3E3B2] bg-[#310F10]/60 px-2.5 py-0.5 rounded-full border border-white/10">
                    {item.volume}
                  </span>
                </div>

                {/* Center Product Image Container (Waiting for transparent PNG) */}
                <div className="relative w-full flex-1 flex items-center justify-center my-3">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.product}
                      fill
                      className="object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    /* Clean & Elegant Product Slot Placeholder */
                    <div className="flex flex-col items-center justify-center text-center p-4 w-full h-full">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#F3E3B2]/30 flex items-center justify-center mb-2 shadow-sm">
                        <ImagePlus className="w-6 h-6 text-[#F3E3B2]" />
                      </div>
                      <span className="text-xs font-bold text-[#F3E3B2] leading-snug max-w-[150px]">
                        {isArabic ? item.arabicProduct : item.product}
                      </span>
                    </div>
                  )}
                </div>

                {/* Subtle Grounding Floor Glow for the Product */}
                <div className="w-28 h-3 bg-[#F3E3B2]/25 blur-sm rounded-full pointer-events-none" />
              </div>

              {/* Bottom Info & Learn More Button (Exact matching layout from reference) */}
              <div className="flex items-center justify-between gap-2 px-1">
                <div className="flex-1 min-w-0">
                  <h4 className="font-sans text-sm font-bold text-white truncate leading-tight">
                    {isArabic ? item.arabicProduct : item.product}
                  </h4>
                  <p className="text-[11px] text-[#F3E3B2]/80 truncate mt-0.5">
                    {isArabic ? item.arabicTitle : item.title}
                  </p>
                </div>

                {/* "Learn More" Pill Button */}
                <button
                  onClick={() => setSelectedStep(item)}
                  className="shrink-0 px-4 py-2 rounded-full bg-white text-[#74070D] hover:bg-[#F3E3B2] hover:text-[#310F10] text-[11px] font-bold tracking-wide shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  {t.learnMore}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Routine CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollTo("#commande")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer"
          >
            <span>Commander le Pack & Ses 2 Cadeaux</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Step Details Modal */}
      {selectedStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#FAF7EE] rounded-3xl border-2 border-[#F3E3B2] shadow-2xl p-6 sm:p-7 text-[#310F10]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F3E3B2] text-[#310F10] hover:bg-[#74070D] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Step Badge */}
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#74070D] text-[#F3E3B2] text-[10px] font-bold uppercase tracking-wider mb-3">
              <span>{t.stepBadge} {selectedStep.step}</span>
              <span>•</span>
              <span>{selectedStep.volume}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#310F10] mb-1 leading-snug">
              {isArabic ? selectedStep.arabicProduct : selectedStep.product}
            </h3>

            <p className="text-xs text-[#74070D] font-bold uppercase tracking-wider mb-4">
              {isArabic ? selectedStep.arabicTitle : selectedStep.title} ({selectedStep.category})
            </p>

            <p className="text-xs sm:text-sm text-[#46462A] leading-relaxed mb-5">
              {isArabic ? selectedStep.arabicDesc : selectedStep.desc}
            </p>

            {/* Actives */}
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

            {/* Usage */}
            <div className="p-3.5 rounded-2xl bg-[#F4EEDC] border border-[#F3E3B2] text-xs text-[#46462A] mb-5">
              <strong className="text-[#310F10] block mb-0.5">Conseils d&apos;application :</strong>
              {selectedStep.usage}
            </div>

            <button
              onClick={() => {
                setSelectedStep(null);
                scrollTo("#commande");
              }}
              className="w-full py-3 rounded-full bg-[#74070D] text-[#F3E3B2] text-xs font-bold uppercase tracking-wider hover:bg-[#8D0910] transition-colors"
            >
              Commander le Pack Complet
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
