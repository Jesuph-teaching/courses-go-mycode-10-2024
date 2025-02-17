import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayout";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

import useUser from "./hooks/useUser";
import ShopLayout from "./layout/ShopLayout";
import Products from "./pages/Products";

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
				path="/shop"
				element={user ? <ShopLayout /> : <Navigate to="/auth/login" />}
			>
				<Route index element={<Navigate to="/shop/products" />} />
				<Route path="products" Component={Products} />
			</Route>
		</Routes>
	);
}
