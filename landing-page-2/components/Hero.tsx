"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ArrowRight, Gift } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].hero;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-[#EBDDCF] text-[#310F10]"
    >
      {/* Desktop Full-Bleed Natural Image - Pure High-Resolution Studio Photography */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <Image
          src="/images/hero-pack.webp"
          alt="Pack Seoul 1988 K-Secret"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Main Container - Clean, Minimalist, Left-Aligned Headline, Gift Card & CTA Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-lg xl:max-w-xl">
          
          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold leading-[1.18] text-[#310F10] mb-6">
            {t.titlePart1}
            <span className="font-extrabold text-[#74070D] italic underline decoration-[#74070D] decoration-wavy decoration-2">
              {t.titleHighlight}
            </span>
            {t.titlePart2}
          </h1>

          {/* Dedicated Image on Mobile (Visible on mobile/tablet, hidden on desktop where full image shows) */}
          <div className="lg:hidden w-full my-4 rounded-2xl overflow-hidden shadow-2xl border border-[#74070D]/20">
            <Image
              src="/images/hero-pack.webp"
              alt="Pack Seoul 1988 K-Secret & Cadeaux Fino Vaseline"
              width={2048}
              height={1152}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Gift Notification Banner - Luxury Frosted White Card */}
          <div className="w-full max-w-md mb-7 p-2.5 sm:p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[#74070D]/20 shadow-lg flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#74070D] text-[#FAF7EE] flex items-center justify-center shrink-0 shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#74070D] block">
                Offre Spéciale Incluse
              </span>
              <span className="text-xs font-bold text-[#310F10] leading-tight block truncate">
                {t.giftBadge}
              </span>
            </div>
          </div>

          {/* CTA Button with Both Prices */}
          <div className="w-full sm:w-auto flex flex-col items-start gap-3">
            <button
              onClick={() => scrollTo("#commande")}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#FAF7EE] text-xs sm:text-sm uppercase font-bold tracking-wider shadow-xl shadow-[#74070D]/40 hover:shadow-[#74070D]/60 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>{t.ctaButton}</span>
              <span className="flex items-center gap-2 whitespace-nowrap bg-black/25 px-2.5 py-1 rounded-full border border-white/10">
                <span className="text-[#FAF7EE]/60 line-through text-xs font-normal">
                  <bdi dir="ltr">{t.originalPrice}</bdi>
                </span>
                <span className="text-[#F3E3B2] font-extrabold text-xs sm:text-sm">
                  <bdi dir="ltr">{t.specialPrice}</bdi>
                </span>
              </span>
              <ArrowRight
                className={`w-4 h-4 text-[#F3E3B2] transform ${
                  isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                } shrink-0 transition-transform`}
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
