import { Button } from "@/components/ui/button";
import React from "react";

const ProfileForm = () => {
  return (
    <div className="p-8 w-full max-w-3xl rounded-md shadow bg-white ">
      <h2 className="text-2xl font-semibold text-[#702E1C] mb-6">
        Personal Information
      </h2>

      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            {/* Full Name */}
            <label htmlFor="fullName" className="text-sm text-gray-500 mb-1">
              FULL NAME
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Serey Roth"
              className="px-4 py-3 w-full bg-[#F7F3ED] border border-[#fbf3e7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2f1d]"
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm text-gray-500 mb-1">
              ROLE
            </label>
            <input
              id="role"
              type="text"
              placeholder="Senior Administrator"
              className="px-4 py-3 w-full bg-[#F7F3ED] border border-[#F7F3ED] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2f1d]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-500 mb-1">
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            type="email"
            placeholder="serey.roth@makbbq.com"
            className="px-4 py-3 w-full bg-[#F7F3ED] border border-[#F7F3ED] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2f1d]"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label
            htmlFor="currentPassword"
            className="block text-sm text-gray-500 mb-1"
          >
            CURRENT PASSWORD
          </label>
          <input
            id="currentPassword"
            type="password"
            placeholder="********"
            className="px-4 py-3 w-full bg-[#F7F3ED] border border-[#F7F3ED] rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-[#6b2f1d]"
          />

          {/* Eye icon */}
          <span className="absolute right-3 top-10 cursor-pointer text-gray-500">
            👁
          </span>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-end pt-4">
          <Button
            type="submit"
            variant="ghost"
            className="p-6 rounded-md cursor-pointer bg-[#6b2f1d] text-white hover:text-white hover:bg-[#863b27] transition"
          >
            UPDATE PROFILE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
