"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ArrowRight } from "lucide-react";
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
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#FAF7EE] text-[#310F10] min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] flex items-center"
    >
      {/* Desktop Full-Bleed Natural Studio Image - Seamless across the entire section */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <Image
          src="/images/hero-pack.webp"
          alt="Pack Seoul 1988 K-Secret"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[right_top]"
        />
        {/* Soft subtle bottom shadow so the photo doesn't look abruptly cut off at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none" />
      </div>

      {/* Main Container - Ultra Clean, Minimalist Headline & CTA Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-md xl:max-w-lg -mt-2 sm:-mt-5 lg:-mt-8">
          
          {/* Main Headline - No underline, lifted up with distinct spacing between lines */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-[#310F10] mb-8 flex flex-col gap-2.5 sm:gap-3">
            <span className="leading-tight">
              {t.titlePart1}
              <span className="font-extrabold text-[#74070D] italic">
                {t.titleHighlight}
              </span>
            </span>
            <span className="text-[#310F10] leading-tight">
              {t.titlePart2}
            </span>
          </h1>

          {/* Dedicated Image on Mobile (Visible on mobile/tablet, hidden on desktop where full image shows) */}
          <div className="lg:hidden w-full my-4 rounded-2xl overflow-hidden shadow-2xl border border-[#74070D]/20 relative">
            <Image
              src="/images/hero-pack.webp"
              alt="Pack Seoul 1988 K-Secret & Cadeaux Fino Vaseline"
              width={2048}
              height={1292}
              priority
              className="w-full h-auto object-cover"
            />
            {/* Soft bottom shadow on mobile image */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
          </div>

          {/* CTA Button with Both Prices */}
          <div className="w-full sm:w-auto flex flex-col items-start gap-3 mt-1">
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
