// routes/categoryRoutes.js


/**
 * @swagger
 * components:
 *   schemas:
 *     SubCategory:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - categoryId
 *       properties:
 *         id:
 *           type: string
 *           description: The id of the sub category
 *         name:
 *           type: string
 *           description: The title of the sub category
 *         categoryId:
 *            type: string
 *            description: The category of the sub category
 *     SubCategoryDto:
 *       type: object
 *       required:
 *         - name
 *         - categoryId
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the category
 *         categoryId:
 *           type: string
 *           description: The category of the sub category
 *     Response:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           description: The utils data
 *         message:
 *           type: string
 *           description: The error message
 *         statusCode:
 *           type: string
 *           description: The status code of the response
 */
/**
 * @swagger
 * tags:
 *   - name: Sub-Category
 *     description: The sub-category managing API
 * /sub-category/list/{categoryId}:
 *   get:
 *     summary: Lists all the sub-categories by query
 *     tags: [Sub-Category]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The sub-category of the sub-category
 *     responses:
 *       200:
 *         description: The list of the sub-categories by category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /sub-category/{id}:
 *   get:
 *     summary: Get the sub-category by id
 *     tags: [Sub-Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the sub-category
 *     responses:
 *       200:
 *         description: The sub-category by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 * /sub-category/delete/{id}:
 *   delete:
 *     summary: Remove the sub-category by id
 *     tags: [Sub-Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the sub-category
 *     responses:
 *       200:
 *         description: null
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /sub-category/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Sub-Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategoryDto'
 *     responses:
 *       '200':
 *         description: The sub-category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       '400':
 *         description: The sub-category was not created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /sub-category/update/{id}:
 *   put:
 *     summary: Update the sub-category by id
 *     tags: [Sub-Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the sub-category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategoryDto'
 *     responses:
 *       '200':
 *         description: The sub-category was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       '400':
 *         description: The sub-category was not updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 */


const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subCategoryController');
const adminMiddleware = require('../middleware/AdminMiddleware');


router.post('/sub-category/create', adminMiddleware.authenticateToken,   subcategoryController.createSubCategory);
router.get('/sub-category/:id',adminMiddleware.authenticateToken, subcategoryController.getSubCategoryById);
router.put('/sub-category/update/:id',adminMiddleware.authenticateToken, subcategoryController.updateSubCategory);
router.delete('/sub-category/:id',adminMiddleware.authenticateToken, subcategoryController.deleteSubCategory);
router.get('/sub-category/list/:categoryId',adminMiddleware.authenticateToken, subcategoryController.getSubCategoryByCategoryId);

// Add other routes as needed

module.exports = router;
