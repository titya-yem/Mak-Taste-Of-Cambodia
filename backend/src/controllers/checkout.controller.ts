import type { Request, Response } from "express";
import db from "../config/db";
import { stripe } from "../utils/stipe";
import { checkoutSchema } from "../validations/order.validation";

export const checkout = async (req: Request, res: Response) => {
  try {
    const parsed = checkoutSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json(parsed.error.issues);

    const { userId, items } = parsed.data;

    const productIds = items.map(i => i.productId);

    const result = await db.query(
      `SELECT id, name, price, image FROM products WHERE id = ANY($1)`,
      [productIds]
    );

    const products = result.rows;

    const line_items = items.map(item => {
      const product = products.find(p => p.id === item.productId);

      if (!product) throw new Error("Product not found");

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            images: product.image ? [product.image] : [],
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,

      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,

      metadata: {
        userId: userId.toString(),
        items: JSON.stringify(items),
      },
    });

    return res.json({ url: session.url });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Checkout failed" });
  }
};