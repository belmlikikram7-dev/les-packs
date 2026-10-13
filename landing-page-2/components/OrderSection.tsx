"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";
import CitySelect from "@/components/CitySelect";
import {
  ShoppingBag,
  CheckCircle2,
  AlertCircle,
  Truck,
  ShieldCheck,
  Banknote,
  Gift,
  ArrowRight,
  Loader2,
} from "lucide-react";

export default function OrderSection() {
  const { locale, isArabic } = useLanguage();
  const t = TRANSLATIONS[locale].order;

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    ville: "",
    telephone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation function with strict 10 digits check
  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.prenom.trim()) {
      errs.prenom = t.form.errors.firstName;
    }
    if (!formData.nom.trim()) {
      errs.nom = t.form.errors.lastName;
    }
    if (!formData.ville.trim()) {
      errs.ville = t.form.errors.city;
    }

    const cleanPhone = formData.telephone.replace(/\s+/g, "");
    if (!cleanPhone) {
      errs.telephone = t.form.errors.phone;
    } else if (!/^\d+$/.test(cleanPhone)) {
      errs.telephone = t.form.errors.phoneInvalidFormat;
    } else if (cleanPhone.length < 10) {
      errs.telephone = t.form.errors.phoneTooShort;
    } else if (cleanPhone.length > 10) {
      errs.telephone = t.form.errors.phoneTooLong;
    } else if (!cleanPhone.startsWith("0")) {
      errs.telephone = t.form.errors.phoneInvalidFormat;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="commande" className="py-20 bg-[#FAF7EE] text-[#310F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#74070D]/10 border border-[#74070D]/20 text-[#74070D] text-xs uppercase font-bold tracking-widest mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#310F10] leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#46462A] font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Success Modal / Card */}
        {isSuccess ? (
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#FAF7EE] border-2 border-[#74070D] shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#74070D] text-[#F3E3B2] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#46462A] text-[#F3E3B2] text-xs font-bold uppercase tracking-wider inline-block mb-3">
              {t.confirmation.badge}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#310F10] mb-2">
              {t.confirmation.thankYou}
            </h3>
            <p className="text-sm text-[#46462A] leading-relaxed mb-6">
              {t.confirmation.recorded}
            </p>

            <div className="p-4 rounded-2xl bg-[#F4EEDC] border border-[#F3E3B2] text-xs space-y-2 mb-6 text-left">
              <div className="flex justify-between">
                <span className="text-[#46462A]">{t.confirmation.article} :</span>
                <span className="font-bold text-[#310F10]">{t.confirmation.articleValue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#46462A]">{t.confirmation.total} :</span>
                <span className="font-bold text-[#74070D] text-sm" dir="ltr">
                  <bdi dir="ltr">{t.recap.totalSpecialPrice}</bdi>
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({ prenom: "", nom: "", ville: "", telephone: "" });
              }}
              className="px-6 py-3 rounded-full bg-[#46462A] text-[#F3E3B2] text-xs font-bold uppercase tracking-wider hover:bg-[#310F10] transition-colors"
            >
              {t.confirmation.orderNew}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            
            {/* Left Card : Pack Recap + Gifts + Price Summary */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#46462A] to-[#310F10] text-[#FAF7EE] border-2 border-[#F3E3B2]/30 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F3E3B2]/20 mb-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#F3E3B2]">
                    {t.recap.packTitle}
                  </h3>
                  <p className="text-xs text-[#FAF7EE]/70 mt-0.5">
                    {t.recap.packDesc}
                  </p>
                </div>
              </div>

              {/* Free Gifts Box */}
              <div className="p-4 rounded-2xl bg-[#74070D]/90 border border-[#F3E3B2]/40 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F3E3B2] flex items-center gap-1.5">
                    <Gift className="w-4 h-4" />
                    {t.recap.giftsTitle}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F3E3B2] text-[#74070D] text-[10px] font-black uppercase">
                    {t.recap.freeGiftLabel}
                  </span>
                </div>
                <ul className="text-xs space-y-1.5 text-white/95">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3E3B2]" />
                    <span>Fino Premium Touch Hair Mask (Shiseido)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3E3B2]" />
                    <span>Vaseline Lip Therapy (Original Care)</span>
                  </li>
                </ul>
              </div>

              {/* Total & Price Box */}
              <div className="pt-4 border-t border-[#F3E3B2]/20">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm uppercase font-bold text-[#F3E3B2]">
                    {t.recap.totalTitle}
                  </span>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-xs line-through text-[#F3E3B2]/60" dir="ltr">
                      <bdi dir="ltr">{t.recap.totalOriginalPrice}</bdi>
                    </span>
                    <span className="text-3xl font-extrabold text-white" dir="ltr">
                      <bdi dir="ltr">{t.recap.totalSpecialPrice}</bdi>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#F3E3B2]/80 pt-3 border-t border-white/10">
                  <span className="flex items-center gap-1 font-semibold text-green-300">
                    {t.recap.freeShipping}
                  </span>
                  <span>{t.recap.cod}</span>
                </div>
              </div>

            </div>

            {/* Right Card : Order Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FAF7EE] border-2 border-[#F3E3B2] shadow-xl">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#310F10] mb-1">
                  {t.form.title}
                </h3>
                <p className="text-xs text-[#46462A]">
                  {t.form.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#310F10] mb-1.5">
                      {t.form.firstNameLabel} *
                    </label>
                    <input
                      type="text"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      placeholder={t.form.firstNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EEDC] border border-[#F3E3B2] text-[#310F10] text-sm focus:border-[#74070D] focus:bg-white transition-all"
                    />
                    {errors.prenom && (
                      <p className="mt-1 text-[11px] text-[#74070D] flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.prenom}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#310F10] mb-1.5">
                      {t.form.lastNameLabel} *
                    </label>
                    <input
                      type="text"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      placeholder={t.form.lastNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EEDC] border border-[#F3E3B2] text-[#310F10] text-sm focus:border-[#74070D] focus:bg-white transition-all"
                    />
                    {errors.nom && (
                      <p className="mt-1 text-[11px] text-[#74070D] flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.nom}
                      </p>
                    )}
                  </div>
                </div>

                {/* City Select with Input & Live Search */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#310F10] mb-1.5">
                    {t.form.cityLabel} *
                  </label>
                  <CitySelect
                    value={formData.ville}
                    onChange={(city) => {
                      setFormData({ ...formData, ville: city });
                      if (errors.ville) {
                        setErrors((prev) => {
                          const n = { ...prev };
                          delete n.ville;
                          return n;
                        });
                      }
                    }}
                    error={errors.ville}
                  />
                  {errors.ville && (
                    <p className="mt-1 text-[11px] text-[#74070D] flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.ville}
                    </p>
                  )}
                </div>

                {/* Phone Input with Strict 10 Digits Helper */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#310F10] mb-1.5">
                    {t.form.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    placeholder={t.form.phonePlaceholder}
                    maxLength={14}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EEDC] border border-[#F3E3B2] text-[#310F10] text-sm focus:border-[#74070D] focus:bg-white transition-all tracking-wider font-mono"
                  />
                  {errors.telephone && (
                    <p className="mt-1 text-[11px] text-[#74070D] flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.telephone}
                    </p>
                  )}
                  <p className="mt-1.5 text-[11px] text-[#46462A]">
                    {isArabic ? (
                      <>
                        رقم هاتفك المكون من 10 أرقام (مثال: <span dir="ltr" className="font-mono font-bold text-[#74070D]">06 12 34 56 78</span>) لتأكيد تفاصيل الشحن.
                      </>
                    ) : (
                      <>
                        Numéro de téléphone à 10 chiffres (ex: <span dir="ltr" className="font-mono font-bold text-[#74070D]">06 12 34 56 78</span>) pour confirmer votre commande.
                      </>
                    )}
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-full bg-[#74070D] hover:bg-[#8D0910] text-[#F3E3B2] text-sm uppercase font-bold tracking-wider shadow-xl shadow-[#74070D]/40 hover:shadow-[#74070D]/60 active:scale-95 disabled:opacity-70 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#F3E3B2]" />
                        <span>{t.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.form.submitButton}</span>
                        <span>•</span>
                        <span dir="ltr" className="font-extrabold text-white">
                          <bdi dir="ltr">{t.recap.totalSpecialPrice}</bdi>
                        </span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-[#46462A] flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#74070D]" />
                    {t.form.notice}
                  </span>
                </div>

              </form>
            </div>

          </div>
        )}

        {/* 3 Pillars of Trust (Right before Footer) */}
        <div className="mt-16 pt-10 border-t border-[#74070D]/15 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#FAF7EE] border border-[#74070D]/20 shadow-xs flex items-center justify-center text-[#74070D] mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-[#310F10] mb-0.5">
              {TRANSLATIONS[locale].hero.trust1Title}
            </h4>
            <p className="text-xs text-[#46462A]">
              {TRANSLATIONS[locale].hero.trust1Sub}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#FAF7EE] border border-[#74070D]/20 shadow-xs flex items-center justify-center text-[#74070D] mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-[#310F10] mb-0.5">
              {TRANSLATIONS[locale].hero.trust2Title}
            </h4>
            <p className="text-xs text-[#46462A]">
              {TRANSLATIONS[locale].hero.trust2Sub}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#FAF7EE] border border-[#74070D]/20 shadow-xs flex items-center justify-center text-[#74070D] mb-3">
              <Banknote className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-[#310F10] mb-0.5">
              {TRANSLATIONS[locale].hero.trust3Title}
            </h4>
            <p className="text-xs text-[#46462A]">
              {TRANSLATIONS[locale].hero.trust3Sub}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
