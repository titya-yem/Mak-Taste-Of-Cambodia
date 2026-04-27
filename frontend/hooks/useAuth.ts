import { useEffect, useState } from "react";
import api from "@/lib/axios";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = async () => {
    try {
      await api.get("/user/me");
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { isLoggedIn, setIsLoggedIn, checkAuth };
};
export default useAuth;