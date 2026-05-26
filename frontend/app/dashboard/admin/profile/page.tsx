import ProfileForm from "@/components/Dashboard/Admin/profile/ProfileForm";
import Image from "next/image";
import makIngredientsImage from "@/public/dashboard/admin/profile/Cambodian Heritage.png";
import { Text } from "@radix-ui/themes";

const Page = () => {
  return (
    <main className="mt-6 flex flex-col lg:flex-row justify-between 2xl:justify-start gap-x-6">
      <ProfileForm />

      <div className="2xl:w-[450] h-fit mt-6 lg:mt-0 px-8 py-6 rounded-lg text-center bg-[#f5efed]">
        <Image
          src={makIngredientsImage}
          alt="Mak Ingredients"
          className="mx-auto rounded-md"
        />

        <Text as="p" className="py-4 text-sm italic text-[#702E1C]">
          &quot;Heritage in every package.&quot;
        </Text>
        <Text as="p" className="text-xs text-[#54433F]">
          Administrator access since June 2026
        </Text>
      </div>
    </main>
  );
};

export default Page;
