const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
const authMiddleware = require('../middleware/AuthMiddleware');

/**
 * @swagger
 * paths:
 *   /file/upload:
 *     post:
 *       summary: "Upload a file"
 *       tags:
 *         - "File"
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 file:
 *                   type: string
 *                   format: binary
 *       responses:
 *         "200":
 *           description: "The file was successfully uploaded"
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Response'
 *         "400":
 *           description: "The file was not uploaded"
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Response'
 *   /file/{fileName}:
 *     get:
 *       summary: "Get file by name"
 *       tags:
 *         - "File"
 *       parameters:
 *         - in: path
 *           name: fileName
 *           required: true
 *           schema:
 *             type: string
 *           description: The file name
 *       responses:
 *         "200":
 *           description: "The file was successfully found"
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Response'
 *         "400":
 *           description: "The file was not found"
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Response'
 * components:
 *   schemas:
 *     Response:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *         data:
 *           type: object
 * */


router.post('/file/upload', upload.single('file'), authMiddleware.authenticateToken,  fileController.uploadFile);
router.get('/file/:fileName', authMiddleware.authenticateToken, fileController.getFile);

module.exports = router;



