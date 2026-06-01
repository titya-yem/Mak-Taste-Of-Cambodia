import express from "express";
import { downloadBackup } from "../controllers/backup.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import adminMiddleware from "../middlewares/admin.middleware";

const router = express.Router();

router.get("/download", authMiddleware, adminMiddleware, downloadBackup);

export default router;