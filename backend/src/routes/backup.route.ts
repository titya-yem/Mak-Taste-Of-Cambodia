import express from "express";
import { downloadBackup } from "../controllers/backup.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = express.Router();

router.get("/download", authMiddleware, adminMiddleware, downloadBackup);

export default router;