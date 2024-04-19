import jwt from "jsonwebtoken";

export function generateJWT(payload, expiresIn) {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn });
}