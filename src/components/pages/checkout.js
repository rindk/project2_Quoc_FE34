import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCart } from "../../redux/reducer/productsCart";
import { updateToken } from "../../redux/reducer/token";

function Checkout() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const productsCart = useSelector((state) => state.productsCart.value);
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");

  // loading products in cart
  useEffect(() => {
    dispatch(fetchProductsCart(token));
  }, [dispatch, token]);
  // Show/Hide message
  useEffect(() => {
    message === ""
      ? document.querySelector(".checkout__message").classList.remove("active")
      : document.querySelector(".checkout__message").classList.add("active");
  });
  // calculate total price
  useEffect(() => {
    setTotal(
      productsCart.reduce(
        (total, product) => (total += product.qty * product.price),
        0
      )
    );
  }, [productsCart]);

  //handle Checkout
  const checkout = () => {
    if (token[0].cart.length === 0) {
      setMessage("Bạn không có sản phẩm nào");
      return setTimeout(() => setMessage(""), 1500);
    }
    setMessage("Bạn đã thanh toán thành công");
    setTimeout(() => setMessage(""), 1500);
    // update token and user data
    const url1 = process.env.REACT_APP_SV_PROFILE + `/${token[0].id}`;
    const data1 = { ...token[0], cart: [] };
    dispatch(updateToken([data1]));
    fetch(url1, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data1),
    });
    // update order data
    const url2 = process.env.REACT_APP_SV_ORDERS;
    const data2 = {
      userID: token[0].id,
      name: token[0].firstName,
      phone: token[0].phone,
      address: token[0].address,
      city: token[0].city,
      cart: token[0].cart,
      total: total,
      orderDate: new Date().toLocaleString(),
      status: "ordered",
    };
    fetch(url2, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data2),
    });
    return (window.location.href = "/products");
  };
  return (
    <main className="checkout-main">
      <div className="checkout__message">
        {message === "Bạn đã thanh toán thành công" ? (
          <div>
            <i className="fas fa-check"></i>
          </div>
        ) : null}
        {message}
      </div>
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <Link to="/cart">{t("menu.cart")}</Link>
          <span>/</span>
          <p>{t("menu.checkout")}</p>
        </div>
      </div>
      {!loginStatus ? (
        <div className="container">
          <div className="login">
            Bạn chưa đăng nhập
            <Link className="link" to="/login">
              {t("header.login")}
            </Link>
          </div>
        </div>
      ) : (
        <section className="checkout">
          <div className="container">
            <div className="section__arrow--title">
              <h1 className="section__arrow--header">{t("title.checkout")}</h1>
              <img
                className="section__arrow--icon"
                src="assets/images/decor/2.png"
                alt="icon"
              />
            </div>
          </div>
          <div className="checkout__inner container">
            <div className="checkout__address">
              <div className="checkout__address--header">
                {t("main.address.header")}
              </div>
              <div className="checkout__address--inner">
                <h4>{t("main.address.fname")}</h4>
                <p>{token[0].firstName}</p>
                <h4>{t("main.address.lname")}</h4>
                <p>{token[0].lastName}</p>
                <h4>{t("main.address.address")}</h4>
                <p>{token[0].address}</p>
                <h4>{t("main.address.city")}</h4>
                <p>{token[0].city}</p>
                <h4>{t("main.address.phone")}</h4>
                <p>{token[0].phone}</p>
              </div>
              <Link to="/address" className="btn">
                {t("button.updateAdd")}
              </Link>
            </div>
            <div className="checkout__cart">
              <div className="checkout__cart--header">
                {t("main.cart.header")}
              </div>
              <div className="checkout__cart--inner">
                <div className="checkout__cart--row">
                  <h4>Sản phẩm</h4>
                  <h4>Số lượng</h4>
                  <h4>Subtotal</h4>
                </div>
                {productsCart.map((product) => (
                  <div className="checkout__cart--row" key={product.id}>
                    <h5>{product.name}</h5>
                    <span>x{product.qty}</span>
                    <p className="price">
                      {product.price * product.qty}
                      <span>$</span>
                    </p>
                  </div>
                ))}
                <div className="checkout__cart--total">
                  <h3>TOTAL</h3>
                  <p className="price">
                    {total}
                    <span>$</span>
                  </p>
                </div>
              </div>
              <button className="btn" onClick={checkout}>
                {t("button.checkout")}
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
export default Checkout;
