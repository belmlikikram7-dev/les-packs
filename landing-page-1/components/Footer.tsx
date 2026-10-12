"use client";

import Image from "next/image";
import { Truck, PhoneCall, ShieldCheck, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

// Cute Floral Corner Artwork ("وريدات كيوت صغار وباينين في الجنب بلا ما يتقطعو")
function CuteFloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Delicate graceful stems */}
      <path
        d="M10,195 C30,160 60,125 105,95 C135,75 165,65 185,60"
        stroke="#D38C9D"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M50,145 C75,130 98,135 120,150"
        stroke="#D38C9D"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M95,105 C115,88 132,92 148,105"
        stroke="#D38C9D"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Cute Rounded Leaves with distinct shape and visible warm tone */}
      <path
        d="M28,168 C15,150 14,132 26,122 C40,127 44,148 28,168 Z"
        fill="#A55166"
        opacity="0.8"
      />
      <path
        d="M42,148 C58,134 74,138 72,154 C60,166 46,162 42,148 Z"
        fill="#A55166"
        opacity="0.75"
      />
      <path
        d="M68,122 C52,106 50,88 64,80 C78,86 80,106 68,122 Z"
        fill="#A55166"
        opacity="0.8"
      />
      <path
        d="M84,106 C100,92 116,96 114,112 C102,122 88,118 84,106 Z"
        fill="#A55166"
        opacity="0.75"
      />
      <path
        d="M122,80 C108,66 106,50 120,44 C132,50 134,68 122,80 Z"
        fill="#A55166"
        opacity="0.8"
      />
      <path
        d="M144,68 C160,54 174,58 172,72 C160,82 148,78 144,68 Z"
        fill="#A55166"
        opacity="0.75"
      />

      {/* Cute 5-Petal Flower Blossom 1 (Branch 1) */}
      <g transform="translate(126, 154)" opacity="0.95">
        <circle cx="0" cy="-7.5" r="5.5" fill="#F7DAE7" />
        <circle cx="7" cy="-2.5" r="5.5" fill="#F7DAE7" />
        <circle cx="4.5" cy="6" r="5.5" fill="#F7DAE7" />
        <circle cx="-4.5" cy="6" r="5.5" fill="#F7DAE7" />
        <circle cx="-7" cy="-2.5" r="5.5" fill="#F7DAE7" />
        <circle cx="0" cy="0" r="3.8" fill="#FFF0F5" />
        <circle cx="0" cy="0" r="1.6" fill="#A55166" />
      </g>

      {/* Cute 5-Petal Flower Blossom 2 (Branch 2) */}
      <g transform="translate(152, 108)" opacity="0.95">
        <circle cx="0" cy="-6.5" r="4.8" fill="#F7DAE7" />
        <circle cx="6" cy="-2" r="4.8" fill="#F7DAE7" />
        <circle cx="4" cy="5.2" r="4.8" fill="#F7DAE7" />
        <circle cx="-4" cy="5.2" r="4.8" fill="#F7DAE7" />
        <circle cx="-6" cy="-2" r="4.8" fill="#F7DAE7" />
        <circle cx="0" cy="0" r="3.2" fill="#FFF0F5" />
        <circle cx="0" cy="0" r="1.4" fill="#A55166" />
      </g>

      {/* Cute Terminal Flower Blossom at Tip (Completely visible, not cut off) */}
      <g transform="translate(185, 60)" opacity="0.98">
        <circle cx="0" cy="-6" r="4.2" fill="#F7DAE7" />
        <circle cx="5.5" cy="-1.8" r="4.2" fill="#F7DAE7" />
        <circle cx="3.6" cy="4.6" r="4.2" fill="#F7DAE7" />
        <circle cx="-3.6" cy="4.6" r="4.2" fill="#F7DAE7" />
        <circle cx="-5.5" cy="-1.8" r="4.2" fill="#F7DAE7" />
        <circle cx="0" cy="0" r="2.8" fill="#FFF0F5" />
        <circle cx="0" cy="0" r="1.2" fill="#A55166" />
      </g>

      {/* Cute small floral buds */}
      <circle cx="168" cy="45" r="3" fill="#E2B4C1" opacity="0.9" />
      <circle cx="106" cy="162" r="2.6" fill="#E2B4C1" opacity="0.85" />
    </svg>
  );
}

