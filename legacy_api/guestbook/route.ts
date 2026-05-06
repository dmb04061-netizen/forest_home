import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    const entries = db.prepare('SELECT * FROM guestbook ORDER BY created_at DESC').all();
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Guestbook fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch guestbook entries' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { author, content, password } = await request.json();
    
    if (!author || !content) {
      return NextResponse.json(
        { error: 'Author and content are required' },
        { status: 400 }
      );
    }

    const id = uuidv4();

    db.prepare(`
      INSERT INTO guestbook (id, author, content, password)
      VALUES (?, ?, ?, ?)
    `).run(id, author, content, password || null);

    const entry = db.prepare('SELECT * FROM guestbook WHERE id = ?').get(id);
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('Guestbook create error:', error);
    return NextResponse.json(
      { error: 'Failed to create guestbook entry' },
      { status: 500 }
    );
  }
}
