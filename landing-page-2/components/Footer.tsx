"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { Sparkles, ShieldCheck, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].footer;

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#310F10] text-[#FAF7EE] border-t-2 border-[#46462A] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#46462A]/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#74070D] border border-[#F3E3B2]/50 flex items-center justify-center text-[#F3E3B2] shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif tracking-widest text-xl font-bold text-[#F3E3B2] block uppercase">
                  SEOUL 1988
                </span>
                <span className="text-[10px] tracking-wider text-[#F3E3B2]/75 uppercase">
                  K-Secret Premium Routine
                </span>
              </div>
            </div>

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

            <div className="flex flex-col gap-2.5">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#46462A]/60 hover:bg-[#46462A] border border-[#F3E3B2]/30 text-[#F3E3B2] text-xs font-semibold transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F3E3B2] group-hover:scale-125 transition-transform" />
                  <span>{t.tiktok} (@vinillia_shop)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#F3E3B2]/70 group-hover:text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#46462A]/60 hover:bg-[#46462A] border border-[#F3E3B2]/30 text-[#F3E3B2] text-xs font-semibold transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#74070D] group-hover:scale-125 transition-transform" />
                  <span>{t.instagram} (@vinillia_shop)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#F3E3B2]/70 group-hover:text-white" />
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
