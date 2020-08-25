import React from "react";
import ProductsList from "./products-list";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Products() {
  const url = "";
  const { t } = useTranslation();

  return (
    <main className="products-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("menu.products")}</p>
        </div>
      </div>
      <div className="container">
        <img
          className="products__banner"
          src="assets/images/products/banner.jpg"
          alt=""
        />
        <input className="products-btn" id="products-btn" type="checkbox" />
        <label className="products-label" htmlFor="products-btn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="products__inner">
          <div className="products__list">
            <div className="products__list-items">
              <div className="section__arrow--title">
  <h1 className="section__arrow--header">{t("title.products")}</h1>
                <img
                  className="section__arrow--icon"
                  src="assets/images/decor/2.png"
                  alt="icon"
                />
              </div>
              <div className="products__list--all">
                <div className="products__list--all-wrapper">
                  <h5>RƯỢU NGOẠI</h5>
                  <ul className="products__list--ul">
                    <li>
                      <a href={url}>
                        Rượu Chivas<span>(26)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="products__list--all-wrapper">
                  <h5>RƯỢU VANG</h5>
                  <ul className="products__list--ul">
                    <li>
                      <a href={url}>
                        Rượu Vang Pháp<span>(44)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="products__list-items">
              <div className="section__arrow--title">
                <h1 className="section__arrow--header">SO SÁNH SẢN PHẨM</h1>
                <img
                  className="section__arrow--icon"
                  src="assets/images/decor/2.png"
                  alt="icon"
                />
              </div>
              <div className="products__list--compare">
                <p>Bạn chưa có sản phẩm nào để so sánh</p>
              </div>
            </div>
            <div className="products__list-items">
              <div className="section__arrow--title">
                <h1 className="section__arrow--header">TAG SẢN PHẨM</h1>
                <img
                  className="section__arrow--icon"
                  src="assets/images/decor/2.png"
                  alt="icon"
                />
              </div>
              <div className="products__list--tag">
                <a href={url}>Đồng hồ</a>
                <a href={url}>Túi</a>
                <a href={url}>Phụ kiện</a>
                <a href={url}>Giày</a>
                <a href={url}>Sandal</a>
                <a href={url}>Áo sơ mi</a>
                <a href={url}>Nước hoa</a>
                <a href={url}>Trẻ em</a>
                <a href={url}>Thời trang nữ</a>
              </div>
            </div>
            <img
              className="products__list--img"
              src="assets/images/products/ads.jpg"
              alt=""
            />
          </div>
          <ProductsList />
        </div>
      </div>
    </main>
  );
}

export default Products;
