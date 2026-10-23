"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

const PRODUCT_GROUPS_FR = [
  [
    {
      step: "Étape 1",
      title: "Nettoyage & Pores",
      brand: "SKIN1004",
      image: "/images/products/cleansing-foam-v2.png",
    },
    {
      step: "Soin Actif",
      title: "Anti-Taches & Sébum",
      brand: "The Ordinary",
      image: "/images/products/niacinamide-v2.png",
    },
    {
      step: "Anti-Âge",
      title: "Rétinol & Peptides",
      brand: "Celimax",
      image: "/images/products/retinal-shot-v2.png",
    },
  ],
  [
    {
      step: "Soin Quotidien",
      title: "Jasmin & Menthe",
      brand: "Marvis",
      image: "/images/products/marvis-v2.png",
    },
    {
      step: "Étape Finale",
      title: "Sérum SPF50+",
      brand: "SKIN1004",
      image: "/images/products/sun-serum-v2.png",
    },
    {
      step: "Hydratation",
      title: "Crème Réparatrice 345",
      brand: "Dr. Althea",
      image: "/images/products/relief-cream-v2.png",
    },
  ],
];

const PRODUCT_GROUPS_AR = [
  [
    {
      step: "المرحلة 1",
      title: "تنظيف المسام",
      brand: "SKIN1004",
      image: "/images/products/cleansing-foam-v2.png",
    },
    {
      step: "سيروم فعال",
      title: "إزالة البقع والدهون",
      brand: "The Ordinary",
      image: "/images/products/niacinamide-v2.png",
    },
    {
      step: "مضاد تجاعيد",
      title: "ريتينول وببتيدات",
      brand: "Celimax",
      image: "/images/products/retinal-shot-v2.png",
    },
  ],
  [
    {
      step: "عناية يومية",
      title: "نعناع وياسمين",
      brand: "Marvis",
      image: "/images/products/marvis-v2.png",
    },
    {
      step: "المرحلة الأخيرة",
      title: "واقي شمس SPF50+",
      brand: "SKIN1004",
      image: "/images/products/sun-serum-v2.png",
    },
    {
      step: "ترطيب عميق",
      title: "كريم 345 المرمم",
      brand: "Dr. Althea",
      image: "/images/products/relief-cream-v2.png",
    },
  ],
];

