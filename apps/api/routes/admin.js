import { authMiddleware } from "../middleware/auth.js";
import { AuthError } from "../errors/AuthError.js";
import { ValidationError } from "@reuc/application/errors/ValidationError.js";
import admin from "@reuc/application/admin/index.js";
import express from "express";
import csrf from "csurf";

export const adminRouter = express.Router();

const csrfProtection = csrf({ cookie: true });

adminRouter.get("/meta/tables/", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const roleData = user.role;

    if (roleData?.split(":")[0] !== "admin")
      throw new AuthError("Sin acceso a estas funcionalidades");

    const response = admin.getAdminTableNames();

    return res.status(200).json({
      success: true,
      data: response.tables,
    });
  } catch (err) {
    const code = err instanceof AuthError ? 403 : 400;

    return res.status(code).json({ success: false, err: err.message });
  }
});

adminRouter.get(
  "/meta/tables/:table/fields",
  authMiddleware,
  async (req, res) => {
    try {
      const user = req.user;
      const roleData = user.role;

      if (roleData?.split(":")[0] !== "admin")
        throw new AuthError("Sin acceso a estas funcionalidades");

      const table = req.params.table;

      const response = await admin.getAdminTableSchema({ table });

      return res.status(200).json({
        success: true,
        data: response.schema,
      });
    } catch (err) {
      let code;
      if (err instanceof AuthError) {
        code = 403;
      } else if (err instanceof ValidationError) {
        code = 404;
      } else {
        code = 400;
      }

      return res.status(code).json({ success: false, err: err.message });
    }
  }
);

// adminRouter.get(
//   "/meta/tables/:table/stats",
//   authMiddleware,
//   async (req, res) => {
//     try {
//       const user = req.user;
//       const roleData = user.role;

//       if (roleData?.split(":")[0] !== "admin")
//         throw new ValidationError("Sin acceso a estas funcionalidades");

//       const table = req.params.table;

//       const response = admin.dontknowwhatnameset1(table);

//       return res.status(201).json({
//         success: true,
//         data: response.stats,
//       });
//     } catch (err) {
//       const code = err instanceof ValidationError ? 403 : 400;

//       return res.status(code).json({ success: false, err: err.message });
//     }
//   }
// );

adminRouter.post(
  "/data/:table/",
  authMiddleware,
  csrfProtection,
  async (req, res) => {
    try {
      const user = req.user;
      const roleData = user.role;

      if (roleData?.split(":")[0] !== "admin")
        throw new AuthError("Sin acceso a estas funcionalidades");

      const table = req.params.table;
      const { page, perPage, query, sort } = req.body;

      const response = await admin.fetchAdminTableRecords({
        table,
        page: Number(page) || 1,
        perPage: Number(perPage) || 50,
        query: query || {},
        sort: sort || { createdAt: "desc" },
      });

      return res.status(201).json({
        success: true,
        data: response.data,
      });
    } catch (err) {
      let code;
      if (err instanceof AuthError) {
        code = 403;
      } else if (err instanceof ValidationError) {
        code = 404;
      } else {
        code = 400;
      }

      return res.status(code).json({ success: false, err: err.message });
    }
  }
);
