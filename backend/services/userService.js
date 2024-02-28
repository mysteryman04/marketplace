const UserModel = require('../models/userModel');

const getAllUsers = async () => {
    return UserModel.find();
};

const getUserById = async (userId) => {
    return UserModel.findById(userId);
};

const createUser = async (userData) => {
    const user = new UserModel(userData);
    return user.save();
};

const updateUserById = async (userId, userData) => {
    const user = await UserModel.findById(userId);
    user.name = userData.name;
    user.password = userData.password;
    user.type = userData.type;
    return user.save();
};

const deleteUserById = async (userId) => {
    return UserModel.findByIdAndDelete(userId);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
};
