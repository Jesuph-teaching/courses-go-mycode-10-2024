import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Errors/Error404";
import Statistics from "./pages/Admin/Statistics";
import Products from "./pages/Admin/Products";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path="/product/:productId" Component={Product} />
        <Route path="/auth" Component={AuthLayout}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" Component={Login} />
          <Route path="register" Component={Register} />
        </Route>
        <Route path="/admin" Component={AdminLayout}>
          <Route path="statistics" Component={Statistics} />
          <Route path="products" Component={Products} />
        </Route>
        <Route path="*" Component={Error404} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
