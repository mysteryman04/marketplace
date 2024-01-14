const Market=require('../models/market');
const handleError = (res, error) => {
    res. status (500).json({ error });
}

const getMarkets=(req,res)=>{
    Market
        .find()
        .sort({title: 1})
        .then((markets) => {
            res
                .status(200)
                .json(markets);
        })
        .catch((err) => handleError(res, err));
}
const getMarket=(req,res)=>{
    Market
        .findById(req.params.id)
        .then((market) => {
            res
                .status(200)
                .json(market);
        })
        .catch((err) => handleError(res, err));
}
const deleteMarket=(req,res)=>{
    Market
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch((err) => handleError(res, err));

}
const addMarket=(req,res)=>{
    const market=new Market(req.body);
    market
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result);
        })
        .catch((err) => handleError(res, err));

}
const updateMarket=(req,res)=>{
    Market
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch((err) => handleError(res, err));

}


module.exports = {
    getMarkets,
    getMarket,
    deleteMarket,
    addMarket,
    updateMarket,
}