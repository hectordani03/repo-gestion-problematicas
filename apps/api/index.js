import express from "express";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import cors from "cors";
import dotenv from "dotenv";

import { authRouter } from "./routes/auth.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

// Logs all incoming requests
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  if (typeof req.body !== "undefined" && Object.keys(req.body).length) {
    console.log("Body:", req.body);
  }
  next();
});

// Rutas Auth
app.use("/auth", authRouter);

// Rutas base
app.get("/", (req, res) => {
  res.send("Hello Word!!!");
});

app.get("/csrf-token", csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// // make another route file "routes/user.js"
// import express from "express";
// import { authMiddleware } from "../middleware/auth.js";

// const userRouter = express.Router();

// userRouter.get("/profile", authMiddleware, async (req, res) => {
//   // You now have access to req.user (uuid_user, ip, ua, etc.)
//   res.json({ success: true, user: req.user });
// });

// // call the router file and use as
// export default userRouter;

// import userRouter from "./routes/user.js";
// app.use("/user", userRouter);
