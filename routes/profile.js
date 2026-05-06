// backend/routes/profile.js
const express = require('express');
const router = express.Router();

// GET /api/profile
router.get('/', (req, res) => {
    // DB 정보 대체 임시 하드코딩
    res.json({
        content: "안녕하세요. 백엔드에서 전송된 프로필 데이터입니다.",
        imageUrl: null
    });
});

// PUT /api/profile
router.put('/', (req, res) => {
    const { content } = req.body;
    res.json({ message: "프로필이 성공적으로 업데이트 되었습니다.", content });
});

module.exports = router;
