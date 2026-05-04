import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duilio Ostia | Il tuo Ristorante e Hub Sociale",
  description: "Da Duilio non ci sono menu infiniti, solo la cucina sincera del giorno. Ristorante, corsi gratuiti e vera convivialità a Ostia Lido. La tua casa a tutte le ore.",
  keywords: ["Ristorante Ostia", "Cucina romana", "Corsi gratuiti Ostia", "Dove mangiare Ostia", "Duilio Ristorante"],
  openGraph: {
    title: "Duilio Ostia | Come a casa",
    description: "Da Duilio non ci sono menu infiniti, solo la cucina sincera del giorno. Ristorante, corsi gratuiti e vera convivialità a Ostia Lido.",
    url: "https://duilioristorante.it",
    siteName: "Duilio Ostia",
    images: [
      {
        url: "https://duilioristorante.it/images/logo-full-v2.png",
        width: 1200,
        height: 630,
        alt: "Duilio Ostia Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Duilio",
    "image": "https://duilioristorante.it/images/logo-full-v2.png",
    "description": "Ristorante e Hub Sociale a Ostia Lido. Cucina sincera, corsi gratuiti e convivialità.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via San Quiriaco 1",
      "addressLocality": "Roma",
      "postalCode": "00122",
      "addressRegion": "RM",
      "addressCountry": "IT"
    },
    "telephone": "+390612345678",
    "email": "info@duilioristorante.it",
    "servesCuisine": "Italiana, Romana",
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "08:00",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html
      lang="it"
      className={`${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-text-primary pt-[72px]">
        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#0F1423', // Lavagna
              color: '#FEEBDC', // Panna Antico
              border: '1px solid #C78E55', // Terra Siena
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            },
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
