"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sun, Moon, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function RoutineSection() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].routineSection;
  const [activeTab, setActiveTab] = useState<"morning" | "night">("morning");

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const morningSteps = [
    {
      step: "01",
      title: "Nettoyage Purifiant",
      product: "Seoul 1988 Cleansing Foam",
      desc: "Élimine le sébum accumulé durant la nuit tout en préservant l'hydratation de la peau.",
    },
    {
      step: "02",
      title: "Contour des Yeux",
      product: "Seoul 1988 Eye Cream",
      desc: "Dégonfle le regard, estompe les cernes et illumine le contour des yeux.",
    },
    {
      step: "03",
      title: "Hydratation & Glow Glass Skin",
      product: "Cream Snail Mucin 93% + Rice",
      desc: "Infuse une hydratation profonde, apaise les rougeurs et procure un éclat radieux non gras.",
    },
    {
      step: "04",
      title: "Bouclier UV Invisible",
      product: "Seoul 1988 Sun Pine Tree + Ceramide",
      desc: "Protection solaire SPF 50+ maximale contre les rayons UVA/UVB et la pollution.",
    },
  ];

  const nightSteps = [
    {
      step: "01",
      title: "Nettoyage en Profondeur",
      product: "Seoul 1988 Cleansing Foam",
      desc: "Débarrasse les pores des impuretés, de la sueur et des filtres solaires de la journée.",
    },
    {
      step: "02",
      title: "Soin Contour des Yeux",
      product: "Seoul 1988 Eye Cream",
      desc: "Nourrit intensément la peau fine des paupières et prévient le creusement des cernes.",
    },
    {
      step: "03",
      title: "Activation Anti-Âge Liposomique",
      product: "Serum Retinal Liposome 2% + Black Ginseng",
      desc: "Le rétinal encapsulé pénètre en profondeur pour stimuler le collagène et lisser le grain.",
    },
    {
      step: "04",
      title: "Régénération Nocturne & Fermeté",
      product: "Cream Retinal Liposome 1% + Fermented Rice",
      desc: "Scelle l'hydratation, régénère les cellules et repulpe l'épiderme durant votre sommeil.",
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
                  ? "bg-[#74070D] text-[#F3E3B2] shadow-md"
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
                  ? "bg-[#310F10] text-[#F3E3B2] shadow-md"
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentSteps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#FAF7EE] border border-[#F3E3B2] shadow-sm hover:shadow-xl hover:border-[#74070D]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#74070D]">
                    {s.step}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#46462A]" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#46462A] mb-1">
                  {s.title}
                </h4>
                <h5 className="font-serif text-base font-bold text-[#310F10] mb-3">
                  {s.product}
                </h5>
                <p className="text-xs text-[#46462A] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Routine CTA */}
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
    </section>
  );
}