export default function Hero() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].hero;

  // Auto rotate between the 2 sets of 3 products every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGroup((prev) => (prev === 0 ? 1 : 0));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const productGroups = isArabic ? PRODUCT_GROUPS_AR : PRODUCT_GROUPS_FR;
  const activeProducts = productGroups[currentGroup];

  return (
    <section id="hero" className="px-2 sm:px-4 pt-16 sm:pt-20 lg:pt-2 pb-4 sm:pb-6">
      {/* MOBILE & TABLET LAYOUT (< lg): Complete 16:9 Image on top + Headline & CTA underneath */}
      <div className="lg:hidden rounded-[28px] sm:rounded-[36px] bg-[#FAE6E7]/60 border border-[#F7D1D8] p-3 sm:p-4 shadow-xl flex flex-col gap-3.5">
        {/* Full Image Container: Exact 16/9 aspect ratio guarantees ALL 6 products are 100% visible with zero cropping */}
        <div className="relative w-full aspect-[16/9] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-md border border-[#F7D1D8]/80 bg-white">
          <Image
            src="/images/pack-hero.jpg"
            alt="Pack Skincare 6 Produits"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
        </div>

        {/* Text & CTA Card underneath the image */}
        <div className="flex flex-col items-center text-center px-2 pt-1 pb-2 space-y-2.5">
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#5C1D2E] text-[11px] font-semibold border border-[#F7D1D8] shadow-xs">
            <span>{t.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury tracking-tight leading-[1.2] text-[#5C1D2E]">
            <span className="font-normal text-[#5C1D2E]">
              {t.titlePart1}
            </span>{" "}
            <span className="italic font-normal text-[#C97F91] text-xl sm:text-2xl px-1">
              {t.titlePart2}
            </span>
            <br />
            <span
              className="inline-block font-semibold tracking-tight pb-0.5 bg-gradient-to-b from-[#5C1D2E] via-[#9B3D55] to-[#D45D79] bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(180deg, #5C1D2E 0%, #9B3D55 60%, #D45D79 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#7A3347] max-w-sm">
            {t.subtitle}
          </p>

          {/* Primary CTA Button */}
          <div className="w-full pt-1">
            <button
              type="button"
              onClick={scrollToOrder}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#5C1D2E] hover:bg-[#431422] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#5C1D2E]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>{t.ctaButton}</span>
              <div className="w-5 h-5 rounded-full bg-[#F4BBC9] text-[#5C1D2E] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT (lg:flex): Full-height grand hero canvas with rotating product cards */}
      <div className="hidden lg:flex relative rounded-[44px] overflow-hidden lg:h-[calc(100vh-28px)] lg:max-h-[620px] flex-col justify-end px-8 lg:px-12 pt-20 pb-6 shadow-2xl border border-slate-200/20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pack-hero.jpg"
            alt="Pack Skincare 6 Produits"
            fill
            priority
            className="object-cover object-[center_28%] filter brightness-100 contrast-[1.02]"
          />
          {/* Soft light overlays so background products are clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        {/* Bottom Content Row: Left = Headline & CTA; Right = 3 Floating Cards (Desktop only) */}
        <div className="relative z-10 mt-auto flex flex-row items-end justify-between gap-6">
          {/* Main Headline & CTA */}
          <div className="max-w-2xl xl:max-w-3xl">
            <h1 className="text-3xl lg:text-[46px] xl:text-[54px] 2xl:text-[62px] tracking-tight leading-[1.14] font-serif-luxury">
              <span className="font-normal text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
                {t.titlePart1}
              </span>{" "}
              <span className="italic font-normal text-[#F4BBC9] text-2xl lg:text-4xl xl:text-5xl px-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                {t.titlePart2}
              </span>
              <br />
              <span
                className="inline-block font-semibold tracking-tight pb-1 bg-gradient-to-b from-[#FFFFFF] via-[#FCD5E0] to-[#EA7A99] bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 15%, #FCD5E0 55%, #EA7A99 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 4px 18px rgba(234, 122, 153, 0.55))",
                }}
              >
                {t.titleHighlight}
              </span>
            </h1>

            {/* Primary CTA Button */}
            <div className="mt-5 flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToOrder}
                className="inline-flex items-center gap-3 bg-white hover:bg-[#FDF2F4] text-[#C97F91] font-bold text-sm px-7 py-3.5 rounded-full shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all group border border-white/80 cursor-pointer"
              >
                <span>{t.ctaButton}</span>
                <div className="w-6 h-6 rounded-full bg-[#C97F91] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Floating Cards (Desktop only) */}
          <div className="shrink-0 flex flex-col items-end gap-1.5 w-auto">
            <div className="grid grid-cols-3 gap-2.5 w-auto">
              {activeProducts.map((item, idx) => (
                <div
                  key={`${currentGroup}-${idx}`}
                  onClick={scrollToProducts}
                  className="cursor-pointer group bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 p-2 rounded-3xl transition-all duration-500 ease-in-out flex flex-col items-start gap-2.5 w-32 lg:w-34 animate-in fade-in zoom-in-95"
                >
                  <div className="w-full h-16 lg:h-18 rounded-2xl overflow-hidden relative bg-white/20 backdrop-blur-sm shrink-0 flex items-center justify-center p-1 border border-white/15">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-black/40 backdrop-blur-sm items-center justify-center text-white">
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#F4BBC9] font-medium leading-none mb-0.5">{item.step}</p>
                    <p className="text-xs font-semibold text-white leading-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination indicator dots to show rotation between the 6 products */}
            <div className="flex items-center gap-1.5 self-end mt-0.5">
              <button
                type="button"
                onClick={() => setCurrentGroup(0)}
                aria-label={t.desktopPill1}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentGroup === 0 ? "w-5 bg-[#F4BBC9]" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
              <button
                type="button"
                onClick={() => setCurrentGroup(1)}
                aria-label={t.desktopPill2}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentGroup === 1 ? "w-5 bg-[#F4BBC9]" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
