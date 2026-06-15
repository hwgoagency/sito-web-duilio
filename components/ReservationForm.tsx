import { MessageCircle, Phone } from "lucide-react";

export default function ReservationForm() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-lg mx-auto bg-panna-antico/80 p-8 border-2 border-terra-siena/20 shadow-warm rounded-sm relative backdrop-blur-sm text-center">
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-terra-siena m-2"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-terra-siena m-2"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-terra-siena m-2"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-terra-siena m-2"></div>

      <div className="text-center mb-2">
        <h3 className="text-3xl uppercase tracking-widest font-bold text-lavagna mb-4">Contattaci Subito</h3>
        <p className="text-blu-notte/80 font-medium leading-relaxed">
          Siamo a tua disposizione per prenotazioni, informazioni sui nostri corsi gratuiti o per organizzare il tuo evento privato.
        </p>
      </div>

      <div className="flex flex-col gap-4">
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
          Chiamaci Ora
        </a>
      </div>
      
      <p className="text-sm text-blu-notte/60 mt-4 italic">
        Rispondiamo in pochi minuti durante i nostri orari di apertura (10:00 - 24:00).
      </p>
    </div>
  );
}
