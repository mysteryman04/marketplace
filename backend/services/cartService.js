const CartModel = require('../models/cartModel');

const getCartByUserId = async (userId) =>{
    return CartModel.findById(userId);
};

const createCart = async (cartData) => {
    const cart = new CartModel(cartData);
    return cart.save();
};

const updateCartByUserId = async (userId, cartData) => {
    const cart = await CartModel.findById(userId);
    if (!cart) {
        throw new Error('Cart not found');
    }
    cart.items = cartData.items;
    cart.save();
};

const deleteCartByUserId = async (userId) => {
    return CartModel.findByIdAndDelete(userId);
};

module.exports = {
    getCartByUserId,
    createCart,
    updateCartByUserId,
    deleteCartByUserId,
}

