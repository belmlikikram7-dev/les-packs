"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Gift, Droplets, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

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
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-8 overflow-hidden"
    >
      {/* Desktop-only Hero Background Image (Pack on the right side for French, left side for Arabic) */}
      <div
        className={`hidden lg:block absolute inset-0 bg-no-repeat transition-all duration-500 pointer-events-none ${
          isArabic ? "bg-cover bg-left" : "bg-cover bg-right"
        }`}
        style={{
          backgroundImage: isArabic
            ? "url('/images/background-arabe.webp')"
            : "url('/images/background-francais.webp')",
        }}
      />

      {/* Soft blur overlay at top so navbar remains super legible */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/40 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ==================== 1. MOBILE ONLY COMPACT EDITORIAL LAYOUT (< lg) ==================== */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Surtitre Élégant */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E2B4C1]/60 shadow-2xs mb-2.5 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A55166] animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#A55166]">
              {t.badge}
            </span>
          </div>

          {/* Mobile Main Title */}
          <h1 className="font-serif text-3xl sm:text-4xl text-[#3A1826] font-normal leading-[1.15] max-w-sm mb-2">
            {isArabic ? (
              <>
                {t.titlePart1}
                <br />
                <span className="italic font-light text-[#A55166] whitespace-nowrap">
                  {t.titleHighlight}
                </span>{" "}
                {t.titlePart2}
              </>
            ) : (
              <>
                Le Pack <span className="italic font-light text-[#A55166]">Vinillia</span> pour une peau éclatante
              </>
            )}
          </h1>

          {/* Subtitle Mobile */}
          <div className="mb-2 px-2">
            <p className="text-xs sm:text-sm text-[#4A323D] font-medium leading-relaxed max-w-xs mx-auto drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
              {t.subtitle}
            </p>
          </div>

          {/* STANDALONE HERO IMAGE: High quality, complete uncropped view of the pack */}
          <div className="w-full mb-3 px-0.5">
            <div className="relative w-full aspect-[1.55/1] rounded-2xl overflow-hidden shadow-lg shadow-[#A55166]/12 border border-[#E2B4C1]/60 bg-[#FDF8FA]">
              <Image
                src={isArabic ? "/images/background-arabe-mobile.webp" : "/images/background-francais-mobile.webp"}
                alt="Le Pack Vinillia - Routine Soins Coréens Essentiels & Trousse Offerte"
                fill
                priority
                sizes="(max-width: 640px) 96vw, 540px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50 pointer-events-none" />
            </div>
          </div>

          {/* Gift Announcement */}
          <div className="flex items-center justify-center mb-2.5">
            <div className="inline-flex items-center gap-2 bg-[#F7DAE7] text-[#A55166] text-[11px] font-semibold px-3.5 py-1.5 rounded-full border border-[#E2B4C1] shadow-2xs">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/90 shadow-2xs">
                <Gift className="w-3.5 h-3.5 text-[#A55166] animate-gift-pump" />
              </span>
              <span className="font-bold">{t.giftBadge}</span>
            </div>
          </div>

          {/* Single Main CTA Button */}
          <div className="w-full mb-3.5">
            <button
              onClick={() => scrollTo("#commande")}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#A55166] to-[#8E3F53] hover:from-[#8E3F53] hover:to-[#3A1826] text-white text-xs sm:text-sm uppercase font-semibold tracking-wider shadow-xl shadow-[#A55166]/35 active:scale-95 transition-all duration-300 group"
            >
              <span>{t.ctaButton}</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[#F7DAE7]/75 line-through text-[11px] font-normal">
                  <bdi dir="ltr">{t.originalPrice}</bdi>
                </span>
                <span className="text-white font-bold text-xs sm:text-sm">
                  <bdi dir="ltr">{t.specialPrice}</bdi>
                </span>
              </span>
              <ArrowRight
                className={`w-4 h-4 text-[#F7DAE7] transform ${
                  isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                } shrink-0 transition-transform`}
              />
            </button>
          </div>

          {/* Trust Features: 100% Authentique, Routine 6 Soins, Effet Glass Skin */}
          <div className="pt-3 border-t border-[#E2B4C1]/60 w-full grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#F7DAE7] border border-[#E2B4C1] flex items-center justify-center text-[#8E344B] shadow-2xs">
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              </div>
              <h4 className="text-[11px] font-extrabold text-[#260C18] leading-tight">
                {t.trust1Title}
              </h4>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#FAF0E6] border border-[#E8D7C3] flex items-center justify-center text-[#7A541A] shadow-2xs">
                <Droplets className="w-4 h-4 stroke-[2.5]" />
              </div>
              <h4 className="text-[11px] font-extrabold text-[#260C18] leading-tight">
                {isArabic ? "روتين 6 مستحضرات" : "Routine 6 Soins"}
              </h4>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#F7DAE7] border border-[#E2B4C1] flex items-center justify-center text-[#8E344B] shadow-2xs">
                <Heart className="w-4 h-4 stroke-[2.5]" />
              </div>
              <h4 className="text-[11px] font-extrabold text-[#260C18] leading-tight">
                {isArabic ? "مظهر Glass Skin" : "Effet Glass Skin"}
              </h4>
            </div>
          </div>
        </div>

        {/* ==================== 2. DESKTOP LAYOUT (>= lg) ==================== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* CONTENT: Text sits comfortably on the open soft pink space */}
          <div
            className={`col-span-7 xl:col-span-6 max-w-2xl flex flex-col ${
              isArabic ? "items-start text-right" : "items-start text-left"
            }`}
          >
            {/* Main Headline */}
            <h1
              className={`font-serif text-4xl lg:text-[2.85rem] xl:text-[3.25rem] text-[#3A1826] font-normal leading-[1.15] ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? (
                <>
                  {t.titlePart1}
                  <br />
                  <span className="italic font-light text-[#A55166] whitespace-nowrap">
                    {t.titleHighlight}
                  </span>{" "}
                  {t.titlePart2}
                </>
              ) : (
                <>
                  Le Pack <span className="italic font-light text-[#A55166]">Vinillia</span> pour une peau éclatante
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              className={`mt-3.5 text-base text-[#5D5054] max-w-md font-light leading-relaxed ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {t.subtitle}
            </p>

            {/* Gift Announcement */}
            <div className="mt-6 flex items-center justify-start">
              <div className="inline-flex items-center gap-2 bg-[#F7DAE7] backdrop-blur-sm text-[#A55166] text-xs font-semibold px-4 py-2 rounded-full border border-[#E2B4C1] whitespace-nowrap shrink-0 select-none shadow-xs">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/90 shadow-2xs">
                  <Gift className="w-3.5 h-3.5 text-[#A55166] animate-gift-pump" />
                </span>
                <span className="whitespace-nowrap font-bold text-[#A55166]">
                  {t.giftBadge}
                </span>
              </div>
            </div>

            {/* Single Main CTA Button */}
            <div className="mt-4 flex items-center w-auto">
              <button
                onClick={() => scrollTo("#commande")}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#A55166] to-[#8E3F53] hover:from-[#8E3F53] hover:to-[#3A1826] text-white text-sm uppercase font-semibold tracking-wider shadow-xl shadow-[#A55166]/35 hover:shadow-[#A55166]/45 transition-all duration-300 active:scale-95 group cursor-pointer"
              >
                <span>{t.ctaButton}</span>
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-[#F7DAE7]/75 line-through text-xs font-normal tracking-normal">
                    <bdi dir="ltr">{t.originalPrice}</bdi>
                  </span>
                  <span className="text-white font-bold text-sm tracking-normal">
                    <bdi dir="ltr">{t.specialPrice}</bdi>
                  </span>
                </span>
                <ArrowRight
                  className={`w-4 h-4 text-[#F7DAE7] transform ${
                    isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  } shrink-0 transition-transform`}
                />
              </button>
            </div>

            {/* Trust Features */}
            <div
              className={`mt-14 translate-y-5 pt-5 border-t border-[#E2B4C1]/60 w-full max-w-[440px] grid grid-cols-3 gap-3.5 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <div className="flex flex-row items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#F7DAE7] border border-[#E2B4C1] flex items-center justify-center text-[#8E344B] shrink-0 shadow-xs">
                  <ShieldCheck className="w-[18px] h-[18px] stroke-[2.5]" />
                </div>
                <h4 className="text-[13px] font-extrabold text-[#260C18] leading-tight tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                  {t.trust1Title}
                </h4>
              </div>

              <div className="flex flex-row items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF0E6] border border-[#E8D7C3] flex items-center justify-center text-[#7A541A] shrink-0 shadow-xs">
                  <Droplets className="w-[18px] h-[18px] stroke-[2.5]" />
                </div>
                <h4 className="text-[13px] font-extrabold text-[#260C18] leading-tight tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                  {isArabic ? "روتين 6 مستحضرات" : "Routine 6 Soins"}
                </h4>
              </div>

              <div className="flex flex-row items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#F7DAE7] border border-[#E2B4C1] flex items-center justify-center text-[#8E344B] shrink-0 shadow-xs">
                  <Heart className="w-[18px] h-[18px] stroke-[2.5]" />
                </div>
                <h4 className="text-[13px] font-extrabold text-[#260C18] leading-tight tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                  {isArabic ? "مظهر Glass Skin" : "Effet Glass Skin"}
                </h4>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Spacer for background products layout */}
          <div className="col-span-5 xl:col-span-6 min-h-[300px] pointer-events-none" />
        </div>
      </div>

      {/* Léger fondu au bas extrême pour éliminer la coupure tout en laissant les gouttes d'eau et reflets bien visibles */}
      <div className="hidden lg:block absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/70 to-transparent pointer-events-none z-10" />
    </section>
  );
}
