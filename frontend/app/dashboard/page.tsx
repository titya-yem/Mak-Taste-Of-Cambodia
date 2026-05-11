"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { user, isLoggedIn, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    // Not signed in
    if (!isLoggedIn) {
      router.replace("/signin");
      return;
    }

    // signed in -> redirect by role
    if (user?.role === "admin") {
      router.replace("/dashboard/admin");
    } else {
      router.replace("/dashboard/user");
    }
  }, [loading, isLoggedIn, user, router]);

  return <p>Redirecting...</p>;
}