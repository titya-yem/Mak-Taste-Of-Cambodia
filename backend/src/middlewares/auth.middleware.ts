import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    userId: number;
    role: "user" | "admin";
  };
}

export const authMiddleware = ( req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res.status(401).json({ message: "Unauthorized" });

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET not defined");

    const decoded = jwt.verify(token, secret) as {
      id: number;
      role: "user" | "admin";
    };

    // attach user to request in order to use it in other functions
    req.user = {
      userId: decoded.id,
      role: decoded.role,
    };

    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};