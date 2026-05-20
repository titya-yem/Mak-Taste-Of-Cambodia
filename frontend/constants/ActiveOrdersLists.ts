enum status {
  Pending = "Pending",
  Delivered = "Delivered",
  Arrived = "Arrived",
  Processing = "Processing",
}

interface OrderLists {
  id: number;
  name: string;
  email: string;
  productName: string;
  price: number;
  status: status;
  orderDate: string;
}

export const OrderLists: OrderLists[] = [
  {
    id: 1,
    name: "Sophia Chen",
    email: "sophia.c@example.com",
    productName: "Original Heritage BBQ Sauce (3 Pack)",
    price: 42.0,
    status: status.Processing,
    orderDate: "Oct 12, 2023 · 14:32",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    email: "m.thorne@globalfoods.net",
    productName: "Kampot Pepper Bulk (Case of 12)",
    price: 215.5,
    status: status.Delivered,
    orderDate: "Oct 11, 2023 · 09:15",
  },
  {
    id: 3,
    name: "Isabella Rossi",
    email: "i.rossi@lifestyle.co",
    productName: "The Heritage Tasting Bundle",
    price: 78.0,
    status: status.Arrived,
    orderDate: "Oct 11, 2023 · 18:45",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "james@wilson.com",
    productName: "Limited Edition Gift Box",
    price: 55.0,
    status: status.Pending,
    orderDate: "Oct 10, 2023 · 22:10",
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia.b@example.com",
    productName: "Mak Seasoning Classic Pack",
    price: 34.99,
    status: status.Delivered,
    orderDate: "Oct 10, 2023 · 11:20",
  },
  {
    id: 6,
    name: "Liam Carter",
    email: "liam.carter@mail.com",
    productName: "Spicy Sauce Combo Set",
    price: 64.75,
    status: status.Processing,
    orderDate: "Oct 09, 2023 · 16:05",
  },
  {
    id: 7,
    name: "Emma Davis",
    email: "emma.davis@mail.com",
    productName: "Premium Pepper Collection",
    price: 89.99,
    status: status.Arrived,
    orderDate: "Oct 09, 2023 · 08:40",
  },
  {
    id: 8,
    name: "Noah Smith",
    email: "noah.smith@mail.com",
    productName: "Starter Spice Kit",
    price: 29.5,
    status: status.Pending,
    orderDate: "Oct 08, 2023 · 19:25",
  },
];