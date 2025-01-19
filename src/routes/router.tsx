import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Layout from "../Layout";
import Login from "../pages/login/Login";
import "../styles/global.css";
import Product from "../pages/product/Product";
import User from "../pages/user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/users", element: <Users /> },
      { path: "/products/:id", element: <Product /> },
      { path: "/users/:id", element: <User /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default router;
