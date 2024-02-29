// routes/categoryRoutes.js

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *           description: The title of the product
 *     CategoryDto:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the category
 *     Response:
 *       type: object
 *       required:
 *         - data
 *         - message
 *         - status
 *       properties:
 *         data:
 *           type: object
 *           description: The utils data
 *         message:
 *           type: string
 *           description: The error message
 *         status:
 *           type: string
 *           description: The password of User
 */
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The category managing API
 * /category/list:
 *   get:
 *     summary: Lists all the categories by query
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: The title of the category
 *     responses:
 *       200:
 *         description: The list of the Categories
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /category/{id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: The category by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 * /category/delete/{id}:
 *   delete:
 *     summary: Remove the category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: null
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /category/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryDto'
 *     responses:
 *       '200':
 *         description: The category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       '400':
 *         description: The category was not created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /category/update/{id}:
 *   put:
 *     summary: Update the category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryDto'
 *     responses:
 *       '200':
 *         description: The category was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       '400':
 *         description: The category was not updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 */








const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const adminMiddleware = require('../middleware/AdminMiddleware');


router.post('/category/create', adminMiddleware.authenticateToken,  categoryController.createCategory);
router.get('/category/list',categoryController.getAllCategories);
router.get('/category/:id', categoryController.getCategoryById);
router.put('/category/:id', categoryController.updateCategory);
router.delete('/category/delete/:id', adminMiddleware.authenticateToken,categoryController.deleteCategory);
// Add other routes as needed

module.exports = router;
