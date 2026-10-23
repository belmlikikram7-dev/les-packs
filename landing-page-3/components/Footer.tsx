"use client";

import Image from "next/image";
import { ShieldCheck, Truck, Headphones, MapPin } from "lucide-react";
import FooterBotanicalFloral from "./FooterBotanicalFloral";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function Footer() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].footer;
  const tNav = TRANSLATIONS[locale].navbar;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="mt-8 px-2 sm:px-4">
      {/* Deep rounded top container in fresh baby pink palette */}
      <div className="relative rounded-t-[32px] sm:rounded-t-[44px] bg-gradient-to-b from-[#FAE6E7] to-[#F7D1D8] text-[#5C1D2E] pt-12 pb-24 sm:pb-12 px-6 sm:px-10 lg:px-14 border-t border-[#F4BBC9] shadow-inner overflow-hidden">
        {/* Decorative Botanical Flowers with Organic Rose Blobs (Positioned at bottom corners) */}
        <div className="absolute -bottom-10 -left-6 pointer-events-none opacity-45 sm:opacity-55 transform -rotate-12 scale-90 sm:scale-100 z-0">
          <FooterBotanicalFloral width={230} height={280} blobColor1="#F5B8C7" blobColor2="#E58FA3" strokeColor="#9B3D55" />
        </div>
        <div className="absolute -bottom-10 -right-6 pointer-events-none opacity-40 sm:opacity-50 transform rotate-6 scale-90 sm:scale-100 z-0">
          <FooterBotanicalFloral width={240} height={290} blobColor1="#F7D1D8" blobColor2="#F2BAC6" strokeColor="#9B3D55" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Main 3 Columns: Logo & Description | Navigation Links | Socials & Support */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#F4BBC9]/70">
            {/* Column 1: Vinilia Logo in Rose & About (md:col-span-5) */}
            <div className="md:col-span-5 flex flex-col items-start">
              <button
                onClick={() => scrollTo("hero")}
                className="flex items-center group cursor-pointer mb-3"
                aria-label="Vinilia Beauty & Skincare"
              >
                <Image
                  src="/logo.png"
                  alt="Vinilia Beauty & Skincare"
                  width={130}
                  height={52}
                  className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </button>
              <p className="text-xs sm:text-sm text-[#7A3347] font-light leading-relaxed max-w-sm mt-1">
                {t.desc}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#5C1D2E] bg-white/70 px-3 py-1.5 rounded-full border border-[#F4BBC9]/70">
                <ShieldCheck className="w-4 h-4 text-[#D45D79]" />
                <span>{t.badge1}</span>
              </div>
            </div>

            {/* Column 2: Navigation Links (md:col-span-3) */}
            <div className="md:col-span-3 flex flex-col items-start">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#5C1D2E] mb-4">
                {t.quickLinksTitle}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#7A3347] font-medium">
                <li>
                  <button
                    onClick={() => scrollTo("hero")}
                    className="hover:text-[#5C1D2E] transition-colors cursor-pointer"
                  >
                    {tNav.home}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("products")}
                    className="hover:text-[#5C1D2E] transition-colors cursor-pointer"
                  >
                    {tNav.products}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("spotlight")}
                    className="hover:text-[#5C1D2E] transition-colors cursor-pointer"
                  >
                    {tNav.gift}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("routine")}
                    className="hover:text-[#5C1D2E] transition-colors cursor-pointer"
                  >
                    {tNav.routine}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("order")}
                    className="hover:text-[#5C1D2E] font-bold text-[#5C1D2E] transition-colors cursor-pointer"
                  >
                    {tNav.order}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Social Media & Service Client (md:col-span-4) */}
            <div className={`md:col-span-4 flex flex-col items-start ${isArabic ? "md:items-start" : "md:items-end"}`}>
              <div className="w-full md:max-w-xs">
                <h4 className={`text-xs font-bold uppercase tracking-wider text-[#5C1D2E] mb-3 ${isArabic ? "md:text-right" : "md:text-right"}`}>
                  {isArabic ? "تابعينا" : "Suivez-nous"}
                </h4>

                {/* Social media buttons: Instagram & TikTok */}
                <div className={`flex items-center gap-3 mb-5 ${isArabic ? "md:justify-end" : "md:justify-end"}`}>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/vinillia_shop?stkn=MWMwczhwenJ3ZWNjOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram @vinillia_shop"
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#5C1D2E] border border-[#F4BBC9] flex items-center justify-center text-[#5C1D2E] hover:text-white transition-all duration-300 hover:scale-110 shadow-xs"
                  >
                    <svg
                      className="w-5 h-5 fill-none stroke-current stroke-2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#5C1D2E] border border-[#F4BBC9] flex items-center justify-center text-[#5C1D2E] hover:text-white transition-all duration-300 hover:scale-110 shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>

                {/* Support Card */}
                <div className="bg-white/70 border border-[#F4BBC9] rounded-2xl p-3.5 text-xs text-[#7A3347] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-[#5C1D2E]">
                    <Headphones className="w-3.5 h-3.5 text-[#D45D79]" />
                    <span>{isArabic ? "خدمة الزبناء 7/7 أيام" : "Support Client 7j/7"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#D45D79]" />
                    <span>{t.badge2}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D45D79]" />
                    <span>{t.badge3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A3347]">
            <p className="text-[12px] font-medium">
              {t.copyright}
            </p>
            <p className="text-[11px] text-[#A56877]">
              {t.slogan}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
