const AuctionItem = require('../models/auctionItem');

async function createAuctionItem(auctionItemData) {
    const auctionItem = new AuctionItem(auctionItemData);
    return auctionItem.save();
}

// Add other auction item service functions as needed

module.exports = {
    createAuctionItem,
    // Add other auction item service functions here
};
