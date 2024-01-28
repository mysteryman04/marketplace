const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    name: String,
});

const categorySchema = new mongoose.Schema({
    name: String,
    subcategories: [subcategorySchema]
});

const Category = mongoose.model('Category', categorySchema);

const electronicsCategory = new Category({
    name: 'Electronics',
    subcategories: [
        { name: 'Mobile Phones' },
        { name: 'Laptops' },
        { name: 'Audio & Headphones' },
        { name: 'Cameras & Photography' },
        { name: 'Wearable Technology' },
    ]
});

const clothingCategory = new Category({
    name: 'Clothing',
    subcategories: [
        { name: 'Men\'s Clothing' },
        { name: 'Women\'s Clothing' },
        { name: 'Kid\'s Clothing' },
        { name: 'Shoes' },
        { name: 'Accessories' },
    ]
});

const booksCategory = new Category({
    name: 'Books',
    subcategories: [
        { name: 'Fiction' },
        { name: 'Non-fiction' },
        { name: 'Science Fiction & Fantasy' },
        { name: 'Mystery & Thrillers' },
        { name: 'Biographies' },
    ]
});

module.exports = Category;