// Cute Floating Floral Blossoms in Center Background ("وريدات مرسومين كيوت في الوسط")
function CuteFloatingFlowersCenter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blossom 1 */}
      <g transform="translate(50, 42)" opacity="0.75">
        <circle cx="0" cy="-6" r="4.5" fill="#E2B4C1" />
        <circle cx="5.8" cy="-2" r="4.5" fill="#E2B4C1" />
        <circle cx="3.8" cy="5" r="4.5" fill="#E2B4C1" />
        <circle cx="-3.8" cy="5" r="4.5" fill="#E2B4C1" />
        <circle cx="-5.8" cy="-2" r="4.5" fill="#E2B4C1" />
        <circle cx="0" cy="0" r="2.8" fill="#FFF0F5" />
      </g>

      {/* Blossom 2 (Center) */}
      <g transform="translate(160, 52)" opacity="0.8">
        <circle cx="0" cy="-6.5" r="5" fill="#F7DAE7" />
        <circle cx="6.2" cy="-2" r="5" fill="#F7DAE7" />
        <circle cx="4" cy="5.5" r="5" fill="#F7DAE7" />
        <circle cx="-4" cy="5.5" r="5" fill="#F7DAE7" />
        <circle cx="-6.2" cy="-2" r="5" fill="#F7DAE7" />
        <circle cx="0" cy="0" r="3.2" fill="#FFF0F5" />
      </g>

      {/* Blossom 3 */}
      <g transform="translate(265, 38)" opacity="0.7">
        <circle cx="0" cy="-5" r="4" fill="#E2B4C1" />
        <circle cx="5.2" cy="-1.8" r="4" fill="#E2B4C1" />
        <circle cx="3.4" cy="4.2" r="4" fill="#E2B4C1" />
        <circle cx="-3.4" cy="4.2" r="4" fill="#E2B4C1" />
        <circle cx="-5.2" cy="-1.8" r="4" fill="#E2B4C1" />
        <circle cx="0" cy="0" r="2.4" fill="#FFF0F5" />
      </g>

      {/* Cute floating petals */}
      <path
        d="M100,28 C94,20 93,14 100,12 C108,16 106,23 100,28 Z"
        fill="#E2B4C1"
        opacity="0.55"
      />
      <path
        d="M210,72 C204,66 205,60 211,58 C217,62 216,68 210,72 Z"
        fill="#E2B4C1"
        opacity="0.55"
      />
      <path
        d="M125,70 C120,64 121,58 126,57 C131,60 130,66 125,70 Z"
        fill="#E2B4C1"
        opacity="0.5"
      />
      <path
        d="M230,22 C226,18 227,12 232,11 C236,14 234,20 230,22 Z"
        fill="#E2B4C1"
        opacity="0.5"
      />
    </svg>
  );
}

// Social Icons
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-3.66.07-7.32.07-10.98V.02z" />
    </svg>
  );
}

