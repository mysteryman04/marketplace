const response = require('../utils/Response');
const productServices = require('../services/productService');

const getAllProducts = async (req, res) => {
    try {
        const products = await productServices.getAllProducts(req.query);
        res.status(200).json(response.Success(products));
    }
    catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const getAllProductsForSeller = async (req, res) => {
    try {
        const products = await productServices.getAllProductsForSeller(req.params.userId);
        res.status(200).json(response.Success(products));
    }
    catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productServices.getProductById(req.params.id);
        res.status(200).json(response.Success(product));
    }
    catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const createProduct = async (req, res) => {
    try {
        await productServices.createProduct(req.params.userId, req.body);
        res.status(201).json(response.Success(null));
    }
    catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}
const updateProduct = async (req, res) => {
    try {
        await productServices.updateProduct(req.params.id, req.body);
        res.status(200).json(response.Success(null));
    }
    catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}
const deleteProduct = async (req, res) => {
    try {
        await productServices.deleteProduct(req.params.id);
        res.status(200).json(response.Success(null));
    }
    catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const getLatestProducts = async (req, res) => {
    try {
        const categoryId = req.query.categoryId;
        const products = await productServices.getLatestProducts(categoryId);
        res.status(200).json(response.Success(products));
    }
    catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}


module.exports = {
    getAllProducts,
    getAllProductsForSeller,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getLatestProducts
};