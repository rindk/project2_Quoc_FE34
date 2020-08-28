import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "./productsList";
import { fetchProductsList } from "../../redux/reducer/productsList";
import { setQueryParams } from "../../redux/reducer/queryParams";

function Products() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList.value);
  const queryParams = useSelector((state) => state.queryParams);
  const [search, setSearch] = useState("");

  // // Loading products
  useEffect(() => {
    dispatch(fetchProductsList(queryParams));
  }, [dispatch, queryParams]);

  // Filter products
  const filterProducts = (value) => {
    dispatch(setQueryParams(value));
  };

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
            {queryParams.value !== "all" ? (
              <div
                className="products__list-clear"
                onClick={() => filterProducts({ value: "all", page: 1 })}
              >
                <i className="fas fa-eraser"></i>
                <span>Clear filter</span>
              </div>
            ) : null}
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
                  <h5>{t("products.type.red")}</h5>
                  <ul className="products__list--ul">
                    {["Syrah", "Zinfandel", "Merlot"].map((el, index) => (
                      <li
                        key={index}
                        className={
                          queryParams.value === `type=${el}` ? "active" : ""
                        }
                        onClick={() =>
                          filterProducts({ value: `type=${el}`, page: 1 })
                        }
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="products__list--all-wrapper">
                  <h5>{t("products.type.white")}</h5>
                  <ul className="products__list--ul">
                    {["Chardonnay", "Riesling", "Pinot Grigio"].map(
                      (el, index) => (
                        <li
                          key={index}
                          className={
                            queryParams.value === `type=${el}` ? "active" : ""
                          }
                          onClick={() =>
                            filterProducts({ value: `type=${el}`, page: 1 })
                          }
                        >
                          {el}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="products__list-items">
              <div className="section__arrow--title">
                <h1 className="section__arrow--header">{t("title.price")}</h1>
                <img
                  className="section__arrow--icon"
                  src="assets/images/decor/2.png"
                  alt="icon"
                />
              </div>
              <div className="products__list--all">
                <ul className="products__list--ul">
                  {[
                    { first: 0, second: 30 },
                    { first: 30, second: 40 },
                    { first: 40, second: 50 },
                    { first: 50, second: 60 },
                  ].map((el, index) => (
                    <li
                      key={index}
                      className={
                        queryParams.value ===
                        `price_gte=${el.first}&price_lte=${el.second}`
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        filterProducts({
                          value: `price_gte=${el.first}&price_lte=${el.second}`,
                          page: 1,
                        })
                      }
                    >
                      {`$${el.first} - $${el.second}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="products__list-items">
              <div className="section__arrow--title">
                <h1 className="section__arrow--header">RATING</h1>
                <img
                  className="section__arrow--icon"
                  src="assets/images/decor/2.png"
                  alt="icon"
                />
              </div>
              <div className="products__list--all">
                <ul className="products__list--ul">
                  {[5, 4, 3, 2, 1].map((el, index) => (
                    <li
                      key={index}
                      className={
                        queryParams.value === `avgRating=${el}` ? "active" : ""
                      }
                      onClick={() =>
                        filterProducts({ value: `avgRating=${el}`, page: 1 })
                      }
                    >
                      {el}
                      <span>★</span>
                    </li>
                  ))}
                </ul>
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
              <div className="home-header__search">
                <input
                  type="text"
                  placeholder={t("header.search")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={() =>
                    filterProducts({ value: `name_like=${search}`, page: 1 })
                  }
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="products__grid--page">
                {[1, 2, 3].map((elem, i) => (
                  <button
                    key={i}
                    className={elem === queryParams.page ? "active" : ""}
                    onClick={() =>
                      filterProducts({ value: queryParams.value, page: elem })
                    }
                  >
                    {elem}
                  </button>
                ))}
              </div>
            </div>
            <div className="products__grid--bot">
              {productsList.length === 0 ? (
                <div>Không thể tìm thấy sản phẩm</div>
              ) : (
                productsList.map((elem, index) => (
                  <ProductsList
                    key={index}
                    product={elem}
                    hasTag={false}
                    slide={""}
                    active={""}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
