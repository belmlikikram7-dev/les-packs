"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, setLocale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].navbar;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pb-2 sm:pb-3 flex justify-center pointer-events-none transition-all duration-300 bg-transparent">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between sm:justify-center gap-2 sm:gap-3 pointer-events-auto w-full max-w-sm sm:max-w-none">
        {/* Main Pill Capsule: Frosted blur at top of page -> Solid white with pink border on scroll */}
        <nav
          className={`flex items-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ease-out text-[#C97F91] ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border border-[#F7D1D8] shadow-lg"
              : "bg-white/30 backdrop-blur-xl border border-white/50 shadow-none"
          }`}
        >
          {/* Vinilia Logo in Rose */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`flex items-center sm:pr-3 sm:border-r sm:mr-1 hover:opacity-85 transition-opacity cursor-pointer ${
              isScrolled ? "sm:border-[#F7D1D8]" : "sm:border-white/50"
            }`}
            aria-label="Vinilia Accueil"
          >
            <Image
              src="/logo.png"
              alt="Vinilia"
              width={110}
              height={44}
              priority
              className="h-5 sm:h-6 w-auto object-contain"
            />
          </button>

          {/* Links in Rose: always in rose text (#C97F91), hidden on mobile, visible on tablet/desktop */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hidden sm:inline-block px-3 py-1 rounded-full hover:bg-white/40 text-[#C97F91] hover:text-[#9B3D55] font-semibold transition-all cursor-pointer"
          >
            {t.home}
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="hidden sm:inline-block px-3 py-1 rounded-full hover:bg-white/40 text-[#C97F91] hover:text-[#9B3D55] font-medium transition-all cursor-pointer"
          >
            {t.products}
          </button>
          <button
            onClick={() => scrollToSection("spotlight")}
            className="hidden md:inline-block px-3 py-1 rounded-full hover:bg-white/40 text-[#C97F91] hover:text-[#9B3D55] font-medium transition-all cursor-pointer"
          >
            {t.gift}
          </button>
          <button
            onClick={() => scrollToSection("routine")}
            className="hidden lg:inline-block px-3 py-1 rounded-full hover:bg-white/40 text-[#C97F91] hover:text-[#9B3D55] font-medium transition-all cursor-pointer"
          >
            {t.routine}
          </button>

          {/* Translation Icon & Switcher (Next to Routine) */}
          <div className="flex items-center gap-1 pl-1.5 sm:pl-2.5 sm:border-l sm:border-[#C97F91]/30">
            <Languages className="w-3.5 h-3.5 text-[#C97F91] opacity-75 shrink-0" />
            <div className="flex items-center text-[10px] sm:text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  locale === "fr"
                    ? "bg-[#C97F91] text-white shadow-xs"
                    : "text-[#C97F91] hover:text-[#9B3D55]"
                }`}
                aria-label="Français"
              >
                FR
              </button>
              <span className="text-[#C97F91]/40 px-0.5">|</span>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  locale === "ar"
                    ? "bg-[#C97F91] text-white shadow-xs"
                    : "text-[#C97F91] hover:text-[#9B3D55]"
                }`}
                aria-label="العربية"
              >
                AR
              </button>
            </div>
          </div>
        </nav>

        {/* Right Actions on mobile: Commander Button + Hamburger Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Commander Button: Frosted blur with rose text at top -> Solid rose with white text when scrolled */}
          <button
            onClick={() => scrollToSection("order")}
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ease-out group shrink-0 cursor-pointer ${
              isScrolled
                ? "bg-[#C97F91] hover:bg-[#B3687B] text-white shadow-md hover:shadow-lg border border-transparent"
                : "bg-white/30 backdrop-blur-xl border border-white/50 text-[#C97F91] hover:bg-white/45 shadow-none"
            }`}
          >
            <span>{t.order}</span>
            <div
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-white/20 text-white"
                  : "bg-[#C97F91]/15 text-[#C97F91]"
              }`}
            >
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`sm:hidden flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-out cursor-pointer text-[#C97F91] ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md border border-[#F7D1D8] shadow-sm hover:bg-[#FDF2F4]"
                : "bg-white/30 backdrop-blur-xl border border-white/50 shadow-none hover:bg-white/45"
            }`}
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed top-16 inset-x-4 p-5 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#F7D1D8] flex flex-col gap-2 text-sm font-medium text-[#C97F91] pointer-events-auto animate-in fade-in slide-in-from-top duration-200">
          {/* Mobile Language Switcher Inside Drawer */}
          <div className="flex items-center justify-between px-3 py-2 rounded-2xl bg-[#FAE6E7]/60 border border-[#F7D1D8] mb-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5C1D2E]">
              <Languages className="w-4 h-4 text-[#C97F91]" />
              <span>{isArabic ? "اللغة / Langue" : "Langue / اللغة"}</span>
            </div>
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#F7D1D8]">
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  locale === "fr"
                    ? "bg-[#C97F91] text-white shadow-xs"
                    : "text-[#C97F91] hover:text-[#9B3D55]"
                }`}
              >
                Français
              </button>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  locale === "ar"
                    ? "bg-[#C97F91] text-white shadow-xs"
                    : "text-[#C97F91] hover:text-[#9B3D55]"
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("hero")}
            className="text-left px-4 py-2.5 rounded-2xl hover:bg-[#FDF2F4] font-semibold transition text-[#C97F91]"
          >
            {t.home}
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-left px-4 py-2.5 rounded-2xl hover:bg-[#FDF2F4] transition text-[#C97F91]"
          >
            {t.products}
          </button>
          <button
            onClick={() => scrollToSection("spotlight")}
            className="text-left px-4 py-2.5 rounded-2xl hover:bg-[#FDF2F4] transition text-[#C97F91]"
          >
            {t.gift}
          </button>
          <button
            onClick={() => scrollToSection("routine")}
            className="text-left px-4 py-2.5 rounded-2xl hover:bg-[#FDF2F4] transition text-[#C97F91]"
          >
            {t.routine}
          </button>
          <button
            onClick={() => scrollToSection("order")}
            className="mt-2 text-center bg-[#C97F91] text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <span>{locale === "ar" ? "اطلبي الباك (1300 درهم)" : "Commander le Pack (1300 DH)"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
