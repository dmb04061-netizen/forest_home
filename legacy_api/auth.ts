import db, { User, Session } from './db';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';

const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export interface AuthUser {
  id: string;
  username: string;
  role: 'admin' | 'guest';
  status: 'pending' | 'approved' | 'rejected';
}

// Register a new user
export function registerUser(username: string, password: string): { success: boolean; error?: string } {
  try {
    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
    if (existing) {
      return { success: false, error: '이미 존재하는 아이디입니다.' };
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const id = uuidv4();
    
    db.prepare(`
      INSERT INTO users (id, username, password_hash, role, status)
      VALUES (?, ?, ?, 'guest', 'pending')
    `).run(id, username, hashedPassword);

    return { success: true };
  } catch {
    return { success: false, error: '회원가입 중 오류가 발생했습니다.' };
  }
}

// Login user
export function loginUser(username: string, password: string): { success: boolean; user?: AuthUser; sessionId?: string; error?: string } {
  try {
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as User | undefined;
    
    if (!user) {
      return { success: false, error: '아이디 또는 비밀번호가 올바르지 않습니다.' };
    }

    if (!bcrypt.compareSync(password, user.password_hash)) {
      return { success: false, error: '아이디 또는 비밀번호가 올바르지 않습니다.' };
    }

    if (user.status === 'pending') {
      return { success: false, error: '관리자의 승인을 기다리고 있습니다.' };
    }

    if (user.status === 'rejected') {
      return { success: false, error: '가입이 거절되었습니다.' };
    }

    // Create session
    const sessionId = uuidv4();
    const expiresAt = new Date(Date.now() + SESSION_DURATION).toISOString();
    
    db.prepare(`
      INSERT INTO sessions (id, user_id, expires_at)
      VALUES (?, ?, ?)
    `).run(sessionId, user.id, expiresAt);

    return {
      success: true,
      user: {
        id: user.id,
        username: user.username,
        role: user.role as 'admin' | 'guest',
        status: user.status as 'pending' | 'approved' | 'rejected',
      },
      sessionId,
    };
  } catch {
    return { success: false, error: '로그인 중 오류가 발생했습니다.' };
  }
}

// Get user from session
export function getUserFromSession(sessionId: string): AuthUser | null {
  try {
    const session = db.prepare(`
      SELECT s.*, u.username, u.role, u.status
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.id = ? AND s.expires_at > datetime('now')
    `).get(sessionId) as (Session & { username: string; role: string; status: string }) | undefined;

    if (!session) {
      return null;
    }

    return {
      id: session.user_id,
      username: session.username,
      role: session.role as 'admin' | 'guest',
      status: session.status as 'pending' | 'approved' | 'rejected',
    };
  } catch {
    return null;
  }
}

// Delete session (logout)
export function deleteSession(sessionId: string): boolean {
  try {
    db.prepare('DELETE FROM sessions WHERE id = ?').run(sessionId);
    return true;
  } catch {
    return false;
  }
}

// Get current user from cookies (for server components)
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('session_id')?.value;
    if (!sessionId) return null;
    return getUserFromSession(sessionId);
  } catch {
    return null;
  }
}

// Check if current user is admin
export async function isAdmin(): Promise<boolean> {
  const user = await getCurrentUser();
  return user?.role === 'admin';
}

// Admin functions
export function getAllUsers(): User[] {
  return db.prepare('SELECT id, username, role, status, created_at, updated_at FROM users ORDER BY created_at DESC').all() as User[];
}

export function getPendingUsers(): User[] {
  return db.prepare('SELECT id, username, role, status, created_at FROM users WHERE status = ? ORDER BY created_at DESC').all('pending') as User[];
}

export function approveUser(userId: string): boolean {
  try {
    db.prepare('UPDATE users SET status = ?, updated_at = datetime("now") WHERE id = ?').run('approved', userId);
    return true;
  } catch {
    return false;
  }
}

export function rejectUser(userId: string): boolean {
  try {
    db.prepare('UPDATE users SET status = ?, updated_at = datetime("now") WHERE id = ?').run('rejected', userId);
    return true;
  } catch {
    return false;
  }
}

export function deleteUser(userId: string): boolean {
  try {
    // Don't allow deleting admin
    const user = db.prepare('SELECT role FROM users WHERE id = ?').get(userId) as User | undefined;
    if (user?.role === 'admin') {
      return false;
    }
    db.prepare('DELETE FROM sessions WHERE user_id = ?').run(userId);
    db.prepare('DELETE FROM users WHERE id = ?').run(userId);
    return true;
  } catch {
    return false;
  }
}
