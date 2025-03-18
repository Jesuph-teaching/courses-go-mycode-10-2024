import { SidebarNav } from "@client/layout/DashboardLayout/routes";
import { NavLink } from "react-router";

type Props = {
  nav: SidebarNav;
};

export default function SidebarNavLink({ nav }: Props) {
  return (
    <li>
      <NavLink
        to={nav.path}
        className={({ isActive }) =>
          `px-4 gap-4 btn-lg justify-start ${isActive ? "btn btn-accent" : "btn btn-ghost"}`
        }
      >
        <span className={nav.icon} />
        {nav.title}
      </NavLink>
    </li>
  );
}
