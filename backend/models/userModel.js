// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
