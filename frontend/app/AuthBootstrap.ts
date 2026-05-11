"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "@/lib/axios";
import { setUser, signout } from "@/store/slices/authslice";

export default function AuthBootstrap({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/user/me");
        dispatch(setUser(res.data));
      } catch (err) {
        dispatch(signout());
      }
    };

    fetchMe();
  }, [dispatch]);

  return children;
}