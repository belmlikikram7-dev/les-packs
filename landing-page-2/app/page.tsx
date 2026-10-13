"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PackIntro from "@/components/PackIntro";
import ProductGrid from "@/components/ProductGrid";
import RoutineSection from "@/components/RoutineSection";
import GiftsSection from "@/components/GiftsSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import MobileFloatingOrderButton from "@/components/MobileFloatingOrderButton";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col relative bg-[#FAF7EE]">
      <Navbar />
      <Hero />
      <PackIntro />
      <ProductGrid />
      <RoutineSection />
      <GiftsSection />
      <OrderSection />
      <Footer />
      <MobileFloatingOrderButton />
    </main>
  );
}
