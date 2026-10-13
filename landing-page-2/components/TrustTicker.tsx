"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sparkles, CheckCircle, ShieldCheck, Heart } from "lucide-react";

export default function TrustTicker() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].ticker;

  const items = [
    { text: t.item1, icon: ShieldCheck },
    { text: t.item2, icon: CheckCircle },
    { text: t.item3, icon: Sparkles },
    { text: t.item4, icon: Heart },
  ];

  return (
    <div className="bg-[#46462A] text-[#F3E3B2] border-y border-[#F3E3B2]/30 py-3.5 overflow-hidden shadow-inner relative select-none">
      <div className="animate-marquee items-center gap-10">
        {/* First sequence */}
        <div className="flex items-center gap-10 shrink-0">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={`a-${idx}`} className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
                <IconComponent className="w-4 h-4 text-[#F3E3B2] shrink-0" />
                <span>{item.text}</span>
                <span className="text-[#F3E3B2]/40 ml-6 text-sm">•</span>
              </div>
            );
          })}
        </div>

        {/* Second duplicated sequence for infinite seamless loop */}
        <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={`b-${idx}`} className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
                <IconComponent className="w-4 h-4 text-[#F3E3B2] shrink-0" />
                <span>{item.text}</span>
                <span className="text-[#F3E3B2]/40 ml-6 text-sm">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
