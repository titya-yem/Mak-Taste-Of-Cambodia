import { Box, Flex, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";

interface UserDataTypes {
  title: string;
  amount: number;
  titleImage: StaticImageData;
  titleAlt: string;
  numeric?: string;
  percentage?: number;
  percentageImage?: StaticImageData;
  percentageAlt?: string;
  duration: string;
}

const UsersData = (data: UserDataTypes) => {
  const isPositive = data.numeric === "+";

  return (
    <div className="w-full rounded-lg p-6 shadow-lg bg-white">
      <div className="flex items-start justify-between">
        <Box className="pb-4">
          <Text className="text-sm pb-1 font-semibold uppercase text-[#786b68]">
            {data.title}
          </Text>
          <h5 className="text-4xl font-bold">{data.amount.toLocaleString()}</h5>
        </Box>

        <Image src={data.titleImage} alt={data.titleAlt} />
      </div>

      <Flex align="center" gap="2">
        {data.percentage !== undefined && data.numeric && (
          <Flex align="center" gap="1">
            <Text
              className={`text-xs font-semibold ${
                isPositive ? "text-[#059669]" : "text-[#d81818]"
              }`}
            >
              {data.numeric}
              {data.percentage}%
            </Text>

            {data.percentageImage && (
              <Image
                src={data.percentageImage}
                alt={data.percentageAlt || "trend icon"}
              />
            )}
          </Flex>
        )}

        <Text className="text-xs text-[#786b68]">{data.duration}</Text>
      </Flex>
    </div>
  );
};

export default UsersData;
