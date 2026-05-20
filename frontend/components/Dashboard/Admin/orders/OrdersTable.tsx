"use client";

import { OrderLists } from "@/constants/ActiveOrdersLists";
import { Text } from "@radix-ui/themes";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import profileImage from "@/public/dashboard/admin/orders/person.png";

const statusStyles = {
  Pending: "bg-orange-100 text-orange-600",
  Delivered: "bg-green-100 text-green-600",
  Arrived: "bg-blue-100 text-blue-600",
  Processing: "bg-red-100 text-red-600",
};

const OrdersTable = () => {
  return (
    <div className="p-4 md:p-6 rounded-md bg-[#f7f4f2] min-h-screen">
      {/* Header (hidden on mobile) */}
      <div className="hidden lg:grid grid-cols-5 gap-x-6 text-sm text-gray-500 mb-4 px-4">
        <Text as="p">CUSTOMER</Text>
        <Text as="p">PRODUCT SUMMARY</Text>
        <Text as="p">ORDER DATE</Text>
        <Text as="p">FULFILLMENT</Text>
        <Text as="p">TOTAL</Text>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {OrderLists.map((order) => (
          <div
            key={order.id}
            className="
              bg-white rounded-xl shadow-sm p-4
              flex flex-col gap-4
              md:grid md:grid-cols-2 md:gap-6
              lg:grid lg:grid-cols-5 lg:items-center
            "
          >
            {/* Customer */}
            <div className="flex items-center gap-3">
              <Image src={profileImage} alt="Profile image" />
              <div>
                <Text as="p" className="font-medium">
                  {order.name}
                </Text>
                <Text as="p" className="text-xs text-gray-500">
                  {order.email}
                </Text>
              </div>
            </div>

            {/* Product */}
            <div>
              <span className="text-xs px-2 py-1 rounded-md mr-2 font-semibold text-[#702E1C] bg-[#EBE8E2]">
                MAK-01
              </span>
              <p className="text-sm text-gray-700">{order.productName}</p>
            </div>

            {/* Date */}
            <div className="text-sm text-gray-600">
              <span className="text-gray-400 lg:hidden">Date: </span>
              {order.orderDate}
            </div>

            {/* Status */}
            <div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  statusStyles[order.status]
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Price + menu */}
            <div className="flex items-center justify-between lg:justify-start gap-4">
              <p className="font-semibold text-[#7a2e1f]">
                ${order.price.toFixed(2)}
              </p>
              <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTable;
