import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti e Prenotazioni | Duilio Ostia",
  description: "Prenota il tuo tavolo da Duilio a Ostia Lido. Contattaci per informazioni sui nostri corsi gratuiti, per eventi privati o per proporre la tua idea nell'hub sociale.",
  keywords: ["Prenota ristorante Ostia", "Contatti Duilio Ostia", "Dove mangiare pesce Ostia", "Corsi gratuiti Ostia contatti", "Eventi Ostia Lido"],
  alternates: {
    canonical: "https://www.duilio1939.com/contatti",
  },
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
