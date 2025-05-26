import session from "@reuc/application/auth/index.js";
import { Warning } from "@reuc/application/errors/Warning.js";
import { ValidationError } from "@reuc/application/errors/ValidationError.js";
import express from "express";
import csrf from "csurf";

export const authRouter = express.Router();

const csrfProtection = csrf({ cookie: true });
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES_INT;

authRouter.post("/refresh", (req, res) => {
  try {
    const newAccessToken = session.refresh(req);

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).json({ error: "Token inválido." });
  }
});

authRouter.post("/register", csrfProtection, async (req, res) => {
  try {
    const response = await session.register({
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
    const response = await session.login({
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
      .json({ success: true, message: "Sesión cerrada exitosamente" });
  } catch (err) {
    return res.status(400).json({ success: false, err: err.message });
  }
});
