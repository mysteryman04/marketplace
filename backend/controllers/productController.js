const ProductModel = require('../models/productModel');


async function getAllProducts(req, res) {
    try {
        const products = await ProductModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getProductById(req, res) {
    const productId = req.params.productId;

    try {
        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createProduct(req, res) {
    const productData = req.body;

    try {
        const product = new ProductModel(productData);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateProductById(req, res) {
    const productId = req.params.productId;
    const productData = req.body;

    try {
        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update product properties
        product.title = productData.title;
        product.price = productData.price;
        // Update other properties as needed

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteProductById(req, res) {
    const productId = req.params.productId;

    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
};
