const CartModel = require('../models/cartModel');

const getAllProductsInCart = async (userId) => {
    try{
        return await CartModel.findOne({userId: userId}).populate('items.productId');
    }
    catch(error){
        throw new Error(error);
    }
}


const addProductToCart = async (userId, productId, quantity) => {
    try{
        let cart = await CartModel.findOne({userId: userId});
        if(cart){
            let index = cart.items.findIndex(item => item.productId.toString() === productId);
            if(index !== -1){
                cart.items[index].quantity += quantity;
            }
            else{
                cart.items.push({productId, quantity});
            }
            return await cart.save();
        }
        else{
            const newCart = new CartModel({
                userId,
                items: [{productId, quantity}]
            });
            return await newCart.save();
        }
    }
    catch(error){
        throw new Error(error);
    }
}

const removeProductFromCart = async (userId, productId,quantity) => {
    try{
        let cart = await CartModel.findOne({userId: userId});
        if(cart){
            let index = cart.items.findIndex(item => item.productId.toString() === productId);
            if(index !== -1){
                if(cart.items[index].quantity > quantity){
                    cart.items[index].quantity -= quantity;
                }
                else{
                    cart.items.splice(index, 1);
                }
                return await cart.save();
            }
        }
    }
    catch(error){
        throw new Error(error);
    }
}

module.exports = {
    getAllProductsInCart,
    addProductToCart,
    removeProductFromCart
};