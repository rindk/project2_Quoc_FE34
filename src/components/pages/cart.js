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
  const [dltMessage, setDltMessage] = useState("");
  const [dltPopup, setDltPopup] = useState(false);

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
  // Cancel Delete
  const cancelDelete = () => {
    setDltPopup(false);
  };
  // pre-handle DeleteAll
  const handleDeleteAll = () => {
    if (productsCart.length === 0) {
      setDltMessage("Bạn không có sản phẩm nào");
      setDltPopup(true);
      return setTimeout(() => setDltPopup(false), 2000);
    } else {
      setDltPopup(true);
      setDltMessage("Bạn có chắc chắn muốn xóa tất cả sản phẩm không?");
    }
  };
  //delete all products
  const deleteAllProducts = () => {
    setDltPopup(false);
    const url = process.env.REACT_APP_SV_PROFILE + `/${token[0].id}`;
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
      {dltPopup ? (
        <DeletePopup
          header={dltMessage}
          cancelDelete={cancelDelete}
          deleteAllProducts={deleteAllProducts}
        />
      ) : null}
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
            <button className="btn" onClick={handleDeleteAll}>
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
  const [dltMessage, setDltMessage] = useState("");
  const [dltPopup, setDltPopup] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);

  // pre-handle Delete
  const handleDelete = (name) => {
    setDltMessage(`Bạn có chắc chắn muốn xóa sản phẩm ${name}?`);
    setDltPopup(true);
  };
  // Cancel Delete
  const cancelDelete = () => {
    setDltPopup(false);
  };

  const deleteProduct = async () => {
    const url = process.env.REACT_APP_SV_PROFILE + `/${token[0].id}`;
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
    <>
      {dltPopup ? (
        <DeletePopup
          header={dltMessage}
          cancelDelete={cancelDelete}
          deleteAllProducts={deleteProduct}
        />
      ) : null}
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
          <button onClick={() => handleDelete(product.name)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </>
  );
};

const DeletePopup = ({ header, cancelDelete, deleteAllProducts }) => {
  return (
    <div className="cart__delete">
      {header === "Bạn không có sản phẩm nào" ? (
        <h3 style={{ margin: "0" }}>{header}</h3>
      ) : (
        <>
          <h3>{header}</h3>
          <div>
            <button className="btn" onClick={deleteAllProducts}>
              Đồng ý
            </button>
            <button className="btn" onClick={cancelDelete}>
              Hủy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
