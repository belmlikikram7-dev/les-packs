"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, ShieldCheck, Shield, Sun, Smile } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function WhySection() {
  const { locale, dir } = useLanguage();
  const t = TRANSLATIONS[locale].why;

  const ICONS = [
    Droplets,
    ShieldCheck,
    Smile,
    Sun,
    Shield,
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [progress, setProgress] = useState(0);
  const [deltaCenters, setDeltaCenters] = useState<number[]>([0, 0, 0, 0, 0]);
  const [isDesktop, setIsDesktop] = useState(true);

  // Measure natural distance from each slot to the container center
  const updateLayout = () => {
    if (typeof window === "undefined") return;
    const desktop = window.innerWidth >= 1024;
    setIsDesktop(desktop);

    if (!gridRef.current) return;
    const gridRect = gridRef.current.getBoundingClientRect();
    const gridCenter = gridRect.left + gridRect.width / 2;

    const deltas = slotRefs.current.map((slot) => {
      if (!slot) return 0;
      const rect = slot.getBoundingClientRect();
      const slotCenter = rect.left + rect.width / 2;
      return gridCenter - slotCenter;
    });
    setDeltaCenters(deltas);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    // Re-check layout after initial render fonts/styles settle
    const timer = setTimeout(updateLayout, 100);
    return () => {
      window.removeEventListener("resize", updateLayout);
      clearTimeout(timer);
    };
  }, []);

  // Track scroll progress through this section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!trackRef.current) return;
          const rect = trackRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalScrollable = rect.height - windowHeight;

          if (totalScrollable <= 0) return;

          // When top of track reaches top of viewport: rect.top = 0 -> progress = 0
          // When bottom of track reaches bottom of viewport: rect.bottom = windowHeight -> progress = 1
          const scrolled = -rect.top;
          const currentProgress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
          setProgress(currentProgress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute transform and opacity for Card i based on scroll progress
  const getCardStyle = (i: number) => {
    // If layout not ready yet, keep safe default
    const delta = deltaCenters[i] || 0;

    // Timeline windows for the 5 cards:
    // Card 0: starts center, then moves to slot 0 (0.16 -> 0.32)
    // Card 1: appears and moves to slot 1 (0.18 -> 0.34)
    // Card 2: appears and moves to slot 2 (0.36 -> 0.52)
    // Card 3: appears and moves to slot 3 (0.54 -> 0.70)
    // Card 4: appears and moves to slot 4 (0.72 -> 0.88)
    const ranges = [
      { enterStart: 0.0, enterEnd: 0.08, moveStart: 0.16, moveEnd: 0.32, rot: -3 },
      { enterStart: 0.18, enterEnd: 0.24, moveStart: 0.20, moveEnd: 0.34, rot: -1.5 },
      { enterStart: 0.36, enterEnd: 0.42, moveStart: 0.38, moveEnd: 0.52, rot: 0 },
      { enterStart: 0.54, enterEnd: 0.60, moveStart: 0.56, moveEnd: 0.70, rot: 1.5 },
      { enterStart: 0.72, enterEnd: 0.78, moveStart: 0.74, moveEnd: 0.88, rot: 3 },
    ];

    const r = ranges[i];

    if (!isDesktop) {
      // Mobile choreography: cards deal horizontally into a highlighted deck
      const mobileActiveIdx = Math.min(Math.floor(progress * 5), 4);
      const isCurrent = mobileActiveIdx === i;
      const isPast = mobileActiveIdx > i;
      return {
        opacity: isCurrent ? 1 : isPast ? 0.4 : 0,
        transform: isCurrent
          ? "scale(1) translate3d(0, 0, 0)"
          : isPast
          ? "scale(0.92) translate3d(-10px, 0, 0)"
          : "scale(0.9) translate3d(30px, 0, 0)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        zIndex: 10 + i,
      };
    }

    // DESKTOP CARD FANNING & DEALING ANIMATION:
    if (i === 0) {
      // Card 0 starts in center!
      if (progress < r.enterStart) {
        return {
          opacity: 0,
          transform: `translate3d(${delta}px, 40px, 0) scale(0.9) rotate(${r.rot}deg)`,
          pointerEvents: "none" as const,
        };
      }
      if (progress < r.enterEnd) {
        // Fading into center
        const enterT = (progress - r.enterStart) / (r.enterEnd - r.enterStart);
        const y = 40 * (1 - enterT);
        return {
          opacity: enterT,
          transform: `translate3d(${delta}px, ${y}px, 0) scale(${0.9 + 0.1 * enterT}) rotate(${r.rot * (1 - enterT)}deg)`,
        };
      }
      if (progress < r.moveStart) {
        // Resting in center before other cards enter
        return {
          opacity: 1,
          transform: `translate3d(${delta}px, 0px, 0) scale(1) rotate(0deg)`,
        };
      }
      if (progress < r.moveEnd) {
        // Sliding from center to slot 0
        const moveT = (progress - r.moveStart) / (r.moveEnd - r.moveStart);
        const ease = 1 - Math.pow(1 - moveT, 3);
        const currentX = delta * (1 - ease);
        return {
          opacity: 1,
          transform: `translate3d(${currentX}px, 0px, 0) scale(1) rotate(${r.rot * (1 - ease)}deg)`,
        };
      }
      // Fully settled in slot 0
      return {
        opacity: 1,
        transform: "translate3d(0px, 0px, 0) scale(1) rotate(0deg)",
      };
    }

    // Cards 1, 2, 3, 4:
    if (progress < r.enterStart) {
      // Not yet visible
      return {
        opacity: 0,
        transform: `translate3d(${delta + (i > 2 ? 80 : 0)}px, 30px, 0) scale(0.88) rotate(${r.rot}deg)`,
        pointerEvents: "none" as const,
      };
    }

    // Entering and dealing into position
    const tMove = Math.min(Math.max((progress - r.moveStart) / (r.moveEnd - r.moveStart), 0), 1);
    const ease = 1 - Math.pow(1 - tMove, 3);
    const currentX = (delta + (i > 2 ? 60 : 0)) * (1 - ease);
    const enterT = Math.min((progress - r.enterStart) / (r.enterEnd - r.enterStart), 1);
    const currentRot = r.rot * (1 - ease);
    const currentScale = 0.9 + 0.1 * ease;

    return {
      opacity: enterT,
      transform: `translate3d(${currentX}px, 0px, 0) scale(${currentScale}) rotate(${currentRot}deg)`,
    };
  };

  return (
    <div id="why" className="relative">
      {/* MOBILE LAYOUT (< lg): Natural smooth scrolling, all 5 cards accessible */}
      <section className="lg:hidden px-3 sm:px-6 py-10 sm:py-14 bg-[#F4F9FD]">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center max-w-lg mx-auto mb-7">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-[#0F3554] text-xs font-semibold uppercase tracking-wider border border-[#BAE0F8] shadow-xs mb-3">
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-luxury tracking-tight text-[#0F3554]">
              {t.title}
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-[#4B6B88] leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* 5 Feature Cards in Clean Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5" dir={dir}>
            {t.features.map((feat, idx) => {
              const Icon = ICONS[idx] || Shield;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4.5 sm:p-5 border border-[#BAE0F8] shadow-md shadow-sky-950/5 flex flex-col justify-between text-left rtl:text-right"
                >
                  <div>
                    {/* Header: Icon Next to Title & Step Number */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5 flex-1 pr-1 rtl:pr-0 rtl:pl-1">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-[#E0F2FE] to-[#BAE0F8]/50 text-[#0284C7] flex items-center justify-center shrink-0 border border-white shadow-xs">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-[#0F3554] leading-snug">
                          {feat.title}
                        </h3>
                      </div>

                      <span className="text-[10px] font-bold text-[#5C7C99] px-2 py-0.5 rounded-full bg-[#F0F7FD] border border-[#BAE0F8]/50 shrink-0">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Feature Description */}
                    <p className="text-[11px] sm:text-xs text-[#5C7C99] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESKTOP LAYOUT (lg:block): Fanning cards scroll choreography pinned track */}
      <section id="why" ref={trackRef} className="hidden lg:block relative h-[270vh] sm:h-[300vh]">
        {/* Sticky viewport frame pinned while scrolling */}
        <div className="sticky top-0 h-screen min-h-[640px] max-h-[1000px] flex flex-col justify-center items-center px-3 sm:px-6 md:px-8 py-6 sm:py-10 overflow-hidden bg-[#F4F9FD]">
          
          {/* Soft decorative background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-gradient-to-b from-[#BAE0F8]/30 via-[#E0F2FE]/20 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-[#0F3554] text-xs font-semibold uppercase tracking-wider border border-[#BAE0F8] shadow-xs mb-3">
                <span>{t.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury tracking-tight text-[#0F3554]">
                {t.title}
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-[#4B6B88] max-w-lg mx-auto leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* 5 Features Grid with Scroll-Dealing Card Animation */}
            <div
              ref={gridRef}
              className="w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5"
              dir={dir}
            >
              {t.features.map((feat, idx) => {
                const Icon = ICONS[idx] || Shield;
                const cardStyle = getCardStyle(idx);

                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      slotRefs.current[idx] = el;
                    }}
                    className="relative w-full"
                  >
                    <div
                      style={cardStyle}
                      className="group relative bg-white rounded-3xl p-5 sm:p-5.5 border border-[#BAE0F8] hover:border-[#0284C7] shadow-lg shadow-sky-950/5 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-left rtl:text-right will-change-transform min-h-[140px] sm:min-h-[155px]"
                    >
                      <div>
                        {/* Header: Icon Next to Title & Step Number */}
                        <div className="flex items-start justify-between gap-2 mb-2.5">
                          <div className="flex items-center gap-2.5 flex-1 pr-1 rtl:pr-0 rtl:pl-1">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-[#E0F2FE] to-[#BAE0F8]/50 text-[#0284C7] flex items-center justify-center shrink-0 shadow-xs border border-white group-hover:scale-105 transition-transform">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                            </div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#0F3554] leading-snug">
                              {feat.title}
                            </h3>
                          </div>

                          {/* Step tag */}
                          <span className="text-[10px] font-bold text-[#5C7C99] px-2 py-0.5 rounded-full bg-[#F0F7FD] border border-[#BAE0F8]/50 shrink-0">
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Feature Description */}
                        <p className="text-[11px] sm:text-xs text-[#5C7C99] leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
