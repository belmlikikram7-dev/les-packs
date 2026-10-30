"use client";

import Image from "next/image";
import { ArrowUpRight, Gift, Heart, Leaf } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { GIFT_INFO } from "@/data/products";

export default function SpotlightSection() {
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].gift;

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  const ICONS = [Gift, Heart, Leaf];

  return (
    <section id="gift" className="px-3 sm:px-6 md:px-8 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Sky Blue Container with Delicate Border */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#E0F2FE]/70 via-[#F0F7FD] to-white p-6 sm:p-10 lg:p-14 overflow-hidden border border-[#BAE0F8] shadow-lg shadow-sky-900/5">
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#38BDF8]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#BAE0F8]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" dir={dir}>
            {/* Column: Gift Image Visual - Circular Presentation (Daeiriya) */}
            <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1 relative py-2 sm:py-4">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[430px] aspect-square group">
                {/* Subtle Luxury Outer Glow */}
                <div className="absolute -inset-2.5 sm:-inset-3 rounded-full bg-gradient-to-tr from-[#38BDF8]/25 via-[#BAE0F8]/35 to-white/50 blur-lg pointer-events-none group-hover:scale-105 transition-transform duration-700" />

                {/* Circular Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl shadow-sky-950/20">
                  <Image
                    src={GIFT_INFO.image}
                    alt={GIFT_INFO.name}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 430px"
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Column: Text + Benefits + CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#0F3554] text-xs font-semibold uppercase tracking-wider mb-3 w-fit shadow-xs border border-[#BAE0F8]">
                <Gift className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury tracking-tight leading-tight">
                <span className="font-serif-luxury text-[#0284C7]">{t.titleLine1}</span> <br />
                <span className="font-bold text-[#0F3554]">{t.titleHighlight}</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-[#4B6B88] leading-relaxed">
                {t.desc}
              </p>

              {/* Bullet Points with Icons (Matching Reference Design) */}
              <div className="mt-6 space-y-3">
                {t.points.map((pt, i) => {
                  const Icon = ICONS[i] || Gift;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#BAE0F8] flex items-center justify-center text-[#0284C7] shrink-0 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#0F3554]">
                        {pt}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Primary Action Button */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={scrollToOrder}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0F3554] hover:bg-[#0B273F] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-xl shadow-sky-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
                >
                  <span>{t.ctaButton}</span>
                  <div className="w-5 h-5 rounded-full bg-[#38BDF8] text-[#0F3554] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
