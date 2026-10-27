Southam (font del payoff) è a pagamento e il file con licenza commerciale non è ancora qui.
Finché manca, il payoff usa Sacramento (Google Fonts, caricato in app/layout.tsx).

Quando arriva il file con licenza:
1. Mettere Southam.woff2 in questa cartella.
2. In app/globals.css aggiungere:

@layer base {
  @font-face {
    font-family: 'Southam';
    src: url('/fonts/Southam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
}
