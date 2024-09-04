const express = require('express');
const connect = require('./src/config/db');
const productController = require('./src/controllers/products.controller');
const cartController = require('./src/controllers/cart.controller');
const orderController = require('./src/controllers/order.controller');
const app = express();
const cors = require('cors');

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.use('/products', productController);
app.use('/cart', cartController);
app.use('/order', orderController);

app.listen(3000, async () => {
    try {
        await connect();
        console.log('Connected to MongoDB and server is running on port 3000');
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit the process if the database connection fails
    }
});
