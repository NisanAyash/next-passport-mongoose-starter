import nextConnect from "next-connect";
import middleware from "../../../middlewares/middleware";
import { isAuth } from "../../../middlewares/authenticate";

const handler = nextConnect();

handler
  .use(middleware)
  .use(isAuth)
  .get((req, res) => {
    res.json(req.user);
  });

export default handler;
