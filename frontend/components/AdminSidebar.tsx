"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Box, Text } from "@radix-ui/themes";
import { adminDashboardLists } from "@/constants/AdminLists";
import { usePathname } from "next/navigation";
import Image from "next/image";

const AdminSidebar = () => {
  const path = usePathname();

  return (
    <Sidebar className="bg-[#FFC3B5]">
      <SidebarHeader>
        <Box className="p-4">
          <Link href="/">
            <h3 className="pb-2 text-xl font-bold text-[#702E1C]">Mak</h3>
          </Link>
          <Text as="p" className="text-xs uppercase text-[#8e3d26]">
            Platform Management
          </Text>
        </Box>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {adminDashboardLists.map((list) => (
            <SidebarMenuItem key={list.title}>
              <SidebarMenuButton
                asChild
                className={`mx-4 my-1 ${
                  path === list.url
                    ? "w-[68%] font-medium bg-[#8E4431] text-white"
                    : "w-[68%] duration-200 ease-in-out hover:text-gray-200 hover:bg-[#a44f3a]"
                }`}
              >
                <Link href={list.url}>
                  <Image
                    src={list.img}
                    alt={list.title}
                    width={20}
                    height={20}
                    className={`${path === list.url ? "fill-white" : "filgra"}`}
                  />
                  <span>{list.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
