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
    <section id="produits" className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-[#FAF7EE] text-[#310F10] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mb-8 lg:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#74070D]/10 border border-[#74070D]/20 text-[#74070D] text-xs uppercase font-bold tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Rituel K-Beauty Culte</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-3">
          L'Excellence Coréenne Réunie en un Seul Pack
        </h2>
        <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed max-w-2xl mx-auto">
          Une formule complète au Rétinal Liposomique, Ginseng Noir et Mucine d'Escargot pour une peau lisse, ferme et lumineuse.
        </p>
      </div>

      {/* Full-Width Edge-to-Edge Panoramic Image (من اليمين لليسار) */}
      <div className="w-full relative overflow-hidden shadow-xs">
        <div className="w-full max-w-[1440px] mx-auto px-0 sm:px-4 lg:px-6">
          <div className="relative w-full aspect-[1024/512] sm:rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(49,15,16,0.06)]">
            <Image
              src="/images/pack-excellence-full.png"
              alt="L'Excellence Coréenne Réunie en un Seul Pack - Seoul 1988"
              fill
              priority
              sizes="100vw"
              className="object-cover sm:object-contain object-bottom w-full h-full select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
