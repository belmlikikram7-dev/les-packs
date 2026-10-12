"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sparkles, Globe, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { locale, setLocale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].navbar;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#310F10]/95 backdrop-blur-md border-b border-[#46462A]/40 text-[#FAF7EE] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#74070D] border border-[#F3E3B2]/50 flex items-center justify-center text-[#F3E3B2] shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-lg font-bold text-[#F3E3B2] leading-tight uppercase">
              SEOUL 1988
            </span>
            <span className="text-[10px] tracking-wider text-[#F3E3B2]/75 uppercase">
              K-Secret Edition
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#F3E3B2]/85">
          <button
            onClick={() => scrollTo("#hero")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.home}
          </button>
          <button
            onClick={() => scrollTo("#pack")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.pack}
          </button>
          <button
            onClick={() => scrollTo("#produits")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.products}
          </button>
          <button
            onClick={() => scrollTo("#routine")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.routine}
          </button>
          <button
            onClick={() => scrollTo("#commande")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.order}
          </button>
        </nav>

        {/* Actions : Language Selector & CTA */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLocale(locale === "ar" ? "fr" : "ar")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#46462A]/60 hover:bg-[#46462A] text-[#F3E3B2] text-xs font-medium border border-[#F3E3B2]/30 transition-all cursor-pointer"
            title="Changer de langue"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "Français" : "العربية"}</span>
          </button>

          {/* Quick CTA */}
          <button
            onClick={() => scrollTo("#commande")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#74070D]/40 transition-all active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#F3E3B2]" />
            <span className="hidden sm:inline">{t.orderPack}</span>
            <span className="sm:hidden">{t.order}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
