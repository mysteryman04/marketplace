const subCategoryModel = require('../models/subCategoryModel');

const createSubCategory = async (name,categoryId) => {
      try {
          const newSubCategory = new subCategoryModel({name,categoryId});
          return subCategoryModel.create(newSubCategory);
      }
      catch (error) {
            throw new Error(error.message);
      }
};

const getAllSubCategories = async () => {
    try {
        return subCategoryModel.find();
    } catch (error) {
        throw new Error(error.message);
    }
};
const getSubCategoryByCategoryId = async (categoryId) => {
    try {
        return subCategoryModel.find({categoryId});
    } catch (error) {
        throw new Error(error.message);
    }
}
const getSubCategoryById = async (id) => {
    try {
        return subCategoryModel.findById(id);
    } catch (error) {
        throw new Error(error.message);
    }

}

const updateSubCategory = async (id, newName,categoryId) => {
    try {
        const subCategory = await getSubCategoryById(id);
        if (!subCategory) {
            throw new Error('SubCategory not found');
        }
        subCategory.name = newName;
        subCategory.categoryId = categoryId;
        return subCategory.save();
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const deleteSubCategory = async (id) => {
    try {
        const subCategory = await getSubCategoryById(id);
        if (!subCategory) {
            throw new Error('SubCategory not found');
        }
        return subCategory.delete();
    }
    catch (error) {
        throw new Error(error.message);
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