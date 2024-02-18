const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/cart/:userId', cartController.getCartByUserId);
router.post('/cart', cartController.createCart);
router.put('/cart/:userId', cartController.updateCartByUserId);
router.delete('/cart/:userId', cartController.deleteCartByUserId);

module.exports=router;