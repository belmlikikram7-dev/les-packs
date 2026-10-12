"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Droplets,
  Feather,
  HeartHandshake,
  Shield,
  Layers,
  Sun,
  ChevronDown,
} from "lucide-react";
import SiteFloralBackground from "./SiteFloralBackground";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

// Cute Gingham / Vichy Check Pattern Style for Polaroid Frames (from user reference)
const GINGHAM_STYLE = {
  backgroundColor: "#FFFFFF",
  backgroundImage: `
    linear-gradient(90deg, rgba(247, 182, 206, 0.45) 50%, transparent 50%),
    linear-gradient(rgba(247, 182, 206, 0.45) 50%, transparent 50%)
  `,
  backgroundSize: "14px 14px",
};

// Cute Pink Silk Ribbon Bow (فراشة شريط الحرير)
function CuteBow({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bowPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD3E1" />
          <stop offset="45%" stopColor="#F5A3BD" />
          <stop offset="100%" stopColor="#D86B8C" />
        </linearGradient>
        <filter id="bowShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#3A1826" floodOpacity="0.22" />
        </filter>
      </defs>
      <g filter="url(#bowShadow)">
        {/* Left loop */}
        <path d="M30 20 C22 10 8 10 10 22 C12 30 26 24 30 22 Z" fill="url(#bowPink)" />
        {/* Right loop */}
        <path d="M30 20 C38 10 52 10 50 22 C48 30 34 24 30 22 Z" fill="url(#bowPink)" />
        {/* Left ribbon tail */}
        <path d="M28 22 C24 30 18 42 12 46 C16 42 22 36 28 26 Z" fill="url(#bowPink)" opacity="0.9" />
        {/* Right ribbon tail */}
        <path d="M32 22 C36 30 42 42 48 46 C44 42 38 36 32 26 Z" fill="url(#bowPink)" opacity="0.9" />
        {/* Center knot */}
        <ellipse cx="30" cy="21" rx="4.2" ry="4.2" fill="#E27A9C" />
        <ellipse cx="29.5" cy="20" rx="2" ry="1.5" fill="#FFE3EC" opacity="0.8" />
      </g>
    </svg>
  );
}

