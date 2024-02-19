const categoryService = require('../services/categoryService');
const response = require('../utils/Response');

async function createCategory(req, res) {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(200).json(response.Success(category));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

async function getAllCategories(req, res) {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(response.Success(categories));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        res.status(200).json(response.Success(category));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const updateCategory = async (req, res) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body.name);
        res.status(200).json(response.Success(category));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);
        res.status(200).json(response.Success(category));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}


module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
