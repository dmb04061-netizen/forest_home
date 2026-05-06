const express = require('express');
const router = express.Router();
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.sqlite');

router.get('/', (req, res) => {
    try {
        const db = new Database(dbPath);
        const { category, subcategory } = req.query;
        
        let query = 'SELECT * FROM posts';
        const params = [];
        
        const conditions = [];
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
        
        const posts = db.prepare(query).all(...params);
        const result = posts.map(post => {
            const images = db.prepare('SELECT * FROM post_images WHERE post_id = ? ORDER BY sort_order ASC').all(post.id);
            return {
                ...post,
                images
            };
        });
        res.json(result);
        db.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

module.exports = router;
