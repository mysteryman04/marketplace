// middleware/auth.js
const jwt = require('jsonwebtoken');
const secretKey  = require('../config/env'); // Replace with your actual secret key
const response = require('../utils/Response');
const authenticateToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(200).json(response.Error('Unauthorized - No token provided'));
    }
    token = token.split(' ')[1];

    jwt.verify(token, secretKey.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(200).json(response.Error(err.message));
        }
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };
