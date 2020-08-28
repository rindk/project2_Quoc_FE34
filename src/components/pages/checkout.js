import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsCart,
  getProductsCart,
} from "../../redux/reducer/productsCart";
import { updateToken } from "../../redux/reducer/token";

function Checkout() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const productsCart = useSelector((state) => state.productsCart.value);

  useEffect(() => {
    dispatch(fetchProductsCart(token));
  }, [dispatch, token]);

  //handle Checkout
  const checkout = () => {
    alert("Bạn đã thanh toán thành công");

    const url = process.env.REACT_APP_SV_USERS + `/${token[0].id}`;
    const data = { ...token[0], cart: [] };

    dispatch(getProductsCart([]));
    dispatch(updateToken([data]));

    fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return (window.location.href = "/");
  };
  return (
    <main className="checkout-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <Link to="/cart">{t("menu.cart")}</Link>
          <span>/</span>
          <p>{t("menu.checkout")}</p>
        </div>
      </div>
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
                  {productsCart.reduce(
                    (total, product) => (total += product.qty * product.price),
                    0
                  )}
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
    </main>
  );
}
export default Checkout;
