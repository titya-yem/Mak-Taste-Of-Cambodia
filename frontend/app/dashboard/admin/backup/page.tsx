"use client";

import { useState } from "react";
import Image from "next/image";
import backupImage from "@/public/dashboard/admin/Backup.svg";
import { Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { backup } from "@/lib/backup";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const handleBackup = async () => {
    setLoading(true);
    try {
      await backup();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="w-fit my-4 p-4 rounded-lg bg-white">
        <Image
          src={backupImage}
          alt="Back up icon"
          width={40}
          height={40}
          className="rounded-sm p-2 bg-[#702E1C]"
        />

        <h5 className="text-xl font-semibold">Download Backup</h5>

        <Text as="p" className="text-sm py-2 text-[#54433F]">
          Initiate full system snapshot to secure cloud storage.
        </Text>

        <Button
          onClick={handleBackup}
          disabled={loading}
          className="p-4 rounded-md cursor-pointer text-white bg-[#702E1C] hover:bg-[#8e3e27]"
        >
          {loading ? "Generating..." : "Download"}
        </Button>
      </div>
    </main>
  );
};

export default Page;
