"use client";

import UsersData from "@/components/Dashboard/Admin/users/UsersData";
import increaseArrow from "@/public/dashboard/admin/users/IncreaseArrow.svg";
import decreaseArrow from "@/public/dashboard/admin/users/DecreaseArrow.svg";
import totalMember from "@/public/dashboard/admin/users/TotalMember.png";
import HeritageTier from "@/public/dashboard/admin/users/HeritageTier.png";
import NewRegistration from "@/public/dashboard/admin/users/NewRegister.png";
import UserTable from "@/components/Dashboard/Admin/users/UserTable";
import Invitation from "@/components/Dashboard/Admin/users/Invitation";
import Insights from "@/components/Dashboard/Admin/users/Insights";
import { UserTypes } from "@/types/UserTypes";
import { useEffect, useState } from "react";
import fetchApi from "@/hooks/useFetch";

/**
 * UI-safe extension (frontend only)
 * because DB does NOT contain these fields
 */
type UserUI = UserTypes & {
  avatar?: string | null;
  verified?: boolean;
  tier?: "HERITAGE" | "PREMIUM" | "COMMUNITY";
  orders?: number;
  joinedAt?: string;
};

const Page = () => {
  const [users, setUsers] = useState<UserUI[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetchApi("/user/allUsers");

        const data = res.data as { success: boolean; data: UserUI[] };

        if (data?.success && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          console.error("Unexpected API format:", data);
          setUsers([]);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <div className="my-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
        <UsersData
          title="Total Members"
          amount={users.length}
          titleImage={totalMember}
          titleAlt="Total Member image"
          numeric="+"
          percentage={12}
          percentageImage={increaseArrow}
          percentageAlt="arrow trend"
          duration="Since last month"
        />

        <UsersData
          title="Heritage Tier"
          amount={1402}
          titleImage={HeritageTier}
          titleAlt="Heritage Tier image"
          numeric="-"
          percentage={5}
          percentageImage={decreaseArrow}
          percentageAlt="arrow trend"
          duration="Exclusive community growth"
        />

        <UsersData
          title="New Registrations"
          amount={428}
          titleImage={NewRegistration}
          titleAlt="New Registration image"
          duration="This month"
        />
      </div>

      {UserTable(users)}

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-6 gap-y-4">
        <Invitation />
        <Insights />
      </div>
    </div>
  );
};

export default Page;
