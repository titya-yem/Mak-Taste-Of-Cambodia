import { Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import kroengImage from "@/public/Krueng.png";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="py-15 md:py-20 px-4">
      <Container>
        <div className="mb-12 *:text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#702E1C]">
            The Collection
          </h1>
          <Text as="p" className="pt-4 text-sm md:base text-[#54433F]">
            ELEVATE YOUR TABLE WITH THE HERITAGE OF CAMBODIAN BBQ SEASONING.
          </Text>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-80">
            <Image src={kroengImage} alt="image" className="rounded-lg" />
            <Flex align="center" justify="between">
              <h5 className="py-2 text-lg md:text-xl font-bold">
                The Signature Pack
              </h5>
              <Text as="p" className="text-sm md:textbase text-[#702E1C]">
                $18.00
              </Text>
            </Flex>
            <Text as="p" className="pb-4 text-[#54433F]">
              Our flagship Cambodian BBQ seasoning. 250g of pure heritage,
              perfect for marinating or finishing.
            </Text>
            <Button
              variant="ghost"
              className="w-full py-6 rounded-sm uppdercase cursor-pointer text-white bg-[#702E1C] hover:bg-[#7c3825] hover:text-white"
            >
              Add To Card
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
