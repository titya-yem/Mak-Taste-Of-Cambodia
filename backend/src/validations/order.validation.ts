import { z } from "zod";

export const orderItemSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().min(1),
  price: z.number().positive(),
});

export const createOrderSchema = z.object({
  userId: z.number().int().positive(),
  items: z.array(orderItemSchema).min(1),
  totalAmount: z.number().positive(),
  status: z.enum(["pending", "paid", "shipped", "delivered"]).optional(),
}).refine((data) => {
  const total = data.items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0);
  return total === data.totalAmount;
}, { message: "Total amount mismatch" });