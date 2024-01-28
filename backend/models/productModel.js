const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    createdData: {
        type: Date,
        require: true,
    },
    img: {
        data: Buffer,
        contentType: String
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true,
    },
    price: {
        amount: Number,
        currency: String,
    },
    reviews: [{
        star: Number,
        name: String,
        text: String,
    }],
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;