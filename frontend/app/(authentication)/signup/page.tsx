import { Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import signupImage from "@/public/Signup Image.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import lotusImage from "@/public/authentication/lotus.svg";

const page = () => {
  return (
    <div className="py-15 md:py-20 px-4 bg-[#FDF9F3]">
      <Container>
        <div className="flex items-center justify-center gap-10 lg:gap-20">
          <Image
            src={signupImage}
            alt="Absara khmer temple of Mat taste of cambodia"
            className="hidden md:block w-1/2 lg:w-90"
          />

          <div className="md:w-1/2 lg:w-1/3 *:text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Welcome To Mak</h2>
            <Text as="p" className="font-medium text-[#a79591]">
              Sign up for your heritage account or sign in
            </Text>

            <form className="pt-10 space-y-4">
              <Flex direction="column" align="start" justify="start" gapY="2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium uppercase text-[#a79591]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="heritage@makbbq.com"
                  className="w-full py-2 md:py-4 px-2 rounded-sm text-[#87736E] bg-[#F7F3ED] focus:outline-[#f4ece2]"
                />
              </Flex>
              <Flex direction="column" align="start" justify="start" gapY="2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium uppercase text-[#a79591]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full py-2 md:py-4 px-2 rounded-sm text-[#87736E] bg-[#F7F3ED] focus:outline-[#f4ece2]"
                />
              </Flex>
              <Button
                variant="ghost"
                type="submit"
                className="w-full py-5 md:py-6 rounded-sm  cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#984129]"
              >
                Sign Up
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2 pt-4 *:text-sm">
              <Text as="p" className="text-[#54433F]">
                Already have an account?
              </Text>
              <Link
                href="signin"
                className="text-[#702E1C] hover:underline hover:underline-offset-2"
              >
                Sign In
              </Link>
            </div>

            <div className="pt-10 md:pt-20 flex flex-col items-center justify-center">
              <Image src={lotusImage} alt="Khmer Style Lotus" />
              <Text as="p" className="md:w-[60%] text-sm text-[#cebfbc]">
                AUTHENTIC CAMBODIAN CRAFTSMANSHIP, DELIVERED TO YOUR DOOR.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
