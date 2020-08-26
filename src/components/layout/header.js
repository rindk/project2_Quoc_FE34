import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateToken } from "../../redux/reducer/token";
import { checkLoginStt } from "../../redux/reducer/loginStatus";

function Header() {
  const { t } = useTranslation();
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const signout = () => {
    localStorage.removeItem("token");
    dispatch(updateToken(null));
    dispatch(checkLoginStt());
    return (window.location.href = "/");
  };

  return (
    <header className="home-header">
      <div className="home-header__top">
        <img
          className="home-header__top--bg"
          src="http://localhost:4000/assets/images/banner/banner.png"
          alt="background"
        />
        <img
          className="home-header__top--text"
          src="http://localhost:4000/assets/images/banner/text.png"
          alt="header banner"
        />
      </div>
      <div className="home-header__wrapper">
        <div className="container home-header__inner">
          <div className="home-header__user">
            <i className="fas fa-bars"></i>
            <ul className="home-header__user--list">
              {loginStatus ? (
                <>
                  <li className="home-header__user--items user">
                    {token[0].firstName.toUpperCase() +
                      " " +
                      token[0].lastName.toUpperCase()}
                  </li>
                  <span>-</span>
                  <li className="home-header__user--items">
                    <Link to="/profile" className="home-header__user--link">
                      {t("header.profile")}
                    </Link>
                  </li>
                  <span>-</span>
                  <li className="home-header__user--items">
                    <Link className="home-header__user--link" to="/cart">
                      {t("header.cart")}
                    </Link>
                  </li>
                  <span>-</span>
                  <li className="home-header__user--items" onClick={signout}>
                    <p className="home-header__user--link">
                      {t("header.signout")}
                    </p>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
