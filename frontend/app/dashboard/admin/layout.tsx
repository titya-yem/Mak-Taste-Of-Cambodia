"use client";

import { adminDashboardLists } from "@/constants/AdminLists";
import { Box, Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

const Layout = () => {
  const path = usePathname();

  return (
    <div className="flex justify-between items-center">
      <Box>
        {adminDashboardLists.map((list) => (
          <h5 key={list.title} className="text-xl font-bold">
            {list.url === path ? `${list.title}` : ``}
          </h5>
        ))}
        <Text as="p" className="text-sm text-[#54433F]">
          Real-time performance of the Mak culinary ecosystem.
        </Text>
      </Box>

      <Box>{/* Search Bar */}</Box>
    </div>
  );
};

export default Layout;
