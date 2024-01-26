const authServices = require('../services/authService');
const response = require('../utils/response');
const e = require("express");

const RegisterUser = async (req, res) => {
    try {
        const result = await authServices.RegisterUser(req.body);
        res.status(200).json(response.Success(result));
    } catch (error) {
        res.status(200).json(response.Error(error));
    }
}

const LoginUser = async (req, res) => {
    try {
        const result = await authServices.LoginUser(req.body);
        res.status(200).json(response.Success(result));
    } catch (error) {
        res.status(200).json(response.Error(error));
    }
}

module.exports = {
    RegisterUser,
    LoginUser
}