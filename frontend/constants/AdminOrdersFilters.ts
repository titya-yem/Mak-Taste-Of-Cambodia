enum FilterLists {
    AllOrders = "AllOrders",
    Pending ="Pending",
    Processing = "Processing",
    Delivered = "Delivered",
    Arrived = "Arrived",
}

interface OrdersFilters {
    name: string,
    filter: FilterLists,
}

export const AdminOrdersFiltersLists: OrdersFilters [] = [
    {
        name: "All Orders",
        filter: FilterLists.AllOrders,
    },
    {
        name: "Pending",
        filter: FilterLists.Pending,
    },
    {
        name: "Processing",
        filter: FilterLists.Processing,
    },
    {
        name: "Delivered",
        filter: FilterLists.Delivered,
    },
    {
        name: "Arrived",
        filter: FilterLists.Arrived,
    },
]