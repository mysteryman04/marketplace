
/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       required:
 *         - id
 *         - userId
 *         - productId
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the cart
 *         userId:
 *           type: string
 *           description: The id of the user
 *         productId:
 *           type: string
 *           description: The id of the product
 *         quantity:
 *           type: number
 *           description: The quantity of the product
 *     CartDto:
 *       type: object
 *       required:
 *         - productId
 *         - quantity
 *       properties:
 *         productId:
 *           type: string
 *           description: The id of the product
 *         quantity:
 *           type: number
 *           description: The quantity of the product
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
 *   name: Cart
 *   description: The cart managing API
 * /cart/list/{userId}:
 *   get:
 *     summary: Lists all the products in the cart by user id
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the user
 *     responses:
 *       200:
 *         description: The list of products in the cart for the specified user id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *
 * /cart/create/{userId}:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartDto'
 *     responses:
 *       200:
 *         description: The product was successfully added to the cart
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 * /cart/delete/{userId}:
 *   delete:
 *     summary: Remove a product from the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartDto'
 *     responses:
 *       200:
 *         description: The product was successfully removed from the cart
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 */


const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const consumerMiddleware = require('../middleware/ConsumerMiddleware');


router.get('/cart/list/:userId',consumerMiddleware.authenticateToken, cartController.getAllProductsInCart);
router.post('/cart/create/:userId',consumerMiddleware.authenticateToken, cartController.addProductToCart);
router.delete('/cart/delete/:userId', consumerMiddleware.authenticateToken,cartController.removeProductFromCart);
module.exports=router;