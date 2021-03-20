import passport from "passport";
import LocalStrategy from "passport-local";

import User from "../models/User";

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
      done(null, user);

      // Security-wise, if you hashed the password earlier, you must verify it
      // if (!user || await argon2.verify(user.password, password))
      // if (!user || password === 1) {
      //   done(null, null);
      // } else {
      //   done(null, user);
      // }
    }
  )
);

export default passport;
