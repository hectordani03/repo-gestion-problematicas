import express from "express";
import { authRouter } from "./auth.js";

const mobileRouter = express.Router();

mobileRouter.use("/auth", authRouter);

export default mobileRouter;
