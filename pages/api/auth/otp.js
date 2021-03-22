import nextConnect from "next-connect";
import middleware from "../../../middlewares/middleware";
import Otp from "../../../models/Otp";
import { isAuth } from "../../../middlewares/authenticate";
import User from "../../../models/User";
import { sendVerificationCode } from "../../../utils/twilio-helper";

const handler = nextConnect();

handler
  .use(middleware)
  .use(isAuth)
  .get(async (req, res, next) => {
    const code = sendVerificationCode(req.user);
    const otp = new Otp({
      phone: req.user.phone,
      code,
    });

    await otp.save();

    res.json({ otp });
  })
  .post(async (req, res, next) => {
    const { verifyCode } = req.body;

    const otp = await Otp.findOne({ phone: req.user.phone });

    if (!otp) {
      throw new Error("expires");
    }

    if (otp.code !== verifyCode) {
      throw new Error("the code don't match");
    }

    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        verified: true,
      }
    );
    res.json({ auth: req.user, otp });
  });

export default handler;
