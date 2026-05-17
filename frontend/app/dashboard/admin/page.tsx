import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import growthImage from "@/public/dashboard/admin/Growth.png";
import moneyImage from "@/public/dashboard/admin/Money.png";
import sandClockImage from "@/public/dashboard/admin/sandClock.png";
import ActiveOrders from "@/components/Dashboard/Admin/ActiveOrders";
import DataBackUp from "@/components/Dashboard/Admin/DataBackUp";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 mt-4">
        {/* Revenue Data */}
        <Box className="w-full py-8 relative rounded-xl bg-[#702E1C] *:text-white">
          <Box className="pl-6">
            <Text as="p" className="font-light text-sm uppercase pb-2">
              Total Revenue
            </Text>
            <h2 className="text-3xl font-bold">$142,508.00</h2>
            <Flex
              align="center"
              gapX="2"
              className="w-fit mt-1 py-1 px-2 rounded-full bg-white/20"
            >
              <Image src={growthImage} alt="Prediction growth of the month" />
              <Text as="p" className="text-xs">
                12.4% this month
              </Text>
            </Flex>
          </Box>

          <Image
            src={moneyImage}
            alt="Money"
            className="absolute top-10 right-0"
          />
        </Box>

        {/* Users Data */}
        <Box className="w-full py-8 *:pl-6 rounded-xl bg-white">
          <Text
            as="p"
            className="font-light text-sm uppercase pb-2 text-[#54433F]"
          >
            New User
          </Text>
          <h2 className="text-3xl font-bold">842</h2>
          <Text as="p" className="font-medium text-xs text-[#702E1C]">
            +18 today
          </Text>
        </Box>

        {/* Orders Data */}
        <Box className="w-full py-8 *:pl-6 rounded-xl bg-[#FFDCBD]">
          <Text
            as="p"
            className="font-light text-sm uppercase pb-2 text-[#653E0F]"
          >
            Pending Orders
          </Text>
          <Flex justify="between" align="center">
            <h2 className="text-3xl font-bold">42</h2>
            <Image src={sandClockImage} alt="sand clock" className="mr-6" />
          </Flex>
        </Box>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        <ActiveOrders />
        <DataBackUp />
      </div>
    </div>
  );
};

export default Page;
