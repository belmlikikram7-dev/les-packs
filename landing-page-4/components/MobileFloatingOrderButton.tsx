"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileFloatingOrderButton() {
  const [visible, setVisible] = useState(false);
  const { isArabic } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 300px
      if (window.scrollY > 300) {
        // Hide if near the order form itself
        const orderElem = document.getElementById("order");
        if (orderElem) {
          const rect = orderElem.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setVisible(false);
            return;
          }
        }
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-40 sm:hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-[#BAE0F8] p-2 rounded-2xl shadow-2xl shadow-sky-900/20 flex items-center justify-between gap-3">
        <div className="pl-2">
          <div className="text-[10px] font-bold text-[#0284C7]">
            <span>{isArabic ? "توصيل فابور + هدية" : "Livraison Gratuite + Cadeau"}</span>
          </div>
          <div className="text-xs font-bold text-[#0F3554]">
            1 349 DH <span className="line-through text-slate-400 font-normal text-[10px]">1 950 DH</span>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToOrder}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F3554] text-white font-bold text-xs shadow-md shadow-sky-900/20 active:scale-95 transition-all cursor-pointer"
        >
          <span>{isArabic ? "طلب الباك دابا" : "Commander"}</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
