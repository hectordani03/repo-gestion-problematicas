import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const {
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRES,
  REFRESH_TOKEN_EXPIRES,
} = process.env;

export function generateAccessToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: ACCESS_TOKEN_EXPIRES,
  });
}

export function generateRefreshToken(payload) {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    algorithm: "HS256",
    expiresIn: REFRESH_TOKEN_EXPIRES,
  });
}

export function verifyAccessToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export function verifyRefreshToken(token) {
  return jwt.verify(token, JWT_REFRESH_SECRET);
}
