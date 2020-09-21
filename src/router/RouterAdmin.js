import React from "react";
import Dashboard from "../components/admin/main/dashboard";
import User from "../components/admin/main/user";
import Product from "../components/admin/main/product";
import Order from "../components/admin/main/order";
import Error404 from "../components/admin/main/error";
import { Redirect } from "react-router-dom";

const RouterAdmin = [
  {
    path: "/",
    exact: true,
    main: () => <Redirect to="/admin" />,
  },
  {
    path: "/admin",
    main: () => <Dashboard />,
  },
  {
    path: "/admin-user",
    main: () => <User />,
  },
  {
    path: "/admin-product",
    main: () => <Product />,
  },
  {
    path: "/admin-order",
    main: () => <Order />,
  },
  {
    path: "/*",
    main: () => <Error404 />,
  },
];

export default RouterAdmin;
