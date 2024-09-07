const express = require('express');
const router = express.Router();
const { addAvailability, getAvailability } = require('../controllers/availabilityController');

router.post('/', addAvailability);
router.get('/:userId', getAvailability);

module.exports = router;
