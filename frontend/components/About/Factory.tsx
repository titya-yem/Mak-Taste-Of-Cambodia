import { Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import tickImage from "@/public/About/tick.png";
import truckImage from "@/public/About/truck.png";
import telescopeImage from "@/public/About/telescope.png";
import seasoningFactoryImage from "@/public/About/Seasoning factory.png";

const Factory = () => {
  return (
    <div className="py-12 md:py-20 px-4 bg-[#F1EDE7]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="lg:w-[40%] flex flex-col items-center md:items-start *:text-center md:*:text-left">
            <h1 className="text-3xl lg:text-4xl pt-2 lg:pt-4 font-medium text-[#702E1C]">
              Small Batches,
            </h1>
            <h1 className="text-3xl lg:text-4xl font-medium text-[#702E1C]">
              American Craftsmanship.
            </h1>

            <Text as="p" className="py-2 lg:py-4 text-[#54433F]">
              While our heart belongs to Cambodia, our craftsmanship is rooted
              in the USA. We produce every package of Mak in small factory,
              artisanal batches to ensure the highest safety and quality
              standards. By blending heritage flavors with premium American
              manufacturing, we offer a product that is as safe as it is
              soulful.
            </Text>

            <div className="*:text-[#702E1C]">
              <Flex align="center" gap="2">
                <Image src={tickImage} alt="tick icon" />
                <Text as="p">FDA Inspected Facilities</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Image src={truckImage} alt="truck icon" />
                <Text as="p">Sustainably Sourced Ingredients</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Image src={telescopeImage} alt="telescrope icon" />
                <Text as="p">No Artificial Preservatives</Text>
              </Flex>
            </div>
          </div>

          <Image
            src={seasoningFactoryImage}
            alt="Mak seasoning factory"
            className="md:w-1/2 lg:w-[45%]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Factory;
