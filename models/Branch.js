const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  image: { type: String, required: true },
});

const Branch =
  mongoose.models.Branch || new mongoose.model("Branch", branchSchema);

module.exports = Branch;
