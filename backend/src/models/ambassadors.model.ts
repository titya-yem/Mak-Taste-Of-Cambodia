import pool from "../config/db";
import type { ambassadorInput } from "../validations/ambassador.validation";

export const createAmbassador = async (ambassador: ambassadorInput) => {
    const { image, location, name, position, description, recipe } = ambassador;

    const result = await pool.query(
        `INSERT INTO ambassadors
         (image, location, name, position, description, recipe)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [image, location, name, position, description, recipe]
    );

    return result.rows[0];
}

export const getAllAmbassadors = async () => {
    const result = await pool.query(
        `SELECT * FROM ambassadors ORDER BY created_at DESC`
    );

    return result.rows;
}