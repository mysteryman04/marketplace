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
 *         - categoryId
 *         - imageUrl
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
 *         categoryId:
 *           type: string
 *           description: The category of the product
 *         imageUrl:
 *           type: string
 *           description: The image url of the product
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
 *     ProductCreateDto:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - amount
 *         - currency
 *         - categoryId
 *         - imageUrl
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
 *         categoryId:
 *            type: string
 *            description: The category of the product
 *         imageUrl:
 *            type: string
 *            description: The image url of the product
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
 */


const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/AuthMiddleware');
const sellerMiddleware = require('../middleware/SellerMiddleware');

router.get('/product/list', authMiddleware.authenticateToken, productController.getAllProducts);
router.get('/product/list/:userId', authMiddleware.authenticateToken,sellerMiddleware.authenticateToken,productController.getAllProductsForSeller);
router.get('/product/:id', authMiddleware.authenticateToken, productController.getProductById);
router.post('product/create/:userId', authMiddleware.authenticateToken, sellerMiddleware.authenticateToken, productController.createProduct);
router.put('product/update/:id', authMiddleware.authenticateToken, sellerMiddleware.authenticateToken, productController.updateProduct);
router.delete('/product/delete/:id', authMiddleware.authenticateToken, sellerMiddleware.authenticateToken, productController.deleteProduct);

module.exports = router;
