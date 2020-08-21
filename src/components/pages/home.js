import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home() {
  const url = "";
  const { t } = useTranslation();

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
          <a className="home-new__left" href={url}>
            <i className="fas fa-arrow-left"></i>
          </a>
          <aside className="home-new__items">
            <div className="home-new__top">
              <p className="home-new__tag--sale">{t("products.tag.sale")}</p>
              <img
                className="home-new__img"
                src="assets/images/new-product/1.png"
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
              <p className="home-new__tag--new">{t("products.tag.new")}</p>
              <img
                className="home-new__img"
                src="assets/images/new-product/2.png"
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
              <p className="home-new__tag--hot">{t("products.tag.hot")}</p>
              <img
                className="home-new__img"
                src="assets/images/new-product/3.png"
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
              <img
                className="home-new__img"
                src="assets/images/new-product/4.png"
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
          <a className="home-new__right" href={url}>
            <i className="fas fa-arrow-right"></i>
          </a>
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
      <section className="home-blog">
        <div className="container home-blog__inner">
          <div className="home-blog__blog">
            <div className="section__center--title">
              <h1 className="section__center--header">{t("title.news&blog")}</h1>
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
                    {t("main.home.blog.passenger")}
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
                    {t("main.home.blog.passenger")}
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
