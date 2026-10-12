"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showModelOnMobile, setShowModelOnMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].products;
  const productTranslation = t.items.find((item) => item.id === product.id);

  const priceDisplay = isArabic ? `${product.price} درهم` : product.priceFormatted;

  // Detect mobile viewport or touch screen
  useEffect(() => {
    const checkMobile = () => {
      const isTouchOrSmall =
        window.innerWidth < 768 ||
        (typeof window.matchMedia === "function" && window.matchMedia("(hover: none)").matches);
      setIsMobile(isTouchOrSmall);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile scroll animation: alternating between bottle and model photo
  useEffect(() => {
    if (!isMobile || !product.modelImage) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let isCurrent = true;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          const stagger = ((product.routineStep - 1) % 2) * 350;

          clearTimeout(timeoutId);
          clearInterval(intervalId);

          timeoutId = setTimeout(() => {
            if (!isCurrent) return;
            setShowModelOnMobile(true);

            let isModel = true;
            intervalId = setInterval(() => {
              if (!isCurrent) return;
              isModel = !isModel;
              setShowModelOnMobile(isModel);
            }, 2200);
          }, stagger);
        } else {
          clearTimeout(timeoutId);
          clearInterval(intervalId);
          if (isCurrent) {
            setShowModelOnMobile(false);
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    const currentEl = cardRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      isCurrent = false;
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [isMobile, product.modelImage, product.routineStep]);

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`${product.name} - ${t.viewDetails}`}
      onClick={() => onOpenDetails(product)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetails(product);
        }
      }}
      className={`group bg-white rounded-2xl p-3.5 sm:p-4 border border-[#E2B4C1]/40 hover:border-[#A55166] shadow-xs hover:shadow-2xl hover:shadow-[#A55166]/20 transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer ${
        isArabic ? "text-right" : "text-left"
      } focus:outline-none focus:ring-2 focus:ring-[#A55166]/40 min-h-[430px] sm:min-h-[450px]`}
    >
      {/* 1. DEFAULT STATE (Product Bottle, Brand, Price) */}
      <div
        className={`flex flex-col justify-between h-full w-full transition-opacity duration-700 ease-in-out ${
          isMobile
            ? showModelOnMobile
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
            : "group-hover:opacity-0"
        }`}
      >
        <div>
          {/* Top bar with Step & Volume */}
          <div className="flex items-center justify-between mb-2 px-0.5">
            <span className="text-[10px] font-mono tracking-wider font-semibold text-[#A55166] bg-[#F7DAE7]/70 px-2 py-0.5 rounded-full border border-[#E2B4C1]">
              {t.stepBadge} {product.orderNumber}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium text-[#7C6C72]">
              {product.volume}
            </span>
          </div>

          {/* Product Bottle Image */}
          <div className="relative h-48 sm:h-52 w-full rounded-xl bg-[#FCF8F9] overflow-hidden flex items-center justify-center p-2 mb-2.5 border border-[#F5E6EC]/60">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
              className="object-contain p-2"
              priority={product.routineStep <= 2}
            />
          </div>

          {/* Product Info: Brand & Name */}
          <div className="px-0.5">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A55166] block">
              {product.brand}
            </span>

            <h3 className="font-serif text-sm sm:text-base text-[#3A1826] font-normal leading-snug mt-0.5 line-clamp-1">
              {isArabic && productTranslation?.arabicName ? (
                productTranslation.arabicName
              ) : (
                <span dir="ltr">{product.name}</span>
              )}
            </h3>

            {productTranslation && (
              <p className="text-[11px] text-[#7A6C71] line-clamp-1 mt-0.5">
                {productTranslation.type}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar: Price & CTA Button */}
        <div className="mt-3 pt-2.5 border-t border-[#F7DAE7]/70 px-0.5">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-[11px] text-[#8C7D82] font-light">
              {t.unitPrice}
            </span>
            <span className="font-sans text-lg sm:text-xl font-bold text-[#A55166] tracking-tight whitespace-nowrap">
              <bdi>{priceDisplay}</bdi>
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="w-full py-2 px-3 rounded-full bg-[#F7DAE7]/50 text-[#A55166] border border-[#E2B4C1] text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-2xs hover:bg-[#A55166] hover:text-white transition-colors cursor-pointer"
          >
            <span>{t.viewDetails}</span>
            <ArrowRight
              className={`w-3.5 h-3.5 ${isArabic ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* 2. MODEL PHOTO STATE (Full Bleed Edge-to-Edge) */}
      {product.modelImage && (
        <div
          className={`absolute inset-0 w-full h-full z-20 transition-opacity duration-700 ease-in-out overflow-hidden rounded-2xl ${
            isMobile
              ? showModelOnMobile
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
              : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
          }`}
        >
          {/* Edge-to-Edge High-Resolution Model Photo */}
          <Image
            src={product.modelImage}
            alt={`${product.name} appliqué par le modèle`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
            className={`object-cover object-center transition-transform duration-1000 ease-out ${
              isMobile
                ? showModelOnMobile
                  ? "scale-100"
                  : "scale-105"
                : "scale-105 group-hover:scale-100"
            }`}
          />

          {/* Top Discreet Step Badge */}
          <div className={`absolute top-3.5 ${isArabic ? "right-3.5" : "left-3.5"} z-10`}>
            <span className="text-[10px] font-mono tracking-wider font-bold text-white bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30 shadow-md">
              {t.stepBadge} {product.orderNumber}
            </span>
          </div>

          {/* Elegant Dark Vignette Gradient at Bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom Floating "Voir détails" Button */}
          <div className="absolute inset-x-0 bottom-4 px-4 flex justify-center z-10">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(product);
              }}
              className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#A55166] to-[#8E3F53] hover:from-[#8E3F53] hover:to-[#3A1826] text-white text-xs font-semibold tracking-wider uppercase text-center shadow-xl shadow-black/30 flex items-center justify-center gap-2 border border-white/25 transform translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-white" />
              <span>{t.viewDetails}</span>
              <ArrowRight
                className={`w-3.5 h-3.5 text-white ${isArabic ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
