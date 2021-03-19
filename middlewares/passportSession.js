import nextConnect from "next-connect";
import session from "../lib/session";
import passport from "passport";

const auth = nextConnect()
  .use(
    session({
      name: "sess",
      secret: process.env.TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "lax",
      },
    })
  )
  .use(passport.initialize())
  .use(passport.session());

export default auth;
