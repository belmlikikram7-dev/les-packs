"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Gift,
  AlertCircle,
  Loader2,
  RotateCcw,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { GIFT_ITEM } from "@/data/products";
import CitySelect from "./CitySelect";
import SiteFloralBackground from "./SiteFloralBackground";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function OrderSection() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].order;

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    ville: "",
    telephone: "",
  });

  const [confirmedOrder, setConfirmedOrder] = useState<{
    prenom: string;
    nom: string;
    ville: string;
    telephone: string;
  } | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.prenom.trim()) {
      newErrors.prenom = t.form.errors.firstName;
    }

    if (!formData.nom.trim()) {
      newErrors.nom = t.form.errors.lastName;
    }

    if (!formData.ville.trim()) {
      newErrors.ville = t.form.errors.city;
    }

    const rawDigits = formData.telephone.replace(/\D/g, "");
    let cleanPhone = rawDigits;
    if (rawDigits.startsWith("212") && rawDigits.length === 12) {
      cleanPhone = "0" + rawDigits.slice(3);
    } else if (rawDigits.startsWith("00212") && rawDigits.length === 14) {
      cleanPhone = "0" + rawDigits.slice(5);
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = t.form.errors.phone;
    } else if (cleanPhone.length < 10) {
      newErrors.telephone = t.form.errors.phoneTooShort;
    } else if (cleanPhone.length > 10) {
      newErrors.telephone = t.form.errors.phoneTooLong;
    } else if (!/^0[5-8]\d{8}$/.test(cleanPhone)) {
      newErrors.telephone = t.form.errors.phoneInvalidFormat;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const orderSnapshot = { ...formData };

    // Simulate backend response
    setTimeout(() => {
      setIsLoading(false);
      setConfirmedOrder(orderSnapshot);
      setIsSuccess(true);

      const el = document.querySelector("#commande");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 900);
  };

  const formatName = (str: string) => {
    if (!str) return "";
    return str
      .trim()
      .split(/\s+/)
      .map((w) => (w.length > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
      .join(" ");
  };

  const clientFullName = confirmedOrder
    ? `${formatName(confirmedOrder.prenom)} ${formatName(confirmedOrder.nom)}`.trim()
    : "";

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  return (
    <section id="commande" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Delicate Floral Background */}
      <SiteFloralBackground opacity={0.65} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3A1826] font-normal leading-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#615458] font-light leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Order Recap & Assurance */}
          <div
            className={`lg:col-span-5 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-[2.2rem] border border-[#ECDCE2] shadow-sm flex flex-col justify-between ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div>
              {/* Pack Showcase - Grand cercle élégant avec la nouvelle photo */}
              <div className="relative mb-6 flex justify-center">
                {/* Lueur d'ambiance douce et discrète */}
                <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 m-auto rounded-full bg-[#E2B4C1]/25 blur-xl pointer-events-none" />

                {/* Grand cercle contenant l'ensemble du pack parfaitement centré */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl shadow-[#A55166]/15 border-2 border-[#E2B4C1]/80 bg-[#F9CDDA] animate-gentle-float group">
                  <Image
                    src="/images/packcadeau.webp"
                    alt="Le Pack Vinilia - 6 Soins Coréens d'Exception & Trousse Offerte"
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 290px, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    priority
                  />
                  {/* Ombrage doux dégradé au bas du cercle pour une profondeur élégante */}
                  <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#E2A8B6]/30 via-transparent to-transparent pointer-events-none rounded-b-full" />
                </div>
              </div>

              <h3 className="font-serif text-2xl text-[#3A1826] font-normal mb-1">
                {t.recap.title}
              </h3>
              <p className="text-xs text-[#7B6E73] font-light mb-5">
                {t.recap.subtitle}
              </p>

              {/* Free Gift: Sol de Janeiro Trousse (294 DH barré -> 0 DH) */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F7DAE7]/40 via-[#FDF6F9] to-[#F7DAE7]/40 border border-[#E2B4C1] flex items-center gap-3 shadow-xs">
                <div className="relative w-12 h-12 shrink-0 rounded-xl overflow-hidden bg-white/80 p-0.5 border border-[#E2B4C1]/60">
                  <Image
                    src={GIFT_ITEM.image}
                    alt={GIFT_ITEM.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-[#A55166] bg-[#F7DAE7] px-2 py-0.5 rounded-full inline-flex items-center gap-1 border border-[#E2B4C1]/50">
                      <Gift className="w-2.5 h-2.5 animate-gift-pump" />
                      {t.recap.giftBadge}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-[#3A1826] mt-0.5 truncate">
                    {t.recap.giftName}
                  </h4>
                  <p className="text-[10px] text-[#7A6C71] truncate">
                    {t.recap.giftSub}
                  </p>
                </div>
                <div className={`shrink-0 flex items-center ${isArabic ? "text-left" : "text-right"}`}>
                  <span className="text-xs sm:text-sm font-black text-[#16A34A] uppercase tracking-wider whitespace-nowrap">
                    {t.recap.freeTag}
                  </span>
                </div>
              </div>

              {/* Total Pack Price Box */}
              <div className="mt-4 pt-3.5 border-t border-[#F0DFE6] flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#3A1826] font-bold block">
                    {t.recap.totalTitle}
                  </span>
                  <span className="text-[10px] text-[#8C7D82] font-light">
                    {t.recap.totalSub}
                  </span>
                </div>
                <div className={`shrink-0 flex flex-col ${isArabic ? "text-left items-start" : "text-right items-end"}`}>
                  <span className="text-xs text-[#9A8990] line-through font-light whitespace-nowrap" dir="ltr">
                    <bdi dir="ltr">{t.recap.totalOriginalPrice}</bdi>
                  </span>
                  <span className="text-2xl sm:text-3xl font-sans font-bold text-[#A55166] whitespace-nowrap" dir="ltr">
                    <bdi dir="ltr">{t.recap.totalSpecialPrice}</bdi>
                  </span>
                </div>
              </div>

              {/* Badges livraison gratuite */}
              <div className="mt-3.5 pt-3 border-t border-[#F7DAE7]/80 flex items-center justify-between text-[11px] text-[#75646A]">
                <span className="flex items-center gap-1 text-[#16A34A] font-semibold">
                  {t.recap.freeShipping}
                </span>
                <span>{t.recap.cod}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Form / Success State */}
          <div className="lg:col-span-7 bg-white rounded-[2.2rem] border border-[#ECDCE2] p-8 sm:p-10 shadow-lg shadow-[#D8B4C0]/15 relative">
            {isSuccess && confirmedOrder ? (
              <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-300">
                {/* Icône de succès animée */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4">
                  <div className="absolute inset-0 rounded-full bg-[#16A34A]/15 animate-ping opacity-75" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border-2 border-[#86EFAC] text-[#15803D] flex items-center justify-center shadow-lg shadow-[#16A34A]/10">
                    <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10" />
                  </div>
                </div>

                {/* Badge statut validé */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#15803D] text-[11px] font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  {t.confirmation.badge}
                </div>

                {/* Titre personnalisé avec le nom et prénom saisis */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3A1826] font-normal leading-tight mb-2">
                  {t.confirmation.thankYou}{" "}
                  <span className="font-semibold text-[#A55166]">{clientFullName}</span> !
                </h3>

                <p className="text-xs sm:text-sm text-[#615458] font-light max-w-md mx-auto leading-relaxed">
                  {t.confirmation.recorded}
                </p>

                {/* Alerte En attente d'appel / Appel de confirmation */}
                <div
                  className={`mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FAF5F7] via-[#FFF9FB] to-[#FDF4F8] border border-[#E8CAD5] ${
                    isArabic ? "text-right" : "text-left"
                  } shadow-sm`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A55166] to-[#8E3F53] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <PhoneCall className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#3A1826] uppercase tracking-wide">
                        {t.confirmation.callWaitingTitle}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#5C4D53] font-light leading-relaxed">
                        {t.confirmation.callWaitingText1}{" "}
                        <strong className="font-semibold text-[#A55166] whitespace-nowrap bg-white/80 px-2 py-0.5 rounded-md border border-[#E2B4C1]/60 font-mono">
                          <bdi dir="ltr">{confirmedOrder.telephone}</bdi>
                        </strong>{" "}
                        {t.confirmation.callWaitingText2}{" "}
                        <strong className="font-semibold text-[#3A1826]">
                          {confirmedOrder.ville}
                        </strong>.
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-[#E2B4C1]/50 text-[11px] text-[#7A4556] font-medium shadow-2xs">
                        <span>{t.confirmation.phoneTip}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Récapitulatif clair de la commande */}
                <div
                  className={`mt-5 bg-[#FAF8F6] rounded-2xl p-4 sm:p-5 border border-[#ECDCE2] ${
                    isArabic ? "text-right" : "text-left"
                  } text-xs space-y-2.5`}
                >
                  <div className="flex justify-between items-center pb-2.5 border-b border-[#F0DFE6]">
                    <span className="text-[#7A6C71] font-medium">{t.confirmation.destinataire}</span>
                    <span className="font-semibold text-[#3A1826]">{clientFullName}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-[#F0DFE6]">
                    <span className="text-[#7A6C71] font-medium">{t.confirmation.city}</span>
                    <span className="font-semibold text-[#3A1826]">{confirmedOrder.ville}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-[#F0DFE6]">
                    <span className="text-[#7A6C71] font-medium">{t.confirmation.phone}</span>
                    <span className="font-semibold text-[#3A1826] font-mono">
                      <bdi dir="ltr">{confirmedOrder.telephone}</bdi>
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-[#F0DFE6]">
                    <span className="text-[#7A6C71] font-medium">{t.confirmation.article}</span>
                    <span className="font-semibold text-[#A55166]">
                      {t.confirmation.articleValue}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#3A1826]">{t.confirmation.total}</span>
                    <span className="font-bold font-sans text-base sm:text-lg text-[#A55166] whitespace-nowrap">
                      <bdi dir="ltr">{t.recap.totalSpecialPrice}</bdi>{" "}
                      <span className="text-[11px] font-sans text-[#16A34A] font-semibold">
                        {t.confirmation.shippingFree}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setConfirmedOrder(null);
                      setFormData({ prenom: "", nom: "", ville: "", telephone: "" });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#DDC6CF] text-xs uppercase font-medium tracking-wider text-[#7B4655] hover:bg-[#FAF0F4] transition-colors active:scale-95 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.confirmation.newOrderBtn}</span>
                  </button>

                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      const heroEl = document.querySelector("#hero");
                      if (heroEl) heroEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#A55166] text-white text-xs uppercase font-medium tracking-wider hover:bg-[#8E3F53] transition-colors active:scale-95 shadow-sm cursor-pointer"
                  >
                    {isArabic ? "العودة إلى أعلى الصفحة" : "Retourner à l'accueil"}
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`space-y-6 ${isArabic ? "text-right" : "text-left"}`}
              >
                <div>
                  <h3 className="font-serif text-2xl text-[#3A1826] font-normal mb-1">
                    {t.form.title}
                  </h3>
                  <p className="text-xs text-[#7A6C71] font-light">
                    {t.form.subtitle}
                  </p>
                </div>

                {/* Grid Prénom & Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Prénom */}
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#3A1826] mb-2"
                    >
                      {t.form.firstNameLabel} <span className="text-[#A55166]">*</span>
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      placeholder={t.form.firstNamePlaceholder}
                      value={formData.prenom}
                      onChange={(e) => handleInputChange("prenom", e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-[#FAF8F6] border text-sm text-[#3A1826] placeholder-[#A4969C] focus:outline-none focus:ring-2 focus:ring-[#D38C9D]/30 focus:border-[#A55166] transition-all ${
                        isArabic ? "text-right" : "text-left"
                      } ${
                        errors.prenom ? "border-rose-400 bg-rose-50/30" : "border-[#E2B4C1]/60"
                      }`}
                    />
                    {errors.prenom && (
                      <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-600 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.prenom}
                      </p>
                    )}
                  </div>

                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#3A1826] mb-2"
                    >
                      {t.form.lastNameLabel} <span className="text-[#A55166]">*</span>
                    </label>
                    <input
                      id="nom"
                      type="text"
                      placeholder={t.form.lastNamePlaceholder}
                      value={formData.nom}
                      onChange={(e) => handleInputChange("nom", e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-[#FAF8F6] border text-sm text-[#3A1826] placeholder-[#A4969C] focus:outline-none focus:ring-2 focus:ring-[#D38C9D]/30 focus:border-[#A55166] transition-all ${
                        isArabic ? "text-right" : "text-left"
                      } ${
                        errors.nom ? "border-rose-400 bg-rose-50/30" : "border-[#E2B4C1]/60"
                      }`}
                    />
                    {errors.nom && (
                      <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-600 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.nom}
                      </p>
                    )}
                  </div>
                </div>

                {/* Ville */}
                <div>
                  <label
                    htmlFor="ville"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#3A1826] mb-2"
                  >
                    {t.form.cityLabel} <span className="text-[#A55166]">*</span>
                  </label>
                  <CitySelect
                    value={formData.ville}
                    onChange={(val) => handleInputChange("ville", val)}
                    error={errors.ville}
                  />
                  {errors.ville && (
                    <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-600 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.ville}
                    </p>
                  )}
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#3A1826] mb-2"
                  >
                    {t.form.phoneLabel} <span className="text-[#A55166]">*</span>
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    placeholder={t.form.phonePlaceholder}
                    value={formData.telephone}
                    onChange={(e) => handleInputChange("telephone", e.target.value)}
                    dir="ltr"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#FAF8F6] border text-sm text-[#3A1826] placeholder-[#A4969C] focus:outline-none focus:ring-2 focus:ring-[#D38C9D]/30 focus:border-[#A55166] transition-all text-left font-mono ${
                      errors.telephone ? "border-rose-400 bg-rose-50/30" : "border-[#E2B4C1]/60"
                    }`}
                  />
                  {errors.telephone && (
                    <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-600 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.telephone}
                    </p>
                  )}
                  <p className="mt-1.5 text-[11px] text-[#8C7D82]">
                    {isArabic ? (
                      <>
                        رقم هاتفك المكون من 10 أرقام (مثال: <span dir="ltr" className="font-mono inline-block font-medium">06 12 34 56 78</span>) لتأكيد تفاصيل الشحن والتوصيل.
                      </>
                    ) : (
                      <>
                        Numéro de téléphone à 10 chiffres (ex: <span dir="ltr" className="font-mono inline-block font-medium">06 12 34 56 78</span>) pour confirmer votre expédition.
                      </>
                    )}
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#A55166] to-[#8E3F53] hover:from-[#8E3F53] hover:to-[#3A1826] text-white text-xs uppercase font-medium tracking-wider shadow-xl shadow-[#A55166]/30 hover:shadow-[#A55166]/40 transition-all duration-300 active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#F7DAE7]" />
                        <span>{t.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-2">
                          <span>{t.form.submitButton}</span>
                          <span className="opacity-70">•</span>
                          <span className="whitespace-nowrap font-bold">
                            <bdi dir="ltr">{t.recap.totalSpecialPrice}</bdi>
                          </span>
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 text-[#F7DAE7] transition-transform ${
                            isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                          }`}
                        />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-[#8E7E84] flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A55166]" />
                    {t.form.notice}
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
