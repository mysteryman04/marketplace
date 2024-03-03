/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - description
 *         - amount
 *         - currency
 *         - subCategoryId
 *         - image
 *         - createdDate
 *         - updatedDate
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *           description: The title of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         amount:
 *           type: number
 *           description: The cost of the product
 *         currency:
 *           type: string
 *           description: The currency of the product
 *         subCategoryId:
 *           type: string
 *           description: The sub-category of the product
 *         image:
 *           type: object
 *           properties:
 *              urls:
 *                  type: array
 *                  items:
 *                      type: string
 *                      description: The image url of the product
 *              name:
 *                  type: array
 *                  items:
 *                      type: string
 *                      description: The image name of the product
 *         createdDate:
 *           type: string
 *           format: date-time
 *           description: The date when the product was created
 *         updatedDate:
 *           type: string
 *           format: date-time
 *           description: The date when the product was last updated
 *         userId:
 *           type: string
 *           description: The ID of the user who created the product
 *     ProductDto:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - amount
 *         - currency
 *         - subCategoryId
 *         - image
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         amount:
 *            type: number
 *            description: The cost of the product
 *         currency:
 *            type: string
 *            description: The currency of the product
 *         subCategoryId:
 *            type: string
 *            description: The sub-category  of the product
 *         image:
 *            type: object
 *            properties:
 *               urls:
 *                   type: array
 *                   items:
 *                       type: string
 *                       description: The image url of the product
 *               name:
 *                   type: array
 *                   items:
 *                       type: string
 *                       description: The image name of the product
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
 *   name: Products
 *   description: The products managing API
 * /product/list:
 *   get:
 *     summary: Lists all the products by query
 *     tags: [Products]
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
 * /product/list-latest:
 *   get:
 *     summary: Lists all the latest products
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: false
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: The list of the Products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
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
 *
 *
 */


const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/AuthMiddleware');
const sellerMiddleware = require('../middleware/SellerMiddleware');

router.get('/product/list',  productController.getAllProducts);
router.get('/product/list-latest', productController.getLatestProducts);
router.get('/product/list/:userId',productController.getAllProductsForSeller);
router.get('/product/:id', productController.getProductById);
router.post('/product/create/:userId',sellerMiddleware.authenticateToken,  productController.createProduct);
router.put('/product/update/:id', sellerMiddleware.authenticateToken, sellerMiddleware.authenticateToken, productController.updateProduct);
router.delete('/product/delete/:id', sellerMiddleware.authenticateToken,sellerMiddleware.authenticateToken, productController.deleteProduct);

module.exports = router;
