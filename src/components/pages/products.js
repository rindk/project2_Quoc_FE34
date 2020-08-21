import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "./productsList";
import { fetchProductsList } from "../../redux/reducer/productsList";

function Products() {
  const url = "";
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList.value);

  useEffect(() => {
    dispatch(fetchProductsList(1));
  }, [dispatch]);

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
                <h1 className="section__arrow--header">
                  {t("title.products")}
                </h1>
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
              {productsList.map((elem, index) => (
                <ProductsList key={index} product={elem} hasTag={false}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
