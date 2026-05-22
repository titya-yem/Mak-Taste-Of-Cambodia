import UsersData from "@/components/Dashboard/Admin/users/UsersData";
import increaseArrow from "@/public/dashboard/admin/users/IncreaseArrow.svg";
import decreaseArrow from "@/public/dashboard/admin/users/DecreaseArrow.svg";
import totalMember from "@/public/dashboard/admin/users/TotalMember.png";
import HeritageTier from "@/public/dashboard/admin/users/HeritageTier.png";
import NewRegistration from "@/public/dashboard/admin/users/NewRegister.png";
import UserTable from "@/components/Dashboard/Admin/users/UserTable";

const page = () => {
  return (
    <div>
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

      <UserTable />
    </div>
  );
};

export default page;
