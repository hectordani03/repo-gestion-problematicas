import { register } from "@reuc/application/auth/register.js";
import { login } from "@reuc/application/auth/login.js";
import { Warning } from "@reuc/application/entities/Warning.js";
import { ValidationError } from "@reuc/application/entities/ValidationError.js";
import { sessionRefresh } from "@reuc/application/auth/session.js";
import express from "express";
import csrf from "csurf";

export const authRouter = express.Router();

const csrfProtection = csrf({ cookie: true });
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES_INT;

authRouter.post("/refresh", (req, res) => {
  try {
    const newAccessToken = sessionRefresh(req);

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).json({ error: "Invalid refresh token" });
  }
});

authRouter.post("/register", csrfProtection, async (req, res) => {
  try {
    const response = await register(req.body);

    return res.status(201).json({ success: true, data: response });
  } catch (err) {
    if (err instanceof ValidationError)
      return res.status(422).json({ success: false, err: err.message });

    return res.status(400).json({
      success: false,
      err: `Error desconocido: ${err.message}`,
    });
  }
});

authRouter.post("/login", csrfProtection, async (req, res) => {
  try {
    const response = await login({
      data: req.body,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    return res
      .status(201)
      .json({
        success: true,
        data: {
          user: response.user,
          accessToken: response.tokens.accessToken,
        },
      })
      .cookie("refreshToken", response.tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: REFRESH_TOKEN_EXPIRES,
      });
  } catch (err) {
    if (err instanceof Warning)
      return res.status(500).json({ success: true, err: err.message });
    if (err instanceof ValidationError)
      return res.status(422).json({ success: false, err: err.message });

    return res.status(400).json({
      success: false,
      err: `Error desconocido: ${err.message} ${err.stack}`,
    });
  }
});
