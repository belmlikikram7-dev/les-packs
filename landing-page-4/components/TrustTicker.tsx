"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function TrustTicker() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].order.trust;

  const items = [
    {
      title: t.cod,
      subtitle: t.codSub,
    },
    {
      title: t.original,
      subtitle: t.originalSub,
    },
    {
      title: t.freeShipping,
      subtitle: t.shippingDelay,
    },
  ];

  // Repeat items so ticker is densely packed across all screens
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      dir="ltr"
      className="py-3.5 sm:py-4 overflow-hidden relative select-none border-b border-white/10 bg-transparent text-white"
    >
      <div className="animate-marquee items-center gap-8 sm:gap-12">
        {/* First sequence */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0">
          {repeatedItems.map((item, idx) => (
            <div
              key={`ticker-a-${idx}`}
              className="flex items-center gap-2 text-xs sm:text-sm tracking-wide whitespace-nowrap text-white"
            >
              <span className="font-bold text-white tracking-wider">{item.title}</span>
              <span className="text-white/85 font-normal">
                — {item.subtitle}
              </span>
              <span className="text-white/40 ml-6 sm:ml-8 text-base">•</span>
            </div>
          ))}
        </div>

        {/* Second duplicated sequence for infinite seamless loop */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0" aria-hidden="true">
          {repeatedItems.map((item, idx) => (
            <div
              key={`ticker-b-${idx}`}
              className="flex items-center gap-2 text-xs sm:text-sm tracking-wide whitespace-nowrap text-white"
            >
              <span className="font-bold text-white tracking-wider">{item.title}</span>
              <span className="text-white/85 font-normal">
                — {item.subtitle}
              </span>
              <span className="text-white/40 ml-6 sm:ml-8 text-base">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
