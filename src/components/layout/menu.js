import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Menu() {
  const { t } = useTranslation();
  return (
    <section className="menu">
      <div className="container menu__inner">
        <Link to="/" className="menu__logo">
          <img src="http://localhost:4000/assets/images/logo/logo.png" alt="Logo" />
        </Link>
        <div className="menu__nav">
          <div className="menu__nav--inner">
            <i className="fas fa-bars"> </i>
            <ul className="menu__nav--list">
              <li className="menu__nav--items">
                <Link to="/" className="menu__nav--link">
                  {t("menu.home")}
                </Link>
              </li>
              <li className="menu__nav--items">
                <Link to="/introduction" className="menu__nav--link">
                  {t("menu.intro")}
                </Link>
              </li>
              <li className="menu__nav--items">
                <Link to="/products" className="menu__nav--link">
                  {t("menu.products")}
                </Link>
              </li>
              <li className="menu__nav--items">
                <Link to="/contact" className="menu__nav--link">
                  {t("menu.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
