"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import TrustTicker from "@/components/TrustTicker";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
    </svg>
  );
}

export default function Footer() {
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].footer;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="mt-12 border-t border-sky-900/40 bg-gradient-to-b from-[#0F3554] via-[#165684] to-[#38BDF8] text-white pt-0 pb-24 sm:pb-12" dir={dir}>
      {/* Infinite scrolling trust ticker in white & soft sky on navy */}
      <TrustTicker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/15 text-center md:text-left">
          {/* Logo Vinillia Blanc & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer inline-flex items-center group py-1"
              aria-label="Vinillia Accueil"
            >
              <Image
                src="/logo-white.png"
                alt="Vinillia Beauty & Skincare"
                width={150}
                height={48}
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            <p className="text-xs sm:text-sm text-[#BAE0F8] max-w-sm flex items-center justify-center md:justify-start gap-1">
              <span>{t.slogan}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#E0F2FE]">
            <button
              onClick={() => scrollTo("hero")}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {isArabic ? "الرئيسية" : "Accueil"}
            </button>
            <button
              onClick={() => scrollTo("why")}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {isArabic ? "علاش هاد الباك" : "Pourquoi ce pack"}
            </button>
            <button
              onClick={() => scrollTo("routine")}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {isArabic ? "الروتين" : "La Routine"}
            </button>

            <button
              onClick={() => scrollTo("gift")}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {isArabic ? "الهدية" : "Cadeau"}
            </button>
            <button
              onClick={() => scrollTo("order")}
              className="text-[#38BDF8] hover:text-white transition-colors cursor-pointer font-bold"
            >
              {isArabic ? "طلب الآن" : "Commander"}
            </button>
          </div>

          {/* Contact WhatsApp & Social Media (TikTok & Instagram) */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Clickable WhatsApp Pill with 06 07 95 66 07 */}
            <a
              href="https://wa.me/212607956607"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95 group cursor-pointer"
              aria-label="WhatsApp 06 07 95 66 07"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">06 07 95 66 07</span>
            </a>

            {/* Social Icons (TikTok & Instagram) */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0284C7] border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="TikTok @vinillia_shop"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0284C7] border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Instagram @vinillia_shop"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white font-medium text-center">
          <p className="drop-shadow-xs">{t.copyright}</p>
          <p className="flex items-center gap-1 drop-shadow-xs">
            <span>{isArabic ? "صُنع بعناية للبشرة المغربية" : "Formulé avec soin pour sublimer votre peau"}</span>
            <Heart className="w-3.5 h-3.5 text-white fill-white" />
          </p>
        </div>
      </div>
    </footer>
  );
}
