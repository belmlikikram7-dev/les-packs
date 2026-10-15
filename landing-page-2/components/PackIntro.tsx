"use client";

import React from "react";
import { Droplets, SunMedium, ShieldCheck, HeartPulse } from "lucide-react";

export default function PackIntro() {
  const results = [
    {
      icon: Droplets,
      title: "Hydratation Profonde",
      desc: "Repulpe les tissus cutanés et infuse une souplesse durable tout au long de la journée.",
    },
    {
      icon: SunMedium,
      title: "Glow & Éclat Naturel",
      desc: "Révèle un teint unifié, transparent et radieux sans fini gras ni brillance.",
    },
    {
      icon: ShieldCheck,
      title: "Barrière Renforcée",
      desc: "Apaise les rougeurs, calme les irritations et protège la peau des agressions extérieures.",
    },
    {
      icon: HeartPulse,
      title: "Fermeté & Lissage",
      desc: "Stimule la synthèse de collagène et estompe visiblement l'apparence des ridules.",
    },
  ];

  return (
    <section id="pack" className="relative py-12 lg:py-16 bg-white text-[#310F10] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Eyebrow & Main Title with Lowered Divider Line */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="font-mono text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#74070D] block mb-3">
            Résultats Visibles & Cliniques
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#310F10] leading-tight mb-4">
            Ce que ce rituel apporte à votre peau
          </h2>
          {/* Lowered line: mt-4 with delicate styling */}
          <div className="w-16 h-[2px] bg-[#74070D]/35 mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Pillars in a Flowing Row with Refined Separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#74070D]/15">
          {results.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center px-4 lg:px-7 group"
              >
                {/* Clean, high-end circular badge with soft subtle ring */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-[#FAF7EE] border border-[#74070D]/20 shadow-[0_4px_16px_rgba(116,7,13,0.04)] flex items-center justify-center text-[#74070D] mb-5 group-hover:scale-105 group-hover:border-[#74070D]/40 transition-all duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
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
    </section>
  );
}
