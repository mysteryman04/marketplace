const cartService = require('../services/cartService');
const response = require('../utils/Response');


const getAllProductsInCart = async (req, res) => {
    try{
        const userId = req.params.userId;
        const result = await cartService.getAllProductsInCart(userId);
        res.status(200).json(response.Success(result));
    }
    catch(error){
        res.status(400).json(response.Error(error.message));
    }
}

const addProductToCart = async (req, res) => {
    try{
        const userId = req.params.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        const result = await cartService.addProductToCart(userId, productId, quantity);
        res.status(200).json(response.Success(result));
    }
    catch(error){
        res.status(400).json(response.Error(error.message));
    }
}

const removeProductFromCart = async (req, res) => {
    try{
        const userId = req.params.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        const result = await cartService.removeProductFromCart(userId, productId, quantity);
        res.status(200).json(response.Success(result));
    }
    catch(error){
        res.status(400).json(response.Error(error.message));
    }
}

module.exports = {
    getAllProductsInCart,
    addProductToCart,
    removeProductFromCart
}
