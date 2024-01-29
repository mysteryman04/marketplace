const express = require('express');
const router = express.Router();
const auctionItemController = require('../controllers/auctionItemController');

router.post('/createAuctionItem', auctionItemController.createAuctionItem);
// Add other auction item routes as needed

module.exports = router;
