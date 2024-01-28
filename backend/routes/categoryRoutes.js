// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');


router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
// Add other routes as needed

module.exports = router;
