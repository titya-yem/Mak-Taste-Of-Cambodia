import { Box, Flex, Text } from "@radix-ui/themes";
import increaseArrow from "@/public/dashboard/admin/users/IncreaseArrow.svg";
import totalMember from "@/public/dashboard/admin/users/TotalMember.png";
import Image from "next/image";

interface UserDataTypes {
    title: string,
    amount: number,
    titleImage: string,
    titleAlt: string,
    percentage: number,
    percentageImage: string,
    percentageAlt: string,
    duration: string,
}

const UsersData: UserDataTypes = () => {
  return (
    <div className="w-85 rounded-lg p-6 shadow-lg bg-white">
      <div className="flex items-start justify-between">
        <Box className="pb-4">
          <Text
            as="p"
            className="text-sm pb-1 font-semibold uppercase text-[#786b68]"
          >
            Total Member
          </Text>
          <h5 className="text-4xl font-bold">12,842</h5>
        </Box>
        <Image src={totalMember} alt="Trend arrow" />
      </div>
      <Flex align="center" gapX="3">
        <Flex align="center" gapX="1">
          <Text
            as="p"
            className="text-xs font-semibold uppercase text-[#059669]"
          >
            +12%
          </Text>
          <Image src={increaseArrow} alt="Trend arrow" />
        </Flex>
        <Text as="p" className="text-xs text-[#786b68]">
          Since last month
        </Text>
      </Flex>
    </div>
  );
};

export default UsersData;
