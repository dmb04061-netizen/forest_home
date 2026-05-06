const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'database.sqlite');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

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

    CREATE TABLE IF NOT EXISTS post_images (
        id TEXT PRIMARY KEY,
        post_id TEXT NOT NULL,
        image_url TEXT NOT NULL,
        sort_order INTEGER DEFAULT 0,
        FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS profile (
        id INTEGER PRIMARY KEY DEFAULT 1,
        image_url TEXT,
        content TEXT,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);

// Insert data
try {
    const insertCharacter = db.prepare('INSERT OR IGNORE INTO characters (id, title, description, image_url, thumbnail_url) VALUES (?, ?, ?, ?, ?)');
    insertCharacter.run('char_1', 'Test Character', 'A test character description', '/test.jpg', '/test-thumb.jpg');

    const insertPost = db.prepare('INSERT OR IGNORE INTO posts (id, category, subcategory, title, content) VALUES (?, ?, ?, ?, ?)');
    insertPost.run('post_1', 'log', 'daily', 'My Daily Log', 'This is a test daily log post.');
    insertPost.run('post_2', 'board', 'review', 'My Review', 'This is a test review post.');

    const insertProfile = db.prepare('INSERT OR IGNORE INTO profile (id, content) VALUES (?, ?)');
    insertProfile.run(1, 'Hello, this is my profile.');

    console.log('Database seeded successfully!');
} catch (e) {
    console.error('Error seeding data:', e);
}

db.close();
