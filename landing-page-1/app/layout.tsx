import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cairo } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import MobileFloatingOrderButton from "@/components/MobileFloatingOrderButton";
import { LanguageProvider, Locale } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinillia • Beauty & Skincare | Le Rituel Essentiel 6 Soins Coréens",
  description:
    "Découvrez Vinillia : une sélection experte des 6 soins coréens indispensables (Medicube, Anua, I'm From, AXIS-Y) pour hydrater, apaiser, illuminer et révéler l'éclat naturel de votre peau.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedCookie = cookieStore.get("vinillia_locale")?.value;
  const initialLocale: Locale = (savedCookie === "ar" || savedCookie === "fr") ? savedCookie : "fr";
  const isArabic = initialLocale === "ar";

  return (
    <html
      lang={initialLocale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${cormorant.variable} ${plusJakarta.variable} ${cairo.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var m = document.cookie.match(/vinillia_locale=([^;]+)/);
                  var loc = m ? m[1] : localStorage.getItem('vinillia_locale');
                  if (loc === 'ar') {
                    document.documentElement.lang = 'ar';
                    document.documentElement.dir = 'rtl';
                  } else if (loc === 'fr') {
                    document.documentElement.lang = 'fr';
                    document.documentElement.dir = 'ltr';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#3A1826]">
        <LanguageProvider initialLocale={initialLocale}>
          {children}
          <MobileFloatingOrderButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
