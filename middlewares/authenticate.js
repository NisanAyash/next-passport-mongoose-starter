export const isAuth = (req, res, next) => {
  if (!req.user) {
    res.status(401).send("unauthenticated");
  } else {
    next();
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(401).send("you don't have access");
  }
};
