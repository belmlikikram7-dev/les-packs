"use client";

import React from "react";

// Professional & Cute K-Beauty Icons with refined curves and sparkles
// 1. Cute Dewdrop with little sparkle for Deep Hydration
function CuteHydrationIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Plump, cute water droplet */}
      <path
        d="M16 4 C16 4 8 13.5 8 19.5 C8 24.2 11.6 28 16 28 C20.4 28 24 24.2 24 19.5 C24 13.5 16 4 16 4 Z"
        strokeWidth="2"
      />
      {/* Cute inner moisture shine curve */}
      <path
        d="M12.5 18 C12.5 15.5 14 13 16 11.5"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Tiny companion sparkle drop */}
      <circle cx="21" cy="11" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 2. Cute Glass-Skin 4-Point Star Sparkle (matching user's uploaded reference exactly)
function CuteGlowIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Rounded 4-point organic star */}
      <path
        d="M15 5 C15.2 11 11 14.8 5 15 C11 15.2 14.8 19 15 25 C15.2 19 19 15.2 25 15 C19 14.8 15.2 11 15 5 Z"
        strokeWidth="2.2"
      />
      {/* Cute tiny top-right star twinkle (+) */}
      <path d="M24 6.5 V10 M22.2 8.25 H25.8" strokeWidth="2" strokeLinecap="round" />
      {/* Cute tiny bottom-left soft sparkle dot */}
      <circle cx="7.5" cy="22.5" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 3. Cute Protective Heart-Shield / Barrier Protection
function CuteBarrierIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Smooth rounded shield */}
      <path
        d="M16 4.5 C21.5 7 24.5 7 24.5 12.5 C24.5 19.5 19 25 16 27.5 C13 25 7.5 19.5 7.5 12.5 C7.5 7 10.5 7 16 4.5 Z"
        strokeWidth="2"
      />
      {/* Gentle protective checkmark with soft dot */}
      <path
        d="M12 15.5 L15 18.5 L20.5 12.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 4. Cute Collagen Lotus Blossom / Firmness & Rejuvenation
function CuteFirmnessIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Center upright petal */}
      <path
        d="M16 6 C13 11 13 17 16 22 C19 17 19 11 16 6 Z"
        strokeWidth="2"
      />
      {/* Left blooming petal */}
      <path
        d="M13.5 13 C8 15 6 18.5 8.5 22 C11.5 22 14 19.5 15 17"
        strokeWidth="1.9"
      />
      {/* Right blooming petal */}
      <path
        d="M18.5 13 C24 15 26 18.5 23.5 22 C20.5 22 18 19.5 17 17"
        strokeWidth="1.9"
      />
      {/* Cute base support curve */}
      <path
        d="M12 25.5 C14.5 26.5 17.5 26.5 20 25.5"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PackIntro() {
  const results = [
    {
      icon: CuteHydrationIcon,
      title: "Hydratation Profonde",
      desc: "Repulpe les tissus cutanés et infuse une souplesse durable tout au long de la journée.",
    },
    {
      icon: CuteGlowIcon,
      title: "Glow & Éclat Naturel",
      desc: "Révèle un teint unifié, transparent et radieux sans fini gras ni brillance.",
    },
    {
      icon: CuteBarrierIcon,
      title: "Barrière Renforcée",
      desc: "Apaise les rougeurs, calme les irritations et protège la peau des agressions extérieures.",
    },
    {
      icon: CuteFirmnessIcon,
      title: "Fermeté & Lissage",
      desc: "Stimule la synthèse de collagène et estompe visiblement l'apparence des ridules.",
    },
  ];

  return (
    <section id="pack" className="relative py-10 lg:py-14 bg-[#FAF7EE] text-[#310F10] overflow-hidden">
      
      {/* Top Transition Wave */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 text-[#EFE7D5] preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,110 480,10 760,65 C1040,120 1200,30 1440,75 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main Organic Wavy Beige Ribbon Container */}
      <div className="bg-[#EFE7D5] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative shadow-[inset_0_2px_12px_rgba(49,15,16,0.03)]">
        <div className="max-w-6xl mx-auto">
          
          {/* Subtle Category Eyebrow & Main Title */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="font-mono text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#74070D] block mb-2">
              Résultats Visibles & Cliniques
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#310F10] leading-tight mb-3">
              Ce que ce rituel apporte à votre peau
            </h2>
            <div className="w-12 h-0.5 bg-[#74070D]/40 mx-auto rounded-full mt-3" />
          </div>

          {/* 4 Pillars in a Flowing Row with Refined Separators (exact style from reference image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#74070D]/15">
            {results.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-4 lg:px-7 group"
                >
                  {/* Circular badge exactly matching the user's reference image:
                      - Clean circular disk in #FAF7EE
                      - Ultra delicate rosy/burgundy border in #74070D/25
                      - Elegant cute icon centered in deep wine red #74070D */}
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-[#FAF7EE] border border-[#74070D]/25 shadow-xs flex items-center justify-center text-[#74070D] mb-5 group-hover:scale-105 group-hover:border-[#74070D]/50 transition-all duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  {/* Benefit Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#310F10] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Concise, impactful description */}
                  <p className="text-xs sm:text-[13px] text-[#46462A] font-light leading-relaxed max-w-[240px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom Transition Wave */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 text-[#EFE7D5]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,45 C1200,105 1040,15 760,70 C480,125 320,25 0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}
