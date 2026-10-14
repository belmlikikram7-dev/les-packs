"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ShieldCheck, Heart } from "lucide-react";
import TrustTicker from "@/components/TrustTicker";

export default function Footer() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].footer;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Interactive mouse tracking for the glowing "1988" watermark
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const watermarkRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!watermarkRef.current) return;
    const rect = watermarkRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!watermarkRef.current || !e.touches[0]) return;
    const rect = watermarkRef.current.getBoundingClientRect();
    setIsHovered(true);
    setMousePos({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
  };

  return (
    <footer className="bg-[#310F10] text-[#FAF7EE] border-t border-[#F3E3B2]/20 relative overflow-hidden">
      {/* Infinite scrolling ticker at the very top of Footer */}
      <TrustTicker />

      {/* Main Container - Compact and lifted so 1988 is immediately visible */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8 sm:pb-10">
        
        {/* Navigation & Brand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-[#46462A]/50">
          
          {/* Brand Info / Vinillia Yellow Logo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="flex items-center group py-1 mb-4 cursor-pointer"
              aria-label="Vinillia Beauty & Skincare"
            >
              <Image
                src="/logo-gold.png"
                alt="Vinillia Beauty & Skincare"
                width={200}
                height={70}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#FAF7EE]/80 leading-relaxed font-light max-w-sm mb-6">
              {t.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#46462A]/60 border border-[#F3E3B2]/30 text-[11px] text-[#F3E3B2]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F3E3B2]" />
              <span>Importation Directe & Produits 100% Originaux</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F3E3B2] mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7EE]/80">
              <li>
                <button onClick={() => scrollTo("#hero")} className="hover:text-white transition-colors cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#pack")} className="hover:text-white transition-colors cursor-pointer">
                  Le Pack Seoul 1988
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#produits")} className="hover:text-white transition-colors cursor-pointer">
                  Les 6 Soins K-Secret
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#routine")} className="hover:text-white transition-colors cursor-pointer">
                  Routine Jour & Nuit
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#commande")} className="hover:text-white transition-colors cursor-pointer">
                  Commander le Pack
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links : TikTok & Instagram */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F3E3B2] mb-4">
              {t.followUs}
            </h4>
            <p className="text-xs text-[#FAF7EE]/70 mb-5 font-light leading-relaxed">
              Rejoignez notre communauté sur les réseaux sociaux pour découvrir nos tutoriels et avis clients.
            </p>

            <div className="flex items-center gap-3">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @vinillia_shop"
                className="w-11 h-11 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.28 8.28 0 0 0 4.83 1.56V6.69z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @vinillia_shop"
                className="w-11 h-11 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm group"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Massive Interactive "1988" in Product Modern Sans-Serif Font with Hollow Stroke Glow */}
        <div
          ref={watermarkRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-full mt-6 sm:mt-8 pt-2 pb-0 flex items-center justify-center cursor-default select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle cursor spotlight aura in the background */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 240px at ${mousePos.x}px ${mousePos.y}px, rgba(243, 227, 178, 0.06), transparent 70%)`,
            }}
          />

          {/* Layer 1: Dark base outline (Hollow stroke like Vinillia) */}
          <div className="font-sans font-black text-[22vw] sm:text-[23vw] lg:text-[21vw] leading-[0.72] tracking-tight text-transparent text-center select-none">
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: "1.5px rgba(243, 227, 178, 0.12)",
              }}
            >
              1988
            </span>
          </div>

          {/* Layer 2: Glowing outline edges revealed right under the cursor ("غير مع الجناب") */}
          <div
            className="absolute inset-0 flex items-center justify-center font-sans font-black text-[22vw] sm:text-[23vw] lg:text-[21vw] leading-[0.72] tracking-tight text-transparent text-center select-none pointer-events-none transition-opacity duration-200"
            style={{
              opacity: isHovered ? 1 : 0,
              WebkitTextStroke: "2.5px #F3E3B2",
              filter: "drop-shadow(0 0 8px #F3E3B2) drop-shadow(0 0 18px rgba(243, 227, 178, 0.8)) drop-shadow(0 0 35px rgba(116, 7, 13, 0.9))",
              WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.6) 45%, transparent 100%)`,
              maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.6) 45%, transparent 100%)`,
            }}
          >
            <span className="inline-block">1988</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
