import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  getUserById,
  linkGoogleAccount,
} from "../models/user.model";
import { verifyGoogleToken } from "../utils/google";
import type { AuthRequest } from "../middlewares/auth.middleware";

export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, password } = req.body;

        const existingUser = await findUserByEmail(email);
        if (existingUser)
            return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser(name,email, hashedPassword, "local");

        // Remove password before sending response
        const { password: _, ...safeUser } = user;

        // Create JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret", { expiresIn: "2h" });

        // Set JWT token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7200000,
            path: "/",
        });

        res.status(201).json({ user: safeUser, token });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Register failed" });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await findUserByEmail(email);

        if (!user || !user.password)
            return res.status(400).json({ message: "Invalid credentials "});

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials "});

        const { password: _, ...safeUser } = user;

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret", { expiresIn: "2h" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7200000,
            path: "/",
        });

        res.status(200).json({ user: safeUser, token });
        
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login failed" });
    }
}

// GOOGLE AUTH (signup + login)
export const googleAuth = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;

        // Verify Google token
        const payload = await verifyGoogleToken(token);

        if (!payload || !payload.email)
            return res.status(400).json({ message: "Invalid Google token" });

        const { email, name, sub } = payload;

        let user = await findUserByEmail(email);

        // New user → create
        if (!user)
            user = await createUser(name!, email, null, "google", sub);
        // Existing user → link Google
        else if (!user.google_id)
            user = await linkGoogleAccount(email, sub);

        const { password: _, ...safeUser } = user;

        const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret", { expiresIn: "2h" });

        res.cookie("token", jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7200000,
            path: "/",
        });

        res.status(200).json({ user: safeUser, token });

    } catch (error) {
        console.error("Google auth error:", error);
        res.status(500).json({ message: "Google auth failed" });
    }
}

export const getMe = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId)
            return res.status(401).json({ message: "Unauthorized" });

        const user = await getUserById(userId);

        if (!user)
            return res.status(404).json({ message: "User not found" });

        const { password: _, ...safeUser } = user;

        res.status(200).json({ user: safeUser });
        
    } catch (error) {
        console.error("Get me error:", error);
        res.status(500).json({ message: "Get me failed" });
    }
}

export const signout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            path: "/",
        });
        
        res.status(200).json({ message: "Signout successful" });
    } catch (error) {
        console.error("Signout error:", error);
        res.status(500).json({ message: "Signout failed" });
    }
}