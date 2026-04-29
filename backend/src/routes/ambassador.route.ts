import { Router } from "express";
import { createNewAmbassador, getAmbassadors } from "../controllers/ambassadors.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const router = Router();

router.get("/", getAmbassadors);

router.post("/create", authMiddleware, adminMiddleware, createNewAmbassador);

export default router;