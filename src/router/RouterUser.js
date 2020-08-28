import React from "react";
import Home from "../components/pages/home";
import Intro from "../components/pages/introduction";
import Products from "../components/pages/products";
import Contact from "../components/pages/contact";
import ProductDetail from "../components/pages/product-detail";
import Error404 from "../components/pages/404";
import Cart from "../components/pages/cart";
import Login from "../components/pages/login";
import Signup from "../components/pages/signup";
import Address from "../components/pages/address";
import Checkout from "../components/pages/checkout";

const RouterUser = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/introduction",
    main: () => <Intro />,
  },
  {
    path: "/products",
    main: () => <Products />,
  },
  {
    path: "/contact",
    main: () => <Contact />,
  },
  {
    path: "/product-detail/:productID",
    main: () => <ProductDetail />,
  },
  {
    path: "/address",
    main: () => <Address />,
  },
  {
    path: "/cart",
    main: () => <Cart />,
  },
  {
    path: "/checkout",
    main: () => <Checkout />,
  },
  {
    path: "/login",
    main: () => <Login />,
  },
  {
    path: "/signup",
    main: () => <Signup />,
  },
  {
    path: "/*",
    main: () => <Error404 />,
  },
];

export default RouterUser;
