import { Container, Text } from "@radix-ui/themes"


const page = () => {
  return (
    <div className="py-15 md:py-20 px-4 bg-[#FDF9F3]">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#702E1C]">
                Global Guardians of Heritage
            </h1>
            <Text as="p" className="md:w-[60%] lg:w-1/2 text-sm md:text-base text-[#54433F]">Meet the culinary storytellers bringing the soul of Cambodia to
                kitchens around the world. Our ambassadors are more than partners; 
                they are the bridge between tradition and your table.
            </Text>
        </div>
      </Container>
    </div>
  )
}

export default page