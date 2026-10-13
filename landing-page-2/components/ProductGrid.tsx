"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ProductGrid() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].productsSection;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produits" className="py-20 lg:py-28 bg-[#FAF7EE] text-[#310F10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#74070D]/10 border border-[#74070D]/20 text-[#74070D] text-xs uppercase font-bold tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rituel K-Beauty Culte</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-4">
            L'Excellence Coréenne Réunie en un Seul Pack
          </h2>
          <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed max-w-2xl mx-auto">
            Une formule complète au Rétinal Liposomique, Ginseng Noir et Mucine d'Escargot pour une peau lisse, ferme et lumineuse.
          </p>
        </div>

        {/* Hero Pack & Model Showcase with Soft Warm Red Circle Backdrop */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]">
          
          {/* 1. Large Soft Red/Rose Sun Halo Circle (identical to reference media_1791907244120_30023638.png) */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] lg:w-[620px] lg:h-[620px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(116,7,13,0.30) 0%, rgba(142,63,83,0.20) 45%, rgba(229,140,158,0.12) 70%, transparent 85%)",
              filter: "blur(24px)",
            }}
          />

          {/* 2. Inner Refined Warm Rosy Gradient Disk behind the model */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] rounded-full pointer-events-none shadow-[0_20px_60px_-15px_rgba(116,7,13,0.22)]"
            style={{
              background: "linear-gradient(135deg, rgba(243,184,196,0.60) 0%, rgba(186,88,106,0.40) 50%, rgba(116,7,13,0.28) 100%)",
            }}
          />

          {/* 3. Subtle ambient light reflection ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] sm:w-[470px] sm:h-[470px] lg:w-[580px] lg:h-[580px] rounded-full border border-[#74070D]/15 pointer-events-none" />

          {/* 4. Complete Pack & Model Photo - Clean full composition with natural blend */}
          <div className="relative z-10 w-full max-w-[720px] lg:max-w-[820px] flex items-center justify-center">
            <Image
              src="/images/pack-model-hero.png"
              alt="Pack Seoul 1988 au Rétinal & Ginseng"
              width={1024}
              height={687}
              priority
              className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_35px_rgba(49,15,16,0.18)] select-none pointer-events-none"
            />
          </div>

          {/* 5. Minimalist floating badge accent */}
          <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 lg:right-10 z-20">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/85 backdrop-blur-md border border-[#F3E3B2] shadow-xl flex flex-col items-center justify-center text-center p-2">
              <span className="font-serif text-[11px] sm:text-xs font-bold text-[#74070D] leading-tight">
                Pack 6 Soins
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans text-[#46462A] mt-0.5">
                Formule Seoul 1988
              </span>
              <div className="w-4 h-0.5 bg-[#74070D]/40 mt-1 rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
