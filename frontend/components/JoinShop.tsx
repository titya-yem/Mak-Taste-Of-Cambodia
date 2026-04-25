import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Button } from "./ui/button";
import Link from "next/link";

const JoinShop = () => {
  return (
    <div className="py-15 md:py-20 px-4 bg-[#F7F3ED]">
      <Container>
        <Box className="*:text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Join the Table</h1>
          <Text as="p" className="pt-2 pb-8 text-sm text-[#54433F]">
            Sign up to obtain our recipe and get new update stories from the
            heart of Cambodia
          </Text>
        </Box>

        <Flex align="center" justify="center" gap="2">
          <Button
            variant="ghost"
            className="py-6 px-4 rounded-sm cursor-pointer bg-[#702E1C] hover:bg-[#91402a]"
          >
            <Link href="/sinup" className="text-white">
              Sign Up
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="py-6 px-4 rounded-sm cursor-pointer bg-[#E6E2DC] hover:bg-[#d6d3cd]"
          >
            <Link href="/signin" className="text-black">
              Sign In
            </Link>
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default JoinShop;
