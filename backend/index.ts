import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./src/routes/user.route";

import dotenv from "dotenv";
dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

// routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});