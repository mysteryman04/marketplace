const ProductModel = require('../models/productModel');

// Get all products for buyers
const getAllProducts = async ({title,data,categoryId, minPrice, maxPrice, currency}) =>{
    const filter = {};
    if (title) {
        filter.title = {$regex: title, $options: 'i'};
    }
    if (categoryId) {
        filter.categoryId = categoryId;
    }
    if (minPrice !== undefined) {
        filter.price = filter.price || {};
        filter.price.amount = {$gte: minPrice};
    }
    if (maxPrice !== undefined) {
        filter.price = filter.price || {};
        filter.price.amount = {$lte: maxPrice};
    }
    if (data) {
        filter.createdDate = {$gte: new Date(data)};
    }
    if (currency) {
        filter.price = filter.price || {};
        filter.price.currency = currency;
    }
    try {
        return await ProductModel.find(filter);
    } catch (error) {
        throw new Error(error);
    }
}

// Get all products for sellers
const getAllProductsForSeller = async (userId) =>{
    try {
        return await ProductModel.find({userId});
    }
    catch (error) {
        throw new Error(error);
    }
}

// Get product by id
const getProductById = async (id) =>{
    try{
        const product = await ProductModel.findOne({id:id});
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
    catch (error) {
        throw new Error(error);
    }
}

// Create product for seller
const createProduct = async (userId, product) =>{
    try{
        const product = new ProductModel({
            title: product.title,
            description: product.description,
            price: {
                amount: product.price.amount,
                currency: product.price.currency,
            },
            categoryId: product.categoryId,
            userId: userId,
            createdData: new Date(),
            updatedData: new Date(),
            imageUrl: product.imageUrl,
            reviews: [],
        });
        return await ProductModel.create(product);
    }
    catch (error) {
        throw new Error(error);
    }
}

// Update product for seller

const updateProduct = async (id, product) =>{
     try{
         const product = await ProductModel.findOne({id});
         if (!product) {
             throw new Error('Product not found');
         }
            product.title = product.title;
            product.description = product.description;
            product.price = {
                amount: product.price.amount,
                currency: product.price.currency,
            };
            product.categoryId = product.categoryId;
            product.updatedData = new Date();
            product.imageUrl = product.imageUrl;
            return await product.save();
     }
     catch (error) {
        throw new Error(error);
     }
}

// Delete product for seller
const deleteProduct = async (id) => {
    try{
        return await ProductModel.findByIdAndDelete(id);
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getAllProducts,
    getAllProductsForSeller,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}