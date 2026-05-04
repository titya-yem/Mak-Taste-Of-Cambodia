import db from "../config/db";

export const createOrder = async (userId: number, totalAmount: number) => {
    const result = await db.query(
        `INSERT INTO orders (user_id, total_amount, payment_status)
         VALUES ($1, $2, 'pending')
         RETURNING *`,
        [userId, totalAmount]
    );

    return result.rows[0];
};

export const createOrderItems = async (
    orderId: number,
    items: { productId: number; quantity: number; price: number }[]) => {
    const client = await db.connect();

    try {
        await client.query("BEGIN");

        for (const item of items) {
            await client.query(
                `INSERT INTO order_items (order_id, product_id, quantity, price)
                 VALUES ($1, $2, $3, $4)`,
                [orderId, item.productId, item.quantity, item.price]
            );
        }

        await client.query("COMMIT");
    } catch (error) {
        await client.query("ROLLBACK");
        throw error;
    } finally {
        client.release();
    }
};

export const getOrdersByUser = async (userId: number) => {
    const result = await db.query(
        `
        SELECT 
            o.id AS order_id,
            o.user_id,
            o.total_amount,
            o.payment_status,
            o.created_at,
            json_agg(
                json_build_object(
                    'product_id', oi.product_id,
                    'quantity', oi.quantity,
                    'price', oi.price
                )
            ) AS items
        FROM orders o
        JOIN order_items oi ON o.id = oi.order_id
        WHERE o.user_id = $1
        GROUP BY o.id
        ORDER BY o.created_at DESC
        `,
        [userId]
    );

    return result.rows;
};