const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 50,
    lowercase: true,
    required: true,
  },
  description: {
    type: String,
    minlength: 0,
    maxlength: 255,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAvailable: { type: Boolean, default: true },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
});

const Category =
  mongoose.models.Category || new mongoose.model("Category", categorySchema);
module.exports = Category;
