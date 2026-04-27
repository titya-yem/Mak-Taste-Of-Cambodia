"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Theme } from "@radix-ui/themes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

export default function Providers({ children }: { children: React.ReactNode; }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ReduxProvider store={store}>
      <Theme>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Theme>
    </ReduxProvider>
  );
}