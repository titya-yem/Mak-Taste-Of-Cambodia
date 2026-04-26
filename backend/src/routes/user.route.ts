import { Router } from "express";
import { register, login, googleAuth } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  registerSchema,
  loginSchema,
  googleSchema,
} from "../validations/user.validation";

const router = Router();

router.post("/register", validate(registerSchema), register);

router.post("/login", validate(loginSchema), login);

router.post("/google", validate(googleSchema), googleAuth);

export default router;