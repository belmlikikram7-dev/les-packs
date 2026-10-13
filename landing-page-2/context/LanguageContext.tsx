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
  const [locale] = useState<Locale>("fr");

  useEffect(() => {
    // Clear any legacy Arabic session and ensure LTR
    try {
      localStorage.removeItem("seoul1988_locale");
      document.cookie = "seoul1988_locale=fr; path=/; max-age=31536000";
    } catch {
      // ignore
    }
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "fr";
  }, []);

  const setLocale = () => {
    // Kept for type signature compatibility if needed
  };

  const isArabic = false;
  const dir = "ltr";

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
