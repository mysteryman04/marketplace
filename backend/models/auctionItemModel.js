const mongoose = require('mongoose');

const auctionItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    startingPrice: { type: Number, required: true },
    currentPrice: { type: Number, default: 0 },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // Add other auction item-related fields as needed

    bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
});

const AuctionItem = mongoose.model('AuctionItem', auctionItemSchema);

module.exports = AuctionItem;
