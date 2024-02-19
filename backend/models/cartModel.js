const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        id:mongoose.Schema.Types.ObjectId,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
        items: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
                quantity: { type: Number, default: 1 },
            }
        ],
    },
    { versionKey: false }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
