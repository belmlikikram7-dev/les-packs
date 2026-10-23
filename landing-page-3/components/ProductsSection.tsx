"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/products";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function ProductsSection() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].products;

  // Lock body scroll and pause Lenis smooth scroll while product modal is open
  useEffect(() => {
    if (modalProduct) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [modalProduct]);

  return (
    <section id="products" className="px-3 sm:px-6 md:px-8 py-8">
      {/* Light Curved Container with Baby Pink Accents */}
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#FAE6E7]/50 p-6 sm:p-10 lg:p-12 overflow-hidden border border-[#F7D1D8] shadow-sm">
        {/* Decorative subtle dashed trail line in Orchid Pink */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M 50 120 C 300 80, 500 220, 800 150 C 1100 80, 1200 350, 950 420 C 700 500, 300 420, 150 550 C 50 630, 400 700, 750 680"
            stroke="#F4BBC9"
            strokeWidth="2.5"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Section Header: Title + Pill Badge + Subtitle */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#F7D1D8]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#5C1D2E]">
                {t.titleMain}
              </h2>
              <span className="bg-white text-[#5C1D2E] font-semibold text-2xl sm:text-3xl lg:text-4xl px-5 py-1 rounded-full shadow-sm border border-[#F7D1D8]">
                {t.titleBadge}
              </span>
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#7A3347] leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Cards Gallery: Compact Arched Cards */}
        <div className="relative z-10 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PRODUCTS.map((prod) => {
              const itemTrans = t.items[prod.id];
              const step = itemTrans?.step || prod.step;
              const name = itemTrans?.name || prod.name;
              const subtitle = itemTrans?.subtitle || prod.subtitle;

              return (
                <div
                  key={prod.id}
                  onClick={() => setModalProduct(prod)}
                  className="group cursor-pointer relative bg-white rounded-[24px] p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F7D1D8] hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FAE6E7] text-[10px] sm:text-[11px] font-semibold text-[#5C1D2E] border border-[#F7D1D8]/80">
                        {step}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#5C1D2E] text-[10px] sm:text-[11px] font-bold text-white">
                        {prod.volume}
                      </span>
                    </div>

                    {/* Arched Frame */}
                    <div className="relative w-full max-w-[190px] sm:max-w-[200px] h-52 sm:h-56 mx-auto rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#FAF0F2] via-[#FDF8F9] to-white flex items-center justify-center p-3 border border-[#F7D1D8] shadow-inner overflow-hidden">
                      <Image
                        src={prod.image}
                        alt={name}
                        fill
                        className="object-contain p-3 group-hover:scale-108 transition-transform duration-500"
                      />
                    </div>

                    {/* Brand & Name */}
                    <div className="mt-3.5">
                      <span className="text-[10px] font-bold text-[#D45D79] tracking-wider uppercase block">
                        {prod.brand}
                      </span>
                      <h3 className="mt-0.5 text-sm sm:text-base font-bold text-[#5C1D2E] line-clamp-1 group-hover:text-[#D45D79] transition-colors">
                        {name}
                      </h3>
                    </div>

                    {/* Short 1-2 line description */}
                    <p className="mt-1 text-xs text-[#7A3347] line-clamp-2 leading-relaxed">
                      {subtitle}
                    </p>
                  </div>

                  {/* Voir détails button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProduct(prod);
                    }}
                    className="mt-4 w-full py-2 px-4 rounded-full bg-[#FAE6E7] hover:bg-[#5C1D2E] text-[#5C1D2E] hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn shadow-2xs border border-[#F7D1D8] cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Details Modal (Pop-up) */}
      {modalProduct && (() => {
        const modalTrans = t.items[modalProduct.id];
        const modalStep = modalTrans?.step || modalProduct.step;
        const modalBadge = modalTrans?.badge || modalProduct.badge;
        const modalName = modalTrans?.name || modalProduct.name;
        const modalDesc = modalTrans?.description || modalProduct.descriptionFr;
        const modalActives = modalTrans?.keyActives || modalProduct.keyActives;

        return (
          <div
            data-lenis-prevent="true"
            onClick={() => setModalProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200 overscroll-contain"
          >
            <div
              data-lenis-prevent="true"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-[#F7D1D8] max-h-[85vh] overflow-y-auto overscroll-contain animate-in zoom-in-95 duration-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalProduct(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAE6E7] hover:bg-[#5C1D2E] text-[#5C1D2E] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label={t.modal.close}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col items-center text-center">
                {/* Product Arched Image */}
                <div className="relative w-48 h-56 rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#FAF0F2] via-[#FDF8F9] to-white p-4 border border-[#F7D1D8] shadow-inner mb-4 overflow-hidden">
                  <Image
                    src={modalProduct.image}
                    alt={modalName}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAE6E7] text-xs font-semibold text-[#5C1D2E] border border-[#F7D1D8]">
                    {modalStep}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#5C1D2E] text-xs font-bold text-white">
                    {modalProduct.volume}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F7EEED] text-xs font-medium text-[#7A3347] border border-[#F7D1D8]">
                    {modalBadge}
                  </span>
                </div>

                {/* Brand & Title */}
                <span className="text-xs font-bold text-[#D45D79] tracking-wider uppercase">
                  {modalProduct.brand}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#5C1D2E] mt-1">
                  {modalName}
                </h3>

                {/* Full Description */}
                <div className="mt-4 p-4 rounded-2xl bg-[#F7EEED] border border-[#F7D1D8] text-start w-full">
                  <h4 className="text-xs font-bold text-[#5C1D2E] uppercase tracking-wider mb-1.5">
                    {t.modal.benefitsLabel}
                  </h4>
                  <p className="text-sm text-[#7A3347] leading-relaxed">
                    {modalDesc}
                  </p>
                </div>

                {/* Actifs Clés */}
                <div className="mt-4 w-full text-start">
                  <h4 className="text-xs font-bold text-[#5C1D2E] uppercase tracking-wider mb-2">
                    {t.modal.keyActivesLabel}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {modalActives.map((active, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAE6E7] text-xs font-medium text-[#5C1D2E] border border-[#F7D1D8]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D45D79]" />
                        {active}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button inside modal */}
                <button
                  type="button"
                  onClick={() => {
                    setModalProduct(null);
                    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 w-full py-3.5 rounded-full bg-[#5C1D2E] hover:bg-[#431420] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.modal.orderCta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
