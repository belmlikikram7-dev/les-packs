"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { SEOUL_PRODUCTS, type ProductItem } from "@/data/products";
import { Sparkles, Info, X, Check, Droplets } from "lucide-react";

export default function ProductGrid() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].productsSection;
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produits" className="py-20 bg-[#F4EEDC] text-[#310F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#74070D]/10 border border-[#74070D]/20 text-[#74070D] text-xs uppercase font-bold tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEOUL_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-[#FAF7EE] border border-[#F3E3B2] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#74070D]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Header & Tag */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#46462A] text-[#F3E3B2] text-[10px] font-bold uppercase tracking-wider">
                    {product.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#74070D]">
                    {product.volume}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#46462A] block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#310F10] leading-snug group-hover:text-[#74070D] transition-colors">
                    {isArabic ? product.arabicName : product.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#46462A] leading-relaxed mb-5 line-clamp-3">
                  {product.description}
                </p>

                {/* Key Actives Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.keyActives.map((active, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F3E3B2]/60 text-[#310F10] text-[11px] font-medium"
                    >
                      <Droplets className="w-2.5 h-2.5 text-[#74070D]" />
                      {active}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 py-4 bg-[#F4EEDC] border-t border-[#F3E3B2] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#74070D] hover:text-[#310F10] transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4" />
                  <span>{t.viewDetails}</span>
                </button>

                <button
                  onClick={() => scrollTo("#commande")}
                  className="px-3.5 py-1.5 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#FAF7EE] rounded-3xl border-2 border-[#F3E3B2] shadow-2xl p-6 sm:p-8 text-[#310F10] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F3E3B2] text-[#310F10] hover:bg-[#74070D] hover:text-[#F3E3B2] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Content */}
            <span className="px-3 py-1 rounded-full bg-[#46462A] text-[#F3E3B2] text-[10px] font-bold uppercase tracking-wider inline-block mb-3">
              {selectedProduct.tag} • {selectedProduct.volume}
            </span>

            <h3 className="font-serif text-2xl font-bold text-[#310F10] mb-2 leading-tight">
              {isArabic ? selectedProduct.arabicName : selectedProduct.name}
            </h3>

            <p className="text-xs text-[#74070D] font-bold uppercase tracking-wider mb-4">
              {selectedProduct.category}
            </p>

            <p className="text-sm text-[#46462A] leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#310F10] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#74070D]" />
                {t.benefitsTitle}
              </h4>
              <ul className="space-y-2">
                {selectedProduct.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#46462A]">
                    <Check className="w-4 h-4 text-[#74070D] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="p-4 rounded-2xl bg-[#F4EEDC] border border-[#F3E3B2] mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#310F10] mb-1">
                {t.usageTitle}
              </h4>
              <p className="text-xs text-[#46462A] leading-relaxed">
                {selectedProduct.usage}
              </p>
            </div>

            {/* Action inside modal */}
            <button
              onClick={() => {
                setSelectedProduct(null);
                scrollTo("#commande");
              }}
              className="w-full py-3.5 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-xs uppercase font-bold tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Commander le Pack Complet
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
