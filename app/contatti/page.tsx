"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import FadeIn from "@/components/FadeIn";

export default function Contatti() {
  const [formType, setFormType] = useState<"client" | "pro">("client");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      type: formType,
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("idle");
        toast.success(formType === "pro" ? "Proposta inviata! Ti risponderemo presto." : "Messaggio inviato con successo!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("idle");
        toast.error("Si è verificato un errore. Riprova più tardi.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      toast.error("Errore di connessione. Riprova più tardi.");
    }
  };

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
            <p className="text-lg text-blu-notte/80 mb-2">Telefono: <a href="tel:0612345678" className="font-bold hover:text-terra-siena">06 1234 5678</a></p>
            <p className="text-lg text-blu-notte/80">Email: <a href="mailto:info@duilioristorante.it" className="font-bold hover:text-terra-siena">info@duilioristorante.it</a></p>
          </div>
        </FadeIn>

        {/* Moduli di Contatto */}
        <FadeIn direction="left" delay={0.4} className="bg-panna-antico/80 p-8 md:p-12 border-2 border-terra-siena/20 shadow-warm rounded-sm relative backdrop-blur-sm">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-blu-notte/10 pb-4">
            <button 
              onClick={() => { setFormType("client"); setStatus("idle"); }}
              className={`text-lg uppercase tracking-widest font-bold pb-2 border-b-2 transition-colors ${formType === "client" ? "border-rosso-melograno text-rosso-melograno" : "border-transparent text-blu-notte/50 hover:text-blu-notte"}`}
            >
              Scrivici
            </button>
            <button 
              onClick={() => { setFormType("pro"); setStatus("idle"); }}
              className={`text-lg uppercase tracking-widest font-bold pb-2 border-b-2 transition-colors ${formType === "pro" ? "border-terra-siena text-terra-siena" : "border-transparent text-blu-notte/50 hover:text-blu-notte"}`}
            >
              Proponi un Corso
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {formType === "pro" && (
                <div className="mb-4 bg-panna-antico p-4 border border-terra-siena/30 rounded-sm">
                  <p className="text-sm text-blu-notte/80 leading-relaxed font-medium italic">
                    "Se hai qualcosa da insegnare — una competenza, una passione, un mestiere — questo posto potrebbe essere il tuo. 
                    Cerchiamo professionisti, artigiani, esperti. Se hai un'idea di corso, scrivici."
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Nome</label>
                  <input required type="text" id="name" name="name" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Email</label>
                  <input required type="email" id="email" name="email" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors" />
                </div>
              </div>

              {formType === "pro" && (
                <div className="flex flex-col gap-1">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Materia del Corso (es. Ceramica, Inglese)</label>
                  <input required type="text" id="subject" name="subject" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-terra-siena transition-colors" />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-blu-notte">
                  {formType === "pro" ? "Raccontaci la tua idea / progetto" : "Messaggio"}
                </label>
                <textarea required id="message" name="message" rows={5} className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className={`w-full mt-4 flex items-center justify-center gap-2 ${formType === "pro" ? "btn-secondary" : "btn-primary"}`}
              >
                {status === "submitting" ? "Invio..." : formType === "pro" ? "Invia Proposta" : "Invia Messaggio"}
              </button>
            </form>
        </FadeIn>
      </div>
    </div>
  );
}
