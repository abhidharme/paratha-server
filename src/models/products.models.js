const mongoose = require('mongoose');

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true, default: 40 },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  Addons: [
    {
      Extra_Sauce: {
        current: { type: Number, default: 0 }
      },
      Yogurt: {
        current: { type: Number, default: 0 }
      },
      Cheese: {
        current: { type: Number, default: 0 }
      },
      Corn: {
        current: { type: Number, default: 0 }
      },
      Cabbage: {
        current: { type: Number, default: 0 }
      },
      Fenugreek: {
        current: { type: Number, default: 0 }
      }
    }
  ]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
