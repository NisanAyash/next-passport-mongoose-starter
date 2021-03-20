import nextConnect from "next-connect";
import passportSession from "../../../middlewares/passportSession";
import User from "../../../models/User";
import connectDB from "../../../middlewares/connectDB";
import { hashPassword } from "../../../lib/auth";

const handler = nextConnect();

handler
  .use(passportSession)
  .get((req, res) => {
    res.json({ msg: "works" });
  })
  .post(async (req, res) => {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).send("Missing fields");
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      res.status(400).json({ error: true, msg: "Already exist!" });
    }

    const hash = await hashPassword(password, 12);

    const user = new User({
      fullname,
      email,
      password: hash,
    });

    await user.save();

    res.json({ exist: emailExist, user });
  });

export default connectDB(handler);
