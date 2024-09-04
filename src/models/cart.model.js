const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true, default: 40 },
    quantity: { type: Number, required: true },
    Addons: [
        {
            Extra_Sauce: { type: Number },
            Yogurt: { type: Number },
            Cheese: { type: Number },
            Corn: { type: Number },
            Cabbage: { type: Number },
            Fenugreek: { type: Number }
        }
    ]
});

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;
