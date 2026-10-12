"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { GIFTS } from "@/data/products";
import { Gift, Sparkles, Check } from "lucide-react";

export default function GiftsSection() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].giftsSection;

  return (
    <section className="py-16 bg-[#310F10] text-[#FAF7EE] relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#74070D]/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#46462A]/40 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF7EE]/10 border border-[#F3E3B2]/30 text-[#F3E3B2] text-xs uppercase font-bold tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5 text-[#F3E3B2]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F3E3B2] mb-3">
            {t.title}
          </h2>
          <p className="text-sm text-[#FAF7EE]/80 max-w-xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Gifts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {GIFTS.map((gift, idx) => (
            <div
              key={gift.id}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#46462A]/80 to-[#310F10]/90 border-2 border-[#F3E3B2]/40 shadow-2xl relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#74070D] text-[#F3E3B2] text-[10px] font-bold uppercase tracking-wider">
                    {idx === 0 ? t.gift1Tag : t.gift2Tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F3E3B2] text-[#74070D] text-xs font-black uppercase">
                    OFFERT
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-[#F3E3B2]/75 uppercase block">
                    {gift.brand}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                    {isArabic ? gift.arabicName : gift.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#FAF7EE]/85 leading-relaxed mb-6 font-light">
                  {gift.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3E3B2]/20 flex items-center justify-between text-xs">
                <span className="text-[#F3E3B2]/80">
                  {t.valueLabel} <span className="line-through">{gift.value}</span>
                </span>
                <span className="text-[#F3E3B2] font-bold uppercase flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-400" />
                  Inclus dans votre colis
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
