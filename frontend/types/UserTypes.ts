
export type UserTypes = {
  id: number;
  name: string;
  email: string;
  password: string | null;
  role: "user" | "admin";
  provider: "local" | "google";
  google_id: string | null;
  created_at: string; // ISO timestamp string from backend
};

export type UserUI = UserTypes & {
  avatar?: string | null;
  verified?: boolean;
  tier?: "HERITAGE" | "PREMIUM" | "COMMUNITY";
  orders?: number;
  joinedAt?: string;
};