import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lavagna text-panna-antico pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/images/logo-full-v2.png" 
            alt="Duilio Logo" 
            width={200} 
            height={80} 
            className="mb-6 opacity-90 object-contain" 
          />
        </div>
        
        <div className="text-center md:text-left font-body uppercase tracking-widest text-sm space-y-4">
          <h4 className="text-terra-siena font-bold mb-4">Dove Siamo</h4>
          <p className="opacity-80">Via San Quiriaco 1</p>
          <p className="opacity-80">00122 Ostia Lido, Roma</p>
          <p className="opacity-80 mt-4">Tel: 06 1234 5678</p>
          <p className="opacity-80">Email: info@duilioristorante.it</p>
        </div>
        
        <div className="text-center md:text-left font-body uppercase tracking-widest text-sm space-y-4">
          <h4 className="text-terra-siena font-bold mb-4">Orari</h4>
          <p className="opacity-80">Tutti i giorni: 10:00 - 24:00</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center font-body uppercase tracking-widest text-xs opacity-50 border-t border-white/10 pt-8 space-y-2">
        <p>© {new Date().getFullYear()} Duilio Ostia — Tutti i diritti riservati</p>
        <p>
          Sito creato da{" "}
          <a
            href="https://herewegoagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 underline underline-offset-2 transition-opacity"
          >
            Here We Go Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
