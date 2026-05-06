import { NextRequest, NextResponse } from 'next/server';
import db, { Character } from '@/lib/db';
import { deleteImage } from '@/lib/image-utils';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const character = db.prepare('SELECT * FROM characters WHERE id = ?').get(id);
    
    if (!character) {
      return NextResponse.json(
        { error: 'Character not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(character);
  } catch (error) {
    console.error('Character fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch character' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const character = db.prepare('SELECT * FROM characters WHERE id = ?').get(id) as Character | undefined;
    
    if (!character) {
      return NextResponse.json(
        { error: 'Character not found' },
        { status: 404 }
      );
    }

    // Delete images
    if (character.image_url) {
      deleteImage(character.image_url);
    }
    if (character.thumbnail_url) {
      deleteImage(character.thumbnail_url);
    }

    db.prepare('DELETE FROM characters WHERE id = ?').run(id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Character delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete character' },
      { status: 500 }
    );
  }
}
