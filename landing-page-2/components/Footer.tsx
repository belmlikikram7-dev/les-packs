"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
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

      {/* Main Container - Inspired strictly by the Vinillia footer layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8">
        
        {/* Top 3 Columns: CONTACT (Left) | NAVIGATION (Center, lifted to top) | RÉSEAUX SOCIAUX (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: CONTACT (Left) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3E3B2] mb-4">
              CONTACT
            </h4>

            {/* Vinillia Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="flex items-center group py-1 mb-5 cursor-pointer"
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

            {/* Email Pill - exact Vinillia style */}
            <a
              href="mailto:contact@vinilliabeauty.ma"
              className="w-full sm:w-auto flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#FAF7EE]/5 hover:bg-[#FAF7EE]/10 border border-[#F3E3B2]/20 text-[#FAF7EE] transition-colors mb-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF7EE]/10 flex items-center justify-center text-[#F3E3B2] group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold tracking-widest text-[#FAF7EE]/60">E-MAIL</div>
                <div className="text-xs font-medium text-[#FAF7EE]">contact@vinilliabeauty.ma</div>
              </div>
            </a>

            {/* WhatsApp Wholesale Pill - exact Vinillia wine pill style */}
            <a
              href="https://wa.me/212762040258?text=Bonjour%20Vinillia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#74070D]/80 hover:bg-[#74070D] border border-[#F3E3B2]/30 text-[#FAF7EE] transition-all duration-300 group shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#F3E3B2] group-hover:scale-105 transition-transform shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold tracking-widest text-[#F3E3B2]">WHATSAPP · COMMANDES GROSSISTES</div>
                <div className="text-xs font-bold text-white tracking-wide">07 62 04 02 58</div>
              </div>
            </a>
          </div>

          {/* Column 2: NAVIGATION (Center - lifted to the top exactly like BOUTIQUE/ASSISTANCE in Vinillia) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center">
            <div className="w-full md:max-w-[200px]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3E3B2] mb-4">
                NAVIGATION
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium text-[#FAF7EE]/85">
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

          {/* Column 3: RÉSEAUX SOCIAUX (Right) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3E3B2] mb-4">
              RÉSEAUX SOCIAUX
            </h4>

            {/* 4 Circular Social Icons exactly like Vinillia (Instagram, Facebook, TikTok, WhatsApp) */}
            <div className="flex items-center gap-2.5 mb-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @vinillia_shop"
                className="w-10 h-10 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Vinillia"
                className="w-10 h-10 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @vinillia_shop"
                className="w-10 h-10 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.28 8.28 0 0 0 4.83 1.56V6.69z" />
                </svg>
              </a>

              {/* WhatsApp direct chat icon */}
              <a
                href="https://wa.me/212607956607"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Vinillia"
                className="w-10 h-10 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Green Vinillia CTA Button: Confirmation de Commande */}
            <a
              href="https://wa.me/212607956607?text=Bonjour%20Vinillia%2C%20je%20souhaite%20confirmer%20ma%20commande%20du%20Pack%20Seoul%201988"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#00C853] hover:bg-[#00B248] text-white transition-all duration-300 hover:scale-[1.02] shadow-md group"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold tracking-wider text-white/90">CONFIRMATION DE COMMANDE</div>
                <div className="text-sm font-extrabold tracking-wide">06 07 95 66 07</div>
              </div>
            </a>
          </div>

        </div>

        {/* Massive Interactive "1988" Watermark - Lifted up to sit directly below the columns just like "VINILLIA" in the green design */}
        <div
          ref={watermarkRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-full mt-2 sm:mt-4 pt-0 pb-0 flex items-center justify-center cursor-default select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Layer 1: Base hollow outline with clean spacing */}
          <div className="font-sans font-black text-[22vw] sm:text-[23vw] lg:text-[21vw] leading-[0.72] tracking-[0.14em] text-transparent text-center select-none pl-[0.14em]">
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
            className="absolute inset-0 flex items-center justify-center font-sans font-black text-[22vw] sm:text-[23vw] lg:text-[21vw] leading-[0.72] tracking-[0.14em] text-transparent text-center select-none pointer-events-none transition-opacity duration-200 pl-[0.14em]"
            style={{
              opacity: isHovered ? 1 : 0,
              WebkitTextStroke: "2.5px #F3E3B2",
              filter: "drop-shadow(0 0 6px #F3E3B2) drop-shadow(0 0 14px rgba(243, 227, 178, 0.7))",
              WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.5) 55%, transparent 100%)`,
              maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0, 0, 0, 0.5) 55%, transparent 100%)`,
            }}
          >
            <span className="inline-block">1988</span>
          </div>
        </div>

        {/* Bottom Bar - identical to the Vinillia green footer */}
        <div className="mt-4 pt-4 border-t border-[#46462A]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#FAF7EE]/60 font-light">
          <div>
            © 2026 VINILLIA BEAUTY
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1 text-center">
            <span>POLITIQUE DE CONFIDENTIALITÉ</span>
            <span>100% EN LIGNE • LIVRAISON PARTOUT AU MAROC</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
