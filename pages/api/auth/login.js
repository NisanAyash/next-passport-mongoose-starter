import nextConnect from "next-connect";
import connectDB from "../../../middlewares/connectDB";
import middleware from "../../../middlewares/middleware";
import passport from "../../../lib/passport";

const handler = nextConnect();

handler.use(middleware).post(passport.authenticate("local"), (req, res) => {
  res.json({
    success: true,
    msg: "login successfuly!",
    user: req.user,
  });
});

export default connectDB(handler);
