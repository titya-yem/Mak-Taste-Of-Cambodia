import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import homeImage from "@/public/Home/Home image.png";
import { Button } from "@/components/ui/button";
import MakStory from "@/components/Home/MakStory";
import Shop from "@/components/Home/Shop";
import JoinAmbassadors from "@/components/Home/JoinAmbassadors";
import Subscribe from "@/components/Home/Subscribe";
import Footer from "@/components/shared/Footer";

const page = () => {
  return (
    <section className="bg-[#FDF9F3]">
      <Container>
        <section className="relative">
          {/* Background Image */}
          <Image
            src={homeImage}
            alt="Make Taste of Cambodia package with foods"
            className="object-cover rounded-sm"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#FDF9F3] via-[#FDF9F3]/80 md:via-[#FDF9F3]/60 to-transparent" />

          {/* Content */}
          <Box className="absolute top-4 md:top-20 lg:top-60 w-[80%] md:w-[60%] flex items-center">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-10">
              <Flex direction="column" className="gap-4 md:gap-5 max-w-xl">
                <Text
                  as="p"
                  size="1"
                  className="w-fit px-3 py-1 rounded-2xl uppercase bg-[#FED3C7] text-[#795950]"
                >
                  Heritage in Every Bit
                </Text>

                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#702E1C] leading-tight">
                  Authentic Cambodian Soul.
                </h1>

                <Text as="p" className="text-sm md:text-base text-[#54433F]">
                  Inspired by generations of family recipes from the heart of
                  Phnom Penh, crafted with premium ingredients in the USA.
                </Text>

                <Flex align="center" gap="3" wrap="wrap">
                  <Button
                    variant="ghost"
                    className="p-4 md:p-6 text-white bg-[#702E1C]"
                  >
                    <Link href="/shop">Shop Collection</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-4 md:p-6 text-black bg-[#FED3C7]"
                  >
                    <Link href="/about">Our Story</Link>
                  </Button>
                </Flex>
              </Flex>
            </div>
          </Box>
        </section>
      </Container>

      <MakStory />
      <Shop />
      <JoinAmbassadors />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default page;
