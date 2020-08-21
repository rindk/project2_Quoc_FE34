import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../../redux/reducer/productItem";

function ProductDetail() {
  const url = "";
  const [qty, setQty] = useState(1);
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.productItem.value);

  useEffect(() => {
    dispatch(fetchProductItem(id));
  }, [dispatch, id]);

  const handleQty = (e) => {
    const data = e.target.value;
    if (data === "-") return setQty(qty - 1);
    if (data === "+") return setQty(qty + 1);
  };

  const handleRating = (e) => {
    console.log(typeof e.target.dataset.star);
  };

  return (
    <main className="pdDetail-main">
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
              <h1 className="section__arrow--header">{productItem.name}</h1>
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
                    <span data-star={5 - i} onClick={handleRating}>
                      ☆
                    </span>
                  ))}
              </div>
              <button className="pdDetail-detail__rv--link">1 Review(S)</button>
              <span>|</span>
              <button className="pdDetail-detail__rv--cmt">
                Add Your Review
              </button>
            </div>
            <form className="pdDetail-detail__form" action="#">
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
                  />
                  <input
                    className="number"
                    type="button"
                    value="+"
                    data-field="quantity"
                    onClick={handleQty}
                  />
                </div>
                <input
                  className="btn"
                  type="submit"
                  value={t("button.addToCart")}
                />
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
          <a className="home-new__left" href={url}>
            <i className="fas fa-arrow-left"></i>
          </a>
          <aside className="home-new__items">
            <div className="home-new__top">
              <p className="home-new__tag--none"></p>
              <img
                className="home-new__img"
                src="assets/images/top-sales/1.png"
                alt="wine"
              />
              <div className="home-new__label">
                <a href={url}>
                  <i className="fas fa-heart"></i>
                  <span>{t("products.fav")}</span>
                </a>
                <a href={url}>
                  <i className="fas fa-signal"></i>
                  <span>{t("products.comp")}</span>
                </a>
                <a href={url}>
                  {" "}
                  <i className="fas fa-compress-alt"></i>
                </a>
              </div>
            </div>
            <div className="home-new__bot">
              <a className="home-new__wine" href={url}>
                <h4>RƯỢU VANG ĐÀ LẠT</h4>
              </a>
              <p className="home-new__price price">
                370.000<span>đ</span>
              </p>
              <span>-</span>
              <p className="price">
                450.000<span>đ</span>
              </p>
              <div className="home-new__btn">
                <a href={url} className="btn">
                  {t("button.addToCart")}
                </a>
              </div>
            </div>
          </aside>
          <aside className="home-new__items">
            <div className="home-new__top">
              <p className="home-new__tag--none"></p>
              <img
                className="home-new__img"
                src="assets/images/top-sales/2.png"
                alt="wine"
              />
              <div className="home-new__label">
                <a href={url}>
                  <i className="fas fa-heart"></i>
                  <span>{t("products.fav")}</span>
                </a>
                <a href={url}>
                  <i className="fas fa-signal"></i>
                  <span>{t("products.comp")}</span>
                </a>
                <a href={url}>
                  {" "}
                  <i className="fas fa-compress-alt"></i>
                </a>
              </div>
            </div>
            <div className="home-new__bot">
              <a className="home-new__wine" href={url}>
                <h4>RƯỢU VANG ĐÀ LẠT</h4>
              </a>
              <p className="home-new__price price">
                370.000<span>đ</span>
              </p>
              <span>-</span>
              <p className="price">
                450.000<span>đ</span>
              </p>
              <div className="home-new__btn">
                <a href={url} className="btn">
                  {t("button.addToCart")}
                </a>
              </div>
            </div>
          </aside>
          <aside className="home-new__items">
            <div className="home-new__top">
              <p className="home-new__tag--none"></p>
              <img
                className="home-new__img"
                src="assets/images/top-sales/3.png"
                alt="wine"
              />
              <div className="home-new__label">
                <a href={url}>
                  <i className="fas fa-heart"></i>
                  <span>{t("products.fav")}</span>
                </a>
                <a href={url}>
                  <i className="fas fa-signal"></i>
                  <span>{t("products.comp")}</span>
                </a>
                <a href={url}>
                  {" "}
                  <i className="fas fa-compress-alt"></i>
                </a>
              </div>
            </div>
            <div className="home-new__bot">
              <a className="home-new__wine" href={url}>
                <h4>RƯỢU VANG ĐÀ LẠT</h4>
              </a>
              <p className="home-new__price price">
                370.000<span>đ</span>
              </p>
              <span>-</span>
              <p className="price">
                450.000<span>đ</span>
              </p>
              <div className="home-new__btn">
                <a href={url} className="btn">
                  {t("button.addToCart")}
                </a>
              </div>
            </div>
          </aside>
          <aside className="home-new__items">
            <div className="home-new__top">
              <p className="home-new__tag--none"></p>
              <img
                className="home-new__img"
                src="assets/images/top-sales/4.png"
                alt="wine"
              />
              <div className="home-new__label">
                <a href={url}>
                  <i className="fas fa-heart"></i>
                  <span>{t("products.fav")}</span>
                </a>
                <a href={url}>
                  <i className="fas fa-signal"></i>
                  <span>{t("products.comp")}</span>
                </a>
                <a href={url}>
                  {" "}
                  <i className="fas fa-compress-alt"></i>
                </a>
              </div>
            </div>
            <div className="home-new__bot">
              <a className="home-new__wine" href={url}>
                <h4>RƯỢU VANG ĐÀ LẠT</h4>
              </a>
              <p className="home-new__price price">
                370.000<span>đ</span>
              </p>
              <span>-</span>
              <p className="price">
                450.000<span>đ</span>
              </p>
              <div className="home-new__btn">
                <a href={url} className="btn">
                  {t("button.addToCart")}
                </a>
              </div>
            </div>
          </aside>
          <a className="home-new__right" href={url}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
