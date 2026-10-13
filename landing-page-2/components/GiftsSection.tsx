"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { GIFTS } from "@/data/products";
import { Gift, Sparkles, Check, PackageCheck, Heart } from "lucide-react";

export default function GiftsSection() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].giftsSection;

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7EE] text-[#310F10] relative overflow-hidden">
      {/* Subtle Warm Ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFE7D5]/70 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#74070D]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#74070D]/10 border border-[#74070D]/20 text-[#74070D] text-xs uppercase font-bold tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5 text-[#74070D]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#46462A] max-w-2xl mx-auto font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Master Showcase: Left 3D Image + Right Gifts Presentation in Warm Beige Container */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#EFE7D5] border border-[#74070D]/15 shadow-[0_12px_40px_rgba(49,15,16,0.06)] overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Clean 3D Visual with Ribbon */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              {/* Soft rosy/warm aura backdrop highlight */}
              <div className="absolute inset-0 bg-radial from-[#74070D]/15 via-[#FAF7EE]/50 to-transparent blur-2xl rounded-full pointer-events-none" />

              {/* 3D Duo Image */}
              <div className="relative z-10 w-full max-w-[440px] aspect-[850/620] drop-shadow-[0_16px_30px_rgba(49,15,16,0.15)] group">
                <Image
                  src="/gifts/kado-duo-clean.png"
                  alt="Vos 2 Cadeaux Inclus - Fino Hair Mask & Vaseline Lip Therapy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Gifts Details & Explanations */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              
              {/* Intro header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#74070D]/15">
                <div className="flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-[#74070D]" />
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#74070D]">
                    {isArabic ? "هدايا مجانية مرافقة للطلب" : "Cadeaux 100% Inclus & Offerts"}
                  </span>
                </div>
                <span className="px-3 py-0.5 rounded-full bg-[#74070D] text-[#FAF7EE] text-xs font-black uppercase tracking-wider shadow-xs">
                  {t.offered}
                </span>
              </div>

              {/* List of the 2 Gifts */}
              <div className="space-y-4">
                {GIFTS.map((gift, idx) => (
                  <div
                    key={gift.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF7EE] border border-[#74070D]/12 hover:border-[#74070D]/30 transition-all duration-300 shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#74070D] text-[#FAF7EE] text-[10px] font-bold uppercase tracking-wider">
                            {idx === 0 ? t.gift1Tag : t.gift2Tag}
                          </span>
                          <span className="text-[11px] font-semibold text-[#74070D]/80 uppercase">
                            {gift.brand}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#310F10] leading-snug">
                          {isArabic ? gift.arabicName : gift.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs text-[#46462A]/60 block line-through">
                          {gift.value}
                        </span>
                        <span className="text-xs font-black text-[#74070D] uppercase">
                          {t.offered}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#46462A] font-light leading-relaxed">
                      {gift.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
