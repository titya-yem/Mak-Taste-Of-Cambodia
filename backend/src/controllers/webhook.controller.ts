import type { Request, Response } from "express";
import { stripe } from "../utils/stipe";
import db from "../config/db";

export const stripeWebhook = async (req: Request, res: Response) => {
  console.log("🔥 WEBHOOK CALLED");

  const sig = req.headers["stripe-signature"];
  if (!sig) return res.status(400).send("Missing signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Signature error:", err.message);
    return res.status(400).send("Invalid signature");
  }

  console.log("✅ Event:", event.type);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

    console.log("🧾 Session metadata:", session.metadata);

    const userId = Number(session.metadata?.userId);

    let items: any[] = [];
    try {
      items = JSON.parse(session.metadata?.items || "[]");
    } catch (err) {
      console.error("❌ JSON parse failed:", session.metadata?.items);
      return res.status(400).send("Bad metadata");
    }

    const client = await db.connect();

    try {
      await client.query("BEGIN");
      console.log("➡️ DB transaction started");

      // 1. Create order
      const orderRes = await client.query(
        `INSERT INTO orders (user_id, total_amount, payment_status, stripe_session_id)
         VALUES ($1, $2, 'paid', $3)
         RETURNING id`,
        [userId, session.amount_total, session.id]
      );

      const orderId = orderRes.rows[0].id;
      console.log("✅ Order created:", orderId);

      // 2. Get product prices (FIXED: use client)
      const productIds = items.map((i) => i.productId);

      const productsResult = await client.query(
        `SELECT id, price FROM products WHERE id = ANY($1)`,
        [productIds]
      );

      const products = productsResult.rows;

      // 3. Insert items
      for (const item of items) {
        const product = products.find((p) => p.id === item.productId);

        if (!product) {
          console.warn("⚠️ Product not found:", item.productId);
          continue;
        }

        console.log("📦 Inserting item:", item);

        await client.query(
          `INSERT INTO order_items (order_id, product_id, quantity, price)
           VALUES ($1, $2, $3, $4)`,
          [orderId, item.productId, item.quantity, product.price]
        );
      }

      await client.query("COMMIT");
      console.log("💾 COMMIT SUCCESS");
    } catch (err: any) {
      await client.query("ROLLBACK");
      console.error("❌ DB ERROR:", err.message);
      return res.status(500).send("DB error");
    } finally {
      client.release();
    }
  }

  res.json({ received: true });
};