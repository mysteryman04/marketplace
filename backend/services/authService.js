const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RegisterUser = async (userData) => {
    const username = userData.username;
    const password = userData.password;
    const existingUser = await findUser(username);
    if (existingUser) {
        throw new Error('Username already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
        username: username,
        password: hashedPassword,
    });
    return user.save();
}

const LoginUser = async (userData) => {
    const username = userData.username;
    const password = userData.password;
    const user = await findUser(username);
    if (!user) {
        throw new Error('Username does not exist');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new Error('Password is incorrect');
    }
    return jwt.sign({username: username}, "This is an e-commerce app", {expiresIn: '1h'});
}

function findUser(username) {
    return UserModel.findOne({username: username});
}

module.exports = {
    RegisterUser,
    LoginUser,
}