const express = require('express');
const router = express.Router();
const { createSession, getSessions } = require('../controllers/sessionController');

router.post('/', createSession);
router.get('/:userId', getSessions);

module.exports = router;
