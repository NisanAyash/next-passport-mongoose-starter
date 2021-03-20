import nextConnect from "next-connect";
import passportSession from "../../../middlewares/passportSession";

const handler = nextConnect();

handler
  .use(passportSession)
  .use((req, res, next) => {
    if (!req.user) {
      res.status(401).send("unauthenticated");
    } else {
      next();
    }
  })
  .get((req, res) => {
    res.json({
      user: {
        _id: req.user._id,
        email: req.user.email,
        fullname: req.user.fullname,
      },
    });
  });

export default handler;
