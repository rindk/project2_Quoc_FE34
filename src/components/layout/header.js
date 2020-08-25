import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const url = "";
  const { t } = useTranslation();

  return (
    <header className="home-header">
      <div className="home-header__top">
        <img
          className="home-header__top--bg"
          src="assets/images/banner/banner.png"
          alt="background"
        />
        <img
          className="home-header__top--text"
          src="assets/images/banner/text.png"
          alt="header banner"
        />
      </div>
      <div className="home-header__wrapper">
        <div className="container home-header__inner">
          <div className="home-header__user">
            <i className="fas fa-bars"></i>
            <ul className="home-header__user--list">
              <li className="home-header__user--items">
                <a className="home-header__user--link" href={url}>
                  {t("header.profile")}
                </a>
              </li>
              <span>-</span>
              <li className="home-header__user--items">
                <Link className="home-header__user--link" to="/cart">
                  {t("header.cart")}
                </Link>
              </li>
              <span>-</span>
              <li className="home-header__user--items">
                <Link className="home-header__user--link" to="/login">
                  {t("header.login")}
                </Link>
              </li>
              <span>-</span>
              <li className="home-header__user--items">
                <Link className="home-header__user--link" to="/signup">
                  {t("header.signup")}
                </Link>
              </li>
              <span>-</span>
            </ul>
          </div>
          <div className="home-header__search">
            <input type="text" placeholder={t("header.search")} />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
