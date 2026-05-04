"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      type: "reservation",
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      time: formData.get("time"),
      guests: formData.get("guests"),
      notes: formData.get("notes"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setStatus("idle");
        toast.success("Richiesta inviata! Ti contatteremo a breve.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("idle");
        toast.error("Errore durante l'invio. Riprova più tardi.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      toast.error("Errore di connessione. Riprova più tardi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg mx-auto bg-panna-antico/80 p-8 border-2 border-terra-siena/20 shadow-warm rounded-sm relative backdrop-blur-sm">
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-terra-siena m-2"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-terra-siena m-2"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-terra-siena m-2"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-terra-siena m-2"></div>

      <div className="text-center mb-4">
        <h3 className="text-3xl uppercase tracking-widest font-bold text-lavagna mb-2">Riserva il tuo posto</h3>
        <p className="text-blu-notte/70 font-medium">Ti contatteremo via email per confermare la disponibilità.</p>
      </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Nome e Cognome</label>
              <input required type="text" id="name" name="name" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors font-body text-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Email</label>
              <input required type="email" id="email" name="email" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors font-body text-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="date" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Data</label>
              <input required type="date" id="date" name="date" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors font-body text-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="time" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Ora</label>
              <select required id="time" name="time" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors font-body text-lg">
                <option value="">Seleziona...</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="guests" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Numero di Persone</label>
            <select required id="guests" name="guests" className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors font-body text-lg">
              <option value="1">1 Persona</option>
              <option value="2">2 Persone</option>
              <option value="3">3 Persone</option>
              <option value="4">4 Persone</option>
              <option value="5">5 Persone</option>
              <option value="6">6 Persone</option>
              <option value="7+">7 o più (contattaci)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="notes" className="text-xs uppercase tracking-widest font-bold text-blu-notte">Note (Allergie, Intolleranze, etc.)</label>
            <textarea id="notes" name="notes" rows={3} className="p-3 border border-blu-notte/20 bg-panna-antico/50 outline-none focus:border-rosso-melograno transition-colors font-body text-lg resize-none"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
          >
            {status === "submitting" ? "Invio in corso..." : "Invia Richiesta"}
          </button>
    </form>
  );
}
