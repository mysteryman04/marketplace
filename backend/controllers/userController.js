// controllers/userController.js
const userService = require('../services/userService');
const response = require('../utils/Response')

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(response.Success(users));
    } catch (error) {
        console.error(error);
        res.status(200).send(response.Error(error));
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.status(200).json(response.Success(user));
    }
    catch (error) {
        console.error(error);
        res.status(200).send(response.Error('Error'));
    }
};

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userService.createUser(userData);
        res.status(200).json(response.Success(newUser));
    } catch (error) {
        console.error(error);
        res.status(200).send(response.Error('Error'));
    }
};

const updateUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await userService.updateUserById(userId, userData);
        res.status(200).json(response.Success(updatedUser));
    }
    catch (error) {
        console.error(error);
        res.status(200).send(response.Error('Error'));
    }
};

const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userService.deleteUserById(userId);
        res.status(200).json(response.Success(deletedUser));
    }
    catch (error) {
        console.error(error);
        res.status(200).send(response.Error('Error'));
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
};
