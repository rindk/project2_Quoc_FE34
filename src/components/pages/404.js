import React from "react";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

function Error404() {
  // const { t } = useTranslation();
  return (
    <section className="error">
      <img
        className="error__bg"
        src="assets/images/404/error.png"
        alt="404 error"
      />
      {/* <div className="error__group">
        <img
          className="error__logo"
          src="assets/images/logo/logo-black.png"
          alt="logo"
        />
        <div className="error__link">
          <div>
            <Link to="/">{t("menu.home")}</Link>
            <i className="fas fa-caret-right"></i>
          </div>
          <div>
            <Link to="/contact">{t("meny.contact")}</Link>
            <i className="fas fa-caret-right"></i>
          </div>
          <form action="#" method="get">
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
            <input type="text" name="search" />
          </form>
        </div>
      </div> */}
    </section>
  );
}

export default Error404;
