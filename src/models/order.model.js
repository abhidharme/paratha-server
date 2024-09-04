const mongoose = require('mongoose');

const addonSchema = new mongoose.Schema({
    Extra_Sauce: { type: Number, default: 0 },
    Yogurt: { type: Number, default: 0 },
    Cheese: { type: Number, default: 0 },
    Corn: { type: Number, default: 0 },
    Cabbage: { type: Number, default: 0 },
    Fenugreek: { type: Number, default: 0 },
});

const orderItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    Addons: [addonSchema],
    id: { type: Number, required: true }, // This field captures the unique ID for each item
});

const orderSchema = new mongoose.Schema({
    order_data: [orderItemSchema],
    delivery_charge: { type: Number, default: 0 },
    id: { type: Number, required: true }, // This field captures the unique ID for the order
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
