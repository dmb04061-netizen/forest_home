import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    const category = searchParams.get('category');
    
    let query = 'SELECT * FROM comments';
    const params: string[] = [];
    const conditions: string[] = [];
    
    if (postId) {
      conditions.push('post_id = ?');
      params.push(postId);
    }
    
    if (category) {
      conditions.push('category = ?');
      params.push(category);
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY created_at ASC';
    
    const comments = db.prepare(query).all(...params);
    return NextResponse.json(comments);
  } catch (error) {
    console.error('Comments fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { postId, category, author, content, password } = await request.json();
    
    if (!author || !content) {
      return NextResponse.json(
        { error: 'Author and content are required' },
        { status: 400 }
      );
    }

    const id = uuidv4();

    db.prepare(`
      INSERT INTO comments (id, post_id, category, author, content, password)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, postId || null, category || null, author, content, password || null);

    const comment = db.prepare('SELECT * FROM comments WHERE id = ?').get(id);
    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('Comment create error:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
