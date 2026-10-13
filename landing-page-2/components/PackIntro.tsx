"use client";

import React from "react";

// Minimalist, high-end Korean beauty & botanical line-art icons (inspired by luxury editorial skincare & the reference image)
// 1. Botanical Ginkgo / Dew Leaf for Deep Hydration
function EditorialHydrationIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Delicate botanical leaf branch */}
      <path d="M20 34V12" strokeWidth="1.4" />
      <path d="M20 28C16 28 12 25 12 21C15 21 18 23 20 25" strokeWidth="1.3" />
      <path d="M20 23C24 23 28 20 28 16C25 16 22 18 20 20" strokeWidth="1.3" />
      <path d="M20 17C17 17 14 14 14 11C16.5 11 18.5 12.5 20 14" strokeWidth="1.3" />
      {/* Top micro dewdrop */}
      <circle cx="20" cy="8" r="2" strokeWidth="1.3" />
    </svg>
  );
}

// 2. High-End Sparkle & Radiance (Luxury 4-Point Star + Accent Twinkle matching the reference image)
function EditorialGlowIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Center 4-point organic radiant star */}
      <path
        d="M20 6C20.2 13.5 15 19 7 19.2C15 19.4 19.8 25 20 33C20.2 25 25 19.4 33 19.2C25 19 20.2 13.5 20 6Z"
        strokeWidth="1.6"
      />
      {/* Top right delicate secondary twinkle */}
      <path d="M30 8V13M27.5 10.5H32.5" strokeWidth="1.4" />
      {/* Subtle bottom left pearl dot */}
      <circle cx="10" cy="29" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 3. Hanbang Arch / Protective Pavilion Shield (matching the architectural/natural arches in the reference)
function EditorialBarrierIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Elegant Korean archway */}
      <path d="M12 34V18C12 13.5 15.5 10 20 10C24.5 10 28 13.5 28 18V34" strokeWidth="1.4" />
      {/* Inner slender arch */}
      <path d="M16 34V20C16 17.8 17.8 16 20 16C22.2 16 24 17.8 24 20V34" strokeWidth="1.2" opacity="0.75" />
      {/* Top botanical finial / protective blossom */}
      <path d="M20 6V10M17.5 7.5C18.5 6.5 21.5 6.5 22.5 7.5" strokeWidth="1.3" />
      {/* Base baseline */}
      <path d="M9 34H31" strokeWidth="1.4" />
    </svg>
  );
}

// 4. Korean Lotus / Collagen Rebirth Blossom
function EditorialFirmnessIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Central petal */}
      <path d="M20 8C16.5 14 16.5 22 20 28C23.5 22 23.5 14 20 8Z" strokeWidth="1.4" />
      {/* Left side blooming petal */}
      <path d="M17 18C10 20 8 25 11 28C14 28 17 25 18 22" strokeWidth="1.3" />
      {/* Right side blooming petal */}
      <path d="M23 18C30 20 32 25 29 28C26 28 23 25 22 22" strokeWidth="1.3" />
      {/* Base pedestal cup */}
      <path d="M14 31C17 33 23 33 26 31" strokeWidth="1.4" />
      <path d="M20 31V34" strokeWidth="1.4" />
    </svg>
  );
}

export default function PackIntro() {
  const results = [
    {
      icon: EditorialHydrationIcon,
      title: "Hydratation Profonde",
      desc: "Repulpe les tissus cutanés et infuse une souplesse durable tout au long de la journée.",
    },
    {
      icon: EditorialGlowIcon,
      title: "Glow & Éclat Naturel",
      desc: "Révèle un teint unifié, transparent et radieux sans fini gras ni brillance.",
    },
    {
      icon: EditorialBarrierIcon,
      title: "Barrière Renforcée",
      desc: "Apaise les rougeurs, calme les irritations et protège la peau des agressions extérieures.",
    },
    {
      icon: EditorialFirmnessIcon,
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
          
          {/* Subtle Category Eyebrow & Main Title with LOWERED DIVIDER LINE */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="font-mono text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#74070D] block mb-3">
              Résultats Visibles & Cliniques
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#310F10] leading-tight mb-6">
              Ce que ce rituel apporte à votre peau
            </h2>
            {/* Lowered line: mt-6 with delicate styling */}
            <div className="w-16 h-[2px] bg-[#74070D]/35 mx-auto rounded-full mt-6" />
          </div>

          {/* 4 Pillars in a Flowing Row with Refined Separators (exact style from reference image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-[#74070D]/15">
            {results.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-4 lg:px-7 group"
                >
                  {/* Clean, high-end circular badge with soft subtle ring */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#FAF7EE] border border-[#74070D]/20 shadow-[0_4px_16px_rgba(116,7,13,0.04)] flex items-center justify-center text-[#74070D] mb-6 group-hover:scale-105 group-hover:border-[#74070D]/40 transition-all duration-300">
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10" />
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
