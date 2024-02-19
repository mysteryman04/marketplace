const subCategoryService = require('../services/subCategoryService');
const response = require('../utils/Response');


const createSubCategory = async (req, res) => {
    try {
        const subCategory = await subCategoryService.createSubCategory(req.body.name,req.body.categoryId);
        res.status(200).json(response.Success(subCategory));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await subCategoryService.getAllSubCategories();
        res.status(200).json(response.Success(subCategories));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const getSubCategoryByCategoryId = async (req, res) => {
    try {
        const subCategories = await subCategoryService.getSubCategoryByCategoryId(req.params.categoryId);
        res.status(200).json(response.Success(subCategories));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const getSubCategoryById = async (req, res) => {
    try {
        const subCategory = await subCategoryService.getSubCategoryById(req.params.id);
        res.status(200).json(response.Success(subCategory));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const updateSubCategory = async (req, res) => {
    try {
        const subCategory = await subCategoryService.updateSubCategory(req.params.id, req.body.name,req.body.categoryId);
        res.status(200).json(response.Success(subCategory));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

const deleteSubCategory = async (req, res) => {
    try {
        const subCategory = await subCategoryService.deleteSubCategory(req.params.id);
        res.status(200).json(response.Success(subCategory));
    } catch (error) {
        res.status(400).json(response.Error(error.message));
    }
}

module.exports = {
    createSubCategory,
    getAllSubCategories,
    getSubCategoryByCategoryId,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory
};

