"use client";

import api from "@/lib/axios";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const GoogleSignInButton = () => {
  const router = useRouter();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          // 1. Get Google token
          const token = credentialResponse.credential;

          if (!token) {
            console.log("No Google token received");
            return;
          }

          // 2. Send token to backend
          const res = await api.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/google`,
            { token }
          );

          console.log("Login success:", res.data);

          // 4. Redirect user
          router.push("/");
        } catch (error) {
          console.error("Google login error:", error);
        }
      }}
      onError={() => {
        console.log("Google Login Failed");
      }}
    />
  );
};

export default GoogleSignInButton;