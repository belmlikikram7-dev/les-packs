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
    <div className="bg-[#46462A] text-[#F3E3B2] border-y border-[#F3E3B2]/30 py-3.5 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-center">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
              <IconComponent className="w-4 h-4 text-[#F3E3B2] shrink-0" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
