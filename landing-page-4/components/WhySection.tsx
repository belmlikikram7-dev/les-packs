"use client";

import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

interface ModelPhoto {
  id: string;
  src: string;
  alt: string;
  brandFr: string;
  nameFr: string;
  brandAr: string;
  nameAr: string;
  step: string;
}

const MODEL_PHOTOS: ModelPhoto[] = [
  {
    id: "la-roche-posay",
    src: "/images/model-4/la-roche-posay-effaclar-purifying-foaming-gel-model.webp",
    alt: "Modèle avec La Roche-Posay Effaclar Gel Moussant Purifiant",
    brandFr: "La Roche-Posay",
    nameFr: "Effaclar Gel Moussant",
    brandAr: "لا روش بوزيه",
    nameAr: "غسول إيفاكلار المنقي",
    step: "01",
  },
  {
    id: "anua",
    src: "/images/model-4/anua-azelaic-acid-10-hyaluron-redness-soothing-serum-model.webp",
    alt: "Modèle avec Anua Azelaic Acid 10+ Hyaluron Redness Soothing Serum",
    brandFr: "Anua",
    nameFr: "Acide Azélaïque 10+",
    brandAr: "أنوا",
    nameAr: "سيروم حمض الأزيليك",
    step: "02",
  },
  {
    id: "axis-y",
    src: "/images/model-4/axis-y-vegan-collagen-eye-serum-model.webp",
    alt: "Modèle avec AXIS-Y Vegan Collagen Eye Serum",
    brandFr: "AXIS-Y",
    nameFr: "Collagène Contour Yeux",
    brandAr: "أكسس واي",
    nameAr: "سيروم كولاجين العيون",
    step: "03",
  },
  {
    id: "embryolisse",
    src: "/images/model-4/embryolisse-lait-creme-concentre-model.webp",
    alt: "Modèle avec Embryolisse Lait-Crème Concentré",
    brandFr: "Embryolisse",
    nameFr: "Lait-Crème Concentré",
    brandAr: "إمبريوليس",
    nameAr: "كريم الترطيب المكثف",
    step: "04",
  },
  {
    id: "seoul-1988",
    src: "/images/model-4/k-secret-seoul-1988-sun-pine-tree-ceramide-model.webp",
    alt: "Modèle avec K-SECRET Seoul 1988 Sun Pine Tree + Ceramide",
    brandFr: "Seoul 1988",
    nameFr: "Écran Solaire & Céramides",
    brandAr: "سيول 1988",
    nameAr: "واقي شمس كوري بالصنوبر",
    step: "05",
  },
  {
    id: "vaseline",
    src: "/images/model-4/vaseline-gluta-hya-dewy-radiance-model.webp",
    alt: "Modèle avec Vaseline Gluta-Hya Dewy Radiance",
    brandFr: "Vaseline",
    nameFr: "Gluta-Hya Dewy Radiance",
    brandAr: "فازلين",
    nameAr: "لوشن جلوتا-هيا النضر",
    step: "06",
  },
];

// Double list for a dense, continuous sequence
const DENSE_PHOTOS = [...MODEL_PHOTOS, ...MODEL_PHOTOS];

export default function WhySection() {
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].why;

  const scrollToRoutine = () => {
    document.getElementById("routine")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="why"
      dir={dir}
      className="relative py-14 sm:py-20 md:py-24 bg-[#F4F9FD] overflow-hidden"
    >
      {/* Embedded GPU hardware-accelerated continuous right-to-left marquee animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marqueeLoopRightToLeft {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .model-marquee-continuous {
              display: flex !important;
              width: max-content !important;
              animation: marqueeLoopRightToLeft 24s linear infinite !important;
              will-change: transform;
            }
          `,
        }}
      />

      {/* Background soft ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#BAE0F8]/35 via-[#E0F2FE]/25 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#0F3554] text-xs font-semibold uppercase tracking-wider border border-[#BAE0F8] shadow-xs mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif-luxury tracking-tight text-[#0F3554] leading-[1.25]">
            {t.title}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4B6B88] max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Infinite Seamless Marquee Loop of Circular Model Photos (Continuously moving from Right to Left) */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Subtle left & right gradient fade masks for smooth infinity edges */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#F4F9FD] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#F4F9FD] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track: Moving from Right to Left continuously without stopping */}
        <div dir="ltr" className="model-marquee-continuous flex items-center">
          {/* Sequence 1 */}
          <div className="flex items-center gap-5 sm:gap-7 md:gap-9 shrink-0 pr-5 sm:pr-7 md:pr-9">
            {DENSE_PHOTOS.map((photo, idx) => (
              <div
                key={`model-s1-${photo.id}-${idx}`}
                onClick={scrollToRoutine}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Circular Model Frame */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-[#BAE0F8] via-white to-[#0284C7]/30 shadow-xl shadow-sky-950/10 group-hover:shadow-2xl group-hover:shadow-sky-900/25 group-hover:scale-105 transition-all duration-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-3 border-white">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 300px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Soft luxury glass overlay highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                  </div>

                  {/* Step Capsule Badge */}
                  <div className="absolute bottom-2.5 inset-x-0 flex justify-center pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#0F3554]/95 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold border border-white/25 shadow-md tracking-wide">
                      {isArabic ? photo.brandAr : photo.brandFr}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Product Name below Circle */}
                <div className="mt-3.5 text-center">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F3554] tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {isArabic ? photo.nameAr : photo.nameFr}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#0284C7]">
                    {isArabic ? `الخطوة ${photo.step}` : `Étape ${photo.step}`}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sequence 2 (Duplicated for 100% Gapless Seamless Infinite Loop) */}
          <div
            className="flex items-center gap-5 sm:gap-7 md:gap-9 shrink-0 pr-5 sm:pr-7 md:pr-9"
            aria-hidden="true"
          >
            {DENSE_PHOTOS.map((photo, idx) => (
              <div
                key={`model-s2-${photo.id}-${idx}`}
                onClick={scrollToRoutine}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Circular Model Frame */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-[#BAE0F8] via-white to-[#0284C7]/30 shadow-xl shadow-sky-950/10 group-hover:shadow-2xl group-hover:shadow-sky-900/25 group-hover:scale-105 transition-all duration-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-3 border-white">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 300px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Soft luxury glass overlay highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                  </div>

                  {/* Step Capsule Badge */}
                  <div className="absolute bottom-2.5 inset-x-0 flex justify-center pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#0F3554]/95 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold border border-white/25 shadow-md tracking-wide">
                      {isArabic ? photo.brandAr : photo.brandFr}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Product Name below Circle */}
                <div className="mt-3.5 text-center">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F3554] tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {isArabic ? photo.nameAr : photo.nameFr}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#0284C7]">
                    {isArabic ? `الخطوة ${photo.step}` : `Étape ${photo.step}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sleek CTA pill beneath the carousel */}
      <div className="mt-8 sm:mt-10 flex justify-center px-4">
        <button
          type="button"
          onClick={scrollToRoutine}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white hover:bg-[#F0F7FD] text-[#0F3554] font-bold text-xs sm:text-sm border border-[#BAE0F8] shadow-md shadow-sky-900/5 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        >
          <span>
            {isArabic
              ? "اكتشفي تفاصيل روتين المنتجات الـ 6"
              : "Découvrir la routine des 6 soins en détail"}
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#0284C7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
