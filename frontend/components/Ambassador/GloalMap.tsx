import Image from "next/image";
import globalMap from "@/public/Ambassador/Map.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container, Flex, Text } from "@radix-ui/themes";

const GloalMap = () => {
  return (
    <div className="py-10 md:py-15 px-4 bg-[#F7F3ED]">
      <Container>
        <div className="flex flex-col md:flex-row items-center md:justify-betweengap-4 md:gap-10">
          <Image
            src={globalMap}
            alt="Mak taste of Cambodia location on global map"
            className="md:w-1/2 rounded-md"
          />

          <div className="flex flex-col items-center md:items-start md:justify-between *:text-center pt-4 md:pt-0: md:*:text-left ">
            <h3 className="text-2xl md:text-3xl">A Flavor Without Borders</h3>
            <Text as="p" className="py-4 text-sm md:text-base text-[#54433F]">
              From the bustling street markets of Phnom Penh to the artisanal
              kitchens of Brooklyn and the refined bistros of Paris, Mak
              Cambodian BBQ seasoning is redefining the global pantry. Select a
              region below to meet our culinary curators.
            </Text>
            <Flex align="center" gap="2">
              <Button
                variant="ghost"
                className="p-4 md:p-6 rounded-sm cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#853823]"
              >
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button
                variant="ghost"
                className="p-4 md:p-6 rounded-sm cursor-pointer text-black bg-gray-200  hover:text-white hover:bg-[#853823]"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GloalMap;
