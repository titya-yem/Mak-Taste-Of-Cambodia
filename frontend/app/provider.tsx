"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Theme } from "@radix-ui/themes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import AuthBootstrap from "./AuthBootstrap";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    console.error("Missing Google Client ID");
    return <>{children}</>;
  }

  return (
    <ReduxProvider store={store}>
      <Theme>
        <QueryClientProvider client={queryClient}>
          <GoogleOAuthProvider clientId={clientId}>
            <AuthBootstrap>{children}</AuthBootstrap>
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </Theme>
    </ReduxProvider>
  );
}