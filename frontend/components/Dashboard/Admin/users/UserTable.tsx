"use client";

import { cn } from "@/lib/utils";
import { users } from "@/constants/UserTableLists";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import searchImage from "@/public/dashboard/admin/Search.svg";

const tierStyles = {
  HERITAGE: "bg-neutral-200 text-neutral-700",
  PREMIUM: "bg-rose-100 text-rose-600",
  COMMUNITY: "bg-gray-100 text-gray-500",
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const UserTable = () => {
  return (
    <div className="my-6 w-full bg-white rounded-xl border p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl my-4 font-semibold">Customer Directory</h2>

        <div className="my-4 relative w-full md:w-75">
          <Image
            src={searchImage}
            alt="Search icon"
            className="absolute left-3 top-5 -translate-y-1/2"
            width={16}
            height={16}
          />
          <input
            type="search"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#702E1C]"
          />
        </div>
      </div>

      {/* Table Head */}
      <div className="grid grid-cols-5 text-xs text-gray-500 font-medium border-b pb-3">
        <span>MEMBER DETAILS</span>
        <span>EMAIL</span>
        <span>MEMBERSHIP TIER</span>
        <span className="text-center">TOTAL ORDERS</span>
        <span>JOINED DATE</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-5 items-center py-4">
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
                <p className="text-xs text-gray-500">
                  {user.verified ? "VERIFIED ACCOUNT" : "NEW MEMBER"}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="text-sm text-gray-700">{user.email}</div>

            {/* Tier */}
            <div>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  tierStyles[user.tier],
                )}
              >
                {user.tier}
              </span>
            </div>

            {/* Orders */}
            <div className="text-center font-medium">{user.orders}</div>

            {/* Date */}
            <div className="text-sm text-gray-600">{user.joinedAt}</div>
          </div>
        ))}
      </div>

      {/* Footer / Pagination */}
      <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
        <span>Showing 1–10 of 842 users</span>

        <div className="flex items-center gap-2 *:cursor-pointer">
          <Button>Previous</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <span>...</span>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
