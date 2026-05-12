import { Container, Text } from "@radix-ui/themes";
import Products from "@/components/Products";

const page = () => {
  return (
    <div className="py-15 md:py-20 px-4">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#702E1C]">
            The Collection
          </h1>
          <Text as="p" className="pt-4 text-sm md:text-base text-[#54433F]">
            ELEVATE YOUR TABLE WITH THE HERITAGE OF CAMBODIAN BBQ SEASONING.
          </Text>
        </div>

        <Products />
      </Container>
    </div>
  );
};

export default page;
