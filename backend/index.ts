import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import "./src/backups/cron";

import userRoutes from "./src/routes/user.route";
import productRoutes from "./src/routes/product.route";
import ambassadorRoutes from "./src/routes/ambassador.route";
import orderRoutes from "./src/routes/order.route";
import backupRoutes from "./src/routes/backup.route";

import { stripeWebhook } from "./src/controllers/webhook.controller";

dotenv.config();

const app = express();

// Stripe webhook (must be raw)
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// Middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/ambassador", ambassadorRoutes);
app.use("/order", orderRoutes);
app.use("/backup", backupRoutes);

// Error handler (basic)
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

// Server
const PORT = Number(process.env.PORT) || 8000;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  console.error("Server failed to start:", err);
});