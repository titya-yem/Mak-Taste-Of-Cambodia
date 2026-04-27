import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoutes from "./src/routes/user.route";

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.use("/user", userRoutes);

// error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

// server
const PORT = Number(process.env.PORT) || 8000;
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  console.error("Server failed to start:", err);
});