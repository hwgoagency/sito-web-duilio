import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the menu data from the local data folder
    const dataFilePath = path.join(process.cwd(), 'data/menu.json');
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const menuData = JSON.parse(fileContents);
    
    return NextResponse.json(menuData);
  } catch (error) {
    console.error("Failed to read menu data:", error);
    return NextResponse.json({ error: 'Failed to load menu data' }, { status: 500 });
  }
}
