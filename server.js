// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const next = require('next');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const isDev = process.env.NODE_ENV !== 'production';
const frontendRoot = path.resolve(__dirname, '..', 'frontend');
const nextApp = next({ dev: isDev, dir: frontendRoot });
const handle = nextApp.getRequestHandler();

app.use(cors());
app.use(express.json());

// API 라우트
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend server is running ok!' });
});

nextApp.prepare().then(() => {
    app.use((req, res) => handle(req, res));

    // 에러 핸들링
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    app.listen(PORT, HOST, () => {
        console.error(`Server is running on ${HOST}:${PORT}`);
    });
});
