"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "fr" | "ar";

interface LanguageContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  isArabic: boolean;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  setLocale: () => {},
  isArabic: false,
  dir: "ltr",
});

export function LanguageProvider({
  children,
  initialLocale = "fr",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      // Check cookie first, then localStorage
      const cookieMatch = document.cookie.match(/vinillia_locale=([^;]+)/);
      const cookieVal = cookieMatch ? cookieMatch[1] : null;
      const localVal = localStorage.getItem("vinillia_locale");

      const active: Locale = (cookieVal === "ar" || cookieVal === "fr")
        ? (cookieVal as Locale)
        : (localVal === "ar" || localVal === "fr")
        ? (localVal as Locale)
        : initialLocale;

      if (active !== locale) {
        setLocaleState(active);
      }
      // Keep cookie and localStorage in sync
      localStorage.setItem("vinillia_locale", active);
      document.cookie = `vinillia_locale=${active}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = active;
      document.documentElement.dir = active === "ar" ? "rtl" : "ltr";
    } catch (e) {}
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("vinillia_locale", newLocale);
        document.cookie = `vinillia_locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
      } catch (e) {}
    }
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale, mounted]);

  const isArabic = locale === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isArabic, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
