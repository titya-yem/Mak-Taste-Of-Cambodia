
interface UserLists {
    title: string,
    url: string,
}

export const userDashboardLists: UserLists[] = [
    {
        title: "My Orders",
        url: "/dashboard/user"
    },
    {
        title: "Profile",
        url: "/dashboard/user/profile"
    },
    {
        title: "Address",
        url: "/dashboard/user/address"
    },
    {
        title: "Setting",
        url: "/dashboard/user/setting"
    },
]