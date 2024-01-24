const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        username: { type: String, required: true },
        password: { type: String, required: true },
    },
    { versionKey: false } // Disable the version key (__v)
);

const User = mongoose.model('Users', userSchema);

module.exports = User;
