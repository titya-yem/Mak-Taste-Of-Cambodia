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
  name: z.string().min(1, "Name is required").optional(),
  email: z.string().email("Invalid email").optional(),

  password: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
});