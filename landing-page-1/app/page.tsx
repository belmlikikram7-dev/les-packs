import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import PackIntro from "@/components/PackIntro";
import ProductGrid from "@/components/ProductGrid";
import RoutineSection from "@/components/RoutineSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero / Pack principal */}
        <Hero />

        {/* 2.5 Ruban de réassurance défilant (Marquee) */}
        <TrustTicker />

        {/* 3. Présentation du Pack */}
        <PackIntro />

        {/* 4. Les 6 produits & Détails interactifs */}
        <ProductGrid />

        {/* 5. Routine / ordre d'utilisation */}
        <RoutineSection />

        {/* 6. Formulaire de commande */}
        <OrderSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
