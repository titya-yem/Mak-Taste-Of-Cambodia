"use client";

import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "@/types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import authPost from "@/hooks/AuthPost";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authslice";
import { Button } from "@/components/ui/button";
import { Flex, Text } from "@radix-ui/themes";

const SignInForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
      });

      const onSubmit = async (data: LoginInput) => {
    try {
      const res = await authPost("user/signin", "Welcome Back 😋", data);
      dispatch(setUser(res.data.user));

      router.push("/");
      reset();
    } catch (error) {
      toast.error("Something went wrong 😖");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4 space-y-4">
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
  )
}

export default SignInForm