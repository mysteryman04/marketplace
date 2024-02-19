const mongoose = require('mongoose');
const userType = require('../enums/enums');
const {stringify} = require("nodemon/lib/utils");

const userSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        username: { type: String, required: true },
        password: { type: String, required: true },
        type: { type:Number, required: true},
        imageUrl: {type: String,required: false}
    },
    { versionKey: false } // Disable the version key (__v)
);

const User = mongoose.model('User', userSchema);

module.exports = User;
