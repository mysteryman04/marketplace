// controllers/userController.js
const UserModel = require('../models/userModel');
const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userService.createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(400).send('Bad request');
    }
};

const updateUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await userService.updateUserById(userId, userData);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error(error);
        res.status(400).send('Bad request');
    }
};

const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userService.deleteUserById(userId);
        res.status(200).json(deletedUser);
    }
    catch (error) {
        console.error(error);
        res.status(400).send('Bad request');
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
};
