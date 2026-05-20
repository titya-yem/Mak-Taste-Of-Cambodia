enum status {
    Pending ="Pending",
    Delivered = "Delivered",
    Arrived = "Arrived",
}


interface OrderLists {
    id: number,
    name: string,
    productName: string,
    price: number,
    status: status,
}

export const OrderLists: OrderLists [] = [
    {
        id: 1,
        name: "Titya Yem",
        productName: "Mak Seassoning",
        price: 44.97,
        status: status.Pending,
    },
    {
        id: 1,
        name: "Titya",
        productName: "Mak Seassoning",
        price: 20.48,
        status: status.Arrived,
    },
    {
        id: 1,
        name: "Jess",
        productName: "Mak Seassoning",
        price: 108.93,
        status: status.Delivered,
    },
    {
        id: 1,
        name: "Jonh",
        productName: "Mak Seassoning",
        price: 18.82,
        status: status.Delivered,
    },
    {
        id: 1,
        name: "Mattrew",
        productName: "Mak Seassoning",
        price: 43,
        status: status.Pending,
    },
    {
        id: 1,
        name: "Pisey",
        productName: "Mak Seassoning",
        price: 60.23,
        status: status.Arrived,
    },
    {
        id: 1,
        name: "Sitha",
        productName: "Mak Seassoning",
        price: 80.22,
        status: status.Delivered,
    },
    {
        id: 1,
        name: "Pisey",
        productName: "Mak Seassoning",
        price: 60.23,
        status: status.Pending,
    },
    {
        id: 1,
        name: "Sopphorn",
        productName: "Mak Seassoning",
        price: 200.13,
        status: status.Delivered,
    },
]