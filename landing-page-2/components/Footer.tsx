"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
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

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-4 sm:pb-6">
        
        {/* Top 3 Columns: Logo (Left) | NAVIGATION (Center, lifted) | Instagram & TikTok (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Logo Vinillia */}
          <div className="flex flex-col items-start">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="flex items-center group py-1 cursor-pointer"
              aria-label="Vinillia Beauty & Skincare"
            >
              <Image
                src="/logo-gold.png"
                alt="Vinillia Beauty & Skincare"
                width={190}
                height={65}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs text-[#FAF7EE]/70 font-light leading-relaxed max-w-xs mt-3">
              {t.description}
            </p>
          </div>

          {/* Column 2: NAVIGATION (Center, elevated at the top) */}
          <div className="flex flex-col items-start md:items-center">
            <div className="w-full md:max-w-[200px]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3E3B2] mb-3">
                NAVIGATION
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#FAF7EE]/85">
                <li>
                  <button
                    onClick={() => scrollTo("#hero")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer text-left block"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#pack")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer text-left block"
                  >
                    Le Pack Seoul 1988
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#produits")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer text-left block"
                  >
                    Les 6 Soins K-Secret
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#routine")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer text-left block"
                  >
                    Routine Jour & Nuit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#commande")}
                    className="hover:text-[#F3E3B2] font-semibold text-[#F3E3B2] transition-colors cursor-pointer text-left block"
                  >
                    Commander le Pack
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Only Instagram and TikTok logos */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3E3B2] mb-3">
              RÉSEAUX SOCIAUX
            </h4>

            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @vinillia_shop"
                className="w-11 h-11 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @vinillia_shop"
                className="w-11 h-11 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.28 8.28 0 0 0 4.83 1.56V6.69z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive "1988" Watermark - Lifted up and sized slightly smaller with crisp outline glow */}
        <div
          ref={watermarkRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-full mt-2 sm:mt-4 pt-1 pb-1 flex items-center justify-center cursor-default select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Layer 1: Base hollow outline with clean spacing */}
          <div className="font-sans font-black text-[16vw] sm:text-[15vw] lg:text-[13.5vw] leading-[0.76] tracking-[0.16em] text-transparent text-center select-none pl-[0.16em]">
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: "1.5px rgba(243, 227, 178, 0.16)",
              }}
            >
              1988
            </span>
          </div>

          {/* Layer 2: Glowing outline edges illuminated strictly on the stroke lines under cursor */}
          <div
            className="absolute inset-0 flex items-center justify-center font-sans font-black text-[16vw] sm:text-[15vw] lg:text-[13.5vw] leading-[0.76] tracking-[0.16em] text-transparent text-center select-none pointer-events-none transition-opacity duration-200 pl-[0.16em]"
            style={{
              opacity: isHovered ? 1 : 0,
              WebkitTextStroke: "2.5px #F3E3B2",
              filter: "drop-shadow(0 0 5px #F3E3B2) drop-shadow(0 0 12px rgba(243, 227, 178, 0.7))",
              WebkitMaskImage: `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.5) 55%, transparent 100%)`,
              maskImage: `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.5) 55%, transparent 100%)`,
            }}
          >
            <span className="inline-block">1988</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
