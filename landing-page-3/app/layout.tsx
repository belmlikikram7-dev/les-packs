import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Pack Glow & Pureté — 6 Soins d'Exception Coréens & Dermatologiques",
  description:
    "Découvrez le Pack Skincare complet : Marvis, SKIN1004 Sun Serum, SKIN1004 Mousse Poremizing, Dr. Althea 345 Relief Cream, The Ordinary Niacinamide et Celimax Retinal Booster. Livraison gratuite partout au Maroc & paiement à la livraison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
