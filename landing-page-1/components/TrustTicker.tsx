"use client";

import { useMemo } from "react";
import { ShieldCheck, Truck, ShoppingBag, RotateCcw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function TrustTicker() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].ticker;

  const repeatedItems = useMemo(() => {
    const tickerItems = [
      { icon: ShieldCheck, text: t.item1 },
      { icon: Truck, text: t.item2 },
      { icon: ShoppingBag, text: t.item3 },
      { icon: RotateCcw, text: t.item4 },
    ];
    return [
      ...tickerItems,
      ...tickerItems,
      ...tickerItems,
      ...tickerItems,
      ...tickerItems,
      ...tickerItems,
    ];
  }, [t]);

  return (
    <div
      dir="ltr"
      className="relative w-full overflow-hidden select-none py-3 sm:py-3.5 border-y border-[#E2B4C1]/50 bg-[#FAF7F2]/60 backdrop-blur-xs"
    >
      {/* Soft gradient fades on left and right edges for a seamless luxury fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

      {/* Infinite Scrolling Track (Enforced LTR coordinate space for gapless continuous flow) */}
      <div
        className="flex w-max animate-marquee-infinite"
        style={{ animation: "marqueeScroll 28s linear infinite" }}
      >
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
          {repeatedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`t1-${idx}`}
                className="flex items-center gap-8 sm:gap-12 shrink-0"
              >
                <div
                  className="inline-flex items-center gap-2 sm:gap-2.5 text-[#A55166]"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 stroke-[1.8] text-[#A55166]" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#A55166] whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
                <span className="text-[#D38C9D]/60 text-[10px] select-none">•</span>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Identical twin for seamless 0-gap infinite loop) */}
        <div
          className="flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12"
          aria-hidden="true"
        >
          {repeatedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`t2-${idx}`}
                className="flex items-center gap-8 sm:gap-12 shrink-0"
              >
                <div
                  className="inline-flex items-center gap-2 sm:gap-2.5 text-[#A55166]"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 stroke-[1.8] text-[#A55166]" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#A55166] whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
                <span className="text-[#D38C9D]/60 text-[10px] select-none">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
