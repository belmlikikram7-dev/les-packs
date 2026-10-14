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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-7 pb-3 sm:pb-4">
        
        {/* Top 3 Columns: Logo (Left) | NAVIGATION in 2 columns (Center) | Instagram & TikTok (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Logo Vinillia (md:col-span-4) */}
          <div className="md:col-span-4 flex flex-col items-start">
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

          {/* Column 2: NAVIGATION (md:col-span-5) - Split into 3 links on left and 2 on right */}
          <div className="md:col-span-5 flex flex-col items-start md:items-center">
            <div className="w-full md:max-w-md">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3E3B2] mb-3">
                NAVIGATION
              </h4>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2.5 text-xs sm:text-sm font-medium text-[#FAF7EE]/85">
                {/* 3 Links: Accueil, Le Pack Seoul 1988, Les 6 Soins K-Secret */}
                <ul className="space-y-2.5">
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
                </ul>

                {/* 2 Links lifted up: Routine Jour & Nuit, Commander le Pack */}
                <ul className="space-y-2.5">
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
          </div>

          {/* Column 3: Only Instagram and TikTok logos (md:col-span-3) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
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

              {/* TikTok - Perfect Official SimpleIcons Vector Path */}
              <a
                href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @vinillia_shop"
                className="w-11 h-11 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive "1988" Watermark - Lifted up and sized cleanly with crisp outline glow */}
        <div
          ref={watermarkRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-full mt-0 sm:-mt-1 pt-1 pb-3 flex items-center justify-center cursor-default select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Layer 1: Base hollow outline with clean spacing */}
          <div className="font-sans font-black text-[15vw] sm:text-[14vw] lg:text-[12.5vw] leading-[0.82] tracking-[0.16em] text-transparent text-center select-none pl-[0.16em]">
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
            className="absolute inset-0 flex items-center justify-center font-sans font-black text-[15vw] sm:text-[14vw] lg:text-[12.5vw] leading-[0.82] tracking-[0.16em] text-transparent text-center select-none pointer-events-none transition-opacity duration-200 pl-[0.16em]"
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
