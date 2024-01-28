// controllers/categoryController.js
const categoryService = require('../services/categoryService');

async function createCategory(req, res) {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllCategories(req, res) {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    createCategory,
    getAllCategories,
    // Add other controller functions here
};
