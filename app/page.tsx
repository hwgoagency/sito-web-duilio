import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 px-6 text-center bg-rosso-melograno text-panna-antico overflow-hidden">
        {/* Subtle noise overlay could be added here via CSS */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
        
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          <FadeIn delay={0.2} className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <Image 
              src="/images/logo-full-v2.png" 
              alt="Duilio Logo" 
              width={600} 
              height={300} 
              priority
              className="drop-shadow-warm-lg"
            />
          </FadeIn>
          
          <FadeIn delay={0.4} className="divider-duilio w-32 border-panna-antico mb-8 opacity-50" />
          
          <FadeIn delay={0.6} className="text-xl md:text-2xl uppercase tracking-[0.2em] font-medium max-w-2xl">
            Dove il tempo si ferma e il sapore ha il profumo di casa.
          </FadeIn>
        </div>
      </section>

      {/* Benvenuti Section */}
      <section className="py-24 px-6 md:px-12 bg-panna-antico">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="order-2 md:order-1">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter font-bold mb-8 text-lavagna">
              Benvenuti <br />da Duilio
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-blu-notte opacity-90">
              <p>
                Esiste un luogo dove il rumore del mare incontra il rintocco familiare dei 
                cucchiaini sulle tazzine di ceramica. <em className="font-payoff text-3xl lowercase text-accent-warm block mt-2">Quel luogo è Duilio.</em>
              </p>
              <p>
                Nascere come "Duilio" significa onorare una promessa di semplicità. 
                Siamo la porta sempre aperta, la luce accesa in cucina dall’alba al dopocena, il 
                tavolo che non è mai troppo piccolo per aggiungere un posto.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/chi-siamo" className="btn-primary">La Nostra Storia</Link>
                <Link href="/contatti" className="btn-secondary hidden md:block">Contattaci</Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 md:order-2 flex justify-center">
            <div className="relative p-4 border-2 border-terra-siena rounded-sm rotate-2 hover:rotate-0 transition-transform duration-500 bg-panna-antico shadow-warm-lg">
              <Image 
                src="/images/illustration-signora-v2.png" 
                alt="La Signora di Ostia" 
                width={450} 
                height={450}
                className="grayscale-[0.2] contrast-125 mix-blend-multiply"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Placeholder Foto Locale (Esterno/Interno Principale) */}
      <section className="px-6 md:px-12 bg-panna-antico pb-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.4} className="w-full h-80 md:h-[500px] bg-lavagna/5 rounded-sm border-2 border-terra-siena border-dashed flex flex-col items-center justify-center text-center p-6">
            <span className="font-payoff text-4xl text-terra-siena/60 mb-2">In Arrivo...</span>
            <span className="text-blu-notte/50 font-medium uppercase tracking-widest text-sm">
              [Placeholder Foto: L'ingresso o la sala principale del locale]
            </span>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-lavagna text-panna-antico relative overflow-hidden">
        <FadeIn className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="font-payoff text-5xl md:text-7xl mb-8 lowercase text-terra-siena">
            come a casa
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 italic font-serif">
            "Ci ispiriamo all’Italia degli anni ’60 e ’70: quella del benessere autentico, 
            della convivialità senza fronzoli e della fiducia in un sorriso dietro al bancone."
          </p>
          <div className="divider-duilio w-48 mt-12" />
        </FadeIn>
        {/* Background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 scale-150 pointer-events-none">
          <Image src="/images/monogram-dark.png" alt="" width={800} height={800} />
        </div>
      </section>

      {/* Maestro Section */}
      <section className="py-24 px-6 md:px-12 bg-panna-antico">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="flex justify-center">
            <div className="relative p-4 border-2 border-terra-siena rounded-sm -rotate-2 hover:rotate-0 transition-transform duration-500 bg-panna-antico shadow-warm-lg">
              <Image 
                src="/images/illustration-maestro-v2.png" 
                alt="Il Maestro di Casa" 
                width={450} 
                height={450}
                className="grayscale-[0.1] mix-blend-multiply"
              />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter font-bold mb-8 text-lavagna">
              Il Maestro <br />di Casa
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-blu-notte opacity-90">
              <p>
                L’ospitalità e l'arte culinaria di Duilio sono personificate nella figura del 
                nostro Cuoco. Con la sua divisa impeccabile e i baffi d’altri tempi, regge 
                fiero un generoso piatto di pasta — il cuore pulsante della nostra proposta.
              </p>
              <p>
                Non siamo solo un ristorante; siamo un ritrovo a portata di tutti. 
                Che sia per la prima colazione che sa di biscotti caldi, un pranzo che rigenera 
                lo spirito o una cena lenta tra amici.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/menu" className="btn-secondary">Scopri il Menu</Link>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Placeholder Foto Dettaglio (Cucina/Bancone) */}
        <div className="max-w-6xl mx-auto mt-16">
          <FadeIn delay={0.4} className="w-full h-64 bg-lavagna/5 rounded-sm border-2 border-terra-siena border-dashed flex flex-col items-center justify-center text-center p-6">
            <span className="font-payoff text-3xl text-terra-siena/60 mb-2">In Arrivo...</span>
            <span className="text-blu-notte/50 font-medium uppercase tracking-widest text-sm">
              [Placeholder Foto: Dettaglio del bancone o Cristiano ai fornelli]
            </span>
          </FadeIn>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="prenota" className="py-24 px-6 bg-lavagna relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute top-0 right-0 opacity-[0.03] scale-150 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Image src="/images/monogram-dark.png" alt="" width={800} height={800} className="invert" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn delay={0.2} className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter font-bold text-panna-antico">
              Il tuo posto a tavola
            </h2>
            <div className="divider-duilio w-24 border-terra-siena mt-8 opacity-80" />
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <ReservationForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
