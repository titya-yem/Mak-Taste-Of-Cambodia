"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema } from "@/types/UserTypes";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  password?: string;
};

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(updateUserSchema),
  });

  const mutation = useMutation({
    mutationFn: updateUserApi,
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="p-8 w-full max-w-3xl rounded-md shadow bg-white">
      <h2 className="text-2xl font-semibold text-[#702E1C] mb-6">
        Personal Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input
              {...register("name")}
              placeholder="Full Name"
              className="px-4 py-3 w-full bg-[#F7F3ED] rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="px-4 py-3 w-full bg-[#F7F3ED] rounded-md"
          />
        </div>

        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="px-4 py-3 w-full bg-[#F7F3ED] rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#6b2f1d] text-white"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Updating..." : "UPDATE PROFILE"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
