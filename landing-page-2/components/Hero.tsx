"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ArrowRight, Gift, ShieldCheck, Truck, Banknote } from "lucide-react";
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
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#240A0C] text-[#FAF7EE]"
    >
      {/* Desktop Full-Bleed Hero Image with Left Dark Gradient Overlay */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <Image
          src="/images/hero-pack.webp"
          alt="Pack Seoul 1988 K-Secret"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Soft, rich Burgundy velvet gradient fading to reveal the products on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#240A0C] via-[#240A0C]/90 via-35% to-transparent to-65%" />
        {/* Top and Bottom soft lighting blends */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#240A0C] to-transparent opacity-85" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF7EE]/5 to-transparent" />
      </div>

      {/* Main Container - Left-aligned text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-lg xl:max-w-xl">
          
          {/* Category / Authenticity Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#74070D]/70 border border-[#F3E3B2]/30 text-[11px] font-semibold text-[#F3E3B2] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F3E3B2] animate-pulse" />
            <span>Rituel K-Secret • Édition Seoul 1988</span>
          </div>

          {/* Main Headline - Sized down and left-aligned */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-[1.22] text-[#FAF7EE] mb-4">
            {t.titlePart1}
            <span className="font-bold text-[#F3E3B2] italic underline decoration-[#74070D] decoration-wavy decoration-2">
              {t.titleHighlight}
            </span>
            {t.titlePart2}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#FAF7EE]/80 leading-relaxed font-light mb-5 max-w-lg">
            {t.subtitle}
          </p>

          {/* Dedicated Image on Mobile (Visible on mobile/tablet, hidden on desktop where background image shows) */}
          <div className="lg:hidden w-full my-4 rounded-2xl overflow-hidden shadow-2xl border border-[#F3E3B2]/30">
            <Image
              src="/images/hero-pack.webp"
              alt="Pack Seoul 1988 K-Secret & Cadeaux Fino Vaseline"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Gift Notification Banner - Compact and Left-Aligned */}
          <div className="w-full max-w-md mb-6 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-[#74070D]/85 to-[#46462A]/85 border border-[#F3E3B2]/40 backdrop-blur-sm flex items-center gap-3 text-left shadow-lg">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F3E3B2] text-[#74070D] flex items-center justify-center shrink-0 shadow-md">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#F3E3B2] block">
                Offre Spéciale Incluse
              </span>
              <span className="text-xs font-semibold text-white leading-tight block truncate">
                {t.giftBadge}
              </span>
            </div>
          </div>

          {/* CTA Button with Both Prices - Left-Aligned */}
          <div className="w-full sm:w-auto flex flex-col items-start gap-3 mb-6">
            <button
              onClick={() => scrollTo("#commande")}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-xs sm:text-sm uppercase font-bold tracking-wider shadow-xl shadow-[#74070D]/50 hover:shadow-[#74070D]/70 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>{t.ctaButton}</span>
              <span className="flex items-center gap-2 whitespace-nowrap bg-black/25 px-2.5 py-1 rounded-full border border-white/10">
                <span className="text-[#F3E3B2]/60 line-through text-xs font-normal">
                  <bdi dir="ltr">{t.originalPrice}</bdi>
                </span>
                <span className="text-white font-extrabold text-xs sm:text-sm">
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

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-[#FAF7EE]/75 pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F3E3B2] shrink-0" />
              <span>100% Authentique</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#F3E3B2] shrink-0" />
              <span>Livraison Gratuite 24/48H</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-[#F3E3B2] shrink-0" />
              <span>Paiement à la Réception</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
