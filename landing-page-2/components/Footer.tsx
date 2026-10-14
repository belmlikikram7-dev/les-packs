"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ShieldCheck, Truck, CheckCircle2, Sparkles, MessageCircle, Mail } from "lucide-react";
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

      {/* Main Container - Spacious, grand and luxurious as inspired by the Vinillia footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
        
        {/* Navigation & Brand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 sm:pb-14 border-b border-[#46462A]/40">
          
          {/* Column 1: Brand Info & Navigation placed directly under the Vinillia Logo */}
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
                width={210}
                height={75}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#FAF7EE]/80 leading-relaxed font-light max-w-sm mb-6">
              {t.description}
            </p>

            {/* Navigation links placed directly under the Vinillia Logo */}
            <div className="w-full pt-2">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#F3E3B2] mb-3">
                {t.quickLinks}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#FAF7EE]/80">
                <li>
                  <button
                    onClick={() => scrollTo("#hero")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Accueil</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#pack")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Le Pack Seoul 1988</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#produits")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Les 6 Soins K-Secret</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#routine")}
                    className="hover:text-[#F3E3B2] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Routine Jour & Nuit</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("#commande")}
                    className="hover:text-[#F3E3B2] font-semibold text-[#F3E3B2] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Commander le Pack</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Assistance & Nos Engagements (Inspired by the green Vinillia footer) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#F3E3B2] mb-4">
                Assistance & Engagements
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#FAF7EE]/80">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#F3E3B2] shrink-0 mt-0.5" />
                  <span>Produits 100% Authentiques Coréens</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-[#F3E3B2] shrink-0 mt-0.5" />
                  <span>Livraison 24/48H Gratuite Partout au Maroc</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F3E3B2] shrink-0 mt-0.5" />
                  <span>Paiement Sécurisé à la Livraison</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#F3E3B2] shrink-0 mt-0.5" />
                  <span>2 Cadeaux de Luxe Inclus Offerts</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#46462A]/60 border border-[#F3E3B2]/30 text-[11px] text-[#F3E3B2]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F3E3B2]" />
                <span>Importation Directe & Produits 100% Originaux</span>
              </div>
            </div>
          </div>

          {/* Column 3: Réseaux Sociaux & Contact (TikTok, Instagram & Confirmation Buttons) */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#F3E3B2] mb-4">
              Réseaux Sociaux & Contact
            </h4>
            <p className="text-xs text-[#FAF7EE]/70 mb-5 font-light leading-relaxed">
              Rejoignez notre communauté sur les réseaux sociaux pour découvrir nos tutoriels et avis clients.
            </p>

            {/* Circular Social Media Icons */}
            <div className="flex items-center gap-3 mb-6">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @vinillia_shop"
                className="w-11 h-11 rounded-full bg-[#FAF7EE]/10 hover:bg-[#74070D] border border-[#F3E3B2]/30 flex items-center justify-center text-[#F3E3B2] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.28 8.28 0 0 0 4.83 1.56V6.69z" />
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

            {/* Contact Pills (WhatsApp Confirmation & Email) inspired by the green Vinillia footer */}
            <div className="space-y-3">
              {/* WhatsApp / Confirmation de commande button */}
              <a
                href="https://wa.me/212607956607?text=Bonjour%20Vinillia%2C%20je%20souhaite%20confirmer%20ma%20commande%20du%20Pack%20Seoul%201988"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#FAF7EE] transition-all duration-300 group shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#25D366]">Confirmation de Commande</div>
                  <div className="text-sm font-semibold tracking-wide">06 07 95 66 07</div>
                </div>
              </a>

              {/* Email Pill */}
              <a
                href="mailto:contact@vinilliabeauty.ma"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#FAF7EE]/5 hover:bg-[#FAF7EE]/10 border border-[#F3E3B2]/20 text-[#FAF7EE]/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F3E3B2] shrink-0" />
                <span className="text-xs">contact@vinilliabeauty.ma</span>
              </a>
            </div>
          </div>

        </div>

        {/* Massive Interactive "1988" Watermark in Product Modern Sans-Serif with Hollow Stroke Glow */}
        <div
          ref={watermarkRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-full mt-10 sm:mt-14 pt-4 pb-4 flex items-center justify-center cursor-default select-none overflow-hidden"
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

          {/* Layer 2: Glowing outline edges illuminated strictly on the stroke lines under cursor (Clean edge glow without central fog) */}
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

        {/* Bottom Bar (Directly inspired by the green Vinillia footer bottom bar) */}
        <div className="mt-8 pt-6 border-t border-[#46462A]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7EE]/60 font-light">
          <div>
            © 2026 VINILLIA BEAUTY • Tous droits réservés.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1 text-center">
            <span>Politique de Confidentialité</span>
            <span>•</span>
            <span>100% En Ligne</span>
            <span>•</span>
            <span>Livraison Partout au Maroc</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
