import { Router } from "express";
import { creatingProduct, getBySlug, getProducts } from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";


const router = Router();

// public route
router.get("/", getProducts);
router.get("/:slug", getBySlug);

// protected route
router.post("/create", authMiddleware, adminMiddleware, creatingProduct);

export default router;