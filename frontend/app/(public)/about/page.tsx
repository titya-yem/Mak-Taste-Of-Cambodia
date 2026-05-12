import { Box, Container, Text } from "@radix-ui/themes";
import Image from "next/image";
import aboutImage from "@/public/About/About image.png";

const page = () => {
  return (
    <div className="px-4 bg-[#F7F3ED]">
      <Container>
        <div className="pt-8 md:py-6 flex flex-col md:flex-row items-center justify-between">
          <Box className="md:w-1/2 pb-4 md:pb-0 *:text-center md:*:text-left">
            <Text
              as="p"
              className="text-sm md:text-base lg:text lg pb-2 md:pb-4 font-medium text-[#702E1C]"
            >
              OUR STORY
            </Text>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#702E1C]">
              Heritage In
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-6xl py-3 md:py-6 text-[#702E1C]">
              Every Grain.
            </h1>
            <Text
              as="p"
              className="text-sm md:text-base lg:text-lg text-[#54433F]"
            >
              Mak was born from a desire to preserve the smoky, complex flavors
              of traditional Cambodian BBQ, translating a family’s generational
              wisdom into a premium seasoning for the modern kitchen.
            </Text>
          </Box>

          <Image
            src={aboutImage}
            alt="Mak seassoning grain"
            className="w-[80%] md:w-[45%] lg:w-[40%]"
          />
        </div>
      </Container>
    </div>
  );
};

export default page;
