const express = require('express');
const productModel = require('../models/products.models')
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

router.patch('/:id', async (req, res) => {
    try {
        const products = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send(products);
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router