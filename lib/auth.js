// import Iron from "@hapi/iron";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function createLoginSession(session, secret) {
  const token = jwt.sign({ ...session }, secret);
  return token;
}

export async function getLoginSession(token, secret) {
  const session = jwt.verify(token, secret);

  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (session.maxAge && Date.now() > expiresAt) {
    throw new Error("Session expired");
  }

  return session;
}

export async function hashPassword(password, saltRounds) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    });
  });
}

export async function comparePasswords(input, passwordHash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(input, passwordHash, function (err, result) {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}
