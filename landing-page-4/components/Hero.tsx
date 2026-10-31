"use client";

import Image from "next/image";
import { ArrowUpRight, Gift } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function Hero() {
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].hero;

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" dir={dir} className="relative z-10 w-full bg-[#F4F9FD]">
      {/* ========================================================
          MOBILE & TABLET LAYOUT (< lg):
          Clean, elegant, 100% visible pack visual + high-contrast
          luxury typography and perfectly-fitted CTA button.
          ======================================================== */}
      <div className="lg:hidden flex flex-col pt-20 sm:pt-24 px-3 sm:px-6 pb-6 gap-3.5 sm:gap-4 max-w-xl mx-auto w-full">
        {/* Pack Visual Container: Shows ALL 6 products 100% visible, sharp, no text overlap */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg shadow-sky-950/10 border border-[#BAE0F8] bg-white group">
          <Image
            src="/images/hero-skincare-pack-pureglow-ultra.webp"
            alt="Pack Skincare PureGlow 6 Soins d'Exception sur Podium en Marbre"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Floating gift badge tag on image */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#0F3554]/90 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
            <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#38BDF8]" />
            <span>{isArabic ? "6 منتجات + هدية بالمجان" : "6 Soins + Cadeau Offert"}</span>
          </div>
        </div>

        {/* Text & CTA Card */}
        <div className="rounded-[24px] sm:rounded-[32px] bg-white border border-[#BAE0F8] p-5 sm:p-6 shadow-md shadow-sky-900/5 flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl font-serif-luxury tracking-tight leading-[1.2] text-[#0F3554]">
            <span className="font-normal text-[#0F3554]">{t.titlePart1}</span>{" "}
            <span className="italic font-normal text-[#0284C7] px-0.5">{t.titlePart2}</span>
            <br />
            <span className="font-bold text-[#0F3554]">{t.titleHighlight}</span>
          </h1>

          {/* Primary CTA Button - Formatted cleanly without awkward line wrapping */}
          <div className="w-full mt-4">
            <button
              type="button"
              onClick={scrollToOrder}
              className="w-full inline-flex items-center justify-between py-3.5 px-4 sm:px-5 rounded-full bg-[#0F3554] hover:bg-[#0B273F] text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-900/25 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-left rtl:text-right">
                <span className="text-xs sm:text-sm">{t.ctaButton}</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] text-[10px] font-extrabold border border-[#38BDF8]/30 shrink-0">
                  <Gift className="w-3 h-3 text-[#38BDF8] shrink-0" />
                  <span>{isArabic ? "هدية بالمجان" : "Cadeau Offert"}</span>
                </span>
              </div>

              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#38BDF8] text-[#0F3554] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] rtl:-scale-x-100" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          DESKTOP & LARGE SCREEN CANVAS (lg:flex):
          Grand full-bleed hero with 4K pack photography,
          magazine-grade editorial layout, left/right alignments.
          ======================================================== */}
      <div className="hidden lg:flex relative w-full lg:min-h-[680px] xl:min-h-[740px] 2xl:min-h-[800px] flex-col justify-end pt-28 pb-16 xl:pb-20 overflow-hidden">
        {/* Background Image: Fixed Edge-to-Edge */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
          <Image
            src="/images/hero-skincare-pack-pureglow-ultra.webp"
            alt="Pack Skincare PureGlow 6 Soins d'Exception sur Podium en Marbre"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center w-full h-full"
          />

          {/* Very light lateral vignette just for text contrast - 100% sharp clear view of products */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              isArabic
                ? "bg-gradient-to-l from-black/25 via-transparent to-transparent"
                : "bg-gradient-to-r from-black/25 via-transparent to-transparent"
            }`}
          />
        </div>

        {/* Soft elegant white/background gradient fade at the bottom edge so it dissolves seamlessly into the page background */}
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-[#F4F9FD] via-[#F4F9FD]/60 to-transparent pointer-events-none z-10" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-8 lg:px-12 xl:px-16 w-full pb-10 sm:pb-14 xl:pb-16">
          <div
            style={{
              marginLeft: isArabic ? "auto" : "0px",
              marginRight: isArabic ? "0px" : "auto",
            }}
            className={`max-w-md lg:max-w-[480px] xl:max-w-[540px] w-full flex flex-col ${
              isArabic
                ? "items-end text-right md:translate-x-6 lg:translate-x-12 xl:translate-x-20"
                : "items-start text-left sm:translate-x-4 md:translate-x-8 lg:translate-x-12"
            }`}
          >
            {/* Main Headline */}
            <h1
              className={`text-3xl lg:text-[44px] xl:text-[50px] font-serif-luxury tracking-tight text-white leading-[1.16] drop-shadow-[0_2px_18px_rgba(0,0,0,0.8)] ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <span className="font-normal">{t.titlePart1}</span>{" "}
              <span className="italic font-normal text-[#38BDF8] px-1 drop-shadow-sm">{t.titlePart2}</span>
              <br />
              <span className="font-bold text-white">{t.titleHighlight}</span>
            </h1>

            {/* Primary CTA Button */}
            <div className={`mt-6 flex ${isArabic ? "justify-end" : "justify-start"}`}>
              <button
                type="button"
                onClick={scrollToOrder}
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#F0F7FD] text-[#0F3554] font-bold text-xs sm:text-base shadow-2xl shadow-black/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                  <span>{t.ctaButton}</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] font-extrabold text-[11px] sm:text-xs border border-[#BAE0F8]/70">
                    <span className="font-bold">+</span>
                    <Gift className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>{isArabic ? "هدية مجانية" : "Cadeau Offert"}</span>
                  </span>
                </span>

                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0F3554] text-white flex items-center justify-center group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] rtl:-scale-x-100" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
