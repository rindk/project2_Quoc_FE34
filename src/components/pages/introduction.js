import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Intro() {
  const { t } = useTranslation();

  return (
    <main className="cart-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("menu.intro")}</p>
        </div>
      </div>
      <section className="intro">
        <div className="container">
          <div className="section__arrow--title">
            <h1 className="section__arrow--header">{t("title.intro")}</h1>
            <img
              className="section__arrow--icon"
              src="assets/images/decor/2.png"
              alt="icon"
            />
          </div>
          <div className="intro__inner">
            <div className="intro__img">
              <img src="assets/images/introduction/bg.jpg" alt="introduction" />
            </div>
            <div className="intro__content">
              <h3>{t("main.intro.header")}</h3>
              <p>{t("main.intro.content")}</p>
              <p>{t("main.intro.content")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Intro;
