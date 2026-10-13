"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { ShieldCheck, Heart, ExternalLink } from "lucide-react";
import TrustTicker from "@/components/TrustTicker";

export default function Footer() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].footer;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#310F10] text-[#FAF7EE] border-t border-[#F3E3B2]/20 relative overflow-hidden">
      {/* Infinite scrolling ticker at the very top of Footer */}
      <TrustTicker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#46462A]/60">
          
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
                src="/logo.png"
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
            <ul className="space-y-2 text-xs text-[#FAF7EE]/80">
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
            <p className="text-xs text-[#FAF7EE]/70 mb-4 font-light">
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
                {/* Official TikTok Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.28 8.28 0 0 0 4.83 1.56V6.69z" />
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
                {/* Official Instagram Icon */}
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7EE]/60 gap-4">
          <p>© 2026 Seoul 1988 Beauty Collection. {t.copyright}</p>
          <p className="flex items-center gap-1">
            Conçu pour l'élégance et le bien-être de votre peau
            <Heart className="w-3 h-3 text-[#74070D] inline fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
}
