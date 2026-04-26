import pool from "../config/db"

export const findUserByEmail = async (email: string) => {
    const result = await pool.query (
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );

    return result.rows[0];
}

export const createUser = async (
  name: string,
  email: string,
  password: string | null,
  provider: "local" | "google",
  google_id?: string
) => {
    const result = await pool.query (
        `INSERT INTO users (name, email, password, provider, google_id)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
         [name, email, password, provider, google_id || null]
    );

    return result.rows[0];
};

export const linkGoogleAccount = async (email: string, google_id: string) => {
    const result = await pool.query (
        `UPDATE users 
         SET google_id = $1, provider = 'google'
         WHERE email = $2
         RETURNING *`,
         [google_id, email]
    );

    return result.rows[0];
}