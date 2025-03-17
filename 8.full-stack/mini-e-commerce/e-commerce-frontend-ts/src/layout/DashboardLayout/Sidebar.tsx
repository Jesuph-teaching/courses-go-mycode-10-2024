import { NavLink } from "react-router";
import { sidebarNavs } from "./routes";

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        {sidebarNavs.map((nav) => (
          <li>
            <NavLink
              to={nav.path}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
