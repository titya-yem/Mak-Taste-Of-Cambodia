import { Box, Text } from "@radix-ui/themes";
import { Button } from "../ui/button";

const Subscribe = () => {
  return (
    <section className="py-15 md:py-20 px-4">
      <Box className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#702E1C]">
          From Our Kitchen to Yours
        </h1>
        <Text as="p" className="pt-2 text-gray-400">
          Sign up for authentic recipes, grilling tips, and secret drops.
        </Text>

        <form className="flex items-center justify-center gap-2 md:gap-4 py-6">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="py-2 pl-2 pr-20 md:pr-35 focus:outline-none rounded-sm text-[#6B7280] bg-[#F7F3ED]"
          />
          <Button
            variant="ghost"
            type="submit"
            className="py-5 cursor-pointer rounded-sm hover:bg-gray-50 hover:text-[#702E1C] text-white bg-[#702E1C]"
          >
            Subscribe
          </Button>
        </form>

        <Text as="p" className="text-sm text-[#a89e9c]">
          RESPECTING YOUR INBOX LIKE WE RESPECT OUR HERITAGE.
        </Text>
      </Box>
    </section>
  );
};

export default Subscribe;
