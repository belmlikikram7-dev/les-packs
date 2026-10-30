"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].navbar;

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pb-2 flex justify-center pointer-events-none transition-all duration-300">
      <div className="flex items-center justify-between sm:justify-center gap-2 sm:gap-3 pointer-events-auto w-full max-w-5xl">
        {/* Main Pill Capsule Navigation in Blue Marine (#0F3554) */}
        <nav
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 text-white bg-[#0F3554]/95 backdrop-blur-md border border-white/20 shadow-xl shadow-sky-950/20 w-full sm:w-auto justify-between sm:justify-start"
          dir={dir}
        >
          {/* Logo Vinillia Blanc */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center pr-3 border-r border-white/20 mr-1 hover:opacity-85 transition-opacity cursor-pointer shrink-0"
            aria-label="Vinillia Accueil"
          >
            <Image
              src="/logo-white.png"
              alt="Vinillia Beauty & Skincare"
              width={130}
              height={38}
              priority
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("hero")}
              className="px-3 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white font-medium transition-all cursor-pointer"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="px-3 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white font-medium transition-all cursor-pointer"
            >
              {t.why}
            </button>
            <button
              onClick={() => scrollToSection("routine")}
              className="px-3 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white font-medium transition-all cursor-pointer"
            >
              {t.routine}
            </button>

            <button
              onClick={() => scrollToSection("gift")}
              className="px-3 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white font-medium transition-all cursor-pointer"
            >
              {t.gift}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 px-2 border-x border-white/20">
            <Languages className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <div className="flex items-center text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  locale === "fr"
                    ? "bg-[#DFF1FD] text-[#0F3554] shadow-xs font-bold"
                    : "text-white/80 hover:text-white"
                }`}
                aria-label="Français"
              >
                FR
              </button>
              <span className="text-white/30 px-0.5">|</span>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  locale === "ar"
                    ? "bg-[#DFF1FD] text-[#0F3554] shadow-xs font-bold"
                    : "text-white/80 hover:text-white"
                }`}
                aria-label="العربية"
              >
                AR
              </button>
            </div>
          </div>

          {/* Order CTA button in Light Blue Ciel (#DFF1FD) */}
          <button
            type="button"
            onClick={() => scrollToSection("order")}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFF1FD] hover:bg-white text-[#0F3554] font-bold text-xs shadow-md shadow-sky-950/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group shrink-0"
          >
            <span>{t.order}</span>
            <div className="w-4 h-4 rounded-full bg-[#0F3554] text-[#DFF1FD] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-white hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-16 z-50 pointer-events-auto bg-[#0F3554]/98 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 text-white">
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/15 text-sm font-medium text-white cursor-pointer"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/15 text-sm font-medium text-white cursor-pointer"
            >
              {t.why}
            </button>
            <button
              onClick={() => scrollToSection("routine")}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/15 text-sm font-medium text-white cursor-pointer"
            >
              {t.routine}
            </button>

            <button
              onClick={() => scrollToSection("gift")}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/15 text-sm font-medium text-white cursor-pointer flex items-center justify-between"
            >
              <span>{t.gift}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DFF1FD] text-[#0F3554]">
                100% Offert
              </span>
            </button>
          </div>

          <div className="pt-2 border-t border-white/20">
            <button
              onClick={() => scrollToSection("order")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#DFF1FD] hover:bg-white text-[#0F3554] font-bold text-sm shadow-lg shadow-sky-950/25 cursor-pointer"
            >
              <span>{t.order}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
