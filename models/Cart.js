const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: [
    {
      netId: { type: String, required: true },
      productId: { type: String, required: true },
      name: { type: String, required: true },
      quantity: { type: Number, default: 1 },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, default: 0 },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model.Cart || new mongoose.model("Cart", cartSchema);

module.exports = Cart;
