import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Seoul 1988 — Pack Rétinal & Ginseng | K-Secret",
  description:
    "Découvrez le Pack Seoul 1988 : 6 soins d'exception au Rétinal Liposomique, Ginseng Noir et Mucine d'Escargot. 2 Cadeaux offerts : Masque Fino & Vaseline Lip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased selection:bg-[#74070D] selection:text-[#F3E3B2]" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
