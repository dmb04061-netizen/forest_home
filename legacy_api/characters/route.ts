import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { saveImageAsWebp, createThumbnail } from '@/lib/image-utils';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    const characters = db.prepare('SELECT * FROM characters ORDER BY created_at DESC').all();
    return NextResponse.json(characters);
  } catch (error) {
    console.error('Characters fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch characters' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const imageFile = formData.get('image') as File | null;
    
    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    const id = uuidv4();
    let imageUrl: string | null = null;
    let thumbnailUrl: string | null = null;

    if (imageFile) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      imageUrl = await saveImageAsWebp(buffer, { width: 800 });
      thumbnailUrl = await createThumbnail(buffer, 300);
    }

    db.prepare(`
      INSERT INTO characters (id, title, description, image_url, thumbnail_url)
      VALUES (?, ?, ?, ?, ?)
    `).run(id, title, description || null, imageUrl, thumbnailUrl);

    const character = db.prepare('SELECT * FROM characters WHERE id = ?').get(id);
    return NextResponse.json(character, { status: 201 });
  } catch (error) {
    console.error('Character create error:', error);
    return NextResponse.json(
      { error: 'Failed to create character' },
      { status: 500 }
    );
  }
}