export default function Footer() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].footer;
  const tNav = TRANSLATIONS[locale].navbar;

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full">
      {/* 1. HORIZONTAL REASSURANCE STRIP */}
      <div className="bg-[#FAF7F2] py-10 sm:py-14 border-t border-[#EAE0D0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E2B4C1]/60">
            {/* Item 1: Produits 100% Authentiques */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-10 h-10 flex items-center justify-center text-[#A55166] mb-3 transition-transform group-hover:scale-110 duration-300">
                <BadgeCheck className="w-8 h-8 stroke-[1.75]" />
              </div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#3A1826] mb-1">
                {isArabic ? "مستحضرات أصلية 100%" : "Produits 100% Authentiques"}
              </h4>
              <p className="text-xs text-[#6B5E63] font-light max-w-xs leading-relaxed">
                {isArabic ? "مستحضرات كورية معتمدة ومضمونة" : "Soins coréens certifiés et garantis"}
              </p>
            </div>

            {/* Item 2: Livraison Rapide */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-10 h-10 flex items-center justify-center text-[#A55166] mb-3 transition-transform group-hover:scale-110 duration-300">
                <Truck className="w-8 h-8 stroke-[1.75]" />
              </div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#3A1826] mb-1">
                {isArabic ? "توصيل سريع مجاني" : "Livraison Rapide"}
              </h4>
              <p className="text-xs text-[#6B5E63] font-light max-w-xs leading-relaxed">
                {isArabic ? "خلال 24 إلى 48 ساعة لكافة مدن المغرب" : "48h partout au Maroc"}
              </p>
            </div>

            {/* Item 3: Confirmation Téléphonique */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-10 h-10 flex items-center justify-center text-[#A55166] mb-3 transition-transform group-hover:scale-110 duration-300">
                <PhoneCall className="w-8 h-8 stroke-[1.75]" />
              </div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#3A1826] mb-1">
                {isArabic ? "تأكيد هاتفي سريع" : "Confirmation Téléphonique"}
              </h4>
              <p className="text-xs text-[#6B5E63] font-light max-w-xs leading-relaxed">
                {isArabic ? "اتصال شخصي لتأكيد الطلب والشحن" : "Appel personnalisé et validation"}
              </p>
            </div>

            {/* Item 4: Paiement Sécurisé */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-10 h-10 flex items-center justify-center text-[#A55166] mb-3 transition-transform group-hover:scale-110 duration-300">
                <ShieldCheck className="w-8 h-8 stroke-[1.75]" />
              </div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#3A1826] mb-1">
                {isArabic ? "دفع آمن عند الاستلام" : "Paiement Sécurisé"}
              </h4>
              <p className="text-xs text-[#6B5E63] font-light max-w-xs leading-relaxed">
                {isArabic ? "معاينة الطلب ثم الدفع نقداً" : "Paiement à la livraison en espèces"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CURVED WAVY TOP TRANSITION */}
      <div className="w-full bg-[#FAF7F2] overflow-hidden leading-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 text-[#3A1826] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C240,60 520,5 820,38 C1140,68 1320,12 1440,25 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 3. MAIN FOOTER BODY */}
      <div className="relative bg-[#3A1826] text-[#F7DAE7] overflow-hidden pt-10 sm:pt-14 pb-12">
        {/* Cute Floral Corner on bottom left */}
        <CuteFloralCorner className="absolute left-0 bottom-0 w-36 sm:w-48 h-36 sm:h-48 pointer-events-none select-none z-0" />

        {/* Cute Floral Corner on bottom right */}
        <CuteFloralCorner className="absolute right-0 bottom-0 w-36 sm:w-48 h-36 sm:h-48 pointer-events-none select-none -scale-x-100 z-0" />

        {/* Cute delicate floating flowers in the center background */}
        <CuteFloatingFlowersCenter className="absolute left-1/2 -translate-x-1/2 bottom-3 w-72 sm:w-96 h-24 pointer-events-none select-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
            {/* Left Column: Official Logo from Navbar */}
            <div className={`md:col-span-5 flex flex-col ${isArabic ? "items-start text-right" : "items-start text-left"}`}>
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="Vinillia Beauty & Skincare"
                  width={220}
                  height={80}
                  className="h-12 sm:h-14 w-auto object-contain brightness-110 drop-shadow-sm"
                />
              </div>

              <p className="font-serif italic text-sm text-[#F7DAE7] font-light max-w-sm mb-3">
                {t.slogan}
              </p>

              <p className="text-xs text-[#E2B4C1] font-light max-w-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Middle Column: Liens utiles */}
            <div className={`md:col-span-3 ${isArabic ? "text-right" : "text-left"}`}>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F7DAE7] mb-4">
                {t.quickLinks}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => scrollTo(e, "#hero")}
                    className="text-[#E2B4C1] hover:text-white transition-colors"
                  >
                    {tNav.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#pack"
                    onClick={(e) => scrollTo(e, "#pack")}
                    className="text-[#E2B4C1] hover:text-white transition-colors"
                  >
                    {tNav.pack}
                  </a>
                </li>
                <li>
                  <a
                    href="#produits"
                    onClick={(e) => scrollTo(e, "#produits")}
                    className="text-[#E2B4C1] hover:text-white transition-colors"
                  >
                    {tNav.products}
                  </a>
                </li>
                <li>
                  <a
                    href="#routine"
                    onClick={(e) => scrollTo(e, "#routine")}
                    className="text-[#E2B4C1] hover:text-white transition-colors"
                  >
                    {tNav.routine}
                  </a>
                </li>
                <li>
                  <a
                    href="#commande"
                    onClick={(e) => scrollTo(e, "#commande")}
                    className="text-[#E2B4C1] hover:text-white transition-colors"
                  >
                    {tNav.order}
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column: Suivez-nous & Service Client */}
            <div className={`md:col-span-4 md:-translate-x-6 lg:-translate-x-12 max-w-sm ${isArabic ? "text-right" : "text-left"}`}>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F7DAE7] mb-4">
                {t.followUs}
              </h4>

              {/* Social icons inline */}
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#F7DAE7] hover:bg-[#A55166] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@vinillia_shop?_r=1&_t=ZS-9AM4ON5mJaX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#F7DAE7] hover:bg-[#A55166] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Service Client Info */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs max-w-[280px] sm:max-w-[310px]">
                <span className="text-[11px] uppercase tracking-wider text-[#F7DAE7] font-semibold block mb-1">
                  {t.customerService}
                </span>
                <p className="text-xs text-[#E2B4C1] font-light leading-relaxed">
                  {t.customerServiceText}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E2B4C1]/75 gap-4">
            <p>{t.copyright}</p>
            <div className="flex items-center gap-4 text-[11px] sm:pr-12 lg:pr-16">
              <a href="#conditions" className="hover:text-white transition-colors">
                {t.terms}
              </a>
              <span className="text-white/20">|</span>
              <a href="#confidentialite" className="hover:text-white transition-colors">
                {t.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
