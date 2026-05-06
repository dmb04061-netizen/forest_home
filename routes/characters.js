const express = require('express');
const router = express.Router();
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.sqlite');

router.get('/', (req, res) => {
    try {
        const db = new Database(dbPath);
        const characters = db.prepare('SELECT * FROM characters ORDER BY created_at DESC').all();
        res.json(characters);
        db.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch characters' });
    }
});

router.get('/:id', (req, res) => {
    try {
        const db = new Database(dbPath);
        const character = db.prepare('SELECT * FROM characters WHERE id = ?').get(req.params.id);
        db.close();
        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.json(character);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch character' });
    }
});

module.exports = router;
