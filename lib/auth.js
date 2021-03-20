// import Iron from "@hapi/iron";
import jwt from "jsonwebtoken";

export async function createLoginSession(session, secret) {
  const token = jwt.sign({ ...session }, secret);

  return token;
}

export async function getLoginSession(token, secret) {
  // const session = await Iron.unseal(token, secret, Iron.defaults);

  const session = jwt.verify(token, secret);

  // const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  // if (session.maxAge && Date.now() > expiresAt) {
  //   throw new Error("Session expired");
  // }

  return session;
}
