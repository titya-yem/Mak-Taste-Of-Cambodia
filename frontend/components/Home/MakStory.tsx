import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import storyImage from "@/public/Home/MakStory.png";

const MakStory = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-6 lg:gap-20 py-15 md:py-20 px-4">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <Image
            src={storyImage}
            alt="Cambodian ancient temple and people"
            width={500}
            height={500}
            className="w-60 md:w-[320px] lg:w-125 h-auto"
          />
        </div>

        <Box className="w-full md:w-1/2 *:text-center md:*:text-left">
          <h1 className="text-2xl pb-6 font-bold text-[#702E1C]">
            The Mak Story
          </h1>
          <Box className="*:text-sm lg:*:text-base">
            <Text as="p">
              &#34;Mak&quot; is the Khmer word for Mother. Our journey began in
              a family kitchen in Lowell, Massachusetts, where the vibrant
              aromas of lemongrass, galangal, and kaffir lime leaf bridged the
              gap between our Cambodian heritage and our American home.
            </Text>
            <h5 className="py-4 font-black">
              Heritage flavors. Modern standards.
            </h5>
            <Text as="p">
              We meticulously source our spices to ensure the bold, smoky, and
              complex profile of traditional Kroeung BBQ is preserved. Every jar
              is blended and packed in our USA facility, meeting the highest
              food safety standards while honoring the ancient techniques of
              Southeast Asian cuisine.
            </Text>

            <Flex align="center" gap="2" className="pt-4">
              <div className="w-16 h-0.5 bg-[#702E1C]"></div>
              <Text
                as="p"
                className="text-sm lg:text-base font-medium text-[#702E1C]"
              >
                ROOTED IN HERITAGE
              </Text>
            </Flex>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default MakStory;
