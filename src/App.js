import React, { useEffect } from "react";
import Popup from "./components/layout/popup";
import Modal from "./components/layout/modal";
import Header from "./components/layout/header";
import Menu from "./components/layout/menu";
import Main from "./components/layout/main";
import Footer from "./components/layout/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductsList } from "./redux/reducer/productsList";

import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList.value);

  // Loading
  useEffect(() => {
    dispatch(fetchProductsList());
  }, [dispatch]);
  return (
    <Router>
      {console.log("Test to get products: ", productsList)}
      <Popup />
      <Modal />
      <Header />
      <Menu />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
