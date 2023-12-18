const express = require('express');
const {
    getMarkets,
    getMarket,
    deleteMarket,
    addMarket,
    updateMarket,
}=require('../controllers/market-controller');
const router=express.Router();

router.get('/markets', getMarkets);
router.get('/markets/:id',getMarket);
router.delete('/markets/:id', deleteMarket);
router.post('/markets', addMarket);
router.patch('/markets/:id', updateMarket);

module.exports = router;