"use client";

import { adminDashboardLists } from "@/constants/AdminLists";
import { Box, Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <div>
      <div className="flex justify-center md:justify-between items-center">
        <Box className="text-center md:text-left">
          {adminDashboardLists.map((list) => (
            <h5 key={list.title} className="text-2xl font-bold">
              {list.url === path ? `${list.title}` : ``}
            </h5>
          ))}
          <Text as="p" className="text-sm text-[#54433F]">
            Real-time performance of the Mak culinary ecosystem.
          </Text>
        </Box>
      </div>

      {children}
    </div>
  );
};

export default Layout;
