"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ArrowRight } from "lucide-react";

export default function ProductGrid() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].productsSection;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produits" className="pt-8 pb-10 lg:pt-12 lg:pb-14 bg-[#FAF7EE] text-[#310F10] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mb-6 lg:mb-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight">
          L'Excellence Coréenne Réunie en un Seul Pack
        </h2>
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

          {/* Clean E-Commerce Side Promotional Layout - Exactly as reference image */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[4%] sm:left-[6%] md:left-[7%] lg:left-[8%] z-20 max-w-[260px] sm:max-w-[360px] md:max-w-[430px] lg:max-w-[480px] xl:max-w-[520px] select-none">
            
            {/* Top Eyebrow with Star */}
            <div className="flex items-center gap-1.5 mb-2 sm:mb-2.5">
              <span className="font-serif italic text-xs sm:text-sm md:text-base text-[#74070D] font-medium tracking-wide">
                {isArabic ? "إشراقة كل يوم" : "Glow Every Day"}
              </span>
              <span className="text-[#74070D] text-xs sm:text-sm">✦</span>
            </div>

            {/* High-Contrast Bold Serif Headline */}
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#1A1A1A] leading-[1.14] tracking-tight mb-2.5 sm:mb-3.5">
              {isArabic ? (
                <>
                  صحة بشرتكم،
                  <span className="block text-[#74070D] font-serif italic font-normal mt-1">
                    مسؤوليتنا
                  </span>
                </>
              ) : (
                <>
                  La santé de votre peau,
                  <span className="block text-[#74070D] font-serif italic font-normal mt-1">
                    notre responsabilité
                  </span>
                </>
              )}
            </h3>

            {/* 2-Line Sub-headline */}
            <div className="text-[11px] sm:text-xs md:text-sm text-[#46462A] font-normal leading-relaxed mb-4 sm:mb-6 max-w-sm">
              <p>{isArabic ? "تخفيض حصري على الباك الكوري الأكثر مبيعاً." : "Offre exclusive sur notre rituel le plus vendu."}</p>
              <p>{isArabic ? "لفترة محدودة مع هديتين مجاناً !" : "Offre limitée avec 2 cadeaux offerts !"}</p>
            </div>

            {/* Black Pill Action Button: Commander -> scrolls to #commande */}
            <div>
              <button
                onClick={() => scrollTo("#commande")}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#74070D] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group pointer-events-auto"
              >
                <span>{isArabic ? "اطلبي الآن" : "Commander"}</span>
                <ArrowRight
                  className={`w-4 h-4 transform ${
                    isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  } transition-transform duration-200`}
                />
              </button>
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
