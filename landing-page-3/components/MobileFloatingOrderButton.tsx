"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function MobileFloatingOrderButton() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].floatingButton;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <div className="sm:hidden fixed bottom-4 inset-x-4 z-40 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#5C1D2E]/95 backdrop-blur-md text-white p-3 rounded-full shadow-2xl border border-[#F4BBC9]/40 flex items-center justify-between gap-3">
        <div className={isArabic ? "pr-3" : "pl-3"}>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7D1D8]">
              {isArabic ? "باك 6 مستحضرات" : "Pack 6 Soins"}
            </span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded text-white font-mono">
              -32%
            </span>
          </div>
          <p className="text-base font-extrabold text-white">{t.price}</p>
        </div>

        <button
          onClick={scrollToOrder}
          className="bg-white hover:bg-[#FAE6E7] text-[#5C1D2E] font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <span>{t.order}</span>
          <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? "rotate-[-90deg]" : ""}`} />
        </button>
      </div>
    </div>
  );
}
