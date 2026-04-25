import { Container, Text } from "@radix-ui/themes";

const page = () => {
  return (
    <div className="py-15 md:py-20 px-4">
      <Container>
        <div className="flex flex-col items-center justify-center *:text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#702E1C]">
            Global Guardians of Heritage
          </h1>
          <Text
            as="p"
            className="w-[80%] md:w-[45%] pt-4 text-sm md:base text-[#54433F]"
          >
            Meet the culinary storytellers bringing the soul of Cambodia to
            kitchens around the world. Our ambassadors are more than partners;
            they are the bridge between tradition and your table.
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default page;
