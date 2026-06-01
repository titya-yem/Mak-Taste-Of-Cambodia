import { runBackup } from "../backups/backup.js";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import type { Response } from "express";

export const downloadBackup = async (req: AuthRequest, res: Response) => {
  try {
    const filePath = await runBackup();

    return res.download(filePath, (err) => {
      if (err) {
        console.error("❌ Download error:", err);
        return res.status(500).json({ message: "Failed to download backup" });
      }
    });

  } catch (error) {
    console.error("❌ Backup error:", error);
    return res.status(500).json({ message: "Backup failed" });
  }
};