"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@radix-ui/themes";

const Invitation = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    console.log(email);

    if (emailRef.current) emailRef.current.value = "";
  };

  return (
    <div className="bg-[#F7F3ED] p-4 rounded-lg">
      <h4 className="font-semibold">Invite New Ambassador</h4>

      <Text as="p" className="py-4 text-sm text-[#54433F]">
        Grow our heritage by inviting trusted culinary experts to the Mak
        Ambassador program.
      </Text>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          ref={emailRef}
          type="email"
          required
          placeholder="chef@restaurant.com"
          className="flex-1 border px-2 py-3 rounded-sm bg-white"
        />

        <Button
          type="submit"
          variant="ghost"
          className="w-full sm:w-auto p-6 rounded-sm cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#95432c]"
        >
          Send Invite
        </Button>
      </form>
    </div>
  );
};

export default Invitation;
