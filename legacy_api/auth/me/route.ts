import { NextRequest, NextResponse } from 'next/server';
import { getUserFromSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.cookies.get('session_id')?.value;

    if (!sessionId) {
      return NextResponse.json({ user: null });
    }

    const user = getUserFromSession(sessionId);

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
