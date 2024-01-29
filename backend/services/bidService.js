const Bid = require('../models/bid');

async function createBid(bidData) {
    const bid = new Bid(bidData);
    return bid.save();
}

// Add other bid service functions as needed

module.exports = {
    createBid,
    // Add other bid service functions here
};
