const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Users',
        required: true
    },
    createdData: {
        type: Date,
        require: true,
    },
    imageUrl: {
        type: String,
        require: false,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        amount: Number,
        currency: String,
    },
    reviews: [{
        star: Number,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
        },
        text: String,
    }]},
    { versionKey: false});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;