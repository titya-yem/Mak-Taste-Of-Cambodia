import Image from "next/image";
import settingImage from "@/public/dashboard/admin/setting.svg";
import { Box, Text } from "@radix-ui/themes";

const PreFooter = () => {
  return (
    <section className="w-full mt-8 py-20 text-center rounded-lg bg-[#F7F3ED]">
      <Image src={settingImage} alt="setting icon" className="mx-auto" />

      <Box className="text-[#702E1C]">
        <h1 className="text-3xl font-bold py-4">
          &quot;Exellence is in the fine details.&quot;
        </h1>
        <Text as="p" className="text-xs md:text-sm font-thin">
          Ensuring the digital infrastructure is as robust as our heritage
          recipes.
        </Text>
      </Box>
    </section>
  );
};

export default PreFooter;
