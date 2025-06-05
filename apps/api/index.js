import express from "express";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import cors from "cors";
import dotenv from "dotenv";

import mobileRouter from "./routes/mobile/index.js";

import { authRouter } from "./routes/auth.js";
import { projectRouter } from "./routes/project.js";
import { adminRouter } from "./routes/admin.js";
import { profileRouter } from "./routes/profile.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const ORIGIN = process.env.CORS_ORIGIN || "*";

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(
  cors({
    origin: ORIGIN === "*" ? true : ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));

// Logs all incoming requests
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  if (typeof req.body !== "undefined" && Object.keys(req.body).length) {
    console.log("Body:", req.body);
  }
  next();
});

// Namespace mobile routes
app.use("/mobile", mobileRouter);

// Routes Auth
app.use("/auth", authRouter);

// Routes Project
app.use("/project", projectRouter);

// Routes Admin
app.use("/admin", adminRouter);

// Routes Outsider
app.use("/outsider", profileRouter);

// Routes base
app.get("/", (req, res) => {
  res.send("Hello Word!!!");
});
app.get("/csrf-token", csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
