import { Box, Container, Text } from "@radix-ui/themes";
import Image from "next/image";
import galicImage from "@/public/About/Garlic.png";
import driedChili from "@/public/About/Dried Chilies.png";
import herbsImage from "@/public/About/Herbs.png";

const Ingredients = () => {
  return (
    <div className="py-15 md:py-20 px-4 bg-[#F7F3ED]">
      <Container>
        <Box className="*:text-center">
          <h1 className="text-3xl md:text-4xl text-[#702E1C]">
            The Alchemist’s Pantry
          </h1>
          <Text
            as="p"
            className="text-sm md:text-base pt-2 pb-4 text-[#54433F]"
          >
            Pure ingredients. No fillers. Just the essentials.
          </Text>
        </Box>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4">
          <div className="md:w-1/2 flex flex-col *:justify-center items-center gap-2 md:gap-4">
            <div className="relative">
              <Image
                src={galicImage}
                alt="Toasted arlic"
                className="rounded-lg"
              />

              {/* Gradient */}
              <div className="absolute inset-0 rounded-lg bg-linear-to-t from-gray-800 via-black/40 to-transparent" />

              <Box className="absolute bottom-4 left-6">
                <h5 className="text-lg font-medium text-white">
                  Toasted Garlic
                </h5>
                <Text as="p" className="text-[10px] uppercase text-white">
                  Aromatic Depth
                </Text>
              </Box>
            </div>
            <div className="flex items-center py-8 md:py-16 lg:py-11 px-6 rounded-lg bg-[#EBE8E2]">
              <Text
                as="p"
                className="lg:w-[60%] text-sm md:text-base lg:text-lg text-center text-[#702E1C]"
              >
                &quot;It is not about the heat, it is about the story each spice
                tells as it hits the flame.&quot;
              </Text>
            </div>
          </div>

          <div className="md:w-1/4 relative inline-block">
            <Image
              src={driedChili}
              alt="Dried Chilli"
              className="md:h-100 lg:h-123 rounded-lg"
            />

            {/* Gradient */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-t from-[#702E1C] via-[#702E1C]/60 to-transparent" />

            <Box className="absolute bottom-4 left-6 z-10">
              <h5 className="text-lg font-medium text-white">Dried Chili</h5>
              <Text as="p" className="text-[10px] uppercase text-white">
                REFINED HEAT
              </Text>
            </Box>
          </div>

          <div className="md:w-1/4 lg:w-fit relative">
            <Image src={herbsImage} alt="Herbs" className="rounded-lg" />

            {/* Gradient */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-t from-gray-800 via-black/40 to-transparent" />

            <Box className="absolute bottom-4 left-6">
              <Text as="p" className="text-[10px] uppercase text-white">
                VELVETY CRUNCH
              </Text>
              <h5 className="text-lg font-medium text-white">Herbs</h5>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ingredients;
