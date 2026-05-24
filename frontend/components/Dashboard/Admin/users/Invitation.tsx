"use client";

import { Button } from "@/components/ui/button";
import { Text } from "@radix-ui/themes";

const Invitation = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hi");
  };

  return (
    <div className="bg-[#F7F3ED] p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Invite New Ambassador</h4>

      <Text as="p" className="mb-4 text-sm text-gray-600">
        Grow our heritage by inviting trusted culinary experts to the Mak
        Ambassador program.
      </Text>

      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <input
          type="email"
          required
          placeholder="chef@restaurant.com"
          className="flex-1 border px-3 py-2 rounded-md"
        />

        <Button type="submit" variant="ghost">
          Send Invite
        </Button>
      </form>
    </div>
  );
};

export default Invitation;
