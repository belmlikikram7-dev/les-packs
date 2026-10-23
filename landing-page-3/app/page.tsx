"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import SpotlightSection from "@/components/SpotlightSection";
import RoutineSection from "@/components/RoutineSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import MobileFloatingOrderButton from "@/components/MobileFloatingOrderButton";

import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function MainContent() {
  const { dir, isArabic } = useLanguage();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    if (typeof window !== "undefined") {
      (window as any).lenis = lenis;
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (typeof window !== "undefined") {
        (window as any).lenis = null;
      }
      lenis.destroy();
    };
  }, []);

  return (
    <main
      dir={dir}
      className={`min-h-screen flex flex-col relative bg-[#F7EEED] text-[#5C1D2E] antialiased selection:bg-[#F4BBC9] selection:text-[#5C1D2E] ${
        isArabic ? "font-sans" : ""
      }`}
    >
      <Navbar />
      <Hero />
      <ProductsSection />
      <SpotlightSection />
      <RoutineSection />
      <OrderSection />
      <Footer />
      <MobileFloatingOrderButton />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
