// middleware/auth.js
const jwt = require('jsonwebtoken');
const secretKey  = require('../config/env'); // Replace with your actual secret key
const response = require('../utils/response');
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(200).json(response.Error('Unauthorized - No token provided'));
    }

    jwt.verify(token, secretKey.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(200).json(response.Error(err.message));
        }
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };
