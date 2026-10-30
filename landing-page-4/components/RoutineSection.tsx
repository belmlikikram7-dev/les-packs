"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  X,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function RoutineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].routine;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartX = useRef<number | null>(null);

  const totalProducts = PRODUCTS.length;

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!modalProduct) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalProducts);
      }, 2000);
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalProducts);
    resetTimer();
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
    resetTimer();
  };

  // Drag / swipe gestures with mouse and touch
  const handlePointerDown = (clientX: number) => {
    dragStartX.current = clientX;
  };

  const handlePointerUp = (clientX: number) => {
    if (dragStartX.current === null) return;
    const diff = clientX - dragStartX.current;
    if (diff > 45) {
      // Swiped / dragged right
      if (isArabic) nextSlide();
      else prevSlide();
    } else if (diff < -45) {
      // Swiped / dragged left
      if (isArabic) prevSlide();
      else nextSlide();
    }
    dragStartX.current = null;
  };

  // Smooth automatic carousel sliding every 2 seconds (2s)
  useEffect(() => {
    if (modalProduct) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalProducts);
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [modalProduct, totalProducts]);

  // Lock body scroll when modal is open
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

  const scrollToOrder = () => {
    setModalProduct(null);
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  // 3 Permanent Visual Slots:
  // Slot 0: LEFT (previous product, white card, clickable)
  // Slot 1: CENTER (ACTIVE product, dark blue card, permanently centered!)
  // Slot 2: RIGHT (next product, white card, clickable)
  const leftIdx = (activeIndex - 1 + totalProducts) % totalProducts;
  const centerIdx = activeIndex;
  const rightIdx = (activeIndex + 1) % totalProducts;

  const visibleSlots = [
    { idx: leftIdx, slot: "left" as const, isActive: false },
    { idx: centerIdx, slot: "center" as const, isActive: true },
    { idx: rightIdx, slot: "right" as const, isActive: false },
  ];

  return (
    <section
      id="routine"
      className="relative px-3 sm:px-6 md:px-8 py-12 sm:py-20 overflow-hidden"
    >
      {/* Background soft sky blue ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#BAE0F8]/30 via-[#E0F2FE]/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#0F3554] text-xs font-semibold uppercase tracking-wider border border-[#BAE0F8] shadow-xs mb-3">
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury tracking-tight text-[#0F3554]">
            {t.titlePrefix}{" "}
            <span className="font-bold text-[#0284C7]">{t.titleHighlight}</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#4B6B88] max-w-lg mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Starbucks-Style 3D Card Carousel with Product Popping Out on Top */}
        <div
          className="relative py-14 sm:py-20 select-none cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onMouseUp={(e) => handlePointerUp(e.clientX)}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
          onTouchEnd={(e) => handlePointerUp(e.changedTouches[0].clientX)}
        >
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous Product"
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-[#0F3554] hover:text-[#0284C7] border border-[#BAE0F8] shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next Product"
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-[#0F3554] hover:text-[#0284C7] border border-[#BAE0F8] shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Carousel Viewport / Stage - 3 Permanent Anchored Slots (Left, Center, Right) */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[500px] sm:min-h-[540px]" dir="ltr">
            {visibleSlots.map(({ idx, slot, isActive }) => {
              const prod = PRODUCTS[idx];
              const stepData = t.steps[idx] || t.steps[0];

              return (
                <div
                  key={`${slot}-${prod.id}`}
                  onClick={() => {
                    if (!isActive) setActiveIndex(idx);
                  }}
                  className={`transition-all duration-500 ease-out flex flex-col items-center ${
                    isActive
                      ? "z-20 scale-100 sm:scale-105 w-[290px] sm:w-[330px] md:w-[360px] cursor-default"
                      : "z-10 scale-85 sm:scale-90 opacity-60 hover:opacity-100 hover:scale-95 w-[240px] sm:w-[270px] hidden sm:flex cursor-pointer"
                  }`}
                >
                  {/* Card Container */}
                  <div
                    className={`relative w-full rounded-[40px] pt-40 sm:pt-44 pb-6 px-5 sm:px-6 flex flex-col items-center text-center transition-all duration-500 overflow-visible ${
                      isActive
                        ? "bg-gradient-to-b from-[#0F3554] via-[#0D2E49] to-[#0A2338] text-white border-2 border-[#38BDF8]/40 shadow-2xl shadow-sky-950/40"
                        : "bg-white/95 text-[#0F3554] border border-[#BAE0F8] shadow-lg"
                    }`}
                    dir={dir}
                  >
                    {/* PRODUCT IMAGE STAGE - Clean AI cutout with natural soft drop shadow */}
                    <div className="absolute -top-16 sm:-top-20 inset-x-0 flex flex-col items-center pointer-events-none z-20">
                      <div
                        className={`relative w-40 h-52 sm:w-48 sm:h-60 transition-transform duration-500 ${
                          isActive
                            ? "scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
                            : "scale-90 drop-shadow-[0_6px_14px_rgba(0,0,0,0.12)]"
                        }`}
                      >
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          priority={isActive}
                          sizes="280px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Step & Volume Badges */}
                    <div className="w-full flex items-center justify-between mb-2.5">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full ${
                          isActive
                            ? "bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40"
                            : "bg-[#E0F2FE] text-[#0284C7]"
                        }`}
                      >
                        {stepData.stepLabel}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/10 text-slate-200 border border-white/20"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {prod.volume}
                      </span>
                    </div>

                    {/* Brand Name */}
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                        isActive ? "text-[#38BDF8]" : "text-[#5A7B9A]"
                      }`}
                    >
                      {prod.brand}
                    </span>

                    {/* Product Name */}
                    <h3
                      className={`text-base sm:text-lg font-bold font-serif-luxury leading-snug line-clamp-2 min-h-[44px] flex items-center justify-center ${
                        isActive ? "text-white" : "text-[#0F3554]"
                      }`}
                    >
                      {stepData.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      className={`mt-1.5 text-xs line-clamp-2 leading-relaxed min-h-[34px] ${
                        isActive ? "text-slate-300" : "text-[#5C7C99]"
                      }`}
                    >
                      {stepData.desc}
                    </p>

                    {/* Key Actives Pills on Active Card */}
                    {isActive && (
                      <div className="mt-3.5 pt-3 border-t border-white/15 w-full space-y-1.5 text-left text-[11px] text-slate-200">
                        {prod.keyActives.slice(0, 2).map((act, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                            <span className="truncate">{act}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* "Détails" Pill Button at Bottom (Opens Modal) */}
                    <div className="mt-5 w-full pt-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalProduct(prod);
                        }}
                        className={`w-full py-2.5 sm:py-3 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isActive
                            ? "bg-white text-[#0F3554] hover:bg-[#E0F2FE] shadow-lg shadow-sky-950/30 hover:scale-[1.02] active:scale-95"
                            : "bg-[#0F3554] text-white hover:bg-[#0B273F]"
                        }`}
                      >
                        <Info className="w-4 h-4 text-[#0284C7]" />
                        <span>{t.detailButton}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {PRODUCTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to product ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? "w-8 h-2.5 bg-[#0F3554]"
                    : "w-2.5 h-2.5 bg-[#BAE0F8] hover:bg-[#0284C7]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Global CTA button below carousel */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={scrollToOrder}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0F3554] hover:bg-[#0B273F] text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-900/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <span>
              {isArabic
                ? "طلب الباك الكامل مع الهدية بالمجان (1 349 درهم)"
                : "Commander le Pack Complet (1 349 DH)"}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F3554]/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-4xl shadow-2xl border border-[#BAE0F8] overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
            dir={dir}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#BAE0F8] bg-[#F0F7FD]">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-bold">
                  {modalProduct.step}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0F3554] text-white text-xs font-bold">
                  {modalProduct.volume}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setModalProduct(null)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-[#0F3554] flex items-center justify-center transition-colors border border-[#BAE0F8] cursor-pointer"
                aria-label={t.modal.close}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-2xl bg-gradient-to-b from-[#E0F2FE] to-[#BAE0F8]/30 p-3 border border-[#BAE0F8] flex items-center justify-center">
                  <Image
                    src={modalProduct.image}
                    alt={modalProduct.name}
                    fill
                    sizes="200px"
                    className="object-contain p-2 drop-shadow-md"
                  />
                </div>

                <div className="text-center sm:text-left flex-1">
                  <span className="text-xs font-bold text-[#5A7B9A] uppercase tracking-wider">
                    {modalProduct.brand}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#0F3554] mt-1 leading-snug">
                    {modalProduct.name}
                  </h3>
                  <div className="mt-2 inline-flex items-center px-3 py-0.5 rounded-full bg-[#F0F7FD] text-xs font-semibold text-[#0284C7] border border-[#BAE0F8]">
                    <span>{modalProduct.badge}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A7B9A] mb-2">
                  {t.modal.benefitsLabel}
                </h4>
                <p className="text-xs sm:text-sm text-[#4B6B88] leading-relaxed">
                  {modalProduct.descriptionFr}
                </p>
              </div>

              {/* Key Actives */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A7B9A] mb-3">
                  {t.modal.keyActivesLabel}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modalProduct.keyActives.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F0F7FD] border border-[#BAE0F8]/60 text-xs font-medium text-[#0F3554]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-6 border-t border-[#BAE0F8] bg-[#F0F7FD] flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-xs text-[#5A7B9A] text-center sm:text-left">
                {isArabic
                  ? "متوفر ضمن الباك الكامل بـ 1 349 درهم فقط"
                  : "Inclus dans le Pack Skincare Complet à 1 349 DH"}
              </span>

              <button
                type="button"
                onClick={scrollToOrder}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0F3554] hover:bg-[#0B273F] text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>{t.modal.orderCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
