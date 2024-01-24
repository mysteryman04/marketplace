// index.js
const express = require('express');
const mongoose = require('mongoose');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB connection
const mongoURL = 'mongodb+srv://mystery_dev:backend123@cluster0.liwzter.mongodb.net/FinalBackEnd?retryWrites=true&w=majority'; // Update with your MongoDB URL
mongoose
    .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

// Swagger options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'User API',
            version: '1.0.0',
            description: 'API documentation for the User application',
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use(userRoutes);

app.listen(PORT, '0.0.0.0', (err) => {
    err ? console.log(err) : console.log(`Listening on port ${PORT}`);
});
