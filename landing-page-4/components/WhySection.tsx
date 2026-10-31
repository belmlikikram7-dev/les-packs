"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

interface StepItem {
  id: string;
  stepNum: string;
  brandFr: string;
  titleFr: string;
  noteFr: string;
  brandAr: string;
  titleAr: string;
  noteAr: string;
  modelImage: string;
  alt: string;
  gradient: string;
  accentColor: string;
}

const STEPS: StepItem[] = [
  {
    id: "la-roche-posay",
    stepNum: "1",
    brandFr: "La Roche-Posay",
    titleFr: "Effaclar Gel Moussant Purifiant",
    noteFr:
      "Purifie en douceur, élimine l'excès de sébum et rééquilibre le microbiome cutané dès le premier lavage.",
    brandAr: "لا روش بوزيه",
    titleAr: "غسول إيفاكلار المنقي والرغوي",
    noteAr:
      "ينظف المسام بعمق ولطف، ينظم الإفرازات الدهنية ويعيد التوازن الطبيعي للبشرة.",
    modelImage:
      "/images/model-4/la-roche-posay-effaclar-purifying-foaming-gel-model.webp",
    alt: "Modèle avec La Roche-Posay Effaclar Gel Moussant",
    gradient: "from-[#164268] via-[#1B4E7A] to-[#205A8D]",
    accentColor: "#1B4E7A",
  },
  {
    id: "anua",
    stepNum: "2",
    brandFr: "Anua",
    titleFr: "Azelaic Acid 10+ Hyaluron Redness Serum",
    noteFr:
      "Sérum concentré à 10% d'acide azélaïque qui apaise instantanément les rougeurs, lisse le grain et estompe les taches.",
    brandAr: "أنوا",
    titleAr: "سيروم حمض الأزيليك 10+ المهدئ",
    noteAr:
      "تركيبة كورية بـ 10% أزيليك لتهدئة الاحمرار، تصفية آثار الحبوب وتوحيد لون البشرة.",
    modelImage:
      "/images/model-4/anua-azelaic-acid-10-hyaluron-redness-soothing-serum-model.webp",
    alt: "Modèle avec Anua Azelaic Acid 10+ Serum",
    gradient: "from-[#133C60] via-[#17466E] to-[#1B507D]",
    accentColor: "#17466E",
  },
  {
    id: "axis-y",
    stepNum: "3",
    brandFr: "AXIS-Y",
    titleFr: "Vegan Collagen Eye Serum",
    noteFr:
      "Embout applicateur roll-on cryo-massage et collagène végétal pour décongestionner le regard et lisser les cernes.",
    brandAr: "أكسس واي",
    titleAr: "سيروم كولاجين العيون مع رول-أون",
    noteAr:
      "مساج بارد بتقنية الكريو مع كولاجين نباتي وببتيدات لشد محيط العين وإزالة الهالات.",
    modelImage:
      "/images/model-4/axis-y-vegan-collagen-eye-serum-model.webp",
    alt: "Modèle avec AXIS-Y Vegan Collagen Eye Serum",
    gradient: "from-[#0F3554] via-[#15466d] to-[#1C5A8B]",
    accentColor: "#0F3554",
  },
  {
    id: "embryolisse",
    stepNum: "4",
    brandFr: "Laboratoires Embryolisse",
    titleFr: "Lait-Crème Concentré Multi-fonctions",
    noteFr:
      "Soin hydratant culte qui nourrit intensément, restaure la barrière lipidique et laisse la peau douce et souple.",
    brandAr: "إمبريوليس",
    titleAr: "كريم الترطيب المكثف والحماية",
    noteAr:
      "مرطب فرنسي طبي أيقوني يغذي الخلايا بعمق، يعالج الجفاف ويمنح ملمساً مخملياً ناعماً.",
    modelImage:
      "/images/model-4/embryolisse-lait-creme-concentre-model.webp",
    alt: "Modèle avec Embryolisse Lait-Crème Concentré",
    gradient: "from-[#173E63] via-[#0F3554] to-[#0D2E49]",
    accentColor: "#173E63",
  },
  {
    id: "seoul-1988",
    stepNum: "5",
    brandFr: "K-SECRET Seoul 1988",
    titleFr: "Sun Pine Tree + Ceramide SPF 50+",
    noteFr:
      "Écran solaire coréen invisible aux céramides et extrait de pin pour une haute protection UV sans aucune trace blanche.",
    brandAr: "سيول 1988",
    titleAr: "واقي الشمس الكوري بالصنوبر SPF 50+",
    noteAr:
      "حماية فائقة وشفافة من الأشعة فوق البنفسجية غنية بالسيراميد لتقوية الحاجز الواقي.",
    modelImage:
      "/images/model-4/k-secret-seoul-1988-sun-pine-tree-ceramide-model.webp",
    alt: "Modèle avec K-SECRET Seoul 1988 Sun Pine Tree",
    gradient: "from-[#143F66] via-[#194B77] to-[#0F3554]",
    accentColor: "#143F66",
  },
  {
    id: "vaseline",
    stepNum: "6",
    brandFr: "Vaseline Healthy Bright",
    titleFr: "Gluta-Hya Dewy Radiance Body Serum",
    noteFr:
      "Sérum corps 10X plus puissant que la vitamine C pour hydrater en profondeur et révéler un éclat rosé éclatant de santé.",
    brandAr: "فازلين",
    titleAr: "لوشن سيروم جلوتا-هيا النضر للجسم",
    noteAr:
      "لوشن خفيف أقوى بـ 10 أضعاف من فيتامين C لترطيب وتفتيح بشرة الجسم بنضارة براقة.",
    modelImage:
      "/images/model-4/vaseline-gluta-hya-dewy-radiance-model.webp",
    alt: "Modèle avec Vaseline Gluta-Hya Dewy Radiance",
    gradient: "from-[#0F3554] via-[#0A263D] to-[#061B2D]",
    accentColor: "#0F3554",
  },
];

