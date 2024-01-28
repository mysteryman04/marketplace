const ProductModel = require('../models/productModel');

const getAllProducts = async () => {
    return ProductModel.find();
};

const getProductById = async (productId) => {
    const product = await ProductModel.findById(productId);
    if (!product) {
        throw new Error(`Product ${productId} not found`);
    }
    return product;
};

const getProductsByUserId = async (userId) => {
    return ProductModel.find({ userId: userId });
};

const createProduct = async (productData) => {
    const product = new ProductModel(productData);
    return product.save();
};

const updateProductById = async (productId, productData) => {
    const product = await ProductModel.findById(productId);
    if (!product) {
        throw new Error(`Product ${productId} not found`);
    }
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
    getProductsByUserId,
    createProduct,
    updateProductById,
    deleteProductById,
};
