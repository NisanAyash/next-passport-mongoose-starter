const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
  },
  shipAddress: {
    street: { type: String, required: true },
    home: { type: String, required: false },
    apartment: { type: String, required: false },
  },
  orderNum: { type: String, required: true },
  items: { type: Array, required: true },
  total: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Order = mongoose.model.Order || new mongoose.model("Order", orderSchema);

module.exports = Order;
