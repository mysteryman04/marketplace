/**
 * @swagger
 * components:
 *   schemas:
 *     UserDto:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The name of User
 *         password:
 *           type: string
 *           description: The password of User
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
 *   name: Authorization/Authentication
 *   description: The Users managing API
 * /register:
 *   post:
 *     summary: register a new user
 *     tags: [Authorization/Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDto'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       500:
 *         description: Some server error
 * /login:
 *   post:
 *    summary: Login a user
 *    tags: [Authorization/Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserDto'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.RegisterUser);

router.post('/login', authController.LoginUser);
module.exports = router;