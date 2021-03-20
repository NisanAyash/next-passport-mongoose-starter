import passport from "passport";
import LocalStrategy from "passport-local";

import User from "../models/User";
import { comparePasswords } from "./auth";

passport.serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
  // deserialize the username back into user object
  const user = await User.findOne({ _id: id });
  done(null, user);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false);
      }

      const passwordMatch = await comparePasswords(password, user.password);

      if (!passwordMatch) {
        return done(null, false);
      }

      done(null, user);
    }
  )
);

export default passport;
