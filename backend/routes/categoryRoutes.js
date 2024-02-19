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
 *     summary: Lists all the products by query
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: false
 *         description: The title of the product
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         required: false
 *         description: The minimum price of the product
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         required: false
 *         description: The maximum price of the product
 *       - in: query
 *         name: currency
 *         schema:
 *           type: string
 *         required: false
 *         description: The currency of the product
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: false
 *         description: The category of the product
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date-time
 *         required: false
 *         description: The date of the product
 *     responses:
 *       200:
 *         description: The list of the Products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /product/list/{userId}:
 *   get:
 *     summary: Lists all the products for the seller
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: The list of the Products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 * /product/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: The Products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 * /product/delete/{id}:
 *   delete:
 *     summary: Remove the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: null
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /product/create/{userId}:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductDto'
 *     responses:
 *       '200':
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       '400':
 *         description: The product was not created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /product/update/{id}:
 *   put:
 *     summary: Update the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductDto'
 *     responses:
 *       '200':
 *         description: The product was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       '400':
 *         description: The product was not updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 */








const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');


router.post('/category/create', categoryController.createCategory);
router.get('/category/list', categoryController.getAllCategories);
router.get('/category/:id', categoryController.getCategoryById);
router.put('/category/:id', categoryController.updateCategory);
router.delete('/category/:id', categoryController.deleteCategory);
// Add other routes as needed

module.exports = router;
