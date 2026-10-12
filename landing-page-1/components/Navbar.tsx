"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].navbar;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: "#hero" },
    { name: t.pack, href: "#pack" },
    { name: t.products, href: "#produits" },
    { name: t.routine, href: "#routine" },
    { name: t.order, href: "#commande" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        setIsOpen(false);
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(165,81,102,0.08)] border-b border-[#E2B4C1]/40"
          : "bg-transparent backdrop-blur-[2px] border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center group py-1"
            aria-label="Vinillia Beauty & Skincare"
          >
            <Image
              src="/logo.png"
              alt="Vinillia Beauty & Skincare"
              width={240}
              height={96}
              priority
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#3A1826]/85 hover:text-[#A55166] transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D38C9D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Language Switcher + Order CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Elegant Language Switcher Pill */}
            <div
              className="inline-flex items-center p-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E2B4C1]/70 shadow-xs"
              role="group"
              aria-label="Sélection de langue / اختيار اللغة"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F7DAE7]/50 text-[#A55166] mr-0.5">
                <Languages className="w-3.5 h-3.5" />
              </div>
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`px-2.5 py-1 rounded-full text-xs transition-all duration-200 select-none cursor-pointer ${
                  locale === "fr"
                    ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white font-bold shadow-xs"
                    : "text-[#7A5C67] hover:text-[#A55166] font-medium"
                }`}
                aria-pressed={locale === "fr"}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`px-2.5 py-1 rounded-full text-xs transition-all duration-200 select-none cursor-pointer ${
                  locale === "ar"
                    ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white font-bold shadow-xs"
                    : "text-[#7A5C67] hover:text-[#A55166] font-medium"
                }`}
                aria-pressed={locale === "ar"}
              >
                AR
              </button>
            </div>

            {/* Desktop CTA */}
            <a
              href="#commande"
              onClick={(e) => handleLinkClick(e, "#commande")}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#A55166] to-[#8E3F53] hover:from-[#8E3F53] hover:to-[#3A1826] text-white text-xs uppercase font-medium tracking-wider transition-all duration-300 shadow-md shadow-[#A55166]/20 hover:shadow-lg hover:shadow-[#A55166]/30 active:scale-95"
            >
              {t.order}
            </a>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <div
              className="inline-flex items-center p-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2B4C1]/70 shadow-2xs"
              role="group"
              aria-label="Langue"
            >
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`px-2 py-1 rounded-full text-[11px] transition-all duration-200 select-none cursor-pointer ${
                  locale === "fr"
                    ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white font-bold shadow-xs"
                    : "text-[#7A5C67] font-medium"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`px-2 py-1 rounded-full text-[11px] transition-all duration-200 select-none cursor-pointer ${
                  locale === "ar"
                    ? "bg-gradient-to-r from-[#A55166] to-[#8E3F53] text-white font-bold shadow-xs"
                    : "text-[#7A5C67] font-medium"
                }`}
              >
                AR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="p-2 rounded-full text-[#3A1826] hover:bg-[#F7DAE7]/50 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#E2B4C1]/40 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base font-medium text-[#3A1826]/90 hover:text-[#A55166] py-2 border-b border-[#F7DAE7]/60 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-xs text-[#D38C9D] font-serif">
                {isArabic ? "←" : "→"}
              </span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#commande"
              onClick={(e) => handleLinkClick(e, "#commande")}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#A55166] to-[#8E3F53] hover:from-[#8E3F53] hover:to-[#3A1826] text-white text-xs uppercase font-medium tracking-wider transition-all duration-300 shadow-md shadow-[#A55166]/20"
            >
              {t.orderFullPack}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
