import { Router } from "express";
import { register, login, googleAuth, getMe, signout } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  registerSchema,
  loginSchema,
  googleSchema,
} from "../validations/user.validation";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Auth routes
router.post("/signup", validate(registerSchema), register);
router.post("/signin", validate(loginSchema), login);

// Google auth
router.post("/google", validate(googleSchema), googleAuth);

// Authenticated routes
router.get("/me", authMiddleware, getMe);
router.post("/signout", signout);

export default router;