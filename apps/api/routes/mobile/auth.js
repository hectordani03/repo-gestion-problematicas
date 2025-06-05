import session from "@reuc/application/auth/index.js";
import { Warning } from "@reuc/application/errors/Warning.js";
import { ValidationError } from "@reuc/application/errors/ValidationError.js";
import express from "express";

export const authRouter = express.Router();

const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES_INT;

authRouter.post("/register", async (req, res) => {
  try {
    const response = await session.register({
      body: req.body,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    return res.status(201).json({
      success: true,
      data: {
        user: response.user,
        tokens: response.tokens,
      },
    });
  } catch (err) {
    const code = err instanceof ValidationError ? 422 : 400;

    return res.status(code).json({ success: false, err: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const response = await session.login({
      data: req.body,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    return res.status(201).json({
      success: true,
      data: {
        user: response.user,
        tokens: response.tokens,
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

// authRouter.post("/logout", (req, res) => {
//   TODO: Since web delete the secure cookies to manage the logout
//   for mobile the client side (react-native) should handle this instead
//   of send a request as web
// });
