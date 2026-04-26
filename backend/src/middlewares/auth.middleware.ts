import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: { userId: string };
}

function isJwtPayload( payload: unknown ): payload is { userId: string } {
  return (
    typeof payload === "object" &&
    payload !== null &&
    "userId" in payload
  );
}

export const authMiddleware = ( req: AuthRequest, res: Response, next: NextFunction ) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer "))
      return res.status(401).json({ message: "Unauthorized" });
    
    const token = authHeader.split(" ")[1];
    if (!token) 
      return res.status(401).json({ message: "Token missing" });
    
    const secret = process.env.JWT_SECRET;
    if (!secret) 
      throw new Error("JWT_SECRET is not defined");
    
    
    const decoded = jwt.verify(token, secret) as unknown;
    if (!isJwtPayload(decoded)) 
      return res.status(401).json({ message: "Invalid token payload" });
    

    req.user = { userId: decoded.userId };

    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};