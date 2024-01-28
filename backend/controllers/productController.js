const response = require('../utils/response');
const productServices = require('../services/productService');

async function getAllProducts(req, res) {
    try {
        const products = await productServices.getAllProducts();
        res.status(200).json(response.Success(products));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

async function getProductById(req, res) {
    const productId = req.params.productId;
    try {
        const product = await productServices.getProductById(productId);
        res.status(200).json(response.Success(product));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

async function createProduct(req, res) {
    const productData = req.body;
    try {
        const newProduct = await productServices.createProduct(productData);
        res.status(201).json(response.Success(newProduct));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

async function updateProductById(req, res) {
    const productId = req.params.productId;
    const productData = req.body;
    try {
        const updatedProduct = await productServices.updateProductById(productId, productData);
        res.status(200).json(response.Success(updatedProduct));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

async function deleteProductById(req, res) {
    const productId = req.params.productId;
    try {
        const deletedProduct = await productServices.deleteProductById(productId);
        res.status(200).json(response.Success(deletedProduct));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

async function getProductsByUserId(req, res) {
    const userId = req.params.userId;
    try {
        const products = await productServices.getProductsByUserId(userId);
        res.status(200).json(response.Success(products));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
    getProductsByUserId,
};
