import Image from "next/image";
import backupImage from "@/public/dashboard/admin/Backup.svg";
import { Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";

const page = () => {
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
        <Button className="p-4 rounded-md cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#8e3e27]">
          Download
        </Button>
      </div>
    </main>
  );
};

export default page;
