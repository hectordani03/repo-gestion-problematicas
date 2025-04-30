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
    const response = await register({
      body: req.body,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    return res
      .cookie("refreshToken", response.tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: REFRESH_TOKEN_EXPIRES,
      })
      .status(201)
      .json({
        success: true,
        data: {
          user: response.user,
          accessToken: response.tokens.accessToken,
        },
      });
  } catch (err) {
    const code = err instanceof ValidationError ? 422 : 400;

    return res.status(code).json({ success: false, err: err.message });
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
      .cookie("refreshToken", response.tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: REFRESH_TOKEN_EXPIRES,
      })
      .status(201)
      .json({
        success: true,
        data: {
          user: response.user,
          accessToken: response.tokens.accessToken,
        },
      });
  } catch (err) {
    let code;
    let success;

    if (err instanceof Warning) {
      code = 500;
      success = true;
    } else if (err instanceof ValidationError) {
      code = 422;
      success = false;
    } else {
      code = 400;
      success = false;
    }

    return res.status(code).json({
      success,
      err: err.message,
    });
  }
});

authRouter.post("/logout", (req, res) => {
  try {
    return res
      .clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      })
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    return res.status(400).json({ success: false, err: err.message });
  }
});
