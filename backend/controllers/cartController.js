const CartService = require('../services/cartService');
const response = require('../utils/Response');
const e = require("express");

const getCartByUserId = async (req, res) => {
    try {
        const cartId = req.params.id;
        const cart = await CartService.getCartByUserId(userId);
        res.status(200).json(response.Success(cart));
    } catch (error) {
        console.error(error);
        res.status(200).send(response.Error('Error'));
    }
};

const createCart = async (req, res) => {
    try {
        const cartData = req.body;
        const newCart = await CartService.createCart(cartData);
        res.status(200).json(response.Success(newCart));
    } catch (error) {
        console.error(error);
        res.status(200).json(response.Error('Error'));
    }
};

const updateCartByUserId = async (req, res) => {
    try {
        const cartId = req.params.id;
        const cartData = req.body;
        const updateCart = await CartService.updateCartByUserId(cartId, cartData);
        res.status(200).json(response.Success(updateCart));
    } catch (error) {
        console.error(error);
        res.status(200).json(response.Error('Error'));
    }
};

const deleteCartByUserId = async (req, res) => {
    try {
        const cartData = req.body;
        const cartId = req.params.id;
        const deleteCart = await CartService.deleteCartByUserId(userId, cartData);
        res.status(200).json(response.Success(deleteCart));
    } catch (error) {
        console.error(error);
        res.status(200).json(response.Error('Error'));
    }
};

module.exports = {
    getCartByUserId,
    createCart,
    updateCartByUserId,
    deleteCartByUserId,
}