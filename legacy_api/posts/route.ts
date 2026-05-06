import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { saveImageAsWebp, createThumbnail } from '@/lib/image-utils';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    
    let query = 'SELECT * FROM posts';
    const params: string[] = [];
    const conditions: string[] = [];
    
    if (category) {
      conditions.push('category = ?');
      params.push(category);
    }
    
    if (subcategory) {
      conditions.push('subcategory = ?');
      params.push(subcategory);
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY created_at DESC';
    
    const posts = db.prepare(query).all(...params) as Array<{
      id: string;
      category: string;
      subcategory: string | null;
      title: string;
      content: string | null;
      thumbnail_url: string | null;
      video_url: string | null;
      video_type: string | null;
      created_at: string;
      updated_at: string;
    }>;
    
    // Get images for each post
    const postsWithImages = posts.map((post) => {
      const images = db.prepare(
        'SELECT * FROM post_images WHERE post_id = ? ORDER BY sort_order'
      ).all(post.id);
      return { ...post, images };
    });
    
    return NextResponse.json(postsWithImages);
  } catch (error) {
    console.error('Posts fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const category = formData.get('category') as string;
    const subcategory = formData.get('subcategory') as string | null;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const videoUrl = formData.get('videoUrl') as string | null;
    const videoType = formData.get('videoType') as string | null;
    const imageFiles = formData.getAll('images') as File[];
    
    if (!title || !category) {
      return NextResponse.json(
        { error: 'Title and category are required' },
        { status: 400 }
      );
    }

    const postId = uuidv4();
    let thumbnailUrl: string | null = null;

    // Process images
    if (imageFiles.length > 0 && imageFiles[0].size > 0) {
      const firstImageBuffer = Buffer.from(await imageFiles[0].arrayBuffer());
      thumbnailUrl = await createThumbnail(firstImageBuffer, 300);
    }

    // Insert post
    db.prepare(`
      INSERT INTO posts (id, category, subcategory, title, content, thumbnail_url, video_url, video_type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(postId, category, subcategory, title, content || null, thumbnailUrl, videoUrl, videoType);

    // Insert images
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const imageUrl = await saveImageAsWebp(buffer, { width: 1200 });
        const imageId = uuidv4();
        
        db.prepare(`
          INSERT INTO post_images (id, post_id, image_url, sort_order)
          VALUES (?, ?, ?, ?)
        `).run(imageId, postId, imageUrl, i);
      }
    }

    const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(postId);
    const images = db.prepare('SELECT * FROM post_images WHERE post_id = ? ORDER BY sort_order').all(postId);
    
    return NextResponse.json({ ...post, images }, { status: 201 });
  } catch (error) {
    console.error('Post create error:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
