const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');

router.post('/placeBid', bidController.placeBid);
// Add other bid routes as needed

module.exports = router;
