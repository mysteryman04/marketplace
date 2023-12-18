const express = require('express');

const Market=require('../models/market');
const router=express.Router();
const handleError = (res, error) => {
    res. status (500).json({ error });
}

router.get('/markets', (req, res) => {
    Market
        .find()
        .sort({title: 1})
        .then((markets) => {
            res
                .status(200)
                .json(markets);
        })
        .catch(() => handleError(res, "Something goes wrong..."));
});
router.get('/markets/:id', (req, res) => {
    Market
        .findById(req.params.id)
        .then((market) => {
            res
                .status(200)
                .json(market);
        })
        .catch(() => handleError(res, "Something goes wrong..."));
});

router.delete('/markets/:id', (req, res) => {
    Market
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch(() => handleError(res, "Something goes wrong..."));

});



router.post('/markets', (req, res) => {
    const market=new Market(req.body);
    market
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result);
        })
        .catch(() => handleError(res, "Something goes wrong..."));

});

module.exports = router;


router.patch('/markets/:id', (req, res) => {
    Market
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch(() => handleError(res, "Something goes wrong..."));

});