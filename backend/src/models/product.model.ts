import pool from "../config/db";
import { slugify } from "../utils/slugify";
import type { productInput } from "../validations/product.validation";

export const createProduct = async (product: productInput) => {
    const { name, image, price, discount_price, description, weight, quantity } = product;

    const slug = slugify(name);

    const result = await pool.query (
        `INSERT INTO products
         (name, slug, image, price, discount_price, description, weight, quantity)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
         RETURNING *`,
         [name, slug, image, price, discount_price ?? null, description, weight, quantity]
    )

    return result.rows[0];
}

export const getAllProducts = async () => {
    const result = await pool.query(
        `SELECT * FROM products ORDER BY created_at DESC`
    )

    return result.rows;
}

export const getProductBySlug = async (slug: string) => {
    const result = await pool.query(
        `SELECT * FROM products WHERE slug = $1`,
        [slug]
    )

    return result.rows[0];
}