import Image from "next/image";
import searchImage from "@/public/dashboard/admin/Search.svg";
import UsersData from "@/components/Dashboard/Admin/users/UsersData";

const page = () => {
  return (
    <div>
      <div className="my-4 relative w-full md:w-75">
        <Image
          src={searchImage}
          alt="Search icon"
          className="absolute left-3 top-6 -translate-y-1/2"
          width={16}
          height={16}
        />
        <input
          type="search"
          placeholder="Search orders..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#702E1C]"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <UsersData />
        <UsersData />
        <UsersData />
      </div>
    </div>
  );
};

export default page;
