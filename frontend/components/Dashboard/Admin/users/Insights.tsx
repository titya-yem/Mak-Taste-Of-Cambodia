import { Text } from "@radix-ui/themes";
import Image from "next/image";
import documentImage from "@/public/dashboard/admin/users/document.svg";

const Insights = () => {
  return (
    <div>
      <div className="relative p-10 rounded-lg bg-[#8E4431]">
        <h4 className="text-xl font-semibold text-white">Heritage Insights</h4>

        <Text as="p" className="py-4 text-sm text-[#FFC3B5]">
          Your community is growing. You&apos;ve reached 85% of your Heritage
          Tier target for this quarter.
        </Text>

        <Image
          src={documentImage}
          alt="document image"
          className="absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default Insights;
