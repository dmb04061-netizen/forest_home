import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';

const dbPath = path.join(process.cwd(), 'data', 'database.sqlite');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

// Initialize tables
db.exec(`
  -- Users table
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'guest',
    status TEXT NOT NULL DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Profile table
  CREATE TABLE IF NOT EXISTS profile (
    id INTEGER PRIMARY KEY DEFAULT 1,
    image_url TEXT,
    content TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Characters table
  CREATE TABLE IF NOT EXISTS characters (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    thumbnail_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Posts table (for Log, Board categories)
  CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    subcategory TEXT,
    title TEXT NOT NULL,
    content TEXT,
    thumbnail_url TEXT,
    video_url TEXT,
    video_type TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Post images table
  CREATE TABLE IF NOT EXISTS post_images (
    id TEXT PRIMARY KEY,
    post_id TEXT NOT NULL,
    image_url TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
  );

  -- Comments table
  CREATE TABLE IF NOT EXISTS comments (
    id TEXT PRIMARY KEY,
    post_id TEXT,
    category TEXT,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Emoticons table
  CREATE TABLE IF NOT EXISTS emoticons (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- GuestBook entries
  CREATE TABLE IF NOT EXISTS guestbook (
    id TEXT PRIMARY KEY,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Sessions table
  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    expires_at DATETIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  -- Insert default profile if not exists
  INSERT OR IGNORE INTO profile (id, content) VALUES (1, 'Welcome to my profile!');
`);

// Create admin user if not exists
const adminExists = db.prepare('SELECT id FROM users WHERE username = ?').get('juyeon');
if (!adminExists) {
  const hashedPassword = bcrypt.hashSync('wndus00', 10);
  db.prepare(`
    INSERT INTO users (id, username, password_hash, role, status)
    VALUES (?, ?, ?, 'admin', 'approved')
  `).run('admin-juyeon', 'juyeon', hashedPassword);
}

export default db;

// Helper types
export interface User {
  id: string;
  username: string;
  password_hash: string;
  role: 'admin' | 'guest';
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface Session {
  id: string;
  user_id: string;
  expires_at: string;
  created_at: string;
}

export interface Profile {
  id: number;
  image_url: string | null;
  content: string | null;
  updated_at: string;
}

export interface Character {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  thumbnail_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Post {
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
}

export interface PostImage {
  id: string;
  post_id: string;
  image_url: string;
  sort_order: number;
}

export interface Comment {
  id: string;
  post_id: string | null;
  category: string | null;
  author: string;
  content: string;
  password: string | null;
  created_at: string;
}

export interface Emoticon {
  id: string;
  name: string;
  image_url: string;
  created_at: string;
}

export interface GuestbookEntry {
  id: string;
  author: string;
  content: string;
  password: string | null;
  created_at: string;
}
