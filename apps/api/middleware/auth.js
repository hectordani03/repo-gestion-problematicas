import { sessionAuth } from "@reuc/application/auth/session.js";
import { ValidationError } from "@reuc/application/entities/ValidationError.js";

export function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token missing" });

  try {
    const decoded = sessionAuth(token, req.ip, req.headers["user-agent"]);

    req.user = decoded;

    next();
  } catch (err) {
    console.log("err authMiddleware", err);
    if (err instanceof ValidationError)
      return res.status(403).json({ success: false, err: err.message });

    return res.status(401).json({ error: "Invalid token" });
  }
}
