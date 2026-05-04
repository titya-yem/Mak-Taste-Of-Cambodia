import type { Request, Response } from "express";
import { stripe } from "../utils/stipe";
import db from "../config/db";

export const stripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];

  if (!sig) return res.status(400).send("Missing signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return res.status(400).send("Invalid signature");
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const userId = Number(session.metadata?.userId);
    const items = JSON.parse(session.metadata?.items || "[]");

    const client = await db.connect();

    try {
      await client.query("BEGIN");

      // 1. Create order
      const orderRes = await client.query(
        `INSERT INTO orders (user_id, total_amount, payment_status, stripe_session_id)
         VALUES ($1, $2, 'paid', $3)
         RETURNING id`,
        [userId, session.amount_total, session.id]
      );

      const orderId = orderRes.rows[0].id;

      // 2. Get real product prices from db
      const productIds = items.map((i: any) => i.productId);

      const productsResult = await db.query(
        `SELECT id, price FROM products WHERE id = ANY($1)`,
        [productIds]
      );

      const products = productsResult.rows;

      // 3. Insert order items
      for (const item of items) {
        const product = products.find((p) => p.id === item.productId);

        if (!product) continue;

        await client.query(
          `INSERT INTO order_items (order_id, product_id, quantity, price)
           VALUES ($1, $2, $3, $4)`,
          [orderId, item.productId, item.quantity, product.price]
        );
      }

      await client.query("COMMIT");
    } catch (err) {
      await client.query("ROLLBACK");
      console.error(err);
      return res.status(500).send("Internal error");
    } finally {
      client.release();
    }
  }

  res.json({ received: true });
};