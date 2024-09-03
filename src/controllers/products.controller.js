const express = requires('express');
const productModel = require('../controllers/product.controller')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await productModel.find().lean().exec();
        return res.send(products);
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        return res.send(product)
    } catch (error) {
        console.log(error.message)
    }
})

router.patch('/', async (req, res) => {
    try {
        const products = await productModel.find().lean().exec();
        return res.send(products);
    } catch (error) {
        console.log(error.message)
    }
})