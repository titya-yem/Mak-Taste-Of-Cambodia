import db from "../config/db"

export const createOrder = async (userId: number, totalAmount: number) => {
    const result = await db.query (
        `INSERT INTO orders (user_id, total_amount)
         VALUES ($1, $2)
         RETURNING *`,
         [userId, totalAmount]
    );

    return result.rows[0];
}

export const createOrderItems = async (orderId: number, items: any[]) => {
    const query = (
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES ${items
        .map((_, i) =>`($1, $${i * 3 + 2}, $${i * 3 + 3}, $${i * 3 + 4})`
        ).join(",")}`);

        const values = [
            orderId,
            ...items.flatMap((item) => [
                item.productId,
                item.quantity,
                item.price
            ]),
        ];

        await db.query(query, values);
}

export const getOrdersByUser = async (userId: number) => {
    const result = await db.query (
        `SELECT o.*, oi.product_id, oi.quantity, oi.price
         FROM order o
         JOIN order_items oi ON o.id = oi.order_id
         WHERE o.user_id = $1
         ORDER BY o.created_at DESC`,
         [userId]
    );

    return result.rows;
}