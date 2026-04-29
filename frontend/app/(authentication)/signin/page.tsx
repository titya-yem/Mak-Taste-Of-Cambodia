"use client";

import { Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import signupImage from "@/public/Signup Image.png";
import Link from "next/link";
import lotusImage from "@/public/authentication/lotus.svg";
import humanIcon from "@/public/person.svg"
import SignInForm from "@/components/authentication/SignInForm";
import GoogleSignInButton from "@/components/authentication/GoogleSignInButton";

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

          <div className="md:w-1/2 lg:w-[36%] *:text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Welcome Back</h2>
            <Text as="p" className="font-medium text-[#a79591]">
              Sign in to your heritage account or create a new one.
            </Text>

            {/* Sign in with google button */}
            <div className="my-4">
              <GoogleSignInButton />
            </div>

            <Flex align="center" justify="between">
              <div className="w-1/3 h-0.5 bg-[#DAC1BB]"></div>
              <Text as="p" className="w-1/4 text-sm uppercase text-[#DAC1BB]">or use email</Text>
              <div className="w-1/3 h-0.5 bg-[#DAC1BB]"></div>
            </Flex>

            {/* Sign in form */}
            <SignInForm />

            <div className="flex items-center justify-center gap-2 pt-4 *:text-sm">
              <Text as="p" className="text-[#54433F]">
                New to the Mak legacy?
              </Text>
              <Link
                href="signup"
                className="text-[#702E1C] hover:underline hover:underline-offset-2"
              >
                Create an account
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
