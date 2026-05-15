import { Badge, Flex, Table } from "@radix-ui/themes";
import Link from "next/link";

const ActiveOrders = () => {
  return (
    <main className="pt-8">
      <Flex justify="between" align="center" className="pb-4">
        <h5 className="text-lg font-bold">Active Order Queue</h5>
        <Link
          href="/dashboard/admin/orders"
          className="text-xs md:text-sm font-semibold text-[#702E1C]"
        >
          View All Orders
        </Link>
      </Flex>

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

        <Table.Body>
          <Table.Row className="bg-[#F7F3ED]">
            <Table.RowHeaderCell># MAK-8901</Table.RowHeaderCell>
            <Table.Cell>Sovan J.</Table.Cell>
            <Table.Cell>
              {"Mak Seassoning".length > 8
                ? "Mak Seassoning".slice(0, 8) + "..."
                : "Mak Seassoning"}
            </Table.Cell>
            <Table.Cell>$44.97</Table.Cell>
            <Table.Cell>
              <Badge color="crimson">Pending</Badge>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </main>
  );
};

export default ActiveOrders;
