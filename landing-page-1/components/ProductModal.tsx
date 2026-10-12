"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Clock, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOrderClick: () => void;
}

export default function ProductModal({ product, onClose, onOrderClick }: ProductModalProps) {
  const [activeView, setActiveView] = useState<"product" | "model">("product");
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].products;

  const productTranslation = product
    ? t.items.find((item) => item.id === product.id)
    : null;

  useEffect(() => {
    setActiveView("product");
  }, [product?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const priceDisplay = isArabic ? `${product.price} درهم` : product.priceFormatted;
  const timingDisplay = productTranslation?.timing || product.routineTiming;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2A0E1A]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Petite Fenêtre Modale (Compact & Simple) */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E2B4C1]/70 shadow-2xl shadow-[#3A1826]/20 overflow-hidden z-10 animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.modal.close}
          className={`absolute top-3.5 ${
            isArabic ? "left-3.5" : "right-3.5"
          } z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-[#F7DAE7] text-[#3A1826] hover:text-[#A55166] flex items-center justify-center border border-[#E2B4C1] shadow-xs transition-all hover:scale-105 cursor-pointer`}
        >
          <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          {/* Left Column: Visual & Price */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#FAF5F7] via-[#FFF9FB] to-[#F7DAE7]/30 p-5 sm:p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#F0DFE6]">
            {/* Step & Volume Pill */}
            <div className="w-full flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider font-bold text-[#A55166] bg-white px-2.5 py-1 rounded-full border border-[#E2B4C1] shadow-2xs">
                {t.stepBadge} {product.orderNumber}
              </span>
              <span className="text-[11px] text-[#7A6C71] font-semibold bg-white/80 px-2 py-0.5 rounded-md border border-[#E2B4C1]/40">
                {product.volume}
              </span>
            </div>

            {/* Photo View Selector (if modelImage available) */}
            {product.modelImage && (
              <div className="flex items-center gap-1 my-2 bg-white/90 p-0.5 rounded-full border border-[#E2B4C1]/60 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveView("product")}
                  className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer ${
                    activeView === "product"
                      ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white shadow-xs"
                      : "text-[#7A6C71] hover:text-[#A55166]"
                  }`}
                >
                  {t.modal.bottle}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("model")}
                  className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer ${
                    activeView === "model"
                      ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white shadow-xs"
                      : "text-[#7A6C71] hover:text-[#A55166]"
                  }`}
                >
                  {t.modal.model}
                </button>
              </div>
            )}

            {/* Product Image / Model Photo Display */}
            <div className="relative w-44 h-48 sm:w-48 sm:h-56 my-2 flex items-center justify-center overflow-hidden rounded-2xl">
              {activeView === "product" || !product.modelImage ? (
                <>
                  <div className="absolute inset-0 bg-[#A55166]/10 rounded-full blur-xl scale-75" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 180px, 220px"
                    className="object-contain drop-shadow-[0_10px_16px_rgba(165,81,102,0.2)]"
                    priority
                  />
                </>
              ) : (
                <Image
                  src={product.modelImage}
                  alt={`${product.name} appliqué par le modèle`}
                  fill
                  sizes="(max-width: 768px) 180px, 220px"
                  className="object-contain object-center rounded-2xl animate-in fade-in-50 duration-300"
                  priority
                />
              )}
            </div>

            {/* Price Box: Clearly Visible */}
            <div className="w-full bg-white rounded-2xl p-3 border border-[#E2B4C1]/60 text-center shadow-xs">
              <span className="text-[10px] uppercase tracking-wider font-medium text-[#8F7E84] block">
                {t.modal.unitPrice}
              </span>
              <span className="font-sans text-2xl sm:text-3xl font-bold text-[#A55166] tracking-tight block whitespace-nowrap">
                <bdi>{priceDisplay}</bdi>
              </span>
              <div className="mt-1 pt-1.5 border-t border-[#F7DAE7] flex items-center justify-center gap-1.5 text-[11px] text-[#6B5E63]">
                <Clock className="w-3 h-3 text-[#A55166]" />
                <span>{timingDisplay}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Essential Details */}
          <div
            className={`md:col-span-7 p-5 sm:p-6 flex flex-col justify-between ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div>
              {/* Brand & Name */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#A55166]">
                  {product.brand}
                </span>
                <h3 className="mt-0.5 font-serif text-xl sm:text-2xl text-[#3A1826] font-normal leading-snug">
                  {isArabic && productTranslation?.arabicName ? (
                    productTranslation.arabicName
                  ) : (
                    <span dir="ltr">{product.name}</span>
                  )}
                </h3>
                {isArabic && productTranslation?.arabicName && (
                  <span dir="ltr" className="block text-xs text-[#857479] font-sans font-medium mt-0.5">
                    {product.name}
                  </span>
                )}
                <p className="text-xs text-[#827479] font-medium mt-0.5">
                  {productTranslation?.type || product.type}
                </p>
              </div>

              {/* Short Benefit / Presentation */}
              <p className="mt-3 text-xs text-[#5C5055] leading-relaxed bg-[#FAF5F7] p-3 rounded-xl border border-[#F0DFE6]">
                {productTranslation?.presentation || product.presentation}
              </p>

              {/* Actifs Clés */}
              <div className="mt-3.5">
                <span className="text-[11px] font-semibold text-[#3A1826] uppercase tracking-wider block mb-1.5">
                  {t.modal.essentialActives}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(productTranslation?.keyActives || product.keyActives).slice(0, 3).map((active, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F7DAE7]/50 border border-[#E2B4C1] text-[#A55166]"
                    >
                      {active}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Principales */}
              <div className="mt-3.5">
                <span className="text-[11px] font-semibold text-[#3A1826] uppercase tracking-wider block mb-1.5">
                  {t.modal.keyActions}
                </span>
                <ul className="space-y-1.5">
                  {(productTranslation?.benefits || product.benefits).slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#55494E]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#F7DAE7] border border-[#E2B4C1] flex items-center justify-center text-[#A55166] shrink-0 mt-0.5">
                        <Check className="w-2 h-2" />
                      </div>
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions: Commander le Pack complet CTA */}
            <div className="mt-5 pt-3 border-t border-[#F0DFE6] space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onOrderClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#A55166] to-[#8E3F53] hover:from-[#8E3F53] hover:to-[#3A1826] text-white text-xs uppercase font-medium tracking-wider transition-all duration-300 shadow-md shadow-[#A55166]/25 hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>{t.modal.orderPack}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isArabic ? "rotate-180" : ""}`} />
              </button>

              <button
                onClick={onClose}
                className="w-full py-1.5 text-center text-[11px] text-[#8C7D82] hover:text-[#3A1826] transition-colors cursor-pointer"
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
