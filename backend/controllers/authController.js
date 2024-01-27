const authServices = require('../services/authService');
const response = require('../utils/response');
const e = require("express");

const RegisterUser = async (req, res) => {
    try {
        const result = await authServices.RegisterUser(req.body);
        res.status(200).json(response.Success(result));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

const LoginUser = async (req, res) => {
    try {
        const result = await authServices.LoginUser(req.body);
        res.status(200).json(response.Success(result));
    } catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}
const GetProfile = async (req, res) => {
    try {
        const result = await authServices.GetProfile(req.user);
        res.status(200).json(response.Success(result));
    }
    catch (error) {
        res.status(200).json(response.Error(error.message));
    }
}

module.exports = {
    RegisterUser,
    LoginUser,
    GetProfile
}