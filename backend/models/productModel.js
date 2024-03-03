const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    createdData: {
        type: Date,
        require: true,
    },
    updatedData: {
        type: Date,
        require: true,
    },
    image: {
        urls : [
            {
                type: String,
                required: true,
            }
        ],
        name : [
            {
                type: String,
                required: true,
            }
        ]
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true,
    },
    price: {
        amount: Number,
        currency: String,
    },
    reviews: [{
        starCount: Number,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
        },
        comment: String,
    }]},
    { versionKey: false});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;