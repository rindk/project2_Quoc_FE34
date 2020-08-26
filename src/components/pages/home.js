import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "./productsList";
import { fetchProductsHot } from "../../redux/reducer/productsHot";
import { fetchProductsTopSale } from "../../redux/reducer/productsTopSale";
import { clickSlider } from "../commonFunction";

function Home() {
  const url = "";
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productsHot = useSelector((state) => state.productsHot.value);
  const productsTopSale = useSelector((state) => state.productsTopSale.value);

  // Fetch hot products and top sale products
  useEffect(() => {
    dispatch(fetchProductsHot());
    dispatch(fetchProductsTopSale());
  }, [dispatch]);

  return (
    <main className="home-main">
      <div className="section__center--title">
        <h1 className="section__center--header">{t("title.intro")}</h1>
        <img
          className="section__center--icon"
          src="assets/images/decor/1.png"
          alt="icon"
        />
      </div>
      <section className="home-intro">
        <div className="container">
          <div className="home-intro__inner">
            <p className="home-intro__text">{t("main.home.intro")}</p>
            <Link to="/introduction" className="btn">
              {t("button.intro")}
            </Link>
          </div>
        </div>
      </section>
      <section className="home-hotdeal">
        <div className="container home-hotdeal__inner">
          {" "}
          <img
            className="home-hotdeal__bg"
            src="assets/images/hot-deal/bg.png"
            alt="bg"
          />
          <div className="home-hotdeal__space"></div>
          <div className="home-hotdeal__deal">
            <div className="home-hotdeal__deal--img">
              <p className="home-hotdeal__deal--tag">
                {t("products.tag.sale")}
              </p>
              <img src="assets/images/hot-deal/wine.png" alt="wine" />
            </div>
            <div className="home-hotdeal__deal--detail">
              <div className="section__arrow--title">
                <h1 className="section__arrow--header">RƯỢU NHO NĂM 1987</h1>
                <img
                  className="section__arrow--icon"
                  src="assets/images/decor/2.png"
                  alt="icon"
                />
              </div>
              <div className="home-hotdeal__price">
                330.000<span>đ</span>
              </div>
              <a className="btn" href={url}>
                {t("button.addToCart")}
              </a>
              <p className="home-hotdeal__text">
                {t("main.home.hotdeal.content")}
              </p>
              <div className="home-hotdeal__date">
                <p className="price">
                  334<span>{t("main.home.hotdeal.date")}</span>
                </p>
                <p className="price">
                  26<span>{t("main.home.hotdeal.hour")}</span>
                </p>
                <p className="price">
                  60<span>{t("main.home.hotdeal.min")}</span>
                </p>
                <p className="price">
                  15<span>{t("main.home.hotdeal.sec")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section__center--title">
        <h1 className="section__center--header">{t("title.new")}</h1>
        <img
          className="section__center--icon"
          src="assets/images/decor/1.png"
          alt="icon"
        />
      </div>
      <section className="home-new">
        <div className="container home-new__inner">
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
            {productsHot.map((elem, index) => (
              <ProductsList
                key={index}
                product={elem}
                hasTag={true}
                slide={"slide"}
                active={index === 0 ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="home-gallery">
        <div className="home-gallery__inner">
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">{t("main.home.wine")}</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/1.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">RƯỢU</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/2.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">{t("main.home.wine")}</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/3.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">RƯỢU</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/4.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">{t("main.home.wine")}</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/5.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">RƯỢU</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/6.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">{t("main.home.wine")}</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/7.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
          <a className="home-gallery__link" href={url}>
            <p className="home-gallery__year">1987</p>
            <p className="home-gallery__text">RƯỢU</p>
            <img
              className="home-galley__img"
              src="assets/images/gallery/8.png"
              alt="gallery"
            />
            <div className="home-gallery__top"></div>
            <div className="home-gallery__left"></div>
            <div className="home-gallery__bottom"></div>
            <div className="home-gallery__right"></div>
          </a>
        </div>
      </section>
      <div className="section__center--title">
        <h1 className="section__center--header">SẢN PHẨM BÁN CHẠY</h1>
        <img
          className="section__center--icon"
          src="assets/images/decor/1.png"
          alt="icon"
        />
      </div>
      <section className="home-new">
        <div className="container home-new__inner">
          <button
            className="home-new__left"
            onClick={() => clickSlider("top", "left")}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            className="home-new__right"
            onClick={() => clickSlider("top", "right")}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
          <div id="slider_top" className="slider">
            {productsTopSale.map((elem, index) => (
              <ProductsList
                key={index}
                product={elem}
                hasTag={false}
                slide={"slide"}
                active={index === 0 ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="home-blog">
        <div className="container home-blog__inner">
          <div className="home-blog__blog">
            <div className="section__center--title">
              <h1 className="section__center--header">
                {t("title.news&blog")}
              </h1>
              <img
                className="section__center--icon"
                src="assets/images/decor/1.png"
                alt="icon"
              />
            </div>
            <div className="home-blog__blog-wrapper">
              <aside className="home-blog__post">
                <a className="home-blog__link" href={url}>
                  <div className="home-blog__img">
                    <img src="assets/images/blog/1.png" alt="blog" />
                    <span></span>
                    <i className="fas fa-link"></i>
                  </div>
                  <h4 className="home-blog__header">
                    {t("main.home.blog.header")}
                  </h4>
                </a>
                <div className="home-blog__des">
                  Đăng bởi <a href={url}>Giangle</a> |{" "}
                  <a href={url}>30/06/2015</a>| <a href={url}>0 bình luận</a>
                </div>
                <p className="home-blog__content">
                  {t("main.home.blog.content")}
                  <a href={url}>Read more</a>
                </p>
              </aside>
              <aside className="home-blog__post">
                <a className="home-blog__link" href={url}>
                  <div className="home-blog__img">
                    <img src="assets/images/blog/2.png" alt="blog" />
                    <span></span>
                    <i className="fas fa-link"></i>
                  </div>
                  <h4 className="home-blog__header">
                    {t("main.home.blog.header")}
                  </h4>
                </a>
                <div className="home-blog__des">
                  Đăng bởi <a href={url}>Giangle</a> |{" "}
                  <a href={url}>30/06/2015</a>| <a href={url}>0 bình luận</a>
                </div>
                <p className="home-blog__content">
                  {t("main.home.blog.content")}
                  <a href={url}>Read more</a>
                </p>
              </aside>
            </div>
          </div>
          <div className="home-blog__pass">
            <div className="section__center--title">
              <h1 className="section__center--header">
                {t("title.passenger")}
              </h1>
              <img
                className="section__center--icon"
                src="assets/images/decor/1.png"
                alt="icon"
              />
            </div>
            <div className="home-blog__pass-wrapper">
              <div className="home-blog__icon">
                <i className="fas fa-quote-right"></i>
              </div>
              <input
                className="home-blog__input"
                id="home-blog-quote1"
                type="radio"
                name="quote"
                defaultChecked
              />
              <input
                className="home-blog__input"
                id="home-blog-quote2"
                type="radio"
                name="quote"
              />
              <input
                className="home-blog__input"
                id="home-blog-quote3"
                type="radio"
                name="quote"
              />
              <div className="home-blog__quote">
                <div className="home-blog__quote--1">
                  <div className="home-blog__quote--content">
                    {t("main.home.passenger")}
                    <a href={url}>Read more</a>
                  </div>
                  <div className="home-blog__ava">
                    <img src="assets/images/passenger/1.png" alt="passenger" />
                  </div>
                  <div className="home-blog__name">GIANG LTTTTTT</div>
                  <div className="home-blog__job">Graphic desgin</div>
                </div>
                <div className="home-blog__quote--2">
                  <div className="home-blog__quote--content">
                  {t("main.home.passenger")}
                    <a href={url}>Read more</a>
                  </div>
                  <div className="home-blog__ava">
                    <img src="assets/images/passenger/1.png" alt="passenger" />
                  </div>
                  <div className="home-blog__name">GIANG LT</div>
                  <div className="home-blog__job">Graphic desginnnnnn</div>
                </div>
                <div className="home-blog__quote--3">
                  <div className="home-blog__quote--content">
                  {t("main.home.passenger")}
                    <a href={url}>Read more</a>
                  </div>
                  <div className="home-blog__ava">
                    <img src="assets/images/passenger/1.png" alt="passenger" />
                  </div>
                  <div className="home-blog__name">GIANG LLLLLLT</div>
                  <div className="home-blog__job">Graphic desgin</div>
                </div>
              </div>
              <div className="home-blog__dot">
                <label htmlFor="home-blog-quote1">
                  <span></span>
                </label>
                <label htmlFor="home-blog-quote2">
                  <span></span>
                </label>
                <label htmlFor="home-blog-quote3">
                  <span></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
