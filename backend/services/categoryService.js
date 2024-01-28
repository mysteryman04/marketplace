// services/categoryService.js
const Category = require('../models/category');

async function createCategory(categoryData) {
    // Add logic to create a new category
    const newCategory = new Category(categoryData);
    return await newCategory.save();
}

async function getAllCategories() {
    // Add logic to retrieve all categories
    return await Category.find();
}

// Add other CRUD operations as needed

module.exports = {
    createCategory,
    getAllCategories,
    // Add other service functions here
};
