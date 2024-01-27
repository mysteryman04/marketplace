const ProductModel = require('../models/productModel');

const getAllProducts = async () => {
    return ProductModel.find();
};

const getProductById = async (productId) => {
    const product = await ProductModel.findById(productId);
    return ProductModel.findById(productId);
};

const getProductByUserId = async (userId) => {
    const product = await ProductModel.findById(userId);
    return ProductModel.findById(userId);
};

const createProduct = async (productData) => {
    const product = new ProductModel(productData);
    return product.save();
};

const updateProductById = async (productId, productData) => {
    const product = await ProductModel.findById(productId);
    product.name = productData.name;
    product.password = productData.password;
    return product.save();
};

const deleteProductById = async (productId) => {
    return ProductModel.findByIdAndDelete(productId);
};

module.exports = {
    getAllProducts,
    getProductById,
    getProductByUserId,
    createProduct,
    updateProductById,
    deleteProductById,
};
