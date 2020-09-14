import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { addToCart } from "../commonFunction";

function ProductsList({ product, hasTag, slide, active }) {
  const { t } = useTranslation();

  return (
    <aside className={`home-new__items ${slide} ${active}`}>
      <div className="home-new__top">
        {hasTag ? (
          product.status === "" ? null : (
            <p className={`home-new__tag--${product.status}`}>
              {product.status}
            </p>
          )
        ) : null}
        <img className="home-new__img" src={product.img} alt="wine" />
        <div className="home-new__label">
          <div>
            <i className="fas fa-heart"></i>
            <span>{t("products.fav")}</span>
          </div>
          <div>
            <i className="fas fa-signal"></i>
            <span>{t("products.comp")}</span>
          </div>
          <Link to={`/product-detail/${product.id}`}>
            <i className="fas fa-compress-alt"></i>
          </Link>
        </div>
      </div>
      <div className="home-new__bot">
        <Link className="home-new__wine" to={`/product-detail/${product.id}`}>
          <h4>
            {product.name.toUpperCase()}
            <span> ( {product.avgRating} ★) </span>
          </h4>
        </Link>
        <p className="home-new__price price">
          {product.price}
          <span>$</span>
        </p>
        <div className="home-new__btn">
          <button className="btn" onClick={() => addToCart(Number(product.id), 1)}>
            {t("button.addToCart")}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default ProductsList;
