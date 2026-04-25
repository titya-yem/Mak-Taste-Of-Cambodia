import { Box, Container, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import arrowImage from "@/public/arrow.svg";
import kruengImage from "@/public/Krueng.png";
import { Button } from "../ui/button";

const Shop = () => {
  return (
    <section className="py-15 md:py-20 px-4 bg-[#F7F3ED]">
      <Container>
        <Box className="pb-4 md:pb-10 *:text-center md:*:text-left">
          <h2 className="text-2xl font-bold text-[#702E1C]">The Essentials</h2>

          <div className="md:flex items-center justify-between">
            <Text
              as="p"
              className="text-sm md:text-base uppercase text-[#702E1C]"
            >
              Curated Flavor Experiences
            </Text>
            <div className="pt-4 flex items-center justify-center md:justify-start gap-2">
              <Link
                href="/shop"
                className="text-sm md:text-base font-bold text-[#702E1C]"
              >
                View All Products
              </Link>
              <Image
                src={arrowImage}
                alt="Right pointing arrow"
                className="w-3.5"
              />
            </div>
          </div>
        </Box>

        <div className="flex flex-wrap items-center justify-between">
          {/* Fetch data */}
          <div className="w-75 mx-auto md:mx-0">
            <Image
              src={kruengImage}
              alt="krueng Image"
              className="rounded-md"
            />
            <div className="flex items-center justify-between pt-3">
              <Heading as="h5">Original Krueng</Heading>
              <Text as="p" className="text-[#702E1C]">
                $18.00
              </Text>
            </div>
            <Text as="p" className="py-2 text-[#54433F]">
              The foundation of Cambodian BBQ. A complex blend of lemongrass,
              turmeric, and galangal.
            </Text>
            <Button
              variant="ghost"
              className="w-full py-4 font-medium cursor-pointer bg-[#E6E2DC]"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
