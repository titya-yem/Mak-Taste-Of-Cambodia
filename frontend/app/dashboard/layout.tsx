import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/AdminSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <div className="shrink-0">
          <AdminSidebar />
        </div>

        <main className="flex-1 min-h-screen bg-[#FDF9F3]">
          <SidebarTrigger />

          <div className="px-4 w-full">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
