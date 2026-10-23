"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "fr" | "ar";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isArabic: boolean;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vinillia_lp3_locale") as Locale;
      if (saved === "fr" || saved === "ar") {
        setLocaleState(saved);
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = saved;
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("vinillia_lp3_locale", newLocale);
      document.cookie = `vinillia_lp3_locale=${newLocale}; path=/; max-age=31536000`;
    } catch {
      // ignore localStorage errors
    }
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  };

  const isArabic = locale === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isArabic, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
