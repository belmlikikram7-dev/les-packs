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
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#74070D]/10 border border-[#74070D]/20 text-[#74070D] text-xs uppercase font-bold tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Hero Model Showcase with Soft Warm Red Circle Backdrop */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]">
          
          {/* 1. Large Soft Red/Rose Sun Halo Circle (identical to reference media_1791907244120_30023638.png) */}
          <div 
            className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(116,7,13,0.32) 0%, rgba(142,63,83,0.22) 45%, rgba(229,140,158,0.12) 70%, transparent 85%)",
              filter: "blur(20px)",
            }}
          />

          {/* 2. Inner Refined Warm Rosy Gradient Disk */}
          <div 
            className="absolute w-[290px] h-[290px] sm:w-[390px] sm:h-[390px] lg:w-[460px] lg:h-[460px] rounded-full pointer-events-none shadow-[0_20px_60px_-15px_rgba(116,7,13,0.22)]"
            style={{
              background: "linear-gradient(135deg, rgba(243,184,196,0.55) 0%, rgba(186,88,106,0.38) 50%, rgba(116,7,13,0.25) 100%)",
            }}
          />

          {/* 3. Subtle ambient light reflection ring */}
          <div className="absolute w-[310px] h-[310px] sm:w-[420px] sm:h-[420px] lg:w-[490px] lg:h-[490px] rounded-full border border-[#74070D]/15 pointer-events-none" />

          {/* 4. Model Image - Transparent cut-out placed cleanly in front */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[540px] flex items-center justify-center">
            <Image
              src="/images/model-glow.png"
              alt="Résultat Peau Parfaite Seoul 1988"
              width={1024}
              height={576}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_16px_32px_rgba(49,15,16,0.2)] select-none pointer-events-none"
            />
          </div>

          {/* 5. Minimalist floating badge accent (like in the reference design) */}
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-12 lg:right-16 z-20">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/80 backdrop-blur-md border border-[#F3E3B2] shadow-lg flex flex-col items-center justify-center text-center p-2">
              <span className="font-serif text-[11px] sm:text-xs font-bold text-[#74070D] leading-tight">
                Glass Skin
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans text-[#46462A] mt-0.5">
                K-Beauty Culte
              </span>
              <div className="w-4 h-0.5 bg-[#74070D]/40 mt-1 rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
