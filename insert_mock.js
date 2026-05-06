const Database = require('better-sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, 'data', 'database.sqlite');
const fs = require('fs');

if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}

const db = new Database(dbPath);
db.exec(`
  CREATE TABLE IF NOT EXISTS characters (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    thumbnail_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

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
`);

db.prepare("INSERT OR REPLACE INTO characters (id, title, description, image_url, thumbnail_url) VALUES (?, ?, ?, ?, ?)").run('c1', 'Example Character', 'A character description', 'https://via.placeholder.com/300', 'https://via.placeholder.com/150');

db.prepare("INSERT OR REPLACE INTO posts (id, category, subcategory, title, content, thumbnail_url) VALUES (?, ?, ?, ?, ?, ?)").run('p1', 'log', 'daily', 'Example Log Post', 'This is an example log post for today.', 'https://via.placeholder.com/150');

db.prepare("INSERT OR REPLACE INTO posts (id, category, subcategory, title, content, thumbnail_url) VALUES (?, ?, ?, ?, ?, ?)").run('p2', 'board', 'review', 'Example Board Post', 'This is an example board post reviewing something.', 'https://via.placeholder.com/150');

console.log("Inserted mock data into SQLite!");
