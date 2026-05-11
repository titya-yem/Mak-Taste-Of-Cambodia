"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (user?.role !== "admin") {
      router.replace("/dashboard/user");
    }
  }, [user, loading, router]);

  return <h1>Admin Dashboard</h1>;
}