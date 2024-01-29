const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    auctionItem: { type: mongoose.Schema.Types.ObjectId, ref: 'AuctionItem', required: true },
    // Add other bid-related fields as needed
});

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;
