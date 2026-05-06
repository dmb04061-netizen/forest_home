import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { saveImageAsWebp } from '@/lib/image-utils';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    const emoticons = db.prepare('SELECT * FROM emoticons ORDER BY created_at DESC').all();
    return NextResponse.json(emoticons);
  } catch (error) {
    console.error('Emoticons fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch emoticons' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const imageFile = formData.get('image') as File;
    
    if (!name || !imageFile) {
      return NextResponse.json(
        { error: 'Name and image are required' },
        { status: 400 }
      );
    }

    // Check if name already exists
    const existing = db.prepare('SELECT id FROM emoticons WHERE name = ?').get(name);
    if (existing) {
      return NextResponse.json(
        { error: '이미 존재하는 이름입니다.' },
        { status: 400 }
      );
    }

    const id = uuidv4();
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const imageUrl = await saveImageAsWebp(buffer, { width: 64, height: 64 });

    db.prepare(`
      INSERT INTO emoticons (id, name, image_url)
      VALUES (?, ?, ?)
    `).run(id, name, imageUrl);

    const emoticon = db.prepare('SELECT * FROM emoticons WHERE id = ?').get(id);
    return NextResponse.json(emoticon, { status: 201 });
  } catch (error) {
    console.error('Emoticon create error:', error);
    return NextResponse.json(
      { error: 'Failed to create emoticon' },
      { status: 500 }
    );
  }
}
