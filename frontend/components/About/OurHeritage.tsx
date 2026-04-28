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
              Mak Taste of Cambodia was created by Mayavin Kith, our CEO and
              visionary entrepreneur. With multiple successful companies under
              his leadership, Mak Taste of Cambodia is his most beloved project —
              born from family, heritage, and love. For over 90 years, Mayavin’s
              family recipe has been passed down through generations, carrying
              the flavors of Khmer tradition and the spirit of resilience. He
              founded this brand to show the world that Khmer people are strong,
              proud, and carry an incredible legacy of flavor.
            </Text>
            <Text as="p" className="py-4 md:py-2 lg:py-6 text-[#54433F]">
              Mak Taste of Cambodia is more than seasoning — it’s comfort for
              those living far from home, love for those who miss family meals,
              and a reminder that food connects us to who we are. “My dream is for
              every person, near or far, to taste Khmer food and feel the warmth
              of love and memory with every bite.” – Mayavin Kith Facebook Page :
              Mak Taste Of Cambodia ម៉ាក់
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
