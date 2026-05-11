"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isLoggedIn, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!isLoggedIn) {
      router.replace("/signin");
    }
  }, [isLoggedIn, loading, router]);

  return <h1>User Dashboard</h1>;
}