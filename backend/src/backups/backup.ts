import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

const backupDir: string = process.env.BACKUP_DIR || "./backups";

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

export const runBackup = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const date = new Date().toISOString().split("T")[0];
    const filePath: string = path.join(
      backupDir,
      `backup-${date}.sql`
    );

    const command = `pg_dump "${process.env.DATABASE_URL}" > ${filePath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("❌ Backup failed:", error.message);
        return reject(error);
      }

      if (stderr) 
        console.warn("⚠️ stderr:", stderr);

      console.log("✅ Backup created:", filePath);
      resolve(filePath); 
    });
  });
};