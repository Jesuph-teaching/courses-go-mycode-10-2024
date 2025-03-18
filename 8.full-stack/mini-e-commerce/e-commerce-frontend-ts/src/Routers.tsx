import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayout";
import LoginForm from "#client/LoginForm";
import RegistrationForm from "#client/RegistrationForm";

import useUser from ":client/useUser";
import ShopLayout from "./layout/ShopLayout";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";

export default function Routers() {
  const { user } = useUser();
  return (
    <Routes>
      <Route index Component={Home} />
      <Route
        path="/auth"
        element={user ? <Navigate to="/shop" /> : <AuthLayout />}
      >
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" Component={LoginForm} />
        <Route path="register" Component={RegistrationForm} />
      </Route>
      <Route
        path="/admin"
        element={
          user && user.role === "admin" ? (
            <DashboardLayout />
          ) : (
            <Navigate to="/auth/login" />
          )
        }
      >
        <Route index element={<Navigate to={"/admin/dashboard"} />} />
        <Route path="dashboard" Component={Dashboard} />
        <Route path="products" Component={AdminProducts} />
        <Route path="orders" Component={Orders} />
      </Route>
      <Route
        path="/shop"
        element={user ? <ShopLayout /> : <Navigate to="/auth/login" />}
      >
        <Route index element={<Navigate to="/shop/products" />} />
        <Route path="products" Component={Products} />
      </Route>
      <Route path="checkout" Component={Checkout} />
    </Routes>
  );
}
