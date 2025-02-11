import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AdminLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <aside>uoguigig</aside>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
