import { Router } from "express";
import { creatingProduct, getBySlug, getProducts } from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";


const router = Router();

router.post("/create", authMiddleware, adminMiddleware, creatingProduct);
router.get("/", getProducts);
router.get("/:slug", getBySlug);

export default router;