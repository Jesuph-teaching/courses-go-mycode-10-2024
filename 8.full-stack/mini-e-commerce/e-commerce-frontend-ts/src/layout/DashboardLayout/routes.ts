export interface SidebarNav {
  title: string;
  icon: string;
  path: string;
}
export const sidebarNavs: SidebarNav[] = [
  {
    title: "dashboard",
    icon: "icon-[solar--dashboard]",
    path: "/admin/dashboard",
  },
  {
    title: "products",
    icon: "icon-[solar--dashboard]",
    path: "/admin/products",
  },
  {
    title: "orders",
    icon: "icon-[solar--dashboard]",
    path: "/admin/orders",
  },
];
