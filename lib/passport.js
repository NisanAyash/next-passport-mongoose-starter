import passport from "passport";
import LocalStrategy from "passport-local";
import GitHubStrategy from "passport-github2";
import User from "../models/User";
import { comparePasswords } from "./auth";

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
  console.log(id);

  try {
    const user = await User.findOne({ _id: id });
    done(null, user);
  } catch (error) {
    done(null, false);
  }
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
