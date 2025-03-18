export interface SidebarNav {
  title: string;
  icon: string;
  path: string;
}
export const sidebarNavs: SidebarNav[] = [
  {
    title: "dashboard",
    icon: "icon-[solar--graph-bold-duotone]",
    path: "/admin/dashboard",
  },
  {
    title: "products",
    icon: "icon-[solar--box-bold-duotone]",
    path: "/admin/products",
  },
  {
    title: "orders",
    icon: "icon-[solar--cart-large-2-bold-duotone]",
    path: "/admin/orders",
  },
];
