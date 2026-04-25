import { Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ambassadors } from "@/constants/Ambassadors";

const Ambassadors = () => {
  return (
    <div className="py-10 md:py-15 px-4">
      <Container>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 rounded-lg">
          {ambassadors.map((item, index) => (
            <div
              key={index}
              className="md:basis-[48%] lg:basis-[30%] flex flex-col items-center justify-center py-10 *:text-center bg-[#F7F3ED]"
            >
              <Image
                src={item.image}
                alt={`${item.name} profile image`}
                className="pb-2 rounded-md"
              />

              <Text as="p" className="pb-2 text-sm uppercase text-[#5F390A]">
                {item.location}
              </Text>

              <h5 className="text-2xl font-bold">{item.name}</h5>

              <Text as="p" className="py-2 text-sm font-bold text-[#5F390A]">
                {item.type}
              </Text>

              <Text as="p" className="w-[90%] pb-4 text-sm text-[#54433F]">
                &quot;{item.description}&quot;
              </Text>

              <Flex
                direction="column"
                align="center"
                justify="center"
                gap="2"
                className="w-[90%] py-6 px-6 bg-white rounded-sm"
              >
                <h5 className="font-bold text-[#5F390A]">The Mak Way</h5>

                <Text as="p" className="text-sm font-bold">
                  &quot;{item.recipe}&quot;
                </Text>
              </Flex>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Ambassadors;
