"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import TrustTicker from "@/components/TrustTicker";

export default function Footer() {
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

      {/* Main Container - Compact and elevated so 1988 is immediately visible without scrolling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
        
        {/* Top Header Row: Logo + Navigation Links on the Left, Social Media on the Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          
          {/* Brand Logo & Navigation */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="flex items-center group py-1 cursor-pointer shrink-0"
              aria-label="Vinillia Beauty & Skincare"
            >
              <Image
                src="/logo-gold.png"
                alt="Vinillia Beauty & Skincare"
                width={170}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Navigation links relocated alongside the logo */}
            <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#FAF7EE]/80">
              <button
                onClick={() => scrollTo("#hero")}
                className="hover:text-[#F3E3B2] transition-colors cursor-pointer py-1"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollTo("#pack")}
                className="hover:text-[#F3E3B2] transition-colors cursor-pointer py-1"
              >
                Le Pack Seoul 1988
              </button>
              <button
                onClick={() => scrollTo("#produits")}
                className="hover:text-[#F3E3B2] transition-colors cursor-pointer py-1"
              >
                Les 6 Soins
              </button>
              <button
                onClick={() => scrollTo("#routine")}
                className="hover:text-[#F3E3B2] transition-colors cursor-pointer py-1"
              >
                Routine Jour & Nuit
              </button>
              <button
                onClick={() => scrollTo("#commande")}
                className="hover:text-[#F3E3B2] transition-colors cursor-pointer py-1 text-[#F3E3B2] font-semibold"
              >
                Commander
              </button>
            </nav>
          </div>

          {/* Social Links: TikTok & Instagram */}
          <div className="flex items-center gap-3 shrink-0">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @vinillia_shop"
              className="w-10 h-10 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm group"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.28 8.28 0 0 0 4.83 1.56V6.69z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @vinillia_shop"
              className="w-10 h-10 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm group"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

        </div>

        {/* Massive Interactive "1988" Watermark - Lifted, Spaced out, Crisp Outline Glow without Fog */}
        <div
          ref={watermarkRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-full mt-4 sm:mt-6 pt-1 pb-0 flex items-center justify-center cursor-default select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Layer 1: Base hollow outline with clean spacing between 1, 9, 8, 8 */}
          <div className="font-sans font-black text-[15vw] sm:text-[14vw] lg:text-[12.5vw] leading-[0.78] tracking-[0.22em] text-transparent text-center select-none pl-[0.22em]">
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: "1.5px rgba(243, 227, 178, 0.16)",
              }}
            >
              1988
            </span>
          </div>

          {/* Layer 2: Glowing outline edges illuminated strictly on the stroke lines under the cursor (No central fog / haze) */}
          <div
            className="absolute inset-0 flex items-center justify-center font-sans font-black text-[15vw] sm:text-[14vw] lg:text-[12.5vw] leading-[0.78] tracking-[0.22em] text-transparent text-center select-none pointer-events-none transition-opacity duration-200 pl-[0.22em]"
            style={{
              opacity: isHovered ? 1 : 0,
              WebkitTextStroke: "2px #F3E3B2",
              filter: "drop-shadow(0 0 4px #F3E3B2) drop-shadow(0 0 10px rgba(243, 227, 178, 0.65))",
              WebkitMaskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)`,
              maskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)`,
            }}
          >
            <span className="inline-block">1988</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
