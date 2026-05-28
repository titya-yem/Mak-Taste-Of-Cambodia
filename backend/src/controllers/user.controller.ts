import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  getUsers,
  getUserById,
  linkGoogleAccount,
} from "../models/user.model";
import { verifyGoogleToken } from "../utils/google";
import type { AuthRequest } from "../middlewares/auth.middleware";


const isProduction = process.env.NODE_ENV === "production";

// helper for cookie
const setAuthCookie = (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 2 * 60 * 60 * 1000, // 2 hours
    path: "/",
  });
};

// helper for JWT
const createToken = (user: any) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "2h" }
  );
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser(name, email, hashedPassword, "local");

    const { password: _, ...safeUser } = user;

    const token = createToken(user);
    setAuthCookie(res, token);

    res.status(201).json({ user: safeUser });

  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Register failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user || !user.password)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const { password: _, ...safeUser } = user;

    const token = createToken(user);
    setAuthCookie(res, token);

    res.status(200).json({ user: safeUser });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    const payload = await verifyGoogleToken(token);

    if (!payload || !payload.email)
      return res.status(400).json({ message: "Invalid Google token" });

    const { email, name, sub } = payload;

    let user = await findUserByEmail(email);

    // create or link
    if (!user) {
      user = await createUser(name!, email, null, "google", sub);
    } else if (!user.google_id) {
      user = await linkGoogleAccount(email, sub);
    }

    const { password: _, ...safeUser } = user;

    // use jwt, not google token
    const jwtToken = createToken(user);
    setAuthCookie(res, jwtToken);

    res.status(200).json({ user: safeUser });

  } catch (error) {
    console.error("Google auth error:", error);
    res.status(500).json({ message: "Google auth failed" });
  }
};

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
};

export const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    const users = await getUsers();

    if (!users)
      return res.status(404).json({ message: "There is no user" });

    return res.status(200).json({   success: true, data: users });

  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({ message: "Get all user failed" });
  }
};

export const signout = async (_req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });

    res.status(200).json({ message: "Signout successful" });

  } catch (error) {
    console.error("Signout error:", error);
    res.status(500).json({ message: "Signout failed" });
  }
};