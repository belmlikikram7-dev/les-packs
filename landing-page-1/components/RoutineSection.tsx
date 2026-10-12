"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { ROUTINE_STEPS } from "@/data/products";
import SiteFloralBackground from "./SiteFloralBackground";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function RoutineSection() {
  const [activeTab, setActiveTab] = useState<"toutes" | "matin" | "soir">("toutes");
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].routine;
  const productsTranslations = TRANSLATIONS[locale].products.items;
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);

  // Dynamic positions of each step center
  const [nodePositions, setNodePositions] = useState<number[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(1800);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(1500);
  const [mobilePathLength, setMobilePathLength] = useState(1500);

  // Exact coordinates of the tip of the line (where the circle dot sits)
  const [desktopTip, setDesktopTip] = useState<{ x: number; y: number } | null>(null);
  const [mobileTip, setMobileTip] = useState<{ x: number; y: number } | null>(null);

  // Track which steps have animated into view (they stay visible once seen)
  const [revealedStepIds, setRevealedStepIds] = useState<Set<string>>(
    () => new Set([ROUTINE_STEPS[0].id])
  );

  const filteredSteps = useMemo(() => {
    return ROUTINE_STEPS.filter((step) => {
      if (activeTab === "soir") return step.routineTiming !== "Matin uniquement";
      return true;
    });
  }, [activeTab]);

  // Construct Desktop Wavy S-Curve SVG Path (starts exactly at step 01 center)
  const wavyPathD = useMemo(() => {
    const count = filteredSteps.length;
    const positions =
      nodePositions.length === count
        ? nodePositions
        : Array.from({ length: count }, (_, i) => 80 + i * 320);

    if (positions.length === 0) return "";

    const firstY = positions[0];
    let d = `M 64 ${firstY}`;

    for (let i = 0; i < positions.length - 1; i++) {
      const yStart = positions[i];
      const yEnd = positions[i + 1];
      const dy = yEnd - yStart;
      // Alternate waving direction between left and right
      const dir = i % 2 === 0 ? 1 : -1;
      const waveWidth = 32; // subtle serpentine amplitude ("حركة مللوية")

      const cp1x = 64 + dir * waveWidth;
      const cp1y = yStart + dy * 0.35;
      const cp2x = 64 - dir * waveWidth;
      const cp2y = yStart + dy * 0.65;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, 64 ${yEnd}`;
    }

    return d;
  }, [nodePositions, filteredSteps.length]);

  // Construct Mobile Wavy SVG Path (starts exactly at mobile step 01 center)
  const mobileWavyPathD = useMemo(() => {
    const count = filteredSteps.length;
    const positions =
      nodePositions.length === count
        ? nodePositions
        : Array.from({ length: count }, (_, i) => 80 + i * 320);

    if (positions.length === 0) return "";

    const firstY = positions[0];
    const startX = 18;
    let d = `M ${startX} ${firstY}`;

    for (let i = 0; i < positions.length - 1; i++) {
      const yStart = positions[i];
      const yEnd = positions[i + 1];
      const dy = yEnd - yStart;
      const dir = i % 2 === 0 ? 1 : -1;
      const waveWidth = 5; // subtle wave for mobile track

      const cp1x = startX + dir * waveWidth;
      const cp1y = yStart + dy * 0.35;
      const cp2x = startX - dir * waveWidth;
      const cp2y = yStart + dy * 0.65;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${startX} ${yEnd}`;
    }

    return d;
  }, [nodePositions, filteredSteps.length]);

  // Recalculate geometries and handle scroll
  useEffect(() => {
    let ticking = false;

    const updateGeometryAndScroll = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const validElements = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      if (validElements.length === 0) return;

      const isMobile = window.innerWidth < 1024;

      // Extract center Y coordinates of each step node badge
      const positions = validElements.map((el) => {
        const r = el.getBoundingClientRect();
        if (isMobile) {
          // On mobile, the node badge is at top-7 (28px) + 18px (half of 36px height) = 46px from card top
          return r.top + 46 - containerRect.top;
        }
        // On desktop, the node badge is centered vertically with the card
        return r.top + r.height / 2 - containerRect.top;
      });

      setNodePositions(positions);
      setContainerHeight(containerRect.height);

      const count = validElements.length;
      if (count <= 1) {
        setScrollProgress(1);
        return;
      }

      // Smooth, natural scroll progression matching the user's reading pace:
      // Eye-level reading height in the viewport (58% of viewport height):
      const viewportTargetY = window.innerHeight * 0.58;
      const scrollYInContainer = viewportTargetY - containerRect.top;

      const firstPos = positions[0];
      const lastPos = positions[count - 1];
      const totalSpan = lastPos - firstPos;

      let progress = 0;
      if (totalSpan > 0) {
        if (scrollYInContainer <= firstPos) {
          progress = 0;
        } else if (scrollYInContainer >= lastPos) {
          progress = 1;
        } else {
          // Piecewise linear interpolation across each step segment so scroll movement is perfectly steady & natural
          for (let i = 0; i < count - 1; i++) {
            const y0 = positions[i];
            const y1 = positions[i + 1];
            if (scrollYInContainer >= y0 && scrollYInContainer <= y1) {
              const segFraction = (scrollYInContainer - y0) / (y1 - y0);
              progress = (i + segFraction) / (count - 1);
              break;
            }
          }
        }
      }

      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(clampedProgress);

      // Compute exact tip point on the SVG path so the circle is 100% attached to the front of the line
      if (pathRef.current) {
        try {
          const len = pathRef.current.getTotalLength();
          if (len > 0) {
            setPathLength(len);
            const pt = pathRef.current.getPointAtLength(Math.min(len, Math.max(0, len * clampedProgress)));
            setDesktopTip({ x: pt.x, y: pt.y });
          }
        } catch {}
      }

      if (mobilePathRef.current) {
        try {
          const mLen = mobilePathRef.current.getTotalLength();
          if (mLen > 0) {
            setMobilePathLength(mLen);
            const mPt = mobilePathRef.current.getPointAtLength(Math.min(mLen, Math.max(0, mLen * clampedProgress)));
            setMobileTip({ x: mPt.x, y: mPt.y });
          }
        } catch {}
      }

      // Trigger threshold: when step enters comfortable reading area of viewport
      const threshold = window.innerHeight * 0.85;

      setRevealedStepIds((prev) => {
        // If scrolled back to top of routine, reset future steps so user can replay animation
        if (clampedProgress < 0.02 && prev.size > 1) {
          return new Set([filteredSteps[0]?.id]);
        }

        let changed = false;
        const next = new Set(prev);

        // First step is always visible
        if (filteredSteps[0] && !next.has(filteredSteps[0].id)) {
          next.add(filteredSteps[0].id);
          changed = true;
        }

        validElements.forEach((el, idx) => {
          const step = filteredSteps[idx];
          if (!step) return;

          const r = el.getBoundingClientRect();
          const stepRatio = idx / Math.max(1, filteredSteps.length - 1);

          // If downloading thread reached it OR if element enters viewport
          if (clampedProgress >= stepRatio - 0.04 || r.top < threshold) {
            if (!next.has(step.id)) {
              next.add(step.id);
              changed = true;
            }
          }
        });

        return changed ? next : prev;
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateGeometryAndScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateGeometryAndScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateGeometryAndScroll, { passive: true });

    const t1 = setTimeout(updateGeometryAndScroll, 120);
    const t2 = setTimeout(updateGeometryAndScroll, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateGeometryAndScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [filteredSteps]);

  // Update SVG path length and tip coordinates when path geometry or scroll progress changes
  useEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength();
        if (len > 0) {
          setPathLength(len);
          const pt = pathRef.current.getPointAtLength(Math.min(len, Math.max(0, len * scrollProgress)));
          setDesktopTip({ x: pt.x, y: pt.y });
        }
      } catch {
        // ignore if SVG not ready
      }
    }
    if (mobilePathRef.current) {
      try {
        const len = mobilePathRef.current.getTotalLength();
        if (len > 0) {
          setMobilePathLength(len);
          const mPt = mobilePathRef.current.getPointAtLength(Math.min(len, Math.max(0, len * scrollProgress)));
          setMobileTip({ x: mPt.x, y: mPt.y });
        }
      } catch {
        // ignore
      }
    }
  }, [wavyPathD, mobileWavyPathD, scrollProgress]);

  return (
    <section
      id="routine"
      className="py-24 bg-gradient-to-b from-[#FAF5F7] via-[#FAF6F8] to-[#FAF7F2] relative overflow-hidden"
    >
      {/* Delicate Floral Background */}
      <SiteFloralBackground opacity={0.55} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3A1826] font-normal leading-tight">
            {isArabic ? (
              <>
                الترتيب المثالي لتطبيق{" "}
                <span className="italic font-light text-[#A55166]">روتين فينيليا</span>{" "}
                في 6 خطوات
              </>
            ) : (
              <>
                Votre routine <span className="italic font-light text-[#A55166]">Vinillia</span> en 6 étapes
              </>
            )}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#615458] font-light leading-relaxed">
            {t.sectionSubtitle}
          </p>

          {/* Routine Switcher Filter */}
          <div className="mt-8 flex flex-wrap sm:inline-flex items-center justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-white border border-[#E2B4C1]/60 shadow-sm max-w-full">
            <button
              onClick={() => setActiveTab("toutes")}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "toutes"
                  ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white shadow-md shadow-[#A55166]/25"
                  : "text-[#665A5E] hover:text-[#A55166]"
              }`}
            >
              {t.tabAll}
            </button>

            <button
              onClick={() => setActiveTab("matin")}
              className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "matin"
                  ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white shadow-md shadow-[#A55166]/25"
                  : "text-[#665A5E] hover:text-[#A55166]"
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-[#E4B86A]" />
              <span>{t.tabMorning}</span>
            </button>

            <button
              onClick={() => setActiveTab("soir")}
              className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "soir"
                  ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white shadow-md shadow-[#A55166]/25"
                  : "text-[#665A5E] hover:text-[#A55166]"
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-[#A582BF]" />
              <span>{t.tabEvening}</span>
            </button>
          </div>
        </div>

        {/* Steps Timeline Grid with Wavy Downloading Thread */}
        <div ref={containerRef} className="relative mt-12 sm:mt-16">
          
          {/* DESKTOP SVG: Wavy Serpentine Downloading Line with White Luminous Glow & Leading Dot */}
          <svg
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-32 h-full z-0 pointer-events-none overflow-visible"
            style={{ top: 0, height: containerHeight || "100%" }}
          >
            <defs>
              <linearGradient id="roseWineWavyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D38C9D" />
                <stop offset="50%" stopColor="#A55166" />
                <stop offset="100%" stopColor="#3A1826" />
              </linearGradient>

              {/* White Luminous Glow Filter (Shadow en Blanc qui brille) */}
              <filter id="desktopWhiteGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FFFFFF" floodOpacity="1" />
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#FFFFFF" floodOpacity="1" />
                <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#FFFFFF" floodOpacity="0.95" />
                <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#FFFFFF" floodOpacity="0.75" />
              </filter>

              {/* Radiant Tip Dot Glow Filter (Halo lumineux) */}
              <filter id="tipDotGlow" x="-200%" y="-200%" width="500%" height="500%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#FFFFFF" floodOpacity="0.95" />
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#A55166" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Faint Wavy Background Track */}
            <path
              d={wavyPathD}
              fill="none"
              stroke="#F3E5EC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Glowing White Aura Line (Shadow Blanc brillant) */}
            <path
              d={wavyPathD}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#desktopWhiteGlow)"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: Math.max(0, pathLength * (1 - scrollProgress)),
                opacity: 1,
              }}
            />

            {/* Animated Wavy Downloading Line */}
            <path
              ref={pathRef}
              d={wavyPathD}
              fill="none"
              stroke="url(#roseWineWavyGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: Math.max(0, pathLength * (1 - scrollProgress)),
                filter: "drop-shadow(0 0 4px #FFFFFF) drop-shadow(0 0 8px #FFFFFF) drop-shadow(0 0 14px rgba(255, 255, 255, 0.9))",
              }}
            />

            {/* Glowing Leading Circle Dot Attached to Tip of Line */}
            {desktopTip && scrollProgress > 0.005 && (
              <g className="transition-opacity duration-200">
                {/* Outermost soft radiant halo */}
                <circle
                  cx={desktopTip.x}
                  cy={desktopTip.y}
                  r="16"
                  fill="#A55166"
                  opacity="0.22"
                />
                {/* Mid radiant aura */}
                <circle
                  cx={desktopTip.x}
                  cy={desktopTip.y}
                  r="10"
                  fill="#A55166"
                  opacity="0.4"
                />
                {/* Core Glowing Dot with White Border */}
                <circle
                  cx={desktopTip.x}
                  cy={desktopTip.y}
                  r="6"
                  fill="#A55166"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  filter="url(#tipDotGlow)"
                />
              </g>
            )}
          </svg>

          {/* MOBILE SVG: Left-aligned Wavy Downloading Line with White Glow & Leading Dot */}
          <svg
            className="lg:hidden absolute left-0 w-12 h-full z-0 pointer-events-none overflow-visible"
            style={{ top: 0, height: containerHeight || "100%" }}
          >
            <defs>
              <linearGradient id="mobileRoseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D38C9D" />
                <stop offset="100%" stopColor="#3A1826" />
              </linearGradient>

              <filter id="mobileWhiteGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FFFFFF" floodOpacity="1" />
                <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#FFFFFF" floodOpacity="1" />
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#FFFFFF" floodOpacity="0.85" />
              </filter>

              <filter id="mobileTipDotGlow" x="-200%" y="-200%" width="500%" height="500%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FFFFFF" floodOpacity="0.95" />
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#A55166" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Mobile Faint Wavy Track */}
            <path
              d={mobileWavyPathD}
              fill="none"
              stroke="#F3E5EC"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Mobile Glowing White Aura Line */}
            <path
              d={mobileWavyPathD}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#mobileWhiteGlow)"
              style={{
                strokeDasharray: mobilePathLength,
                strokeDashoffset: Math.max(0, mobilePathLength * (1 - scrollProgress)),
                opacity: 1,
              }}
            />

            {/* Mobile Animated Downloading Line */}
            <path
              ref={mobilePathRef}
              d={mobileWavyPathD}
              fill="none"
              stroke="url(#mobileRoseGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: mobilePathLength,
                strokeDashoffset: Math.max(0, mobilePathLength * (1 - scrollProgress)),
                filter: "drop-shadow(0 0 3px #FFFFFF) drop-shadow(0 0 6px #FFFFFF) drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))",
              }}
            />

            {/* Glowing Leading Circle Dot on Mobile */}
            {mobileTip && scrollProgress > 0.005 && (
              <g className="transition-opacity duration-200">
                <circle
                  cx={mobileTip.x}
                  cy={mobileTip.y}
                  r="13"
                  fill="#A55166"
                  opacity="0.22"
                />
                <circle
                  cx={mobileTip.x}
                  cy={mobileTip.y}
                  r="8"
                  fill="#A55166"
                  opacity="0.4"
                />
                <circle
                  cx={mobileTip.x}
                  cy={mobileTip.y}
                  r="5"
                  fill="#A55166"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  filter="url(#mobileTipDotGlow)"
                />
              </g>
            )}
          </svg>

          {/* Steps List with Dynamic Side Entrance Animation & Seamless Clean Images */}
          <div className="space-y-12 sm:space-y-16 pl-10 sm:pl-14 lg:pl-0">
            {filteredSteps.map((step, index) => {
              const isEven = index % 2 === 1;
              const isRevealed = revealedStepIds.has(step.id);
              const stepTargetRatio = index / Math.max(1, filteredSteps.length - 1);
              const isNodeActive = scrollProgress >= stepTargetRatio - 0.02 || index === 0;

              const stepTranslation = productsTranslations.find((item) => item.id === step.id);
              const timingText =
                step.routineTiming === "Matin uniquement"
                  ? t.timingMorningOnly
                  : t.timingMorningEvening;

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  data-step-id={step.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Card Content */}
                  <div
                    className={`w-full lg:w-1/2 transition-all duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                      isRevealed
                        ? "opacity-100 translate-x-0"
                        : isEven
                        ? "opacity-0 translate-x-24 sm:translate-x-36 lg:translate-x-48 pointer-events-none"
                        : "opacity-0 -translate-x-24 sm:-translate-x-36 lg:-translate-x-48 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 group hover:shadow-xl ${
                        isNodeActive
                          ? "border-[#E2B4C1] shadow-lg shadow-[#A55166]/8 ring-1 ring-[#E2B4C1]/30"
                          : "border-[#EDE2E6] hover:border-[#E2B4C1] shadow-sm"
                      } ${isArabic ? "text-right" : "text-left"}`}
                    >
                      {/* Top Header: Step Badge + Brand + Timing */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs sm:text-sm font-bold text-[#A55166] bg-[#F7DAE7] px-3.5 py-1.5 rounded-full border border-[#E2B4C1] shadow-2xs">
                            {t.stepLabel} {step.orderNumber}
                          </span>
                          <span className="text-xs uppercase tracking-widest text-[#857479] font-bold">
                            {step.brand}
                          </span>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-3.5 py-1 rounded-full border shadow-2xs ${
                            step.routineTiming === "Matin uniquement"
                              ? "bg-[#FFF9EE] border-[#EAD6B3] text-[#8C6424]"
                              : "bg-[#F7F2FA] border-[#DFCFE8] text-[#714E8B]"
                          }`}
                        >
                          {step.routineTiming === "Matin uniquement" ? (
                            <Sun className="w-3.5 h-3.5 text-[#E4B86A]" />
                          ) : (
                            <Moon className="w-3.5 h-3.5 text-[#A582BF]" />
                          )}
                          {timingText}
                        </span>
                      </div>

                      {/* Product Name */}
                      <div className="block">
                        {isArabic && stepTranslation?.arabicName ? (
                          <div>
                            <h3 className="font-serif text-2xl sm:text-3xl text-[#3A1826] font-normal leading-snug">
                              {stepTranslation.arabicName}
                            </h3>
                            <span dir="ltr" className="block text-xs sm:text-sm text-[#857479] font-sans font-medium mt-1">
                              {step.name}
                            </span>
                          </div>
                        ) : (
                          <h3 dir="ltr" className="font-serif text-2xl sm:text-3xl text-[#3A1826] font-normal leading-snug inline-block">
                            {step.name}
                          </h3>
                        )}
                      </div>

                      {/* Product Description */}
                      <p className="mt-2.5 text-xs sm:text-sm text-[#5C5055] font-light leading-relaxed">
                        {stepTranslation?.presentation || step.presentation}
                      </p>

                      {/* Footer: Rôle clé */}
                      <div className="mt-5 pt-3.5 border-t border-[#F7DAE7]/80 flex items-center gap-2">
                        <span className="text-xs text-[#78696F] font-semibold whitespace-nowrap shrink-0">
                          {t.keyRole}
                        </span>
                        <span className="text-xs text-[#A55166] font-semibold">
                          {stepTranslation?.shortBenefit || step.shortBenefit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Indicator on Desktop */}
                  <div className="hidden lg:flex relative z-10 shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full font-mono text-sm font-bold flex items-center justify-center transition-all duration-300 ${
                        isNodeActive
                          ? "bg-gradient-to-br from-[#A55166] to-[#3A1826] text-white scale-110 shadow-lg shadow-[#A55166]/40 border-2 border-white ring-4 ring-[#A55166]/20"
                          : "bg-white text-[#9E8E94] scale-95 border-2 border-[#E7D6DC] shadow-xs"
                      }`}
                    >
                      <span>{step.orderNumber}</span>
                    </div>
                  </div>

                  {/* Mobile Node Indicator on Left Line (Perfect center on timeline line, 0 overlap) */}
                  <div
                    className="lg:hidden absolute top-7 z-10 -translate-x-1/2"
                    style={{ left: "-22px" }}
                  >
                    <div
                      className={`w-9 h-9 rounded-full font-mono text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                        isNodeActive
                          ? "bg-gradient-to-br from-[#A55166] to-[#3A1826] text-white shadow-md shadow-[#A55166]/40 border-2 border-white ring-2 ring-[#A55166]/25 scale-105"
                          : "bg-white text-[#9E8E94] border-2 border-[#E7D6DC] shadow-2xs"
                      }`}
                    >
                      <span>{step.orderNumber}</span>
                    </div>
                  </div>

                  {/* Step Product Floating Showcase */}
                  <div
                    className={`w-full lg:w-1/2 flex justify-center py-4 transition-all duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                      isRevealed
                        ? "opacity-100 translate-x-0 scale-100"
                        : isEven
                        ? "opacity-0 -translate-x-32 sm:-translate-x-48 lg:-translate-x-64 scale-95 pointer-events-none"
                        : "opacity-0 translate-x-32 sm:translate-x-48 lg:translate-x-64 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="group/img isolate relative w-64 h-72 sm:w-72 sm:h-80 lg:w-72 lg:h-88 xl:w-80 xl:h-96 flex flex-col items-center justify-end pb-5 sm:pb-6 lg:pb-7 select-none">
                      {/* 1. Smooth Luminous Ambient Blur Aura (Halo doux diffusé et visible derrière le produit) */}
                      <div
                        className={`absolute inset-2 sm:inset-4 m-auto rounded-full bg-gradient-to-tr from-[#FCE5ED]/90 via-white to-[#FDF0F4]/90 blur-2xl pointer-events-none transition-all duration-700 z-0 ${
                          isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                      />

                      {/* 2. Soft Frosted Core (Estompe les motifs et pétales qui passent derrière le produit) */}
                      <div
                        className={`absolute inset-6 sm:inset-8 m-auto rounded-full bg-white/70 backdrop-blur-md blur-lg pointer-events-none transition-all duration-700 z-0 ${
                          isRevealed ? "opacity-90" : "opacity-0"
                        }`}
                      />

                      {/* 3. Smooth Product Silhouette Blur (Flou doux qui diffuse la couleur du produit et masque la découpe) */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-0 transition-all duration-700 ${
                          isRevealed ? "opacity-65 scale-100" : "opacity-0 scale-75"
                        }`}
                      >
                        <div className="relative w-52 h-56 sm:w-60 sm:h-64 lg:w-64 lg:h-76 xl:w-72 xl:h-84 blur-xl scale-[0.98]">
                          <Image
                            src={step.image}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 240px, (max-width: 1023px) 280px, (max-width: 1280px) 320px, 360px"
                            className="object-contain p-1"
                          />
                        </div>
                      </div>

                      {/* 4. Pedestal Ground Shadow (Ombre au sol douce, aérée et naturelle) */}
                      <div
                        className={`absolute bottom-5 sm:bottom-6 lg:bottom-7 w-36 sm:w-44 lg:w-48 xl:w-56 h-3.5 sm:h-4.5 lg:h-5 bg-gradient-to-r from-transparent via-[#8E3F53]/15 to-transparent rounded-[100%] blur-md pointer-events-none transition-all duration-1000 delay-200 z-0 ${
                          isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        } group-hover/img:scale-x-105 group-hover/img:opacity-75`}
                      />

                      {/* 5. Product Bottle */}
                      <div className="relative z-10 w-52 h-56 sm:w-60 sm:h-64 lg:w-64 lg:h-76 xl:w-72 xl:h-84 transition-transform duration-500 ease-out group-hover/img:-translate-y-1.5">
                        <Image
                          src={step.image}
                          alt={step.name}
                          fill
                          sizes="(max-width: 640px) 240px, (max-width: 1023px) 280px, (max-width: 1280px) 320px, 360px"
                          className="object-contain p-1 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
