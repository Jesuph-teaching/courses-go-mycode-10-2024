import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Link to={-1}>Return </Link>
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "rgb(30, 35, 76)",
          color: "rgb(255, 255, 255)",
          overflow: "hidden",
          borderRadius: "25px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1735078254602-b7818942c324?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "50%", maxHeight: "70vh" }}
        />
        <div style={{ width: "50%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
