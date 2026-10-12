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
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("seoul1988_locale") as Locale;
    if (saved && (saved === "fr" || saved === "ar")) {
      setLocaleState(saved);
      document.cookie = `seoul1988_locale=${saved}; path=/; max-age=31536000`;
    } else {
      const match = document.cookie.match(/seoul1988_locale=(ar|fr)/);
      if (match) {
        setLocaleState(match[1] as Locale);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("seoul1988_locale", newLocale);
    document.cookie = `seoul1988_locale=${newLocale}; path=/; max-age=31536000`;
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
