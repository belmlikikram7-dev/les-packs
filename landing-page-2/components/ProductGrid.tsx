"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ShieldCheck } from "lucide-react";

export default function ProductGrid() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].productsSection;

  return (
    <section id="produits" className="pt-8 pb-10 lg:pt-12 lg:pb-14 bg-[#FAF7EE] text-[#310F10] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mb-6 lg:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#74070D]/10 border border-[#74070D]/20 text-[#74070D] text-xs uppercase font-bold tracking-widest mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Rituel K-Beauty Culte</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-3">
          L'Excellence Coréenne Réunie en un Seul Pack
        </h2>
        <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed max-w-2xl mx-auto">
          Une formule complète au Rétinal Liposomique, Ginseng Noir et Mucine d'Escargot pour une peau lisse, ferme et lumineuse.
        </p>
      </div>

      {/* 100% True Full-Width Edge-to-Edge Panoramic Image with smooth Top & Bottom transition */}
      <div className="w-full relative overflow-hidden">
        
        {/* Ultra-subtle micro top feather shadow (only 12-16px): blends the top edge without casting any shadow onto the hair */}
        <div 
          className="absolute top-0 left-0 right-0 h-3 sm:h-4 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #FAF7EE 0%, rgba(250, 247, 238, 0.4) 40%, transparent 100%)"
          }}
        />

        <div className="relative w-full aspect-[1024/512]">
          <Image
            src="/images/pack-excellence-full.webp"
            alt="L'Excellence Coréenne Réunie en un Seul Pack - Seoul 1988"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover sm:object-contain object-bottom w-full h-full select-none pointer-events-none"
          />

          {/* Circular Luxury Emblem Badge - Inspired by User Mockup */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[2%] sm:left-[3%] md:left-[4%] lg:left-[5%] z-20 pointer-events-none select-none">
            {/* The Badge Container */}
            <div className="relative w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px]">
              
              {/* Outer Decorative Offset Ring (Deep Green #46462A as in user mockup) */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-[#46462A]/65 sm:border-[2.5px] pointer-events-none"
                style={{
                  transform: "rotate(-5deg) scale(1.02)",
                }}
              />

              {/* Inner Decorative Offset Ring (Wine Red #74070D as in user mockup) */}
              <div 
                className="absolute inset-1.5 sm:inset-2 md:inset-2.5 rounded-full border-2 border-[#74070D]/75 sm:border-[2.5px] pointer-events-none"
                style={{
                  transform: "rotate(3deg)",
                }}
              />

              {/* Main Porcelain / Warm Beige Disc */}
              <div 
                className="absolute inset-3 sm:inset-4 md:inset-5 rounded-full bg-[#FAF7EE]/92 backdrop-blur-md shadow-[0_15px_35px_rgba(49,15,16,0.08)] border border-[#C5A059]/30 flex flex-col items-center justify-center text-center p-5 sm:p-7 md:p-8 lg:p-10"
              >
                {/* Subtle Brand Eyebrow */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5 opacity-90">
                  <span className="w-3 sm:w-5 h-[1px] bg-[#74070D]/40" />
                  <span className="font-mono text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#74070D] font-bold">
                    {isArabic ? "التزامنا" : "Engagement"}
                  </span>
                  <span className="w-3 sm:w-5 h-[1px] bg-[#74070D]/40" />
                </div>

                {/* Main Slogan in Beautiful High-End Serif Centered Inside Circle */}
                <h3 className="font-serif italic text-base sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-[#310F10] leading-tight sm:leading-snug font-normal tracking-wide drop-shadow-sm">
                  {isArabic ? (
                    <>
                      « صحة بشرتكم،
                      <span className="block not-italic font-semibold text-[#74070D] mt-1 sm:mt-1.5">
                        مسؤوليتنا. »
                      </span>
                    </>
                  ) : (
                    <>
                      «&nbsp;La santé de votre peau,
                      <span className="block not-italic font-semibold text-[#74070D] mt-1 sm:mt-1.5">
                        notre responsabilité.&nbsp;»
                      </span>
                    </>
                  )}
                </h3>

                {/* Delicate Underline Motif */}
                <div className="flex items-center gap-2 mt-2.5 sm:mt-3.5 opacity-60">
                  <div className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-[#74070D] to-transparent" />
                  <span className="text-[8px] sm:text-[10px] text-[#74070D]">✦</span>
                  <div className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-[#74070D] to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Soft bottom blend shadow - prevents harsh horizontal cut line and melts smoothly into the beige background */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #FAF7EE 15%, rgba(250, 247, 238, 0.85) 55%, rgba(250, 247, 238, 0.3) 80%, transparent 100%)"
          }}
        />
      </div>
    </section>
  );
}
