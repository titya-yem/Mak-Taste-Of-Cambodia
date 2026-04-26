import z from "zod";


// Register Schema
export const registerSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z.string().email("Invalid email").trim(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Login Schema
export const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(6),
});

// Google Schema
export const googleSchema = z.object({
    token: z.string().min(1, "Google token is required"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type GoogleInput = z.infer<typeof googleSchema>;