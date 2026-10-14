"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].navbar;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Completely transparent at the top in accueil (no grey, no blur container)
      // Once scrolled down, becomes solid royal burgundy
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#310F10]/95 backdrop-blur-md border-b border-[#46462A]/40 shadow-lg text-[#FAF7EE]"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Vinillia Gold Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="flex items-center group py-1 cursor-pointer ms-2 sm:ms-6 md:ms-12 lg:ms-20 xl:ms-24 transition-all"
          aria-label="Vinillia Beauty & Skincare"
        >
          <Image
            src="/logo-gold.png"
            alt="Vinillia Beauty & Skincare"
            width={180}
            height={64}
            priority
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
            isScrolled
              ? "text-[#F3E3B2]/95"
              : "text-[#310F10] drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]"
          }`}
        >
          <button
            onClick={() => scrollTo("#hero")}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-white" : "hover:text-[#74070D]"
            }`}
          >
            {t.home}
          </button>
          <button
            onClick={() => scrollTo("#pack")}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-white" : "hover:text-[#74070D]"
            }`}
          >
            {t.pack}
          </button>
          <button
            onClick={() => scrollTo("#produits")}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-white" : "hover:text-[#74070D]"
            }`}
          >
            {t.products}
          </button>
          <button
            onClick={() => scrollTo("#routine")}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-white" : "hover:text-[#74070D]"
            }`}
          >
            {t.routine}
          </button>
          <button
            onClick={() => scrollTo("#commande")}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-white" : "hover:text-[#74070D]"
            }`}
          >
            {t.order}
          </button>
        </nav>

        {/* Actions : Quick CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("#commande")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#FAF7EE] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#74070D]/40 transition-all active:scale-95 cursor-pointer"
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
