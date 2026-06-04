"use client";

import Image from "next/image";
import cloudImage from "@/public/dashboard/admin/cloud.svg";
import backupImage from "@/public/dashboard/admin/Backup.svg";
import documentImage from "@/public/dashboard/admin/document.svg";
import { Box, Flex, Progress, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { backup } from "@/lib/backup";

const DataBackUp = () => {
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
    <aside className="w-92 p-8 lg:mt-8 rounded-lg bg-[#EBE8E2]">
      <Flex justify="between" align="center">
        <h5 className="text-xl font-bold">Database Backup</h5>
        <Image src={cloudImage} alt="positive cloud" />
      </Flex>
      <Text as="p" className="pb-6 text-sm text-[#54433F]">
        System Health & Redundancy
      </Text>

      <Box className="p-6 rounded-lg bg-white">
        <div className="flex items-center justify-between *:text-sm text-[#54433F]">
          <Text as="p" className="lg:w-2/3">
            Last Automated Backup
          </Text>
          <Text as="p">45mn ago</Text>
        </div>

        {/* progress bar */}
        <Box maxWidth="500px" className="py-2">
          <Progress />
        </Box>
        <Text as="p" className="text-xs text-[#54433F]">
          Storage used: 4.2GB / 10 GB
        </Text>
      </Box>

      <Button
        variant="ghost"
        onClick={handleBackup}
        disabled={loading}
        className="text-base w-full mt-6 py-6 cursor-pointer text-white bg-[#702E1C] hover:bg-[#883923] hover:text-white"
      >
        <Image
          src={backupImage}
          alt="positive cloud"
          className="pr-2"
          width={30}
          height={30}
        />
        Download Backup Now
      </Button>

      <Box className="pt-8 text-[#54433F]">
        <Text as="p" className="pb-2">
          Recent History
        </Text>

        <Flex justify="between" align="center">
          <Flex justify="center" align="center" gap="2">
            <Image src={documentImage} alt="document icon" />
            <Text as="p">db_prod-v2.sql</Text>
          </Flex>
          <Text as="p" className="text-xs">
            Oct 24.04.26
          </Text>
        </Flex>

        <Flex justify="between" align="center">
          <Flex justify="center" align="center" gap="2">
            <Image src={documentImage} alt="document icon" />
            <Text as="p">db_prod-v1.sql</Text>
          </Flex>
          <Text as="p" className="text-xs">
            Oct 23.04.26
          </Text>
        </Flex>
      </Box>
    </aside>
  );
};

export default DataBackUp;
