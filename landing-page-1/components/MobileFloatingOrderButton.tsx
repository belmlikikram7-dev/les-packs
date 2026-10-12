"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShoppingBag, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function MobileFloatingOrderButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].floatingButton;

  useEffect(() => {
    let orderObserver: IntersectionObserver | null = null;
    let isOrderInView = false;

    const updateVisibility = () => {
      const scrollY = window.scrollY;

      if (pathname === "/") {
        // Sur la page d'accueil:
        // 1. Ne pas afficher tout en haut (Hero / début de page)
        // 2. Ne pas afficher si le formulaire de commande est déjà sous les yeux de l'utilisateur
        const pastHero = scrollY > 360;
        setIsVisible(pastHero && !isOrderInView);
      } else {
        // Sur les autres pages (ex: détails d'un produit):
        // Visible dès que l'utilisateur commence à faire défiler
        setIsVisible(scrollY > 100);
      }
    };

    // Observer pour masquer le bouton quand l'utilisateur arrive sur le formulaire de commande
    const commandeSection = document.getElementById("commande");
    if (commandeSection && pathname === "/") {
      orderObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isOrderInView = entry.isIntersecting;
          updateVisibility();
        },
        {
          root: null,
          threshold: 0.12, // Dès que 12% du formulaire est visible
        }
      );
      orderObserver.observe(commandeSection);
    }

    const handleScroll = () => {
      updateVisibility();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateVisibility);
      if (orderObserver) {
        orderObserver.disconnect();
      }
    };
  }, [pathname]);

  const handleScrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      const orderEl = document.getElementById("commande");
      if (orderEl) {
        orderEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#commande";
    }
  };

  return (
    <aside
      aria-label={t.order}
      className={`fixed bottom-5 ${
        isArabic ? "left-4" : "right-4"
      } z-40 md:hidden transition-all duration-300 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-90 pointer-events-none"
      }`}
    >
      <button
        onClick={handleScrollToOrder}
        className={`group relative flex items-center gap-2.5 ${
          isArabic ? "pr-3.5 pl-4" : "pl-3.5 pr-4"
        } py-2.5 rounded-full bg-gradient-to-r from-[#A55166] via-[#8E3F53] to-[#3A1826] text-white shadow-[0_8px_25px_rgba(165,81,102,0.45)] border border-[#F7DAE7]/40 active:scale-95 transition-all duration-200 cursor-pointer`}
      >
        {/* Lueur subtile au survol / focus */}
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Cercle avec icône de panier / sac cadeau */}
        <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white shrink-0 shadow-inner">
          <ShoppingBag className="w-4 h-4 text-[#FDEEF4]" />
        </span>

        {/* Libellé et indication du formulaire */}
        <span className={`flex flex-col ${isArabic ? "text-right" : "text-left"} leading-none`}>
          <span className="text-[11px] font-bold uppercase tracking-wider text-white flex items-center gap-1">
            {t.order}
            <ArrowDown className="w-3 h-3 text-[#F7DAE7] animate-bounce" />
          </span>
          <span className="text-[9px] text-[#F7DAE7] font-medium mt-0.5 whitespace-nowrap">
            <bdi>{t.subtext}</bdi>
          </span>
        </span>
      </button>
    </aside>
  );
}
