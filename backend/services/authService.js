const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const enums = require('../enums/enums');
const env = require('../config/env');
const constants = require('../constants/constants');

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
        type: constants.Admins.includes(username) ? enums.UserType.ADMIN : enums.UserType.CONSUMER,
        image: null,
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
    return jwt.sign({username: username,type: user.type}, env.SECRET_KEY, {expiresIn: '1h'});
}

const GetProfile = async (username) => {
    const user = await findUser(username);
    if (!user) {
        throw new Error('Username does not exist');
    }
    return user;
}

function findUser(username) {
    return UserModel.findOne({username: username});
}

module.exports = {
    RegisterUser,
    LoginUser,
    GetProfile
}