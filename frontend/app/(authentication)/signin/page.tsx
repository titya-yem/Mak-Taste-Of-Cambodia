"use client";

import { Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import signupImage from "@/public/Signup Image.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import lotusImage from "@/public/authentication/lotus.svg";
import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "@/types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import authPost from "@/hooks/AuthPost";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const page = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const router = useRouter();
  const { checkAuth } = useAuth();

  const onSubmit = async (data: LoginInput) => {
    try {
      await authPost("user/signin", "Welcome Back 😋", data);
      window.location.reload();
      await checkAuth(); // call get me to get data from server
      router.push('/');
      reset();
    } catch (error) {
      toast.error('Something went wrong 😖');
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)} className="pt-10 space-y-4">
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
                  {...register("email")}
                />
                {errors.email && <Text as="p" className="text-red-500"> {errors.email.message} </Text>}
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
                  {...register("password")}
                />
                {errors.password && <Text as="p" className="text-red-500"> {errors.password.message} </Text>}
              </Flex>
              <Button
                variant="ghost"
                type="submit"
                className="w-full py-5 md:py-6 rounded-sm  cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#984129]"
                disabled={isSubmitting}
              >
                Sign In
              </Button>
            </form>

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
