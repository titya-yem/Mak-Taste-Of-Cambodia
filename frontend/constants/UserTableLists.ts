type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  tier: "HERITAGE" | "PREMIUM" | "COMMUNITY";
  orders: number;
  joinedAt: string;
  verified?: boolean;
};

export const users: User[] = [
  {
    id: 1,
    name: "Sophea Khiev",
    email: "s.khiev@heritage.com",
    avatar: "/avatars/1.jpg",
    tier: "HERITAGE",
    orders: 42,
    joinedAt: "Oct 12, 2023",
    verified: true,
  },
  {
    id: 2,
    name: "Apsara Vann",
    email: "apsara.vann@gmail.com",
    tier: "PREMIUM",
    orders: 18,
    joinedAt: "Jan 05, 2024",
    verified: true,
  },
  {
    id: 3,
    name: "Channary Meak",
    email: "channary.m@studio.kh",
    avatar: "/avatars/3.jpg",
    tier: "COMMUNITY",
    orders: 3,
    joinedAt: "Mar 22, 2024",
  },
  {
    id: 4,
    name: "Rithy Khem",
    email: "rithy.khem@chef.org",
    tier: "HERITAGE",
    orders: 67,
    joinedAt: "Sep 15, 2023",
    verified: true,
  },
  {
    id: 5,
    name: "Nary Sok",
    email: "nary.s@bbq-expert.com",
    tier: "PREMIUM",
    orders: 25,
    joinedAt: "Dec 01, 2023",
    verified: true,
  },
];
