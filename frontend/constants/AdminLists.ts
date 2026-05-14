import dashboard from "@/public/dashboard/admin/SideBart/dashboard.svg";
import orders from "@/public/dashboard/admin/SideBart/orders.svg";
import users from "@/public/dashboard/admin/SideBart/users.svg";
import database from "@/public/dashboard/admin/SideBart/database.svg";
import profile from "@/public/dashboard/admin/SideBart/profile.svg";

import { StaticImageData } from "next/image";

interface AdminLists {
  img: StaticImageData;
  title: string;
  url: string;
}

export const adminDashboardLists: AdminLists[] = [
  {
    img: dashboard,
    title: "Dashboard Overview",
    url: "/dashboard/admin",
  },
  {
    img: orders,
    title: "Orders",
    url: "/dashboard/admin/orders",
  },
  {
    img: users,
    title: "Users",
    url: "/dashboard/admin/users",
  },
  {
    img: database,
    title: "Database Backup",
    url: "/dashboard/admin/backup",
  },
  {
    img: profile,
    title: "Profile",
    url: "/dashboard/admin/profile",
  },
];