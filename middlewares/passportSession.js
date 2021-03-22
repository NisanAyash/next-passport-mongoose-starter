import session from "express-session";
const MongoStore = require("connect-mongo");

export default function sessionMiddleware(req, res, next) {
  const mongoStore = new MongoStore({
    mongoUrl: process.env.MONGO_URI,
  });

  return session({
    secret: process.env.TOKEN_SECRET,
    store: mongoStore,
    resave: true,
    saveUninitialized: false,
  })(req, res, next);
}
