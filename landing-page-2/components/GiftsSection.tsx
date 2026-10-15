"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { GIFTS } from "@/data/products";
import { Gift, PackageCheck } from "lucide-react";

export default function GiftsSection() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].giftsSection;

  return (
    <section id="cadeaux" className="relative pt-3 pb-1 lg:pt-6 lg:pb-2 bg-[#FAF7EE] text-[#310F10] overflow-hidden">
      
      {/* Top Transition Wave */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 lg:h-10 text-[#EFE7D5] preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,110 480,10 760,65 C1040,120 1200,30 1440,75 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main Organic Wavy Beige Ribbon Container (Matching PackIntro - Compact) */}
      <div className="bg-[#EFE7D5] pt-5 pb-7 sm:pt-8 sm:pb-10 px-4 sm:px-6 lg:px-8 relative shadow-[inset_0_2px_12px_rgba(49,15,16,0.03)]">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            {/* Standalone Enlarged Gift Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF7EE] border border-[#74070D]/20 shadow-xs flex items-center justify-center text-[#74070D] mx-auto mb-2.5">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-[#74070D]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#310F10] leading-tight mb-2">
              {t.title}
            </h2>
            {/* Delicate red divider line */}
            <div className="w-14 h-[2px] bg-[#74070D]/35 mx-auto rounded-full mt-3" />
          </div>

          {/* Master Showcase: Left 3D Image + Right Gifts Presentation without rectangular card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Clean 3D Visual with Ribbon */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              {/* Soft rosy/warm aura backdrop highlight */}
              <div className="absolute inset-0 bg-radial from-[#74070D]/15 via-[#FAF7EE]/50 to-transparent blur-2xl rounded-full pointer-events-none" />

              {/* 3D Duo Image */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] aspect-[850/620] drop-shadow-[0_12px_24px_rgba(49,15,16,0.12)] group">
                <Image
                  src="/gifts/kado-duo-clean.webp"
                  alt="Vos 2 Cadeaux Inclus - Fino Hair Mask & Vaseline Lip Therapy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Gifts Details & Explanations */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5 sm:space-y-4">
              
              {/* Intro header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[#74070D]/15">
                <div className="flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#74070D]" />
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#74070D]">
                    {isArabic ? "هدايا مجانية مرافقة للطلب" : "Cadeaux 100% Inclus & Offerts"}
                  </span>
                </div>
                <span className="px-3 py-0.5 rounded-full bg-[#74070D] text-[#FAF7EE] text-xs font-black uppercase tracking-wider shadow-xs">
                  {t.offered}
                </span>
              </div>

              {/* List of the 2 Gifts */}
              <div className="space-y-3 sm:space-y-3.5">
                {GIFTS.map((gift, idx) => (
                  <div
                    key={gift.id}
                    className="p-3.5 sm:p-4.5 rounded-2xl bg-[#FAF7EE] border border-[#74070D]/12 hover:border-[#74070D]/30 transition-all duration-300 shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#74070D] text-[#FAF7EE] text-[10px] font-bold uppercase tracking-wider">
                            {idx === 0 ? t.gift1Tag : t.gift2Tag}
                          </span>
                          <span className="text-[11px] font-semibold text-[#74070D]/80 uppercase">
                            {gift.brand}
                          </span>
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#310F10] leading-snug">
                          {isArabic ? gift.arabicName : gift.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#74070D] text-[#FAF7EE] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs">
                          {t.offered}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#46462A] font-light leading-relaxed">
                      {isArabic ? (gift.arabicDescription || gift.description) : gift.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Transition Wave */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 lg:h-10 text-[#EFE7D5]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,45 C1200,105 1040,15 760,70 C480,125 320,25 0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}
