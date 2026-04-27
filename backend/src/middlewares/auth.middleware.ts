import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    userId: number;
  };
}

export const authMiddleware = ( req: AuthRequest, res: Response, next: NextFunction ) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res.status(401).json({ message: "Unauthorized" });

    const secret = process.env.JWT_SECRET;
    if (!secret) 
      throw new Error("JWT_SECRET is not defined");

    const decoded = jwt.verify(token, secret) as { id: number };

    if (!decoded?.id) 
      return res.status(401).json({ message: "Invalid token" });

    req.user = {
      userId: decoded.id,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};