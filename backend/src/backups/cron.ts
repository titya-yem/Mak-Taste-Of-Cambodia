import cron from "node-cron";
import { runBackup } from "./backup.js";

// Runs every day at 2 AM
cron.schedule("0 2 * * *", () => {
  console.log("⏳ Running scheduled backup...");
  runBackup();
});