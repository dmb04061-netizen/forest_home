import { NextRequest, NextResponse } from 'next/server';
import db, { Post, PostImage } from '@/lib/db';
import { deleteImage } from '@/lib/image-utils';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(id);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    const images = db.prepare('SELECT * FROM post_images WHERE post_id = ? ORDER BY sort_order').all(id);
    
    return NextResponse.json({ ...post, images });
  } catch (error) {
    console.error('Post fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
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
    const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(id) as Post | undefined;
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Get and delete images
    const images = db.prepare('SELECT * FROM post_images WHERE post_id = ?').all(id) as PostImage[];
    
    images.forEach((image) => {
      deleteImage(image.image_url);
    });
    
    if (post.thumbnail_url) {
      deleteImage(post.thumbnail_url);
    }

    // Delete comments
    db.prepare('DELETE FROM comments WHERE post_id = ?').run(id);
    
    // Delete images
    db.prepare('DELETE FROM post_images WHERE post_id = ?').run(id);
    
    // Delete post
    db.prepare('DELETE FROM posts WHERE id = ?').run(id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Post delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
