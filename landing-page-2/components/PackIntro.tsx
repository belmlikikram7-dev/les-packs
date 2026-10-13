"use client";

import React from "react";

// Custom SVG Icons matching the exact aesthetic of the user's uploaded reference (refined outline, star sparkle, delicate lines)
function HydrationIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      <path d="M12 9v5" strokeWidth="1.5" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GlowIcon({ className = "w-7 h-7" }: { className?: string }) {
  // Exact replica of user's media_1791912018300_45a071d6.png
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* 4-point smooth sparkle */}
      <path d="M15 4 C15 11 11 15 4 15 C11 15 15 19 15 26 C15 19 19 15 26 15 C19 15 15 11 15 4 Z" />
      {/* Small top-right plus */}
      <path d="M25 6 v4 M23 8 h4" strokeWidth="2" />
      {/* Small bottom-left dot */}
      <circle cx="7" cy="24" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BarrierIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" strokeWidth="2" />
    </svg>
  );
}

function FirmnessIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeWidth="1.4" opacity="0.6" />
      <circle cx="12" cy="12" r="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function PackIntro() {
  const results = [
    {
      icon: HydrationIcon,
      title: "Hydratation Profonde",
      desc: "Repulpe les tissus cutanés et infuse une souplesse durable tout au long de la journée.",
    },
    {
      icon: GlowIcon,
      title: "Glow & Éclat Naturel",
      desc: "Révèle un teint unifié, transparent et radieux sans fini gras ni brillance.",
    },
    {
      icon: BarrierIcon,
      title: "Barrière Renforcée",
      desc: "Apaise les rougeurs, calme les irritations et protège la peau des agressions extérieures.",
    },
    {
      icon: FirmnessIcon,
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
                      - Round circular disk in #FAF7EE
                      - Ultra delicate border in #74070D/25
                      - Elegant icon centered in deep wine red #74070D */}
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
