import { z } from "zod";

export type UserTypes = {
  id: number;
  name: string;
  email: string;
  password: string | null;
  role: "user" | "admin";
  provider: "local" | "google";
  google_id: string | null;
  created_at: string; // ISO timestamp string from backend
};

export type UserUI = UserTypes & {
  avatar?: string | null;
  verified?: boolean;
  tier?: "HERITAGE" | "PREMIUM" | "COMMUNITY";
  orders?: number;
  joinedAt?: string;
};

export const updateUserSchema = z.object({
    name: z.string().min(1, "Name cannot be empty").optional(),
    email: z.string().email("Invalid email address").optional(),
    password: z.string().min(6, "Password must be at least 6 characters").optional(),
  }).refine( (data) => data.name || data.email || data.password,
    {
      message: "At least one field must be updated",
      path: ["name"],
    }
  );