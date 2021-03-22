import nextConnect from "next-connect";
import User from "../../../models/User";
import Otp from "../../../models/Otp";
import connectDB from "../../../middlewares/connectDB";
import { hashPassword } from "../../../lib/auth";
import { sendVerificationCode } from "../../../utils/twilio-helper";
import middleware from "../../../middlewares/middleware";

const handler = nextConnect();

handler.use(middleware).post(async (req, res) => {
  const { email, password, firstname, lastname, phone } = req.body;

  if (!email || !password || !firstname || !lastname || !phone) {
    return res.status(400).send("Missing fields");
  }

  const emailExist = await User.findOne({ email });
  if (emailExist) {
    res.status(400).json({ error: true, msg: "The Email Already Exist!" });
  }

  const phoneExist = await User.findOne({ phone });
  if (phoneExist) {
    res.status(400).json({ error: true, msg: "The Phone Already Exist!" });
  }

  const hash = await hashPassword(password, 12);

  const user = new User({
    email,
    password: hash,
    firstname,
    lastname,
    phone,
  });

  await user.save();

  const code = sendVerificationCode(user);

  const otp = new Otp({
    phone,
    code,
  });

  await otp.save();

  res.json({
    success: true,
    msg: "login successfuly!",
    user: {
      _id: user._id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      otp,
    },
  });
});

export default connectDB(handler);

// open otp end-point
