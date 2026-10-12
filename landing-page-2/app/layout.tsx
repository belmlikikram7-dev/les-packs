import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

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
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="antialiased selection:bg-[#74070D] selection:text-[#F3E3B2]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
