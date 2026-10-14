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
      // When at the top in accueil, keep navbar frosted/floue so products are fully visible
      // Once scrolled down past accueil, return the solid red color
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
          : "bg-black/20 backdrop-blur-md border-b border-white/10 text-[#FAF7EE]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Vinillia Yellow Logo */}
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
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#F3E3B2]/95">
          <button
            onClick={() => scrollTo("#hero")}
            className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
          >
            {t.home}
          </button>
          <button
            onClick={() => scrollTo("#pack")}
            className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
          >
            {t.pack}
          </button>
          <button
            onClick={() => scrollTo("#produits")}
            className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
          >
            {t.products}
          </button>
          <button
            onClick={() => scrollTo("#routine")}
            className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
          >
            {t.routine}
          </button>
          <button
            onClick={() => scrollTo("#commande")}
            className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
          >
            {t.order}
          </button>
        </nav>

        {/* Actions : Quick CTA */}
        <div className="flex items-center gap-3">
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
