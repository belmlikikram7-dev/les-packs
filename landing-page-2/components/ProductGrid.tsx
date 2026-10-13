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

          {/* Clean, Elegant Side Editorial Statement - Enlarged & Prominent */}
          <div className="absolute top-[10%] sm:top-[14%] md:top-[16%] lg:top-[18%] left-[4%] sm:left-[6%] md:left-[7%] lg:left-[8%] z-20 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[680px] pointer-events-none select-none">
            {/* Subtle Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3.5">
              <span className="w-6 sm:w-10 h-[2px] bg-[#74070D]/50" />
              <span className="font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-[#74070D] font-bold">
                {isArabic ? "التزامنا" : "Notre Engagement"}
              </span>
            </div>

            {/* High-End Large Serif Quote */}
            <h3 className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] 2xl:text-[60px] text-[#310F10] leading-[1.2] sm:leading-[1.15] font-normal tracking-wide drop-shadow-sm">
              {isArabic ? (
                <>
                  « صحة بشرتكم،
                  <span className="block not-italic font-semibold text-[#74070D] mt-1.5 sm:mt-2.5">
                    مسؤوليتنا. »
                  </span>
                </>
              ) : (
                <>
                  «&nbsp;La santé de votre peau,
                  <span className="block not-italic font-semibold text-[#74070D] mt-1.5 sm:mt-2.5">
                    notre responsabilité.&nbsp;»
                  </span>
                </>
              )}
            </h3>

            {/* Minimal Gold Underline Accent */}
            <div className="flex items-center gap-2.5 mt-3 sm:mt-4 md:mt-5 opacity-70">
              <div className="w-12 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-[#74070D] to-transparent rounded-full" />
              <span className="text-xs sm:text-sm text-[#74070D]">✦</span>
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
