import { register } from "@reuc/application/auth/register.js";
import { ValidationError } from "@reuc/application/entities/ValidationError.js";
import express from "express";
import csrf from "csurf";

export const authRouter = express.Router();

const csrfProtection = csrf({ cookie: true });

authRouter.post("/register", csrfProtection, async (req, res) => {
  try {
    const response = await register(req.body);

    return res.status(201).json({ success: true, data: response });
  } catch (err) {
    if (err instanceof ValidationError)
      return res.status(422).json({ success: false, err: err.message });

    return res.status(400).json({
      success: false,
      err: `Unknown error occurred: ${err.message}`,
    });
  }
});
