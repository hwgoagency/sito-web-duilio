"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { MessageCircle, Phone } from "lucide-react";

export default function Contatti() {

  // Direct contact page

  return (
    <div className="flex flex-col min-h-screen bg-panna-antico text-blu-notte pt-[72px]">
      
      {/* Header */}
      <section className="relative py-20 px-6 text-center bg-lavagna text-panna-antico overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] scale-150 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Image src="/images/monogram-dark.png" alt="" width={800} height={800} className="invert" />
        </div>
        <FadeIn delay={0.2} className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl uppercase tracking-tighter font-bold mb-4">
            Parla con Noi
          </h1>
          <p className="font-payoff text-4xl text-terra-siena lowercase">le porte sono sempre aperte</p>
        </FadeIn>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Informazioni */}
        <FadeIn direction="right" delay={0.2} className="flex flex-col gap-12">
          <div>
            <h2 className="text-3xl uppercase tracking-widest font-bold text-rosso-melograno mb-4">Dove Siamo</h2>
            <p className="text-lg text-blu-notte/80 leading-relaxed mb-2">
              Dalle prime chiacchiere del mattino, passando per il pranzo, fino alla birra serale con gli amici. 
              Quando hai bisogno di staccare la spina, a qualsiasi ora, sai dove trovarci.
            </p>
            <p className="text-xl font-medium mt-4">Via San Quiriaco 1</p>
            <p className="text-xl font-medium">00122 Ostia Lido, Roma</p>
          </div>

          <div>
            <h2 className="text-3xl uppercase tracking-widest font-bold text-rosso-melograno mb-4">Orari All-Day</h2>
            <ul className="text-lg text-blu-notte/80 space-y-2">
              <li className="flex justify-between pb-2">
                <span>Tutti i giorni</span> <span className="font-bold">10:00 - 24:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl uppercase tracking-widest font-bold text-rosso-melograno mb-4">Recapiti Diretti</h2>
            <p className="text-lg text-blu-notte/80 mb-2">Telefono e Whatsapp: <a href="tel:+393477838031" className="font-bold hover:text-terra-siena">347 783 8031</a></p>
            <p className="text-lg text-blu-notte/80">Email: <a href="mailto:info@duilio1939.com" className="font-bold hover:text-terra-siena">info@duilio1939.com</a></p>
          </div>
        </FadeIn>

        {/* Moduli di Contatto */}
        <FadeIn direction="left" delay={0.4} className="bg-panna-antico/80 p-8 md:p-12 border-2 border-terra-siena/20 shadow-warm rounded-sm relative backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl uppercase tracking-widest font-bold text-lavagna mb-4">Contattaci Direttamente</h2>
            <p className="text-lg text-blu-notte/80">
              Per prenotazioni, informazioni o per proporre un corso, utilizza i nostri canali diretti. 
              Rispondiamo in pochi minuti.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a 
              href="https://wa.me/393477838031" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg bg-[#25D366] hover:bg-[#128C7E] border-none text-white transition-colors"
            >
              <MessageCircle size={24} />
              Scrivici su WhatsApp
            </a>
            
            <a 
              href="tel:+393477838031" 
              className="btn-secondary w-full flex items-center justify-center gap-3 py-4 text-lg border-2 border-blu-notte text-blu-notte hover:bg-blu-notte hover:text-panna-antico transition-colors"
            >
              <Phone size={24} />
              Chiamaci Ora (347 783 8031)
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-blu-notte/10 text-center">
            <h3 className="text-xl uppercase tracking-widest font-bold text-blu-notte mb-2">Contatti Commerciali</h3>
            <p className="text-blu-notte/70 mb-4">
              La nostra email è riservata esclusivamente a proposte commerciali o amministrative.
            </p>
            <a href="mailto:info@duilio1939.com" className="font-bold text-terra-siena hover:underline text-lg">
              info@duilio1939.com
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
