"use client";

import { useState } from "react";
import Image from "next/image";
import CitySelect from "./CitySelect";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Phone,
  User,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function OrderSection() {
  const { locale, isArabic, dir } = useLanguage();
  const t = TRANSLATIONS[locale].order;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Casablanca");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const price = 1300;

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

    // Reject fake dummy numbers like 0600000000, 0700000000, 0611111111, etc.
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

    if (!city.trim() || city === "Autre" || city === "أخرى") {
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
    }, 1000);
  };

  return (
    <section id="order" className="px-3 sm:px-6 md:px-8 py-10">
      {/* Container in Fresh Baby Pink & Snow Palette */}
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#FAE6E7] via-[#F7D1D8]/60 to-[#FAE6E7] text-[#5C1D2E] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xl border border-[#F4BBC9]/70">
        {/* Subtle background glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F4BBC9]/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/60 blur-3xl pointer-events-none" />

        {isSuccess ? (
          /* Confirmation State */
          <div className="max-w-xl mx-auto text-center py-12 px-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-[#F4BBC9] shadow-xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#5C1D2E] text-white mx-auto flex items-center justify-center mb-4 shadow-lg shadow-[#5C1D2E]/25">
              <CheckCircle2 className="w-10 h-10 text-[#F7D1D8]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#5C1D2E]">
              {isArabic ? "تم تسجيل طلبكِ بنجاح ! 🎉" : "Commande Confirmée avec Succès ! 🎉"}
            </h3>
            <p className="mt-2 text-[#D45D79] text-sm font-semibold">
              {t.success.desc}
            </p>
            <div className="mt-6 p-5 rounded-2xl bg-[#F7EEED] border border-[#F7D1D8] text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between">
                <span className="text-[#7A3347]">{t.success.client}</span>
                <span className="font-semibold text-[#5C1D2E]">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A3347]">{t.success.phone}</span>
                <span className="font-semibold text-[#5C1D2E]" dir="ltr">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A3347]">{t.success.city}</span>
                <span className="font-semibold text-[#5C1D2E]">{city}</span>
              </div>
              <div className="flex justify-between border-t border-[#F7D1D8] pt-2">
                <span className="text-[#7A3347]">{t.success.totalToPay}</span>
                <span className="font-extrabold text-[#5C1D2E] text-base">
                  {price} {isArabic ? "درهم" : "DH"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A3347]">{isArabic ? "التوصيل :" : "Livraison :"}</span>
                <span className="font-semibold text-[#D45D79]">{t.success.freeShipping}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/212600000000?text=${encodeURIComponent(
                  isArabic
                    ? `مرحباً، قمت بطلب باك العناية بالبشرة (الاسم: ${fullName}، الهاتف: ${phone}، المدينة: ${city})`
                    : `Bonjour, j'ai commandé le Pack Skincare (Nom: ${fullName}, Tél: ${phone}, Ville: ${city})`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>{t.success.confirmWhatsapp}</span>
                <ArrowUpRight className={`w-4 h-4 ${isArabic ? "rotate-[-90deg]" : ""}`} />
              </a>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFullName("");
                  setPhone("");
                  setCity("Casablanca");
                }}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FAE6E7] text-[#5C1D2E] font-medium text-sm border border-[#F7D1D8] transition-all cursor-pointer"
              >
                {t.success.newOrder}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Centered Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 relative z-10">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-[#5C1D2E] text-xs font-semibold border border-[#F7D1D8] shadow-xs mb-3">
                <span>{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#5C1D2E]">
                {t.titlePrefix} <span className="font-bold">{t.titleHighlight}</span>
              </h2>

              <p className="mt-3 text-[#7A3347] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                {t.subtitle}
              </p>
            </div>

            {/* Side-by-side Content: Left = Bouquet/Image, Right = Form (Both Arabic & French) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10" dir="ltr">
              {/* Left Column (Gauche): Pack Bouquet Showcase & Badges (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col items-center" dir={dir}>
                {/* Pack Bouquet Visual Showcase with ambient shadow */}
                <div className="relative w-full flex justify-center items-center my-auto">
                  {/* Ambient Soft Glow Behind Bouquet */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F4BBC9]/40 via-white/50 to-[#F4BBC9]/30 rounded-full blur-2xl pointer-events-none transform scale-90" />

                  {/* The Bouquet Image Container */}
                  <div className="relative w-full max-w-[310px] sm:max-w-[340px] aspect-[765/1024] drop-shadow-[0_20px_35px_rgba(201,127,145,0.3)] transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/images/pack-bouquet.webp"
                      alt="Bouquet Pack Skincare Vinilia"
                      fill
                      priority
                      className="object-contain"
                    />

                    {/* Floating Price Pill */}
                    <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#F7D1D8] flex items-center gap-1.5">
                      <span className="text-[11px] text-[#A56877] line-through font-medium">
                        1900 {isArabic ? "درهم" : "DH"}
                      </span>
                      <span className="text-sm font-extrabold text-[#5C1D2E]">
                        1300 {isArabic ? "درهم" : "DH"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="w-full mt-6 pt-5 border-t border-[#F7D1D8] grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-2.5 rounded-2xl bg-white/80 border border-[#F7D1D8] flex flex-col items-center shadow-xs">
                    <Truck className="w-4 h-4 text-[#D45D79] mb-1" />
                    <span className="text-[11px] font-bold text-[#5C1D2E]">{t.trust.freeShipping}</span>
                    <span className="text-[10px] text-[#7A3347]">{t.trust.shippingDelay}</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/80 border border-[#F7D1D8] flex flex-col items-center shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-[#D45D79] mb-1" />
                    <span className="text-[11px] font-bold text-[#5C1D2E]">{t.trust.cod}</span>
                    <span className="text-[10px] text-[#7A3347]">{t.trust.codSub}</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/80 border border-[#F7D1D8] flex flex-col items-center shadow-xs">
                    <RotateCcw className="w-4 h-4 text-[#D45D79] mb-1" />
                    <span className="text-[11px] font-bold text-[#5C1D2E]">{t.trust.original}</span>
                    <span className="text-[10px] text-[#7A3347]">{t.trust.originalSub}</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Droite): Cash On Delivery Form (lg:col-span-7) */}
              <div
                className="lg:col-span-7 bg-white text-[#5C1D2E] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#F7D1D8]"
                dir={dir}
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#FAE6E7]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#5C1D2E]">
                      {isArabic ? "استمارة الطلب السريع" : "Formulaire de Commande Rapide"}
                    </h3>
                    <p className="text-xs text-[#7A3347]">
                      {isArabic
                        ? "املئي معلوماتكِ، وسنقوم بالتوصيل إلى باب منزلك"
                        : "Remplissez vos informations, nous vous livrons à domicile"}
                    </p>
                  </div>
                  <div className={isArabic ? "text-left" : "text-right"}>
                    <span className="text-xs text-[#7A3347]">
                      {isArabic ? "المجموع :" : "Total :"}
                    </span>
                    <p className="text-2xl font-extrabold text-[#5C1D2E]">
                      {price} {isArabic ? "درهم" : "DH"}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#5C1D2E] mb-1.5">
                      {t.form.fullNameLabel} *
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 ${
                          isArabic ? "right-0 pr-3.5" : "left-0 pl-3.5"
                        } flex items-center pointer-events-none text-[#A56877]`}
                      >
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={t.form.fullNamePlaceholder}
                        className={`w-full ${
                          isArabic ? "pr-10 pl-4" : "pl-10 pr-4"
                        } py-3 rounded-2xl bg-[#F7EEED]/60 border text-sm text-[#5C1D2E] placeholder:text-[#A56877] focus:outline-none focus:ring-2 focus:ring-[#5C1D2E] transition ${
                          errors.fullName ? "border-red-400 bg-red-50/30" : "border-[#F7D1D8]"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#5C1D2E] mb-1.5">
                      {t.form.phoneLabel} *
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 ${
                          isArabic ? "right-0 pr-3.5" : "left-0 pl-3.5"
                        } flex items-center pointer-events-none text-[#A56877]`}
                      >
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        maxLength={10}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setPhone(digits);
                          if (errors.phone) {
                            setErrors((prev) => {
                              const u = { ...prev };
                              delete u.phone;
                              return u;
                            });
                          }
                        }}
                        placeholder={t.form.phonePlaceholder}
                        className={`w-full ${
                          isArabic ? "pr-10 pl-4" : "pl-10 pr-4"
                        } py-3 rounded-2xl bg-[#F7EEED]/60 border text-sm text-[#5C1D2E] placeholder:text-[#A56877] focus:outline-none focus:ring-2 focus:ring-[#5C1D2E] transition ${
                          errors.phone ? "border-red-400 bg-red-50/30" : "border-[#F7D1D8]"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-semibold text-[#5C1D2E] mb-1.5">
                      {t.form.cityLabel} *
                    </label>
                    <CitySelect
                      value={city}
                      onChange={(c) => {
                        setCity(c);
                        if (errors.city) {
                          setErrors((prev) => {
                            const u = { ...prev };
                            delete u.city;
                            return u;
                          });
                        }
                      }}
                      error={errors.city}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.city}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-[#5C1D2E] hover:bg-[#431420] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-[#5C1D2E]/25 hover:shadow-xl transition-all flex items-center justify-center gap-3 group disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>
                          {isArabic
                            ? `تأكيد الطلب الآن • ${price} درهم`
                            : `Confirmer la Commande • ${price} DH`}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          <ArrowUpRight className={`w-4 h-4 ${isArabic ? "rotate-[-90deg]" : ""}`} />
                        </div>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#7A3347] mt-2 font-medium">
                    {isArabic
                      ? "بياناتكِ الشخصية محمية ومحفوظة بسرية وأمان 100%."
                      : "Vos données personnelles sont 100% sécurisées et confidentielles."}
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
