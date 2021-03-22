const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, expires: "10s", default: Date.now }, // Expire after 15 s
});

const Otp = mongoose.models.Otp || mongoose.model("Otp", otpSchema);

module.exports = Otp;
