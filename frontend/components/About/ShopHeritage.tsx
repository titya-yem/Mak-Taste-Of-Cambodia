import { Container, Flex, Text } from "@radix-ui/themes";
import { Button } from "../ui/button";
import Link from "next/link";

const ShopHeritage = () => {
  return (
    <div className="py-20 px-4">
      <Container>
        <div className="flex flex-col items-center justify-center *:text-center md:*:text-left">
          <h1 className="text-3xl lg:text-4xl text-[#702E1C]">
            Bring the Heritage Home
          </h1>

          <Text as="p" className="pt-4 pb-8 text-[#54433F]">
            Experience the seasoning that bridges continents and generations.
          </Text>

          <Flex align="center" gap="2">
            <Button
              variant="ghost"
              className="py-6 px-4 rounded-sm cursor-pointer bg-[#702E1C] hover:bg-[#91402a]"
            >
              <Link href="/shop" className="text-white">
                Shop the Original Blend
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="py-6 px-4 rounded-sm cursor-pointer bg-[#E6E2DC] hover:bg-[#d6d3cd]"
            >
              <Link href="/receipes" className="text-black">
                View Recipes
              </Link>
            </Button>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default ShopHeritage;
