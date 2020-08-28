import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginStt } from "./redux/reducer/loginStatus";
// normal user
import Popup from "./components/layout/popup";
import Modal from "./components/layout/modal";
import Header from "./components/layout/header";
import Menu from "./components/layout/menu";
import Main from "./components/layout/main";
import Footer from "./components/layout/footer";
// admin
import AdHeader from "./components/admin/layout/adheader";
import AdSidebar from "./components/admin/layout/adsidebar";
import AdMain from "./components/admin/layout/admain";

function App() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.loginStatus.type);
  // Loading hot and topsale products at home page
  useEffect(() => {
    dispatch(checkLoginStt());
  }, [dispatch]);

  return (
    <>
      {type === "admin" ? (
        <Router>
          <AdHeader />
          <AdSidebar />
          <AdMain />
        </Router>
      ) : (
        <Router>
          <Modal />
          <Popup />
          <Header />
          <Menu />
          <Main />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
