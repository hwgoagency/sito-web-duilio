import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { type, name, email, date, time, guests, notes, subject, message } = data;

    // Configure Nodemailer with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let mailOptions = {};

    if (type === "reservation") {
      mailOptions = {
        from: `Sito Web Duilio <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER, // Invio a se stessi per ricevere le prenotazioni
        replyTo: email, // Permette di rispondere direttamente al cliente
        subject: `Nuova Prenotazione: ${name} - ${date}`,
        html: `
          <h2>Nuova Richiesta di Prenotazione</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Data:</strong> ${date}</p>
          <p><strong>Ora:</strong> ${time}</p>
          <p><strong>Persone:</strong> ${guests}</p>
          <p><strong>Note:</strong> ${notes || 'Nessuna nota'}</p>
        `
      };
    } else if (type === "client") {
      mailOptions = {
        from: `Sito Web Duilio <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `Nuovo Messaggio da: ${name}`,
        html: `
          <h2>Nuovo Messaggio dal Sito</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Messaggio:</strong><br/>${message}</p>
        `
      };
    } else if (type === "pro") {
      mailOptions = {
        from: `Sito Web Duilio <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `Proposta Corso: ${subject} da ${name}`,
        html: `
          <h2>Nuova Proposta di Corso / Laboratorio</h2>
          <p><strong>Professionista:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Materia:</strong> ${subject}</p>
          <p><strong>Progetto:</strong><br/>${message}</p>
        `
      };
    } else {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    // Se la password non è configurata, facciamo un finto invio (utile per lo sviluppo)
    if (!process.env.SMTP_PASSWORD || process.env.SMTP_PASSWORD === 'tua_password_email_qui') {
      console.log("Mocking email send. Please configure SMTP_PASSWORD in .env.local");
      console.log("Email options:", mailOptions);
      // Wait a bit to simulate network
      await new Promise(r => setTimeout(r, 1000));
    } else {
      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true, message: "Email inviata con successo!" });
  } catch (error) {
    console.error("Errore invio email:", error);
    return NextResponse.json({ error: "Errore durante l'invio dell'email" }, { status: 500 });
  }
}
