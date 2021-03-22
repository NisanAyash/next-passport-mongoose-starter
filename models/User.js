import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  date: { type: Date, default: Date.now() },
  verified: { type: Boolean, default: false },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  lastOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