// Cute Translucent Pink Butterfly (فراشة)
function CuteButterfly({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="butterflyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE1EC" />
          <stop offset="60%" stopColor="#F5A8C2" />
          <stop offset="100%" stopColor="#DE7396" />
        </linearGradient>
        <filter id="bfShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#3A1826" floodOpacity="0.22" />
        </filter>
      </defs>
      <g filter="url(#bfShadow)">
        <path d="M25 18 C20 4 6 4 8 16 C9 22 21 20 25 18 Z" fill="url(#butterflyGrad)" />
        <path d="M25 18 C30 4 44 4 42 16 C41 22 29 20 25 18 Z" fill="url(#butterflyGrad)" />
        <path d="M25 20 C19 23 12 30 16 34 C19 36 23 27 25 21 Z" fill="url(#butterflyGrad)" opacity="0.85" />
        <path d="M25 20 C31 23 38 30 34 34 C31 36 27 27 25 21 Z" fill="url(#butterflyGrad)" opacity="0.85" />
        <ellipse cx="25" cy="20" rx="1.5" ry="6" fill="#A55166" />
        <path d="M24 14 C22 10 19 8 17 9" stroke="#A55166" strokeWidth="1" strokeLinecap="round" />
        <path d="M26 14 C28 10 31 8 33 9" stroke="#A55166" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Cute 5-Petal Flower Single Unit (الوردة الكيوت ديال الناف بار والفوتر from user image)
function Cute5PetalFlower({ cx, cy, size = 18, opacity = 0.55 }: { cx: string; cy: string; size?: number; opacity?: number }) {
  const r = size / 3;
  return (
    <g transform={`translate(${cx}, ${cy})`} opacity={opacity}>
      <circle cx="0" cy={-r * 1.3} r={r} fill="#F7DAE7" />
      <circle cx={r * 1.25} cy={-r * 0.4} r={r} fill="#F7DAE7" />
      <circle cx={r * 0.8} cy={r * 1.1} r={r} fill="#F7DAE7" />
      <circle cx={-r * 0.8} cy={r * 1.1} r={r} fill="#F7DAE7" />
      <circle cx={-r * 1.25} cy={-r * 0.4} r={r} fill="#F7DAE7" />
      <circle cx="0" cy="0" r={r * 0.75} fill="#FFF2F7" />
      <circle cx="0" cy="0" r={r * 0.4} fill="#E2B4C1" />
    </g>
  );
}

const PILLAR_CONFIGS = [
  {
    icon: Droplets,
    color: "bg-[#F3EFF8] text-[#7A648F] border-[#E5DEEE]",
    iconBg: "#F3EFF8",
    iconColor: "#7A648F",
    direction: -1,
    targetRot: -4.5,
    targetX: -14,
    targetY: -8,
    decoration: "butterfly-top-left",
  },
  {
    icon: Feather,
    color: "bg-[#F9F0F4] text-[#A34E67] border-[#EED9E3]",
    iconBg: "#F9F0F4",
    iconColor: "#A34E67",
    direction: 1,
    targetRot: 4.5,
    targetX: 16,
    targetY: 8,
    decoration: "bow-top-right",
  },
  {
    icon: HeartHandshake,
    color: "bg-[#F8F5EC] text-[#857048] border-[#EDE4D0]",
    iconBg: "#F8F5EC",
    iconColor: "#857048",
    direction: -1,
    targetRot: -3.5,
    targetX: -10,
    targetY: 14,
    decoration: "bow-top-left",
  },
  {
    icon: Shield,
    color: "bg-[#EFF6F4] text-[#4F7E71] border-[#DAECE6]",
    iconBg: "#EFF6F4",
    iconColor: "#4F7E71",
    direction: 1,
    targetRot: 5.0,
    targetX: 14,
    targetY: -6,
    decoration: "butterfly-bottom-right",
  },
  {
    icon: Layers,
    color: "bg-[#F8F2F6] text-[#935272] border-[#EDDDE8]",
    iconBg: "#F8F2F6",
    iconColor: "#935272",
    direction: -1,
    targetRot: -5.0,
    targetX: -16,
    targetY: 10,
    decoration: "bow-bottom-left",
  },
  {
    icon: Sun,
    color: "bg-[#FAF3EA] text-[#946F38] border-[#EFE1CD]",
    iconBg: "#FAF3EA",
    iconColor: "#946F38",
    direction: 1,
    targetRot: 3.5,
    targetX: 6,
    targetY: 2,
    decoration: "sun-butterfly",
  },
];

export default function PackIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].packIntro;

  const pillars = PILLAR_CONFIGS.map((cfg, idx) => ({
    ...cfg,
    ...t.pillars[idx],
  }));

  // Responsive, light scroll height (210vh allows quick, effortless scroll transitions)
  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = -rect.top;
      const p = Math.max(0, Math.min(1, currentScroll / totalHeight));
      setScrollProgress(p);
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current active step (0 to 5)
  const currentStepIndex = Math.min(
    5,
    Math.max(0, Math.floor(scrollProgress / 0.165))
  );

  return (
    <div id="pack" className="relative bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#FAF5F7]">
      {/* 1. SCROLL-PINNED SCRAPBOOK SECTION (Compact 210vh height for fast, effortless scrolling) */}
      <div ref={sectionRef} className="relative" style={{ height: "210vh" }}>
        
        {/* Sticky viewport frame (stays fixed on screen as user scrolls) */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          
          {/* Subtle scattered flowers in background */}
          <SiteFloralBackground opacity={0.7} />

          {/* Clean Section Header (No 1 2 3 buttons, elegant and uncluttered) */}
          <div className="relative z-20 max-w-3xl mx-auto text-center pt-2 sm:pt-4">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#3A1826] font-normal leading-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#615458] font-light max-w-xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Central Scrapbook Stage (Where Polaroid cards stack and overlap like in the photo) */}
          <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-lg mx-auto my-auto min-h-[380px] sm:min-h-[440px]">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;

              // Fast, responsive entrance thresholds (light scroll)
              let isVisible = false;
              let currentX = 0;
              let currentY = pillar.targetY;
              let currentRot = pillar.targetRot;
              let currentOpacity = 0;
              let currentScale = 1;

              if (idx === 0) {
                // Card 0 starts directly on screen
                isVisible = true;
                currentX = pillar.targetX;
                currentY = pillar.targetY;
                currentRot = pillar.targetRot;
                currentOpacity = 1;
                currentScale = idx === currentStepIndex ? 1 : 0.98;
              } else {
                const startP = 0.12 + (idx - 1) * 0.16;
                const endP = startP + 0.10;

                if (scrollProgress >= startP) {
                  isVisible = true;
                  if (scrollProgress >= endP) {
                    // Fully landed
                    currentX = pillar.targetX;
                    currentY = pillar.targetY;
                    currentRot = pillar.targetRot;
                    currentOpacity = 1;
                    currentScale = idx === currentStepIndex ? 1 : 0.98;
                  } else {
                    // Smooth, swift entrance from left/right
                    const t = (scrollProgress - startP) / (endP - startP);
                    const ease = 1 - Math.pow(1 - t, 3);
                    currentX = (1 - ease) * (pillar.direction * 110);
                    currentY = (1 - ease) * 30 + pillar.targetY;
                    currentRot = (1 - ease) * (pillar.direction * 12) + pillar.targetRot;
                    currentOpacity = Math.min(1, t * 1.8);
                    currentScale = 1.03 - ease * 0.03;
                  }
                }
              }

              if (!isVisible) return null;

              const isTopmost = idx === currentStepIndex;

              return (
                <div
                  key={pillar.stepNum}
                  style={{
                    transform:
                      idx === 0 && scrollProgress < 0.12
                        ? `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRot}deg) scale(${currentScale})`
                        : `translate3d(calc(${currentX === pillar.targetX ? "0vw" : `${currentX}vw`} + ${pillar.targetX}px), ${currentY}px, 0) rotate(${currentRot}deg) scale(${currentScale})`,
                    zIndex: 10 + idx,
                    opacity: currentOpacity,
                  }}
                  className={`absolute w-[86vw] max-w-[340px] sm:max-w-[390px] md:max-w-[420px] rounded-2xl sm:rounded-3xl p-3 sm:p-4 pb-8 sm:pb-9 shadow-2xl transition-all duration-75 ease-out select-none ${
                    isTopmost
                      ? "shadow-[#3A1826]/30 ring-2 ring-[#A55166]/40"
                      : "shadow-[#3A1826]/15 brightness-[0.98]"
                  }`}
                >
                  {/* Polaroid Gingham Vichy Plaid Outer Skin */}
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
                    style={GINGHAM_STYLE}
                  />

                  {/* Corner Decorations */}
                  {pillar.decoration === "butterfly-top-left" && (
                    <div className="absolute -top-3.5 -left-3 z-30 pointer-events-none transform -rotate-12">
                      <CuteButterfly className="w-9 h-9 sm:w-11 sm:h-11" />
                    </div>
                  )}

                  {pillar.decoration === "bow-top-right" && (
                    <div className="absolute -top-3.5 -right-3.5 z-30 pointer-events-none transform rotate-12">
                      <CuteBow className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                  )}

                  {pillar.decoration === "bow-top-left" && (
                    <div className="absolute -top-3.5 -left-3.5 z-30 pointer-events-none transform -rotate-12">
                      <CuteBow className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                  )}

                  {pillar.decoration === "butterfly-bottom-right" && (
                    <div className="absolute -bottom-2 -right-3 z-30 pointer-events-none transform rotate-12">
                      <CuteButterfly className="w-9 h-9 sm:w-10 sm:h-10" />
                    </div>
                  )}

                  {pillar.decoration === "bow-bottom-left" && (
                    <div className="absolute -bottom-3 -left-3 z-30 pointer-events-none transform -rotate-12">
                      <CuteBow className="w-10 h-10 sm:w-11 sm:h-11" />
                    </div>
                  )}

                  {pillar.decoration === "sun-butterfly" && (
                    <>
                      <div className="absolute -top-3 -right-2.5 z-30 pointer-events-none transform rotate-12">
                        <CuteButterfly className="w-9 h-9 sm:w-10 sm:h-10" />
                      </div>
                      <div className="absolute -bottom-2.5 -left-2.5 z-30 pointer-events-none transform -rotate-12">
                        <CuteBow className="w-9 h-9 sm:w-10 sm:h-10" />
                      </div>
                    </>
                  )}

                  {/* Inner Photo Area (White photographic paper surface) */}
                  <div className="relative z-10 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#E2B4C1]/40 shadow-xs flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#A55166] bg-[#F7DAE7]/70 px-2.5 py-0.5 rounded-full border border-[#E2B4C1]">
                          {t.stepLabel || (isArabic ? "الخطوة" : "ÉTAPE")} {pillar.stepNum} • {pillar.stepName}
                        </span>
                        <span className="text-[10px] text-[#8C7D82] font-medium">
                          {t.integratedStep || (isArabic ? "خطوة متكاملة" : "Étape intégrée")}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-3 my-2">
                        <div
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs"
                          style={{
                            backgroundColor: pillar.iconBg,
                            borderColor: "#EADEE3",
                            color: pillar.iconColor,
                          }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl text-[#3A1826] font-normal leading-snug">
                            {pillar.title}
                          </h3>
                          <span dir="ltr" className="text-[11px] text-[#A55166] font-semibold block mt-0.5">
                            {pillar.productName}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[#5C5055] font-light leading-relaxed mt-2 bg-[#FAF6F8] p-2.5 rounded-xl border border-[#F2E4EA]">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Role & Actives pill */}
                    <div className="mt-3 pt-2.5 border-t border-[#F7E7ED] flex items-center justify-between text-[11px]">
                      <span className="text-[#7A6C71] font-medium">{t.keyActivesLabel}</span>
                      <span className="text-[#3A1826] font-semibold truncate max-w-[200px] text-right">
                        {pillar.role}
                      </span>
                    </div>
                  </div>

                  {/* Polaroid Chin: Handwritten Aesthetic Note (Script caption) */}
                  <div className="relative z-10 pt-2 text-center">
                    <p className="font-serif italic text-xs sm:text-[13px] text-[#A55166] tracking-wide font-normal">
                      {pillar.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clean, discreet bottom scroll indicator */}
          <div className="relative z-20 pb-2 text-center flex flex-col items-center">
            <span className="text-[11px] text-[#8C7D82] font-medium flex items-center gap-1.5">
              <span>{scrollProgress >= 0.9 ? t.scrollComplete : t.scrollPrompt}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#A55166] animate-bounce" />
            </span>
          </div>

        </div>
      </div>

      {/* 2. COHESIVE RIBBON NOTE CARD (Quote card with butterflies & silk bows) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-4">
        <div className="max-w-4xl mx-auto relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#FDF1F5] border border-[#E2B4C1] p-6 sm:p-10 md:p-11 text-center shadow-md shadow-[#A55166]/10 overflow-hidden group">
          {/* Top-Right Ribbon Bow */}
          <div className="absolute -top-1 -right-1 sm:top-0 sm:right-0 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 pointer-events-none select-none z-10 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/bow-top-right.png"
              alt=""
              fill
              sizes="(max-width: 640px) 144px, 240px"
              className="object-contain object-top-right"
              priority
            />
          </div>

          {/* Bottom-Left Ribbon Bow */}
          <div className="absolute -bottom-1 -left-1 sm:bottom-0 sm:left-0 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 pointer-events-none select-none z-10 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/bow-bottom-left.png"
              alt=""
              fill
              sizes="(max-width: 640px) 128px, 208px"
              className="object-contain object-bottom-left"
              priority
            />
          </div>

          {/* Soft ambient center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.75)_0%,_rgba(253,241,245,0.4)_70%)] pointer-events-none" />

          {/* Centered Prominent Quote Note Text */}
          <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-8 py-1 sm:py-2">
            <p className="font-serif text-lg sm:text-2xl md:text-[1.55rem] text-[#3A1826] font-normal italic leading-relaxed sm:leading-[1.65] tracking-normal">
              {t.quote}
            </p>

            <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3">
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#D38C9D]" />
              <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#A55166]">
                {t.quoteAuthor}
              </span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#D38C9D]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
