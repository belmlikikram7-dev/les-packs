"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sparkles, Dna, ShieldCheck, SunMedium } from "lucide-react";

export default function PackIntro() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].packIntro;

  const features = [
    {
      icon: Dna,
      title: t.feature1Title,
      desc: t.feature1Desc,
    },
    {
      icon: Sparkles,
      title: t.feature2Title,
      desc: t.feature2Desc,
    },
    {
      icon: ShieldCheck,
      title: t.feature3Title,
      desc: t.feature3Desc,
    },
    {
      icon: SunMedium,
      title: t.feature4Title,
      desc: t.feature4Desc,
    },
  ];

  return (
    <section id="pack" className="py-20 bg-[#FAF7EE] text-[#310F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#46462A]/10 border border-[#46462A]/20 text-[#46462A] text-xs uppercase font-bold tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#74070D]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F4EEDC] border border-[#F3E3B2] shadow-sm hover:shadow-xl hover:border-[#74070D]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#74070D] text-[#F3E3B2] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#310F10] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#46462A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#46462A]/15 text-[10px] font-bold uppercase tracking-wider text-[#74070D]">
                  Technologie K-Secret
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
