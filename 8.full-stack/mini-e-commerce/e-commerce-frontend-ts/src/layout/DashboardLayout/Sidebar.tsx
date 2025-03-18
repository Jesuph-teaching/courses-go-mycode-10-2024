import { Link } from "react-router";
import { sidebarNavs } from "./routes";
import SidebarNavLink from "@client/components/SidebarNavLink";

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 gap-2 p-4">
        <Link to={"/"} className="btn btn-ghost h-32">
          <h3 className="text-3xl">Mini e-commerce</h3>
        </Link>
        {/* Sidebar content here */}
        {sidebarNavs.map((nav, i) => (
          <SidebarNavLink key={nav.path + i} nav={nav} />
        ))}
      </ul>
    </div>
  );
}
