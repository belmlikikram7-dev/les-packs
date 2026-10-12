"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function MobileFloatingOrderButton() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].hero;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
      <button
        onClick={() => scrollTo("#commande")}
        className="w-full py-3.5 px-6 rounded-full bg-[#74070D] text-[#F3E3B2] border border-[#F3E3B2]/40 shadow-2xl shadow-black/50 flex items-center justify-between font-bold text-xs uppercase tracking-wider active:scale-95 transition-all"
      >
        <span className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span>{t.ctaButton}</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-[#F3E3B2]/70 line-through text-[11px]" dir="ltr">
            <bdi dir="ltr">{t.originalPrice}</bdi>
          </span>
          <span className="text-white font-extrabold text-sm" dir="ltr">
            <bdi dir="ltr">{t.specialPrice}</bdi>
          </span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </button>
    </div>
  );
}
