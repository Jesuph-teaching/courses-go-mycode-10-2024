import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/statistics">Statistics</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/auth/login">login</Link>
        </li>
        <li>
          <Link to="/auth/register">register</Link>
        </li>
      </ul>
    </nav>
  );
}
