"use client";

import { useState } from "react";
import Image from "next/image";
import CitySelect from "./CitySelect";
import {
  CheckCircle2,
  Phone,
  User,
  ArrowUpRight,
  AlertCircle,
  Gift,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import { PACK_INFO } from "@/data/products";

export default function OrderSection() {
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].order;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Casablanca");
  const [customCity, setCustomCity] = useState("");
  const quantity = 1;
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalPrice = PACK_INFO.pricePromo;
  const totalSavings = PACK_INFO.savings;

  const validatePhone = (p: string): { isValid: boolean; error?: string } => {
    const clean = p.replace(/\D/g, "");

    if (!clean) {
      return { isValid: false, error: t.errors.phoneRequired };
    }

    if (clean.length < 10) {
      return { isValid: false, error: t.errors.phoneTooShort };
    }

    if (clean.length > 10) {
      return { isValid: false, error: t.errors.phoneTooLong };
    }

    if (!/^0[567]/.test(clean)) {
      return {
        isValid: false,
        error: isArabic
          ? "يجب أن يبدأ رقم الهاتف بـ 06 أو 07 أو 05."
          : "Le numéro doit commencer par 06, 07 ou 05.",
      };
    }

    if (
      /^0[567](\d)\1{7}$/.test(clean) ||
      /^(\d)\1{9}$/.test(clean) ||
      clean === "0612345678" ||
      clean === "0712345678" ||
      clean === "0512345678" ||
      clean === "0698765432"
    ) {
      return { isValid: false, error: t.errors.phoneInvalid };
    }

    return { isValid: true };
  };

  const effectiveCity = city === "Autre" ? customCity.trim() : city;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = t.errors.fullNameRequired;
    }

    const phoneCheck = validatePhone(phone);
    if (!phoneCheck.isValid) {
      newErrors.phone = phoneCheck.error || t.errors.phoneInvalid;
    }

    if (!effectiveCity) {
      newErrors.city = t.errors.cityRequired;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFullName("");
    setPhone("");
    setCity("Casablanca");
    setCustomCity("");
    setErrors({});
    setIsSuccess(false);
  };

  const whatsappMessage = encodeURIComponent(
    isArabic
      ? `السلام عليكم، بغيت نأكد الطلب ديالي ديال باك PureGlow (6 منتجات + هدية سول دي جانيرو بالمجان) :\n- الاسم : ${fullName}\n- الهاتف : ${phone}\n- المدينة : ${effectiveCity}\n- الكمية : ${quantity} باك\n- المجموع للدفع عند الاستلام : ${totalPrice} درهم (توصيل فابور)`
      : `Bonjour, je souhaite confirmer ma commande du Pack Skincare PureGlow (6 Soins + Cadeau Sol de Janeiro) :\n- Nom : ${fullName}\n- Tél : ${phone}\n- Ville : ${effectiveCity}\n- Quantité : ${quantity} Pack(s)\n- Total à payer à la livraison : ${totalPrice} DH (Livraison Gratuite)`
  );

  return (
    <section id="order" className="px-3 sm:px-6 md:px-8 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-[#0F3554] text-xs font-semibold uppercase tracking-wider border border-[#BAE0F8] shadow-xs mb-3">
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury tracking-tight text-[#0F3554]">
            {t.titlePrefix} <span className="font-bold text-[#0284C7]">{t.titleHighlight}</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#4B6B88] max-w-md mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Order Card */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-white border border-[#BAE0F8] shadow-xl shadow-sky-900/5 overflow-hidden p-6 sm:p-10 lg:p-12">
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E0F2FE]/40 blur-3xl pointer-events-none" />

          {isSuccess ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="text-center py-6 sm:py-10 space-y-6 max-w-xl mx-auto" dir={dir}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E0F2FE] text-[#0284C7] mx-auto flex items-center justify-center border-2 border-[#BAE0F8] shadow-inner animate-in zoom-in duration-300">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-bold mb-2">
                  {t.success.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0F3554]">
                  {t.success.thankYou}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4B6B88] leading-relaxed">
                  {t.success.desc}
                </p>
              </div>

              {/* Order Recap Box */}
              <div className="bg-[#F0F7FD] rounded-2xl p-5 border border-[#BAE0F8] text-left text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between py-1 border-b border-[#BAE0F8]/60">
                  <span className="text-[#5A7B9A]">{t.success.client}</span>
                  <span className="font-bold text-[#0F3554]">{fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#BAE0F8]/60">
                  <span className="text-[#5A7B9A]">{t.success.phone}</span>
                  <span className="font-bold text-[#0F3554]">{phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#BAE0F8]/60">
                  <span className="text-[#5A7B9A]">{t.success.city}</span>
                  <span className="font-bold text-[#0F3554]">{effectiveCity}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#BAE0F8]/60">
                  <span className="text-[#5A7B9A]">{isArabic ? "الكمية :" : "Quantité :"}</span>
                  <span className="font-bold text-[#0F3554]">{quantity} Pack(s)</span>
                </div>
                <div className="flex justify-between py-1 pt-2 text-[#0284C7] font-bold text-sm sm:text-base">
                  <span>{t.success.totalToPay}</span>
                  <span>{totalPrice} DH</span>
                </div>
                <div className="text-[11px] text-[#0284C7] font-semibold text-center pt-1">
                  ✓ {t.success.freeShipping}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/212607956607?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                  </svg>
                  <div className="flex flex-col text-left rtl:text-right">
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">Confirmation WhatsApp</span>
                    <span className="text-sm font-extrabold tracking-wide">06 07 95 66 07</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F3554] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  {t.success.newOrder}
                </button>
              </div>
            </div>
          ) : (
            /* ORDER FORM & SUMMARY */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" dir={dir}>
              {/* Left Column: Form Fields */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0F3554] mb-1.5">
                    {t.form.fullNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B9A]" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.form.fullNamePlaceholder}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#0F3554] placeholder-slate-400 bg-white focus:outline-none transition-all ${
                        errors.fullName
                          ? "border-red-400 focus:ring-2 focus:ring-red-200"
                          : "border-[#BAE0F8] focus:border-[#0284C7] focus:ring-2 focus:ring-[#BAE0F8]"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0F3554] mb-1.5">
                    {t.form.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B9A]" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.form.phonePlaceholder}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#0F3554] placeholder-slate-400 bg-white focus:outline-none transition-all ${
                        errors.phone
                          ? "border-red-400 focus:ring-2 focus:ring-red-200"
                          : "border-[#BAE0F8] focus:border-[#0284C7] focus:ring-2 focus:ring-[#BAE0F8]"
                      }`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  ) : (
                    <p className="mt-1 text-[11px] text-[#5A7B9A]">
                      {t.form.phoneHint}
                    </p>
                  )}
                </div>

                {/* City Select */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0F3554] mb-1.5">
                    {t.form.cityLabel} <span className="text-red-500">*</span>
                  </label>
                  <CitySelect
                    value={city}
                    onChange={(c) => {
                      setCity(c);
                      if (c !== "Autre") setCustomCity("");
                    }}
                    error={errors.city}
                  />

                  {/* Manual City input if "Autre" chosen */}
                  {city === "Autre" && (
                    <div className="mt-2.5 animate-in fade-in duration-200">
                      <input
                        type="text"
                        value={customCity}
                        onChange={(e) => setCustomCity(e.target.value)}
                        placeholder={t.form.customCityPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-[#BAE0F8] text-sm text-[#0F3554] placeholder-slate-400 bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#BAE0F8]"
                        autoFocus
                      />
                    </div>
                  )}

                  {errors.city && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-[#0F3554] hover:bg-[#0B273F] text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-900/25 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70 group"
                  >
                    <span>{isSubmitting ? t.form.submitting : t.form.submitBtn}</span>
                    <div className="w-6 h-6 rounded-full bg-[#38BDF8] text-[#0F3554] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-[#5A7B9A]">
                    {t.form.priceNote}
                  </p>
                </div>
              </form>

              {/* Right Column: Order Recap & Trust Badges */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {/* Pack Visual & Price Summary Card */}
                <div className="rounded-3xl bg-[#F0F7FD] border border-[#BAE0F8] p-5 sm:p-6 space-y-4">
                  {/* Thumbnail Hero Pack */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-[#BAE0F8] shadow-sm">
                    <Image
                      src="/images/pack-hero-complete-v2.webp"
                      alt="Pack Skincare PureGlow 6 Soins + Cadeau Sol de Janeiro"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#0F3554] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md z-10 flex items-center gap-1.5">
                      <span>{isArabic ? "6 منتجات + هدية بالمجان" : "6 Soins + Cadeau Offert"}</span>
                      <Gift className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    </div>
                  </div>

                  {/* Title & Gift Info */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0F3554]">
                      {PACK_INFO.title}
                    </h4>
                    <p className="text-xs text-[#4B6B88] mt-1">
                      {PACK_INFO.subtitle}
                    </p>
                    <div className="mt-2.5 flex items-center gap-2 p-2 rounded-xl bg-white border border-[#BAE0F8] text-xs font-semibold text-[#0284C7]">
                      <Gift className="w-4 h-4 text-[#0284C7] shrink-0" />
                      <span>{isArabic ? "هدية سول دي جانيرو بالمجان" : "Cadeau Sol de Janeiro 100% Inclus"}</span>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="pt-3 border-t border-[#BAE0F8] space-y-2 text-xs">
                    <div className="flex justify-between text-[#5A7B9A]">
                      <span>{isArabic ? "السعر الأصلي :" : "Prix habituel :"}</span>
                      <span className="line-through">{PACK_INFO.priceOriginal} DH</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>{isArabic ? "توفير العرض :" : "Économie immédiate :"}</span>
                      <span>-{totalSavings} DH</span>
                    </div>
                    <div className="flex justify-between text-[#0284C7] font-semibold">
                      <span>{isArabic ? "مصاريف الشحن :" : "Frais de livraison :"}</span>
                      <span>0 DH (Gratuit)</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#BAE0F8] text-sm sm:text-base font-bold text-[#0F3554]">
                      <span>{isArabic ? "المجموع للدفع :" : "Total à régler :"}</span>
                      <span className="text-[#0284C7]">{totalPrice} DH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
