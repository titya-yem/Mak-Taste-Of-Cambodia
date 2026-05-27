import { Router } from "express";
import { register, login, googleAuth, getMe, signout, getAllUsers } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  registerSchema,
  loginSchema,
  googleSchema,
} from "../validations/user.validation";
import { authMiddleware } from "../middlewares/auth.middleware";
import adminMiddleware from "../middlewares/admin.middleware"

const router = Router();

// Auth routes
router.post("/signup", validate(registerSchema), register);
router.post("/signin", validate(loginSchema), login);
router.post("/signout", signout);

// Google auth
router.post("/google", validate(googleSchema), googleAuth);

// Authenticated routes
router.get("/me", authMiddleware, getMe);
router.get("/allUsers", authMiddleware ,adminMiddleware, getAllUsers);

export default router;