import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo | Duilio Ostia",
  description: "La nostra storia, le nostre radici a Ostia. Scopri il progetto dell'Hub Sociale: corsi di ceramica, inglese per bambini e tanto altro.",
};

export default function ChiSiamo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Chi Siamo | Duilio Ostia",
    "description": "La storia di Duilio, l'hub sociale di Ostia. Scopri le iniziative gratuite e la nostra filosofia.",
    "url": "https://duilioristorante.it/chi-siamo",
    "publisher": {
      "@type": "Restaurant",
      "name": "Duilio"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-panna-antico text-blu-notte pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-rosso-melograno text-panna-antico overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] scale-150 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Image src="/images/monogram-dark.png" alt="" width={800} height={800} className="invert" />
        </div>
        
        <FadeIn delay={0.2} className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl uppercase tracking-tighter font-bold mb-4">
            Più di un ristorante
          </h1>
          <p className="font-payoff text-4xl text-terra-siena lowercase">la tua casa a Ostia</p>
        </FadeIn>
      </section>

      {/* La Macchina del Tempo */}
      <section className="py-24 px-6 relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="order-2 md:order-1 relative h-96 w-full bg-lavagna/5 rounded-sm border-2 border-terra-siena border-dashed flex flex-col items-center justify-center text-center p-6">
             <span className="font-payoff text-4xl text-terra-siena/60 mb-2">In Arrivo...</span>
             <span className="text-blu-notte/50 font-medium uppercase tracking-widest text-sm">
                [Placeholder Foto: Mani che impastano o scena nostalgica in cucina]
             </span>
          </FadeIn>
          <FadeIn direction="left" className="order-1 md:order-2 flex flex-col gap-6">
            <h2 className="text-4xl uppercase tracking-tighter font-bold text-lavagna">La Macchina del Tempo</h2>
            <div className="divider-duilio w-16 border-terra-siena opacity-80" />
            <p className="text-lg leading-relaxed text-blu-notte/80">
              Chiudi gli occhi per un secondo. Riesci a sentirlo? È il profumo della domenica mattina. 
              Quello di quando mangiare insieme era un rito, e non una pausa frettolosa.
            </p>
            <p className="text-lg leading-relaxed text-blu-notte/80">
              Da Duilio abbiamo deciso di riaccendere quei fornelli e riportare in tavola i sapori sinceri di una volta. 
              Non avremo menù infiniti o incomprensibili. Solo la cucina del mercato, quella del giorno, con prezzi onesti.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Il Ponte di Famiglia */}
      <section className="py-24 px-6 bg-lavagna text-panna-antico relative overflow-hidden">
        <FadeIn delay={0.2} className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl uppercase tracking-tighter font-bold mb-6">Ci conoscete da una vita</h2>
          <div className="divider-duilio w-16 border-rosso-melograno opacity-80 mb-8" />
          <p className="text-xl leading-relaxed opacity-90 max-w-2xl font-serif italic mb-6">
            "Sapete quanta cura mettiamo in ogni cosa che facciamo. Ora, tutta l'energia di sempre sta prendendo una forma tutta nuova."
          </p>
          <p className="text-lg leading-relaxed opacity-80 max-w-3xl">
            Siamo la stessa famiglia dietro i successi di <strong>Capanno</strong> e <strong>Slice</strong>. 
            Con Cristiano e tutta la nostra squadra, portiamo la nostra esperienza in questo nuovo capitolo. 
            Stessa famiglia, nuova Casa.
          </p>
        </FadeIn>
      </section>

      {/* L'Hub Sociale e I Corsi */}
      <section className="py-24 px-6 relative max-w-6xl mx-auto w-full">
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl uppercase tracking-tighter font-bold text-lavagna">L'Hub Sociale</h2>
          <div className="divider-duilio w-24 border-terra-siena mt-8 opacity-80" />
          <p className="mt-8 text-xl text-blu-notte/80 max-w-2xl mx-auto">
            Un locale ti riempie la pancia. Una casa ti riempie l'anima. 
            Abbiamo creato un calendario di iniziative totalmente gratuite per restituire valore alla nostra comunità.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Corso Inglese */}
          <FadeIn delay={0.2} className="bg-panna-antico/80 p-8 border border-terra-siena/20 shadow-warm rounded-sm flex flex-col backdrop-blur-sm">
            <h3 className="text-2xl uppercase tracking-widest font-bold text-rosso-melograno mb-4">English per i bimbi, relax per te</h3>
            <p className="text-blu-notte/80 leading-relaxed mb-6 flex-grow">
              Sappiamo quanto è difficile ritagliarsi un'ora di vera pausa. Genitori, da Duilio vi godete la merenda in santa pace. 
              E i vostri bimbi? A pochi passi da voi, imparano l'inglese divertendosi, con il nostro corso gratuito gestito da professionisti.
            </p>
            <div className="text-xs font-bold uppercase tracking-widest text-terra-siena border-t border-terra-siena/20 pt-4">
              Iscrizioni in arrivo
            </div>
          </FadeIn>

          {/* Corso Ceramica */}
          <FadeIn delay={0.4} className="bg-panna-antico/80 p-8 border border-terra-siena/20 shadow-warm rounded-sm flex flex-col backdrop-blur-sm">
            <h3 className="text-2xl uppercase tracking-widest font-bold text-rosso-melograno mb-4">Laboratorio di Ceramica</h3>
            <p className="text-blu-notte/80 leading-relaxed mb-6 flex-grow">
              C'è qualcosa di magico nello sporcarsi le mani e creare qualcosa partendo da zero. È terapeutico. 
              Da Duilio porteremo l'arte della ceramica, aperto a tutti, gratuitamente. Non serve essere bravi, serve solo voglia di fare.
            </p>
            <div className="text-xs font-bold uppercase tracking-widest text-terra-siena border-t border-terra-siena/20 pt-4">
              Posti limitati
            </div>
          </FadeIn>
        </div>

        {/* Placeholder Foto Hub Sociale */}
        <FadeIn delay={0.5} className="mt-12 w-full h-80 bg-lavagna/5 rounded-sm border-2 border-terra-siena border-dashed flex flex-col items-center justify-center text-center p-6">
          <span className="font-payoff text-4xl text-terra-siena/60 mb-2">In Arrivo...</span>
          <span className="text-blu-notte/50 font-medium uppercase tracking-widest text-sm">
            [Placeholder Foto: L'area dedicata ai corsi / grande tavolo conviviale]
          </span>
        </FadeIn>

        <FadeIn delay={0.6} className="mt-16 text-center">
          <Link href="/contatti" className="btn-secondary">
            Sei un professionista? Proponi il tuo corso
          </Link>
        </FadeIn>
      </section>

      {/* La Regola d'Oro */}
      <section className="py-24 px-6 bg-rosso-melograno text-panna-antico text-center border-y-8 border-lavagna border-dashed">
        <FadeIn className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl uppercase tracking-widest font-bold mb-2">La Regola d'Oro</h2>
          <p className="font-payoff text-4xl text-terra-siena lowercase mb-6">la password del Wi-Fi è: Guardatevi in faccia.</p>
          <p className="text-xl opacity-90 font-medium">
            Siamo sempre tutti connessi, ma sempre più distanti. Da Duilio abbiamo una sola, vera regola: 
            telefoni in tasca e risate sul tavolo. Siete pronti a disconnettervi?
          </p>
        </FadeIn>
      </section>

    </div>
  );
}
