import nextConnect from "next-connect";
import passportSession from "../../../middlewares/passportSession";
import connectDB from "../../../middlewares/connectDB";
import passport from "../../../lib/passport";

const handler = nextConnect();

handler
  .use(passportSession)
  .post(passport.authenticate("local"), (req, res) => {
    const { _id, fullname, email } = req.user;

    res.json({
      success: true,
      msg: "login successfuly!",
      user: {
        _id,
        fullname,
        email,
      },
    });
  });

export default connectDB(handler);
