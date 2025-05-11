import { login } from "./login.js";
import { register } from "./register.js";
import { sessionAuth, sessionRefresh } from "./session.js";

const session = {
  login,
  register,
  auth: sessionAuth,
  refresh: sessionRefresh,
};

export default session;
