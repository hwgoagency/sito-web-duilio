import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Ristorante e Caffetteria | Duilio Ostia",
  description: "Scopri i menu ristorante e caffetteria di Duilio a Ostia Lido. Caffè, colazioni e cucina del giorno: tutti i giorni dalle 08:30 alle 24:00.",
  keywords: ["Menu Duilio Ostia", "Menu ristorante pesce Ostia", "Prezzi ristorante Ostia", "Cucina romana menu"],
  alternates: {
    canonical: "https://www.duilio1939.com/menu",
  },
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

type MenuData = {
  week: string;
  categories: MenuCategory[];
};

export default function MenuPage() {
  let menu: MenuData | null = null;
  
  try {
    const dataFilePath = path.join(process.cwd(), 'data/menu.json');
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    menu = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read menu data:", error);
  }

  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu del Giorno - Duilio Ostia",
    "description": menu?.week || "Menu del giorno",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.duilio1939.com/menu"
    },
    "hasMenuSection": menu?.categories.map(cat => ({
      "@type": "MenuSection",
      "name": cat.name,
      "hasMenuItem": cat.items.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "price": item.price,
          "priceCurrency": "EUR"
        }
      }))
    })) || []
  };

  return (
    <div className="flex flex-col min-h-screen bg-panna-antico text-blu-notte pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="relative py-20 px-6 text-center bg-lavagna text-panna-antico overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] scale-150 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Image src="/images/monogram-dark.png" alt="" width={800} height={800} className="invert" />
        </div>
        
        <FadeIn delay={0.2} className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl uppercase tracking-tighter font-bold mb-4 text-panna-antico">
            I nostri menu
          </h1>
          <p className="font-payoff text-4xl text-terra-siena lowercase">fatto con amore</p>
        </FadeIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 w-full relative">

        <nav aria-label="Scegli il menu" className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#ristorante" className="btn-secondary">Menu ristorante</a>
          <a href="#caffetteria" className="btn-primary">Menu caffetteria</a>
        </nav>

        <section id="caffetteria" aria-labelledby="caffetteria-title" className="scroll-mt-28 mb-16 border-y border-terra-siena/40 py-10 text-center">
          <h2 id="caffetteria-title" className="text-3xl uppercase tracking-widest font-bold text-lavagna mb-4">Caffetteria e colazione</h2>
          <p className="text-lg text-blu-notte/80 mb-6">Dal primo caffè, come a casa. Ti aspettiamo tutti i giorni dalle 08:30.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/menu-caffetteria.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Apri menu caffetteria (PDF)</a>
            <a href="/menu-caffetteria.pdf" download="Menu_Caffetteria_Duilio.pdf" className="btn-secondary">Scarica menu caffetteria</a>
          </div>
          <iframe src="/menu-caffetteria.pdf" loading="lazy" className="hidden md:block w-full h-[80vh] min-h-[600px] max-h-[1000px] rounded-sm border border-terra-siena/30" title="Menu caffetteria Duilio in PDF" />
        </section>

        <div id="ristorante" className="w-full mb-16 scroll-mt-28">
          <h2 className="text-3xl uppercase tracking-widest font-bold text-lavagna mb-8 text-center">Menu ristorante</h2>
          <FadeIn delay={0.3} className="hidden md:flex justify-center h-[80vh] min-h-[600px] max-h-[1000px]">
             <iframe src="/menu.pdf" className="w-full h-full rounded-xl shadow-2xl border-4 border-terra-siena/20" title="Menu PDF"></iframe>
          </FadeIn>
          
          <FadeIn delay={0.3} className="md:hidden flex flex-col items-center justify-center p-8 bg-lavagna/5 rounded-xl border border-terra-siena/20 shadow-warm">
             <p className="text-blu-notte/80 text-center mb-6 font-medium">Il nostro menu sfogliabile è ottimizzato per schermi più grandi, ma puoi scaricare la versione PDF oppure scorrere per leggere i piatti qui sotto.</p>
             <a href="/menu.pdf" download="Menu_Duilio.pdf" className="btn-secondary flex items-center gap-2">
                Scarica Menu PDF
             </a>
          </FadeIn>
        </div>

        {!menu ? (
          <div className="text-center py-20 text-2xl uppercase tracking-widest text-rosso-melograno">
            Menu testuale non disponibile al momento.
          </div>
        ) : (
          <>
            <FadeIn delay={0.2} className="text-center mb-16">
              <p className="uppercase tracking-widest font-bold text-rosso-melograno text-lg">Menu della settimana</p>
              <p className="font-serif italic text-blu-notte/70">{menu.week}</p>
              <div className="divider-duilio w-24 border-terra-siena mt-8 opacity-80" />
            </FadeIn>

            <div className="space-y-20">
              {menu.categories.map((category, i) => (
                <FadeIn delay={0.3 + (i * 0.1)} key={i} direction="up">
                  <h2 className="text-3xl uppercase tracking-widest font-bold text-lavagna mb-8 text-center border-b border-terra-siena/30 pb-4">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {category.items.map((item, j) => (
                      <div key={j} className="flex flex-col">
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="text-xl uppercase font-bold text-rosso-melograno">{item.name}</h3>
                          <span className="text-xl font-medium text-lavagna ml-4">€{item.price}</span>
                        </div>
                        <p className="text-blu-notte/80 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.6} className="mt-24 text-center">
               <p className="font-serif italic text-blu-notte/70 mb-8 max-w-xl mx-auto">
                 Ricordiamo ai nostri gentili ospiti che i piatti potrebbero subire variazioni in base alla disponibilità giornaliera del pescato e delle materie prime.
               </p>
               <Link href="/#prenota" className="btn-primary">Prenota Ora</Link>
            </FadeIn>
          </>
        )}
      </div>
    </div>
  );
}
