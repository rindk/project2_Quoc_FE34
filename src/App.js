import React, { useEffect } from "react";
import Popup from "./components/layout/popup";
import Modal from "./components/layout/modal";
import Header from "./components/layout/header";
import Menu from "./components/layout/menu";
import Main from "./components/layout/main";
import Footer from "./components/layout/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductsHot } from "./redux/reducer/productsHot";
import { fetchProductsTopSale } from "./redux/reducer/productsTopSale";
import { checkLoginStt } from "./redux/reducer/loginStatus";

function App() {
  const dispatch = useDispatch();

  // Loading hot and topsale products at home page
  useEffect(() => {
    dispatch(fetchProductsHot());
    dispatch(fetchProductsTopSale());
    dispatch(checkLoginStt());
  }, [dispatch]);

  return (
    <Router>
      <Modal />
      <Popup />
      <Header />
      <Menu />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
