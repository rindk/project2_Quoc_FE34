import React from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

function ProductsList() {
  const url = "";
  const { t } = useTranslation();

  return (
    <div className="products__grid">
      <div className="products__grid--top">
        <div className="products__grid--show">
          <a href={url}>
            <i className="fas fa-th"></i>
          </a>
          <a href="products-row.html">
            <i className="fas fa-list"></i>
          </a>
        </div>
        <div className="products__grid--page">
          <a href={url}>
            <i className="fas fa-caret-left"></i>
          </a>
          <a href={url}>1</a>
          <a href={url}>2</a>
          <a href={url}>3</a>
          <a href={url}>4</a>
          <a href={url}>5</a>
          <a href={url}>
            <i className="fas fa-caret-right"></i>
          </a>
        </div>
      </div>
      <div className="products__grid--bot">
        <aside className="home-new__items">
          <div className="home-new__top">
            <p className="home-new__tag--none"></p>
            <img
              className="home-new__img"
              src="assets/images/products/1.png"
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
              src="assets/images/products/2.png"
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
              src="assets/images/products/3.png"
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
              src="assets/images/products/4.png"
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
              src="assets/images/products/5.png"
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
              src="assets/images/products/6.png"
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
              src="assets/images/products/7.png"
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
              src="assets/images/products/8.png"
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
              src="assets/images/products/9.png"
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
      </div>
    </div>
  );
}

export default ProductsList;
