import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { saveImageAsWebp } from '@/lib/image-utils';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }
    
    const buffer = Buffer.from(await file.arrayBuffer());
    const imageUrl = await saveImageAsWebp(buffer, { width: 400, height: 400 });
    
    db.prepare(`
      INSERT INTO profile (id, image_url, updated_at)
      VALUES (1, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        image_url = excluded.image_url,
        updated_at = CURRENT_TIMESTAMP
    `).run(imageUrl);
    
    return NextResponse.json({ image_url: imageUrl });
  } catch (error) {
    console.error('Profile image upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
