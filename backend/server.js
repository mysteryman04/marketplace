const express = require('express');
const mongoose = require('mongoose');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    in: "header",
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{ bearerAuth: [] }],
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
app.use(productRoutes);
app.use(categoryRoutes);
app.use(subCategoryRoutes);
app.use(cartRoutes);
app.use(fileRoutes);
app.listen(PORT, '0.0.0.0', (err) => {
    err ? console.log(err) : console.log(`Listening on port ${PORT}`);
});
