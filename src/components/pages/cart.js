import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Cart() {
  const { t } = useTranslation();
  return (
    <main className="cart-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <Link to="/">{t("menu.products")}</Link>
          <span>/</span>
          <p>{t("header.cart").toUpperCase()}</p>
        </div>
      </div>
      <section className="cart">
        <div className="container">
          <div className="section__arrow--title">
            <h1 className="section__arrow--header">{t("title.cart")}</h1>
            <img
              className="section__arrow--icon"
              src="assets/images/decor/2.png"
              alt="icon"
            />
          </div>
          <div className="cart__inner">
            <div className="cart__table">
              <div className="cart__table-row">
                <h4>{t("main.cart.products")}</h4>
                <h4>{t("main.cart.img")}</h4>
                <h4>{t("main.cart.name")}</h4>
                <h4>{t("main.cart.price")}</h4>
                <h4>{t("main.cart.qty")}</h4>
                <h4>{t("main.cart.total")}</h4>
                <h4>{t("main.cart.delete")}</h4>
              </div>
              <div className="cart__table-row">
                <div>
                  <img src="assets/images/cart/1.jpg" alt="wine" />
                  <h5>RƯỢU VANG ĐỎ</h5>
                </div>
                <div>
                  <h5>RƯỢU VANG ĐỎ</h5>
                </div>
                <div>
                  <p className="price">
                    345.000<span>đ</span>
                  </p>
                </div>
                <div>
                  <h5>1</h5>
                </div>
                <div>
                  <p className="price">
                    345.000<span>đ</span>
                  </p>
                </div>
                <div>
                  <button>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__btn">
            <Link className="btn" to="/products">
              {t("button.buyMore")}
            </Link>
            <button className="btn">{t("button.delete").toUpperCase()}</button>
            <Link className="btn" to="/checkout">
              {t("button.checkout")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