export default function WhySection() {
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].why;

  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(STEPS.length).fill(false)
  );
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver with bidirectional reset:
  // When scrolling down, step animates in.
  // When scrolling back up above the step, it resets so it can re-animate when scrolling down again!
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => {
                if (prev[index]) return prev;
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            } else {
              // If the element exited below the viewport (user scrolled back up past it)
              if (entry.boundingClientRect.top > 0) {
                setVisibleSteps((prev) => {
                  if (!prev[index]) return prev;
                  const updated = [...prev];
                  updated[index] = false;
                  return updated;
                });
              }
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="why"
      dir={dir}
      className="relative py-14 sm:py-20 md:py-28 bg-[#F4F9FD] overflow-hidden"
    >
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#BAE0F8]/30 via-[#E0F2FE]/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif-luxury tracking-tight text-[#0F3554] leading-[1.25]">
            {t.title}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4B6B88] max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP ZIGZAG ROADMAP LAYOUT (lg:block) matching design */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative max-w-5xl mx-auto py-6">
          {/* Central S-Curved Dotted Connecting Line with Start & End Dots */}
          <svg
            className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 h-[calc(100%-32px)] w-28 pointer-events-none z-0 overflow-visible"
            viewBox="0 0 100 1200"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Start Node Dot at the very beginning of the line */}
            <circle cx="50" cy="8" r="6" fill="#0F3554" />
            <circle cx="50" cy="8" r="10" stroke="#BAE0F8" strokeWidth="2.5" fill="none" opacity="0.85" />

            {/* Dotted Winding Curve */}
            <path
              d="M50 8 C75 100, 25 200, 50 300 C75 400, 25 500, 50 600 C75 700, 25 800, 50 900 C75 1000, 25 1100, 50 1192"
              stroke="#93C5FD"
              strokeWidth="3"
              strokeDasharray="6 8"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* End Node Dot at the very end of the line */}
            <circle cx="50" cy="1192" r="6" fill="#0F3554" />
            <circle cx="50" cy="1192" r="10" stroke="#BAE0F8" strokeWidth="2.5" fill="none" opacity="0.85" />
          </svg>

          {/* 6 Alternating Steps */}
          <div className="space-y-16 xl:space-y-20 relative z-10">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1; // 0: Left, 1: Right, 2: Left, 3: Right...
              const isVisible = visibleSteps[idx];
              const pillOnLeft = !isEven;

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className={`grid grid-cols-2 items-center gap-8 xl:gap-12 transition-all duration-700 ease-out will-change-transform ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : isEven
                      ? "opacity-0 translate-x-20"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  {/* LEFT COLUMN */}
                  <div
                    className={`flex items-center ${
                      pillOnLeft ? "justify-end" : "justify-start pl-8"
                    }`}
                  >
                    {pillOnLeft ? (
                      /* PILL ON LEFT */
                      <div className="relative group max-w-[460px] w-full">
                        {/* Pill capsule container */}
                        <div
                          className={`relative rounded-full p-2.5 sm:p-3 bg-gradient-to-r ${step.gradient} text-white shadow-xl shadow-sky-950/15 flex items-center justify-between gap-4 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}
                        >
                          {/* Text info on left */}
                          <div className="pl-5 pr-2 py-1 flex-1 text-left rtl:text-right">
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                              {isArabic ? step.brandAr : step.brandFr}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold font-serif-luxury text-white leading-snug line-clamp-1 mt-0.5">
                              {isArabic ? step.titleAr : step.titleFr}
                            </h3>
                            <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed line-clamp-2 mt-1">
                              {isArabic ? step.noteAr : step.noteFr}
                            </p>
                          </div>

                          {/* Circular Model Photo on right end */}
                          <div className="relative shrink-0">
                            <div className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                              <Image
                                src={step.modelImage}
                                alt={step.alt}
                                fill
                                sizes="140px"
                                className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                              />
                            </div>

                            {/* Small triangle pointer pointing to central dot */}
                            <div
                              className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-l-[10px] border-l-white drop-shadow-sm"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* STEP LABEL ON LEFT (when pill is on right): Small circle + "Étape 2" on same line */
                      <div className="flex items-center gap-3 text-left rtl:text-right">
                        {/* Compact delicate connection node */}
                        <div className="w-5 h-5 rounded-full bg-white border-2 border-[#0F3554] shadow-xs flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#0F3554]" />
                        </div>

                        {/* Étape X on one single line */}
                        <span className="text-base sm:text-lg xl:text-xl font-extrabold text-[#0F3554] tracking-tight whitespace-nowrap">
                          {isArabic ? `المرحلة ${step.stepNum}` : `Étape ${step.stepNum}`}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div
                    className={`flex items-center ${
                      pillOnLeft ? "justify-start pl-8" : "justify-start"
                    }`}
                  >
                    {!pillOnLeft ? (
                      /* PILL ON RIGHT */
                      <div className="relative group max-w-[460px] w-full">
                        {/* Pill capsule container */}
                        <div
                          className={`relative rounded-full p-2.5 sm:p-3 bg-gradient-to-r ${step.gradient} text-white shadow-xl shadow-sky-950/15 flex items-center justify-between gap-4 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}
                        >
                          {/* Circular Model Photo on left end */}
                          <div className="relative shrink-0">
                            {/* Small triangle pointer pointing to central dot */}
                            <div
                              className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-r-[10px] border-r-white drop-shadow-sm z-10"
                              aria-hidden="true"
                            />

                            <div className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                              <Image
                                src={step.modelImage}
                                alt={step.alt}
                                fill
                                sizes="140px"
                                className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                              />
                            </div>
                          </div>

                          {/* Text info on right */}
                          <div className="pr-5 pl-2 py-1 flex-1 text-left rtl:text-right">
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                              {isArabic ? step.brandAr : step.brandFr}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold font-serif-luxury text-white leading-snug line-clamp-1 mt-0.5">
                              {isArabic ? step.titleAr : step.titleFr}
                            </h3>
                            <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed line-clamp-2 mt-1">
                              {isArabic ? step.noteAr : step.noteFr}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* STEP LABEL ON RIGHT (when pill is on left): Small circle + "Étape 1" on same line */
                      <div className="flex items-center gap-3 text-left rtl:text-right">
                        {/* Compact delicate connection node */}
                        <div className="w-5 h-5 rounded-full bg-white border-2 border-[#0F3554] shadow-xs flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#0F3554]" />
                        </div>

                        {/* Étape X on one single line */}
                        <span className="text-base sm:text-lg xl:text-xl font-extrabold text-[#0F3554] tracking-tight whitespace-nowrap">
                          {isArabic ? `المرحلة ${step.stepNum}` : `Étape ${step.stepNum}`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET ROADMAP LAYOUT (< lg) */}
        {/* ======================================================== */}
        <div className="lg:hidden relative max-w-xl mx-auto space-y-6 sm:space-y-8 py-4">
          {/* Vertical dashed line running along the side */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#7DD3FC] pointer-events-none -z-0" />

          {STEPS.map((step, idx) => {
            const isVisible = visibleSteps[idx];

            return (
              <div
                key={`mobile-${step.id}`}
                ref={(el) => {
                  if (!stepRefs.current[idx]) {
                    stepRefs.current[idx] = el;
                  }
                }}
                className={`relative flex items-start gap-3 sm:gap-4 transition-all duration-700 ease-out will-change-transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                {/* Step indicator node on the dashed line */}
                <div className="relative z-10 shrink-0 mt-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#0F3554] shadow-sm flex items-center justify-center text-[#0F3554]">
                    <span className="text-[11px] sm:text-xs font-extrabold leading-none">
                      {step.stepNum}
                    </span>
                  </div>
                </div>

                {/* Pill card container */}
                <div className="flex-1">
                  <div
                    className={`rounded-3xl p-3 sm:p-4 bg-gradient-to-r ${step.gradient} text-white shadow-xl shadow-sky-950/15 flex items-center gap-3 sm:gap-4`}
                  >
                    {/* Circle Model Photo */}
                    <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full overflow-hidden border-3 border-white shadow-lg shrink-0 bg-white">
                      <Image
                        src={step.modelImage}
                        alt={step.alt}
                        fill
                        sizes="90px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Petite Note & Product Info */}
                    <div className="flex-1 min-w-0 text-left rtl:text-right">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block truncate">
                          {isArabic ? step.brandAr : step.brandFr}
                        </span>
                        <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">
                          {isArabic ? `مرحلة ${step.stepNum}` : `Étape ${step.stepNum}`}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold font-serif-luxury text-white leading-snug line-clamp-1">
                        {isArabic ? step.titleAr : step.titleFr}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/90 leading-relaxed line-clamp-2 mt-1">
                        {isArabic ? step.noteAr : step.noteFr}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA button below the 6 étapes roadmap */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            type="button"
            onClick={scrollToOrder}
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#0F3554] hover:bg-[#0B273F] text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-900/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <span>
              {isArabic
                ? "طلب الباك الكامل مع الهدية بالمجان (1 349 درهم)"
                : "Commander le Pack Complet (1 349 DH)"}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
