const express = require('express');
const orderModel = require('../models/order.model')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await orderModel.find().lean().exec();
        return res.send(products);
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const cart = await orderModel.create(req.body);
        return res.send(cart)
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router