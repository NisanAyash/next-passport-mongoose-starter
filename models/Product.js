const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  netId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 80,
    required: true,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 255,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  toppings: [
    {
      netId: { type: String, required: true },
      id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true, default: 0 },
      active: { type: Boolean, required: true, default: true },
    },
  ],
  image: {
    type: String,
    default: "https://via.placeholder.com/150",
    required: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Product =
  mongoose.model.Product || new mongoose.model("Product", productSchema);

module.exports = Product;
