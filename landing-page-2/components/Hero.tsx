"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ArrowRight, ShieldCheck, Truck, Banknote, Sparkles, Gift } from "lucide-react";

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
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#310F10] via-[#46462A]/90 to-[#FAF7EE] text-[#FAF7EE]"
    >
      {/* Decorative Warm Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#74070D]/25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#F3E3B2]/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.18] text-[#FAF7EE] mb-6 max-w-4xl">
            {t.titlePart1}
            <span className="font-bold text-[#F3E3B2] italic underline decoration-[#74070D] decoration-wavy decoration-2">
              {t.titleHighlight}
            </span>
            {t.titlePart2}
          </h1>

          {/* Gift Notification Banner */}
          <div className="w-full max-w-lg mb-8 p-3 rounded-2xl bg-gradient-to-r from-[#74070D]/80 to-[#46462A]/80 border border-[#F3E3B2]/40 backdrop-blur-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F3E3B2] text-[#74070D] flex items-center justify-center shrink-0 shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#F3E3B2] block">
                Offre Spéciale Incluse
              </span>
              <span className="text-xs font-semibold text-white leading-tight block">
                {t.giftBadge}
              </span>
            </div>
          </div>

          {/* CTA Button with Both Prices */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 mb-10">
            <button
              onClick={() => scrollTo("#commande")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-sm uppercase font-bold tracking-wider shadow-2xl shadow-[#74070D]/50 hover:shadow-[#74070D]/70 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>{t.ctaButton}</span>
              <span className="flex items-center gap-2 whitespace-nowrap bg-black/20 px-3 py-1 rounded-full border border-white/10">
                <span className="text-[#F3E3B2]/60 line-through text-xs font-normal">
                  <bdi dir="ltr">{t.originalPrice}</bdi>
                </span>
                <span className="text-white font-extrabold text-sm sm:text-base">
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

          {/* 3 Pillars of Trust */}
          <div className="pt-6 border-t border-[#F3E3B2]/20 w-full max-w-xl grid grid-cols-3 gap-3 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#46462A] border border-[#F3E3B2]/40 flex items-center justify-center text-[#F3E3B2] mb-1.5 shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#F3E3B2]">{t.trust1Title}</h4>
              <p className="text-[10px] text-[#FAF7EE]/70">{t.trust1Sub}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#46462A] border border-[#F3E3B2]/40 flex items-center justify-center text-[#F3E3B2] mb-1.5 shadow-xs">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#F3E3B2]">{t.trust2Title}</h4>
              <p className="text-[10px] text-[#FAF7EE]/70">{t.trust2Sub}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#46462A] border border-[#F3E3B2]/40 flex items-center justify-center text-[#F3E3B2] mb-1.5 shadow-xs">
                <Banknote className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#F3E3B2]">{t.trust3Title}</h4>
              <p className="text-[10px] text-[#FAF7EE]/70">{t.trust3Sub}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
