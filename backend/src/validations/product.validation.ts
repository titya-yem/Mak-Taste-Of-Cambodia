import { z } from "zod";

// Product schema
export const productSchema = z.object({
  image: z.string().url(),
  name: z.string().min(2).max(100),
  price: z.number().positive(),
  description: z.string().min(10),
  discount_price: z.number().positive().optional(),
  weight: z.number().positive(),
  quantity: z.number().int().min(0),
});

export type productInput = z.infer<typeof productSchema>;