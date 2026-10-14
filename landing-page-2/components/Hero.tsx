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
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#EBDDCF] text-[#310F10]"
    >
      {/* Desktop Full-Bleed Natural Image - Pure High-Resolution Studio Photography (Zero red fog) */}
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

      {/* Main Container - Left-aligned text content styled with high-contrast luxury typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-lg xl:max-w-xl">
          
          {/* Category / Authenticity Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#74070D] text-[#FAF7EE] text-[11px] font-bold tracking-wider mb-4 shadow-sm uppercase">
            <span className="w-2 h-2 rounded-full bg-[#F3E3B2] animate-pulse" />
            <span>Rituel K-Secret • Édition Seoul 1988</span>
          </div>

          {/* Main Headline - High-contrast Royal Burgundy on natural champagne studio background */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold leading-[1.18] text-[#310F10] mb-4">
            {t.titlePart1}
            <span className="font-extrabold text-[#74070D] italic underline decoration-[#74070D] decoration-wavy decoration-2">
              {t.titleHighlight}
            </span>
            {t.titlePart2}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#46462A] leading-relaxed font-medium mb-5 max-w-lg">
            {t.subtitle}
          </p>

          {/* Dedicated Image on Mobile (Visible on mobile/tablet, hidden on desktop where background image shows) */}
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
          <div className="w-full max-w-md mb-6 p-2.5 sm:p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[#74070D]/20 shadow-lg flex items-center gap-3 text-left">
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

          {/* CTA Button with Both Prices - Left-Aligned */}
          <div className="w-full sm:w-auto flex flex-col items-start gap-3 mb-6">
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

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-[#310F10] font-semibold pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#74070D] shrink-0" />
              <span>100% Authentique</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#74070D] shrink-0" />
              <span>Livraison Gratuite 24/48H</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-[#74070D] shrink-0" />
              <span>Paiement à la Réception</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
