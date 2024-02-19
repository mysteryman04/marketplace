const Category = require('../models/categoryModel');

async function createCategory({name}) {
    const newCategory = new Category({name});
    return Category.create(newCategory);
}

async function getAllCategories() {
    return Category.find();
}

async function getCategoryById(id) {
    const category = await Category.findById(id);
    if(!category) {
        throw new Error('Category not found');
    }
    return category;
}

async function updateCategory(id, newName) {
    const category = await getCategoryById(id);
    if(!category) {
        throw new Error('Category not found');
    }
    category.name = newName;
    return category.save();
}

async function deleteCategory(id) {
    const category = await getCategoryById(id);
    if(!category) {
        throw new Error('Category not found');
    }
    return category.delete();
}
module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
