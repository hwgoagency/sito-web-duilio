import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti e Prenotazioni | Duilio Ostia",
  description: "Prenota il tuo tavolo da Duilio a Ostia Lido o proponici un'idea per un corso gratuito. Siamo aperti quasi tutto il giorno in Via San Quiriaco 1.",
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
