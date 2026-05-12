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
  metadataBase: new URL("https://www.duilio1939.com"),
  title: "Duilio Ostia | Storico Ristorante e Hub Sociale a Ostia Lido",
  description: "Da Duilio non ci sono menu infiniti, solo la cucina sincera del giorno. Il tuo ristorante tradizionale a Ostia Lido: pesce fresco, specialità romane, corsi gratuiti e vera convivialità. Sentiti a casa.",
  keywords: ["Ristorante Ostia", "Dove mangiare Ostia Lido", "Cucina romana Ostia", "Pesce fresco Ostia", "Ristorante tradizionale Roma", "Corsi gratuiti Ostia", "Duilio 1939"],
  authors: [{ name: "Duilio Ostia" }],
  creator: "Duilio Ostia",
  publisher: "Duilio Ostia",
  alternates: {
    canonical: "https://www.duilio1939.com",
  },
  openGraph: {
    title: "Duilio Ostia | Come a casa",
    description: "Ristorante storico a Ostia Lido. Cucina casalinga, pesce del giorno e un hub sociale per la comunità. Scopri il nostro menu e i nostri eventi.",
    url: "https://www.duilio1939.com",
    siteName: "Duilio Ostia",
    images: [
      {
        url: "https://www.duilio1939.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Duilio Ostia Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Duilio",
    "image": "https://www.duilio1939.com/images/og-image.png",
    "description": "Storico ristorante e hub sociale a Ostia Lido. Offriamo cucina tradizionale romana sincera, pesce fresco del giorno, corsi gratuiti per la comunità e uno spazio di vera convivialità.",
    "@id": "https://www.duilio1939.com",
    "url": "https://www.duilio1939.com",
    "telephone": "+390612345678",
    "menu": "https://www.duilio1939.com/menu",
    "acceptsReservations": "True",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via San Quiriaco 1",
      "addressLocality": "Roma",
      "postalCode": "00122",
      "addressRegion": "RM",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.7303,
      "longitude": 12.2819
    },
    "servesCuisine": ["Italiana", "Romana", "Pesce", "Cucina casalinga"],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Che tipo di cucina fate da Duilio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da Duilio a Ostia offriamo cucina sincera e casalinga, specialità romane e pesce fresco del giorno. Non abbiamo menù infiniti, ma cuciniamo in base a quello che offre il mercato giornalmente."
        }
      },
      {
        "@type": "Question",
        "name": "Dove si trova il ristorante Duilio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ci troviamo in Via San Quiriaco 1 a Roma (quartiere Ostia Lido), CAP 00122. Siamo vicini al mare, perfetti per un pranzo o una cena in totale relax."
        }
      },
      {
        "@type": "Question",
        "name": "Cos'è l'hub sociale di Duilio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oltre a essere un ristorante, Duilio è un hub sociale: mettiamo i nostri spazi a disposizione della comunità organizzando eventi culturali e corsi gratuiti."
        }
      }
    ]
  };

  const jsonLd = [restaurantSchema, faqSchema];

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
