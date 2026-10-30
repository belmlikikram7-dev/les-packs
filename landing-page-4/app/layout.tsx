import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinillia — Le Pack Skincare Complet (6 Soins d'Exception + Cadeau Offert)",
  description:
    "Une routine complète coréenne et dermatologique pour une peau saine, éclatante et naturelle. Livraison gratuite partout au Maroc et paiement à la livraison.",
  icons: {
    icon: "/logo-white.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F4F9FD] text-[#0F2E4A]">
        {children}
      </body>
    </html>
  );
}
