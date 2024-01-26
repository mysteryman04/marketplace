const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    seller: {
        type: String,
        require: true,
    },
    createdData: {
        type: Number,
        require: true,
    },
    img: {
        data: Buffer,
        contentType: String
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