import { OrderLists } from "@/constants/ActiveOrdersLists";
import { Badge, Flex, Table, Text } from "@radix-ui/themes";
import Link from "next/link";

const ActiveOrders = () => {
  return (
    <main className="w-full lg:w-2/3 pt-8">
      <Flex justify="between" align="center" className="pb-4">
        <h5 className="text-lg font-bold">Active Order Queue</h5>
        <Link
          href="/dashboard/admin/orders"
          className="text-xs md:text-sm font-semibold text-[#702E1C]"
        >
          View All Orders
        </Link>
      </Flex>

      {/* mobile cards */}
      <div className="space-y-3 md:hidden">
        <div className="p-4 rounded-lg bg-[#F7F3ED]">
          <Text as="p" className="font-bold">
            # MAK-8901
          </Text>
          <Text as="p" className="text-sm text-gray-600">
            Sovan J.
          </Text>

          <div className="flex justify-between mt-2">
            <Text as="span" className="text-sm">
              $44.97
            </Text>
            <Badge color="crimson">Pending</Badge>
          </div>
        </div>
      </div>

      {/* tablet + laptop screen */}
      <div className="hidden md:block w-full overflow-x-auto">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Order ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Customer</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          {OrderLists.slice(0, 8).map((list) => (
            <Table.Body key={list.price}>
              <Table.Row className="bg-[#F7F3ED]">
                <Table.RowHeaderCell>{list.id}</Table.RowHeaderCell>
                <Table.Cell>{list.name}</Table.Cell>
                <Table.Cell>{list.productName}</Table.Cell>
                <Table.Cell>${list.price}</Table.Cell>
                <Table.Cell>
                  <Badge color="crimson">{list.status}</Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table.Root>
      </div>
    </main>
  );
};

export default ActiveOrders;
