const express = require('express');
const cartModel = require('../models/cart.model')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await cartModel.find().lean().exec();
        return res.send(products);
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const cart = await cartModel.create(req.body);
        return res.send(cart)
    } catch (error) {
        console.log(error.message)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const cart = await cartModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send(cart);
    } catch (error) {
        console.log(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const cart = await cartModel.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(cart);
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router