import { NextRequest, NextResponse } from 'next/server';
import db, { Emoticon } from '@/lib/db';
import { deleteImage } from '@/lib/image-utils';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const emoticon = db.prepare('SELECT * FROM emoticons WHERE id = ?').get(id) as Emoticon | undefined;
    
    if (!emoticon) {
      return NextResponse.json(
        { error: 'Emoticon not found' },
        { status: 404 }
      );
    }

    // Delete image
    if (emoticon.image_url) {
      deleteImage(emoticon.image_url);
    }

    db.prepare('DELETE FROM emoticons WHERE id = ?').run(id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Emoticon delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete emoticon' },
      { status: 500 }
    );
  }
}
