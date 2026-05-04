import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { password, menu } = data;

    // Basic authentication
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Password errata" }, { status: 401 });
    }

    // Determine path to backend/data/menu.json
    // In dev: process.cwd() is frontend. We need to go up one level.
    const menuPath = path.join(process.cwd(), '../backend/data/menu.json');

    // Save the new menu
    fs.writeFileSync(menuPath, JSON.stringify(menu, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore salvataggio menu:", error);
    return NextResponse.json({ error: "Errore interno del server" }, { status: 500 });
  }
}
