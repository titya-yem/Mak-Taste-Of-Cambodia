import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <main className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
