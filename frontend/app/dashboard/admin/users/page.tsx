import Image from "next/image";
import searchImage from "@/public/dashboard/admin/Search.svg";
import UsersData from "@/components/Dashboard/Admin/users/UsersData";
import increaseArrow from "@/public/dashboard/admin/users/IncreaseArrow.svg";
import decreaseArrow from "@/public/dashboard/admin/users/DecreaseArrow.svg";
import totalMember from "@/public/dashboard/admin/users/TotalMember.png";
import HeritageTier from "@/public/dashboard/admin/users/HeritageTier.png";
import NewRegistration from "@/public/dashboard/admin/users/NewRegister.png";

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

      <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
        <UsersData
          title="Total Members"
          amount={12842}
          titleImage={totalMember}
          titleAlt="Total Member image"
          numeric="+"
          percentage={12}
          percentageImage={increaseArrow}
          percentageAlt="arrow trend"
          duration="Since last month"
        />
        <UsersData
          title="Heritage Tier"
          amount={1402}
          titleImage={HeritageTier}
          titleAlt="Heritage Tier image"
          numeric="-"
          percentage={5}
          percentageImage={decreaseArrow}
          percentageAlt="arrow trend"
          duration="Exclusive community growth"
        />
        <UsersData
          title="New Registrations"
          amount={428}
          titleImage={NewRegistration}
          titleAlt="New Registration image"
          duration="This month"
        />
      </div>
    </div>
  );
};

export default page;
