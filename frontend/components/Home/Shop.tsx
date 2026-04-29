import { Box, Container, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import arrowImage from "@/public/arrow.svg";
import kruengImage from "@/public/Krueng.png";
import { Button } from "../ui/button";
import fetchApi from "@/hooks/useFetch";
import Products from "../Products";

const Shop = async () => {
  

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

        <Products />
      </Container>
    </section>
  );
};

export default Shop;
