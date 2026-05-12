import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <main className="flex min-h-screen">
        <AppSidebar />
        <div className="flex-1 p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
