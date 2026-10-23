"use client";

import Image from "next/image";
import { ArrowUpRight, Gift } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function SpotlightSection() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].spotlight;

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="spotlight" className="px-3 sm:px-6 md:px-8 py-8">
      {/* Light Curved Container in Baby Pink */}
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#FAE6E7]/50 p-6 sm:p-10 lg:p-14 overflow-hidden border border-[#F7D1D8] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column: Text + CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5C1D2E] text-white text-[11px] font-semibold uppercase tracking-wider mb-3 w-fit shadow-xs">
              <Gift className="w-3.5 h-3.5 text-[#F4BBC9]" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#5C1D2E] tracking-tight leading-tight">
              {t.titleLine1} <br />
              <span className="font-semibold text-[#5C1D2E]">{t.titleHighlight}</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#7A3347] leading-relaxed font-light">
              {t.desc}
            </p>

            {/* Primary Action Button */}
            <div className="mt-8">
              <button
                type="button"
                onClick={scrollToOrder}
                className="inline-flex items-center gap-3 bg-[#5C1D2E] hover:bg-[#431420] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#5C1D2E]/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
              >
                <span>{t.ctaButton}</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Column: Horizontal Oval / Capsule Image Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl h-80 sm:h-[420px] rounded-[9999px] overflow-hidden border-4 border-white shadow-2xl bg-[#FAE6E7] group">
              {/* Gift Box Photo */}
              <Image
                src="/images/gift-box.jpg"
                alt="Coffret Cadeau Soin Capillaire Offert"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Top-Center Badge */}
              <div className="absolute top-4 sm:top-5 inset-x-0 flex justify-center pointer-events-none z-10">
                <div className="bg-[#5C1D2E]/90 backdrop-blur-md border border-[#F4BBC9] text-white px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#F4BBC9]" />
                  <span>{t.floatingBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
