import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import searchImage from "@/public/dashboard/admin/orders/Search.svg";
import { AdminOrdersFiltersLists } from "@/constants/AdminOrdersFilters";
import { Button } from "@/components/ui/button";
import OrdersTable from "@/components/Dashboard/Admin/orders/OrdersTable";

const Page = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Text as="p" className="text-[#54433F]">
          Manage your heritage seasonings distribution and global shipments.
        </Text>

        <div className="relative w-full md:w-75">
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
      </div>

      <Box className="my-4">
        {AdminOrdersFiltersLists.map((list) => (
          <Button
            key={list.name}
            variant="ghost"
            className={`${list.name === "All Orders" ? "text-white bg-[#702E1C]" : "text-[#54433F]"} py-4 px-6 cursor-pointer hover:text-white hover:bg-[#8a3822]`}
          >
            {list.name}
          </Button>
        ))}
      </Box>

      <OrdersTable />

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
        <Text as="p" className="text-sm font-semibold uppercase text-[#87736E]">
          Showing 8 of 128 Orders
        </Text>

        <div className="mt-4 lg:mt-0 *:cursor-pointer space-x-2">
          <Button
            variant="ghost"
            className="px-4 rounded-md bg-[#702E1C] text-white hover:text-white hover:bg-[#8a3822]"
          >
            {"<"}
          </Button>
          <Button
            variant="ghost"
            className="px-4 rounded-md bg-[#702E1C] text-white hover:text-white  hover:bg-[#8a3822]"
          >
            {">"}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
