import { Box, Container, Text } from "@radix-ui/themes";
import Image from "next/image";
import heritageImage from "@/public/About/Angkor Wat relief.png";
import starIcon from "@/public/About/star.svg";
import bookIcon from "@/public/About/book.svg";

const OurHeritage = () => {
  return (
    <div className="py-15 md:py-20 px-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-10">
          <Image
            src={heritageImage}
            alt="Angkor Wat relief scrapture"
            className="w-[80%] md:w-[50%] lg:w-[45%] rounded-lg"
          />

          <Box className="lg:w-[40%] *:text-center md:*:text-left">
            <h1 className="text-3xl lg:text-4xl pt-2 font-medium text-[#702E1C]">
              Our Heritage:
            </h1>
            <h1 className="text-3xl lg:text-4xl pb-4 md:pb-2 lg:pb-6 font-medium text-[#702E1C]">
              The Heart of Cambodia
            </h1>
            <Text as="p" className="text-[#54433F]">
              Our inspiration begins in the bustling markets and riverside
              grills of Phnom Penh. It&apos;s a flavor profile defined by the
              balance of &apos;kroeung&apos;—the aromatic herb paste that forms
              the soul of Cambodian cuisine.
            </Text>
            <Text as="p" className="py-4 md:py-2 lg:py-6 text-[#54433F]">
              We source our heat from authentic chilies and our depth from the
              same techniques used by home cooks for centuries. Every bottle of
              Mak is a tribute to the resilience and vibrancy of Khmer culinary
              culture.
            </Text>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <Box className="py-2 px-4 rounded-md bg-[#E6E2DC]">
                <Image src={starIcon} alt="star icon" className="py-2" />
                <Text as="p" weight="medium" className="text-sm">
                  AUTHENTIC PROFILE
                </Text>
              </Box>
              <Box className="py-2 px-4 rounded-md bg-[#E6E2DC]">
                <Image src={bookIcon} alt="book icon" className="py-2" />
                <Text as="p" weight="medium" className="text-sm">
                  TIME-HONORED
                </Text>
              </Box>
            </div>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default OurHeritage;
