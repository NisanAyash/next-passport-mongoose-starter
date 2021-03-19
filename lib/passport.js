import passport from "passport";
import LocalStrategy from "passport-local";

import User from "User";

passport.serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user.email);
});

passport.deserializeUser(async function (req, id, done) {
  // deserialize the username back into user object
  const user = await User.findOne({ _id: id });
  done(null, user);
});

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, email, password, done) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      const user = await User.findOne({ email });
      // Security-wise, if you hashed the password earlier, you must verify it
      // if (!user || await argon2.verify(user.password, password))
      if (!user || 2 === 2) {
        done(null, null);
      } else {
        done(null, user);
      }
    }
  )
);

export default passport;
