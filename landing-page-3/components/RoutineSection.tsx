"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

const MORNING_IMAGES = [
  "/images/products/cleansing-foam-v2.png",
  "/images/products/niacinamide-v2.png",
  "/images/products/relief-cream-v2.png",
  "/images/products/sun-serum-v2.png",
];

const EVENING_IMAGES = [
  "/images/products/cleansing-foam-v2.png",
  "/images/products/niacinamide-v2.png",
  "/images/products/retinal-shot-v2.png",
  "/images/products/relief-cream-v2.png",
];

export default function RoutineSection() {
  const [activeRoutine, setActiveRoutine] = useState<"matin" | "soir">("matin");
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { locale, dir } = useLanguage();
  const t = TRANSLATIONS[locale].routine;

  // Track scroll progress within the pinned track with light, smooth sensitivity
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) {
        setScrollProgress(1);
        return;
      }

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = activeRoutine === "matin" ? t.morningSteps : t.eveningSteps;
  const images = activeRoutine === "matin" ? MORNING_IMAGES : EVENING_IMAGES;

  // Lighter & faster thresholds for quick, responsive reveal ("scrol khfif"):
  // Step 1: Always visible (0.00+)
  // Step 2: Reveal at 0.15+
  // Step 3: Reveal at 0.38+
  // Step 4: Reveal at 0.62+
  const isStep2 = scrollProgress >= 0.15;
  const isStep3 = scrollProgress >= 0.38;
  const isStep4 = scrollProgress >= 0.62;

  const currentStepNumber = isStep4 ? 4 : isStep3 ? 3 : isStep2 ? 2 : 1;

  return (
    <section id="routine" className="px-2 sm:px-4 py-4">
      {/* Light Scroll Track: Reduced height for swift, responsive scrolling (160vh - 180vh) */}
      <div
        ref={trackRef}
        className="relative h-[160vh] sm:h-[180vh] rounded-[32px] sm:rounded-[44px] bg-[#FAE6E7]/50 border border-[#F7D1D8]"
      >
        {/* Sticky Viewport: Locked while smoothly scrolling through the 4 steps */}
        <div className="sticky top-0 h-screen max-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 overflow-hidden">
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#F7D1D8]/50 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-white/70 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto w-full">
            {/* Header: Title & Description */}
            <div className="text-center mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#5C1D2E] text-xs font-semibold shadow-xs mb-2.5 border border-[#F7D1D8]">
                <span>{t.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#5C1D2E] tracking-tight">
                {t.titlePrefix} <span className="font-bold text-[#5C1D2E]">{t.titleHighlight}</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[#7A3347] max-w-md mx-auto">
                {t.subtitle}
              </p>
            </div>

            {/* Toggle Switch: Clear, Light & High-Contrast Pill (Zero invisible text on white background) */}
            <div className="flex flex-col items-center justify-center mb-5 sm:mb-6">
              <div
                className="relative inline-flex items-center p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#F7D1D8] shadow-md gap-1.5"
                dir={dir}
              >
                {/* Matin Button */}
                <button
                  type="button"
                  onClick={() => setActiveRoutine("matin")}
                  className={`relative flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeRoutine === "matin"
                      ? "bg-[#5C1D2E] text-white shadow-md scale-[1.02]"
                      : "bg-transparent text-[#5C1D2E] hover:text-[#40121F] hover:bg-[#FAE6E7]/60"
                  }`}
                >
                  <Sun
                    className={`w-4 h-4 transition-transform ${
                      activeRoutine === "matin"
                        ? "scale-110 text-[#F4BBC9]"
                        : "text-[#D45D79]"
                    }`}
                  />
                  <span
                    className={
                      activeRoutine === "matin"
                        ? "text-white font-bold"
                        : "text-[#5C1D2E] font-semibold"
                    }
                  >
                    {t.matinTab}
                  </span>
                </button>

                {/* Soir Button */}
                <button
                  type="button"
                  onClick={() => setActiveRoutine("soir")}
                  className={`relative flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeRoutine === "soir"
                      ? "bg-[#5C1D2E] text-white shadow-md scale-[1.02]"
                      : "bg-transparent text-[#5C1D2E] hover:text-[#40121F] hover:bg-[#FAE6E7]/60"
                  }`}
                >
                  <Moon
                    className={`w-4 h-4 transition-transform ${
                      activeRoutine === "soir"
                        ? "scale-110 text-[#F4BBC9]"
                        : "text-[#D45D79]"
                    }`}
                  />
                  <span
                    className={
                      activeRoutine === "soir"
                        ? "text-white font-bold"
                        : "text-[#5C1D2E] font-semibold"
                    }
                  >
                    {t.soirTab}
                  </span>
                </button>
              </div>

              {/* Step indicator bar */}
              <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#7A3347]">
                <span>{t.stepCounter.replace("{current}", currentStepNumber.toString())}</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((stepIdx) => {
                    const isPassed = currentStepNumber >= stepIdx;
                    return (
                      <div
                        key={stepIdx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          isPassed ? "w-5 bg-[#5C1D2E]" : "w-1.5 bg-[#F7D1D8]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dynamic Animated Steps Container */}
            <div className="max-w-xl sm:max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
              {/* STEP 1: Always visible from the start */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-[#F7D1D8] shadow-md flex items-center gap-3 sm:gap-4 transition-all duration-300 ease-out hover:border-[#C97F91]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FAE6E7] p-1 relative shrink-0 border border-[#F7D1D8]/60 flex items-center justify-center">
                  <Image
                    src={images[0]}
                    alt={steps[0].title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] sm:text-[11px] font-bold text-[#D45D79] uppercase tracking-wider">
                      {steps[0].stepLabel}
                    </p>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAE6E7] text-[#5C1D2E]">
                      {steps[0].tag}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#5C1D2E] truncate">
                    {steps[0].title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#7A3347] line-clamp-2 mt-0.5">
                    {steps[0].desc}
                  </p>
                </div>
              </div>

              {/* STEP 2: Slides in from the RIGHT when scrolling */}
              <div
                className={`transition-all duration-500 ease-out ${
                  isStep2
                    ? "opacity-100 translate-x-0 max-h-36 sm:max-h-40 my-2.5"
                    : "opacity-0 translate-x-20 max-h-0 my-0 overflow-hidden pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-[#F7D1D8] shadow-md flex items-center gap-3 sm:gap-4 hover:border-[#C97F91]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FAE6E7] p-1 relative shrink-0 border border-[#F7D1D8]/60 flex items-center justify-center">
                    <Image
                      src={images[1]}
                      alt={steps[1].title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] sm:text-[11px] font-bold text-[#D45D79] uppercase tracking-wider">
                        {steps[1].stepLabel}
                      </p>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAE6E7] text-[#5C1D2E]">
                        {steps[1].tag}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#5C1D2E] truncate">
                      {steps[1].title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#7A3347] line-clamp-2 mt-0.5">
                      {steps[1].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 3: Slides in from the LEFT when scrolling further */}
              <div
                className={`transition-all duration-500 ease-out ${
                  isStep3
                    ? "opacity-100 translate-x-0 max-h-36 sm:max-h-40 my-2.5"
                    : "opacity-0 -translate-x-20 max-h-0 my-0 overflow-hidden pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-[#F7D1D8] shadow-md flex items-center gap-3 sm:gap-4 hover:border-[#C97F91]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FAE6E7] p-1 relative shrink-0 border border-[#F7D1D8]/60 flex items-center justify-center">
                    <Image
                      src={images[2]}
                      alt={steps[2].title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] sm:text-[11px] font-bold text-[#D45D79] uppercase tracking-wider">
                        {steps[2].stepLabel}
                      </p>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAE6E7] text-[#5C1D2E]">
                        {steps[2].tag}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#5C1D2E] truncate">
                      {steps[2].title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#7A3347] line-clamp-2 mt-0.5">
                      {steps[2].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 4: Slides in from the RIGHT as you reach Step 4 */}
              <div
                className={`transition-all duration-500 ease-out ${
                  isStep4
                    ? "opacity-100 translate-x-0 max-h-36 sm:max-h-40 my-2.5"
                    : "opacity-0 translate-x-20 max-h-0 my-0 overflow-hidden pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-[#F7D1D8] shadow-md flex items-center gap-3 sm:gap-4 hover:border-[#C97F91]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FAE6E7] p-1 relative shrink-0 border border-[#F7D1D8]/60 flex items-center justify-center">
                    <Image
                      src={images[3]}
                      alt={steps[3].title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] sm:text-[11px] font-bold text-[#D45D79] uppercase tracking-wider">
                        {steps[3].stepLabel}
                      </p>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAE6E7] text-[#5C1D2E]">
                        {steps[3].tag}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#5C1D2E] truncate">
                      {steps[3].title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#7A3347] line-clamp-2 mt-0.5">
                      {steps[3].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
