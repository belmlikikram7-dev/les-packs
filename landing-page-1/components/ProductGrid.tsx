"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import SiteFloralBackground from "./SiteFloralBackground";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/translations/content";

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].products;

  const handleOrderClick = () => {
    setSelectedProduct(null);
    const orderSection = document.getElementById("commande");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="produits" className="pt-6 sm:pt-8 pb-20 bg-[#FAF5F7] relative overflow-hidden">
      {/* Delicate Floral Background */}
      <SiteFloralBackground opacity={0.65} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3A1826] font-normal leading-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#615458] font-light leading-relaxed max-w-xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Compact, well-proportioned 6 Cards Grid: Desktop 3/col, Tablet 2/col, Mobile 1/col */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Petite Fenêtre Modale Rapide */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOrderClick={handleOrderClick}
      />
    </section>
  );
}
