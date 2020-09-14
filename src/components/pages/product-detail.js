import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../../redux/reducer/productItem";
import { fetchProductsList } from "../../redux/reducer/productsList";
import { openModal, addRating, clickSlider } from "../commonFunction";
import ProductsList from "./productsList";
import { addToCart } from "../commonFunction";

function ProductDetail() {
  const url = "";
  const [qty, setQty] = useState(1);
  const { t } = useTranslation();
  const { productID } = useParams();
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.productItem.value);
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const token = useSelector((state) => state.token.value);
  const productsList = useSelector((state) => state.productsList.value);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchProductItem(productID));
  }, [dispatch, productID]);

  useEffect(() => {
    const value =
      token === null
        ? undefined
        : token[0].viewed.reduce((final, el) => (final += `id=${el}&`), "");
    if (value === undefined) return;
    dispatch(fetchProductsList({ value: value, page: 1 }));
  }, [dispatch, token]);

  // Adjust quantity
  const handleQty = (e) => {
    const data = e.target.value;
    if (data === "-" && qty === 1) return;
    if (data === "-") return setQty(qty - 1);
    if (data === "+") return setQty(qty + 1);
  };

  // handle rating btn
  const handleRating = (e) => {
    const point = Number(e.target.dataset.star);
    if (!loginStatus) return openModal();
    const isRated = productItem.rating.findIndex(
      (el) => el.userID === token[0].id
    );
    addRating(token[0].id, productItem, point, isRated);
  };

  // handle review btn
  const addReview = () => {
    const comment = document.querySelector(".pdDetail-cmt");
    comment.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof Number(productID));
    addToCart(Number(productID), qty);
    setMessage(`Bạn đã thêm ${productItem.name} vào giỏ hàng`);
    setTimeout(() => setMessage(""), 1500);
  };

  return (
    <main className="pdDetail-main">
      {message !== "" ? (
        <div className="products__popup">
          <div>
            <i className="fas fa-check"></i>
          </div>
          {message}
        </div>
      ) : null}
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <Link to="/products">{t("menu.products")}</Link>
          <span>/</span>
          <p>WINE</p>
        </div>
      </div>
      <section className="pdDetail-detail">
        <div className="container pdDetail-detail__inner">
          <div className="pdDetail-detail__img-wrapper">
            <div className="pdDetail-detail__img-big">
              <img src={`${productItem.img}`} alt="" />
            </div>
          </div>
          <div className="pdDetail-detail__price-wrapper">
            <div className="section__arrow--title">
              <h1 className="section__arrow--header">
                {productItem.name}
                <span>
                  {" "}
                  ({" "}
                  {productItem.rating.length === 0
                    ? 0
                    : (
                        productItem.rating.reduce(
                          (star, el) => (star += el.point),
                          0
                        ) / productItem.rating.length
                      ).toFixed(1)}{" "}
                  ★ )
                </span>
              </h1>
              <img
                className="section__arrow--icon"
                src="../assets/images/decor/2.png"
                alt="icon"
              />
            </div>
            <div className="price">
              {productItem.price}
              <span>$</span>
            </div>
            <div className="pdDetail-detail__rv">
              <div className="pdDetail-detail__rv--star">
                {Array(5)
                  .fill(null)
                  .map((el, i) => (
                    <span key={5 - i} data-star={5 - i} onClick={handleRating}>
                      ☆
                    </span>
                  ))}
              </div>
              <button className="pdDetail-detail__rv--link">
                {productItem.rating.length}
                {productItem.rating.length <= 1 ? " Review" : " Reviews"}
              </button>
              <span>|</span>
              <button className="pdDetail-detail__rv--cmt" onClick={addReview}>
                Add Your Review
              </button>
            </div>
            <form className="pdDetail-detail__form" onSubmit={handleSubmit}>
              <div className="pdDetail-detail__color">
                <label htmlFor="color">{t("products.color")}</label>
                <div>
                  <input
                    id="color"
                    type="radio"
                    name="color"
                    value="champagne"
                    defaultChecked="defaultChecked"
                  />
                  <span className="champagne"></span>
                  <input id="color" type="radio" name="color" value="black" />
                  <span className="black"></span>
                  <input
                    id="color"
                    type="radio"
                    name="color"
                    value="bordeaux"
                  />
                  <span className="bordeaux"></span>
                </div>
              </div>
              <div className="pdDetail-detail__dimension">
                <label htmlFor="dimension">{t("products.dimen.header")}</label>
                <select id="dimension" name="dimension">
                  <option value="big">{t("products.dimen.lg")}</option>
                  <option value="medium">{t("products.dimen.md")}</option>
                  <option value="small">{t("products.dimen.sm")}</option>
                </select>
              </div>
              <div className="pdDetail-detail__quantity">
                <label htmlFor="quantity">{t("products.qty")}</label>
                <div>
                  <input
                    className="number"
                    type="button"
                    value="-"
                    data-field="quantity"
                    onClick={handleQty}
                  />
                  <input
                    className="number"
                    id="quantity"
                    type="number"
                    name="quantity"
                    step="1"
                    min="1"
                    value={qty}
                    readOnly
                  />
                  <input
                    className="number"
                    type="button"
                    value="+"
                    data-field="quantity"
                    onClick={handleQty}
                  />
                </div>
                <button
                  className="btn"
                  onClick={() => addToCart(productID, qty)}
                >
                  {t("button.addToCart")}
                </button>
              </div>
            </form>
            <div className="pdDetail-detail__fav">
              <button href={url}>
                <i className="fas fa-heart"></i>
                <span>{t("products.fav")}</span>
              </button>
              <button href={url}>
                <i className="fas fa-signal"></i>
                <span>{t("products.comp")}</span>
              </button>
            </div>
            <div className="pdDetail-detail__des">
              {t("products.desc")}
              <p>{t("products.content")}</p>
            </div>
            <div
              className="fb-share-button"
              data-href={`http://localhost:4000/productdetail/${productID}`}
              data-layout="button"
              data-size="large"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A4000%2Fproduct-detail%2F${productID}&amp;src=sdkpreparse`}
                className="fb-xfbml-parse-ignore"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="section__center--title">
        <h1 className="section__center--header">{t("title.viewed")}</h1>
        <img
          className="section__center--icon"
          src="../assets/images/decor/1.png"
          alt="icon"
        />
      </div>
      <section className="home-new">
        <div className="container home-new__inner">
          {productsList.length === 0 ? (
            <span style={{ fontStyle: "italic" }}>
              Bạn cần đăng nhập để xem sản phẩm
            </span>
          ) : (
            <>
              <button
                className="home-new__left"
                onClick={() => clickSlider("hot", "left")}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button
                className="home-new__right"
                onClick={() => clickSlider("hot", "right")}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
              <div id="slider_hot" className="slider">
                {productsList.map((elem, index) => (
                  <ProductsList
                    key={index}
                    product={elem}
                    hasTag={false}
                    slide={"slide"}
                    active={index === 0 ? "active" : ""}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="pdDetail-cmt container">
        <h3>BÌNH LUẬN</h3>
        <div className="pdDetail-cmt__inner">
          <div
            className="fb-comments"
            data-href={`http://localhost:4000/product-detail/${productID}`}
            data-numposts="5"
            data-width=""
          ></div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
