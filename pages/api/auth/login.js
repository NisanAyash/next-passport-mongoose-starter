import nextConnect from "next-connect";
import passportSession from "../../../middlewares/passportSession";
import connectDB from "../../../middlewares/connectDB";
import passport from "../../../lib/passport";

const handler = nextConnect();

handler
  .use(passportSession)
  .post(passport.authenticate("local"), (req, res) => {
    res.json({ MSG: "LOGIN SUCCESSFULY" });
  });

export default connectDB(handler);
