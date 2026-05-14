"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { user, isLoggedIn, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!isLoggedIn) {
      router.replace("/signin");
      return;
    }

    if (user?.role === "admin") {
      router.replace("/dashboard/admin");
    } else {
      router.replace("/dashboard/user");
    }
  }, [loading, isLoggedIn, user, router]);

  return <p>Redirecting...</p>;
};

export default Page;
