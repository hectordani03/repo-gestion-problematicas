import { authMiddleware, requireOutsider } from "../middleware/auth.js";
import { ValidationError } from "@reuc/application/errors/ValidationError.js";
import profile from "@reuc/application/profile/index.js";
import express from "express";
import csrf from "csurf";

export const profileRouter = express.Router();

const csrfProtection = csrf({ cookie: true });

profileRouter.put(
  "/edit",
  authMiddleware,
  csrfProtection,
  requireOutsider,
  async (req, res) => {
    try {
      const user = req.user;
      const outsider = req.outsider;

      const response = await profile.update({
        uuidOutsider: outsider.uuid_outsider,
        uuidUser: user.uuid_user,
        body: req.body,
      });

      return res.status(200).json({
        success: true,
        data: {},
      });
    } catch (err) {
      const code = err instanceof ValidationError ? 422 : 400;

      return res.status(code).json({ success: false, err: err.message });
    }
  }
);

profileRouter.get(
  "/profile",
  authMiddleware,
  requireOutsider,
  async (req, res) => {
    try {
      const user = req.user;
      const outsider = req.outsider;

      const response = await profile.getByUuids({
        uuidOutsider: outsider.uuid_outsider,
        uuidUser: user.uuid_user,
      });

      return res.status(200).json({
        success: true,
        data: response.profile,
      });
    } catch (err) {
      const code = err instanceof ValidationError ? 422 : 400;

      return res.status(code).json({ success: false, err: err.message });
    }
  }
);
