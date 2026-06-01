"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import searchImage from "@/public/dashboard/admin/Search.svg";
import { UserUI } from "@/types/UserTypes";
import { Text } from "@radix-ui/themes";

const tierStyles: Record<string, string> = {
  HERITAGE: "bg-neutral-200 text-neutral-700",
  PREMIUM: "bg-rose-100 text-rose-600",
  COMMUNITY: "bg-gray-100 text-gray-500",
};

const getInitials = (name: string = "") => {
  return name
    .split(" ")
    .map((n) => n?.[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const UserTable = (users: UserUI[]) => {
  return (
    <div className="my-6 w-full bg-white rounded-xl border p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-lg md:text-xl font-semibold">Customer Directory</h2>

        <div className="relative w-full md:w-72">
          <Image
            src={searchImage}
            alt="Search icon"
            className="absolute left-3 top-1/2 -translate-y-1/2"
            width={16}
            height={16}
          />
          <input
            type="search"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#702E1C]"
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-5 text-xs text-center text-gray-500 font-medium border-b pb-3 mt-6">
        <span className="text-start pl-4">MEMBER DETAILS</span>
        <span>EMAIL</span>
        <span>SIGNUP TYPES</span>
        <span className="text-center">TOTAL ORDERS</span>
        <span>CREATED DATE</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {users.map((user) => (
          <div
            key={user.id}
            className="py-4 flex flex-col gap-3 md:grid md:grid-cols-5 md:items-center text-center"
          >
            {/* Member */}
            <div className="flex items-center gap-3">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-200 text-sm font-semibold">
                  {getInitials(user.name)}
                </div>
              )}

              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-start text-gray-500">{user.role}</p>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${user.email}`}
              className="text-sm text-blue-400 hover:text-blue-500"
            >
              {user.email}
            </a>

            {/* Signup type */}
            <div>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  tierStyles[user.tier ?? ""] || "bg-gray-100",
                )}
              >
                {user.provider}
              </span>
            </div>

            {/* Orders */}
            <Text as="p" className="md:text-center font-medium">
              {user.orders ?? 0}
            </Text>

            {/* Date */}
            <Text as="p" className="text-sm text-gray-600">
              {user.created_at
                ? new Date(user.created_at).toISOString().split("T")[0]
                : "-"}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
