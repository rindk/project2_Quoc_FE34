
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCart } from "../../redux/reducer/productsCart";
import { updateToken } from "../../redux/reducer/token";

function Cart() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.productsCart.value);
  const token = useSelector((state) => state.token.value);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(fetchProductsCart(token));
  }, [dispatch, token]);

  // calculate total price
  useEffect(() => {
    setTotal(
      productsCart.reduce(
        (total, product) => (total += product.qty * product.price),
        0
      )
    );
  }, [productsCart]);

  //delete all products
  const deleteAllProducts = () => {
    const url = process.env.REACT_APP_SV_USERS + `/${token[0].id}`;
    const data = { ...token[0], cart: [] };
    dispatch(updateToken([data]));

    return fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <main className="cart-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <Link to="/products">{t("menu.products")}</Link>
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
            {token === null ? null : token[0].cart.length === 0 ? null : (
              <div className="cart__total">
                <h3>TỔNG TIỀN:</h3>
                <p className="price">
                  {total}
                  <span>$</span>
                </p>
                <h4>Số loại sản phẩm</h4>
                <p>{token[0].cart.length}</p>
                <h4>Số sản phẩm</h4>
                <p>
                  {token[0].cart.reduce((total, el) => (total += el.qty), 0)}
                </p>
              </div>
            )}
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
              {token === null ? (
                <span>Bạn cần đăng nhập để xem giỏ hàng</span>
              ) : productsCart.length === 0 ? (
                <span>Bạn chưa thêm sản phẩm nào vào giỏ hàng</span>
              ) : (
                productsCart.map((product) => (
                  <CartProducts
                    key={product.id}
                    product={product}
                    cart={token[0].cart}
                  />
                ))
              )}
            </div>
          </div>
          <div className="cart__btn">
            <Link className="btn" to="/products">
              {t("button.buyMore")}
            </Link>
            <button className="btn" onClick={deleteAllProducts}>
              {t("button.delete").toUpperCase()}
            </button>
            <Link className="btn" to="/checkout">
              {t("button.order")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const CartProducts = ({ product, cart }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);

  const deleteProduct = async () => {
    const url = process.env.REACT_APP_SV_USERS + `/${token[0].id}`;
    const data = {
      ...token[0],
      cart: cart.filter((el) => el.productID !== product.id),
    };
    return await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      dispatch(fetchProductsCart([data]));
      dispatch(updateToken([data]));
    });
  };

  return (
    <div className="cart__table-row">
      <div>
        <img src={product.img} alt="wine" />
        <h5>
          {product.name.toUpperCase()}
          <span> ( {product.avgRating} ★) </span>
        </h5>
      </div>
      <div>
        <h5>
          {product.name.toUpperCase()}
          <span> ( {product.avgRating} ★) </span>
        </h5>
      </div>
      <div>
        <p className="price">
          {product.price}
          <span>$</span>
        </p>
      </div>
      <div>
        <h5>{product.qty}</h5>
      </div>
      <div>
        <p className="price">
          {product.price * product.qty}
          <span>$</span>
        </p>
      </div>
      <div>
        <button onClick={deleteProduct}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
