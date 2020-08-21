import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/cartStorage";

function ProductItem({ product, hasTag }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <aside className="home-new__items">
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
        <Link
          className="home-new__wine"
          to={`/product-detail/${product.id}`}
        >
          <h4>{product.name.toUpperCase()}</h4>
        </Link>
        <p className="home-new__price price">
          {product.price}
          <span>$</span>
        </p>
        <div className="home-new__btn">
          <button className="btn" onClick={(id) => dispatch(addToCart(id))}>
            {t("button.addToCart")}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default ProductItem;
