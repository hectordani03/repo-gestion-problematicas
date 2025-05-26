import { authMiddleware } from "../middleware/auth.js";
import application from "@reuc/application/applications/index.js";
import express from "express";
import csrf from "csurf";

export const projectRouter = express.Router();

const csrfProtection = csrf({ cookie: true });
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES_INT;

// TODO: if outsider session expires, then save the form data and the
// URL action that tried to achieve, in order to use after confirm login.
// Give much thought about it like how to manage if the user dont try to
// login after receive error for a while.
projectRouter.post(
  "/create",
  authMiddleware, // set req.user
  csrfProtection,
  async (req, res) => {
    try {
      const outsider = req.user;

      const response = await application.create({
        uuidAuthor: outsider.uuid_user,
        body: req.body,
      });

      return res.status(201).json({
        success: true,
        data: {
          application: response.application,
        },
      });
    } catch (err) {
      return res.status(400).json({ success: false, err: err.message });
    }
  }
);
