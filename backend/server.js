const express = require('express');
const mongoose = require('mongoose');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
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
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "e-commerce app",
            version: "0.1.0",
            description:
                "This is a simple ecommerce application made with Express and documented with Swagger",
            license: {
                name: "AITU",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "e-commerce app",
                email: "nurluhankakpan@gmail.com",
            },
        },
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
            },
        },
        servers: [
            {
                url: "http://localhost:3000/",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);
// Routes
app.use(userRoutes);
app.use(authRoutes);

app.listen(PORT, '0.0.0.0', (err) => {
    err ? console.log(err) : console.log(`Listening on port ${PORT}`);
});
