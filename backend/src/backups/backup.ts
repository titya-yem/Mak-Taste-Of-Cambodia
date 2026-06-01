import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

const backupDir: string = process.env.BACKUP_DIR || "./backups";

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

export const runBackup = async (): Promise<string> => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();

  const date = new Date().toISOString().split("T")[0];
  const filePath = path.join(backupDir, `backup-${date}.sql`);

  const tables = await client.query(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
  `);

  let dump = "";

  for (const t of tables.rows) {
    const table = t.table_name;

    const data = await client.query(`SELECT * FROM "${table}"`);

    dump += `\n-- TABLE: ${table}\n`;

    for (const row of data.rows) {
      const values = Object.values(row)
        .map(v => `'${String(v).replace(/'/g, "''")}'`)
        .join(", ");

      dump += `INSERT INTO "${table}" VALUES (${values});\n`;
    }
  }

  fs.writeFileSync(filePath, dump);

  await client.end();

  console.log("✅ Backup created:", filePath);

  return filePath;
};