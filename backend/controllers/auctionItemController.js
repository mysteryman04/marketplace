const auctionItemService = require('../services/auctionItemService');

async function createAuctionItem(req, res) {
    const auctionItemData = req.body;
    try {
        const auctionItem = await auctionItemService.createAuctionItem(auctionItemData);
        res.status(201).json(auctionItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Add other auction item controller functions as needed

module.exports = {
    createAuctionItem,
    // Add other auction item controller functions here
};
