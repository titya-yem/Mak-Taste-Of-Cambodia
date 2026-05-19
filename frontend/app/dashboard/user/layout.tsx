"use client";

import DashboardFooter from "@/components/Dashboard/DashboardFooter";
import { RootState } from "@/store/store";
import { Box, Text } from "@radix-ui/themes";
import { useSelector } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <div className="flex justify-center md:justify-between items-center">
        <h1 className="text-3xl font-bold text-[#702E1C]">
          Welcome Back, {auth.user?.user?.name}
        </h1>

        <Box className="text-center md:text-left">
          <Text as="p" className="text-sm text-[#54433F]">
            Manage your heritage pantry and taste history.
          </Text>
        </Box>
      </div>

      {children}

      <DashboardFooter />
    </div>
  );
};

export default Layout;
