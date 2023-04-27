import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CheckOut from "../pages/CheckOut";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProduct";
import Dashboard from "../admin/Dashboard";

import Users from "../admin/Users";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />

      <Route path="checkout" element={<CheckOut />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/all-products" element={<AllProducts />} />
      <Route path="dashboard/add-products" element={<AddProducts />} />
      <Route path="dashboard/users" element={<Users />} />

      <Route path="Shop/:id" element={<ProductDetail />} />

      <Route path="/*" element={<ProtectedRoute />} />

      <Route />
    </Routes>
  );
};

export default Router;
