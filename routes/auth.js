const express = require('express');
const router = express.Router();

// 예시 컨트롤러, 실제 로직은 app/api/auth/route.ts 내의 로직을 변환
router.post('/login', (req, res) => {
    res.json({ message: 'Login end-point' });
});

router.post('/logout', (req, res) => {
    res.json({ message: 'Logout end-point' });
});

router.get('/me', (req, res) => {
    res.json({ message: 'Me end-point' });
});

router.post('/register', (req, res) => {
    res.json({ message: 'Register end-point' });
});

module.exports = router;
