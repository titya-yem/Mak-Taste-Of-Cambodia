
interface AdminLists {
    title: string,
    url: string,
}

export const adminDashboardLists: AdminLists[] = [
    {
        title: "Dashboard Overview",
        url: "/dashboard/admin"
    },
    {
        title: "Orders",
        url: "/dashboard/admin/orders"
    },
    {
        title: "Users",
        url: "/dashboard/admin/users"
    },
    {
        title: "Database Backup",
        url: "/dashboard/admin/backup"
    },
    {
        title: "Profile",
        url: "/dashboard/admin/profile"
    },
]