import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Login() {
  const { t } = useTranslation();

  return (
    <main className="login-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("title.login")}</p>
        </div>
      </div>
      <section className="login">
        <div className="container">
          <div className="login__top">
            <div className="section__arrow--title">
              <h1 className="section__arrow--header">{t("title.login")}</h1>
              <img
                className="section__arrow--icon"
                src="assets/images/decor/2.png"
                alt="icon"
              />
            </div>
            <Link className="btn btn-big" to="/signup">
              {t("title.signup")}
            </Link>
            <i className="far fa-registered"></i>
          </div>
          <div className="login__bot">
            <h3>{t("main.login.header")}</h3>
            <p>{t("main.login.desc")}</p>
            <form className="login__form" action="#" method="post">
              <div className="login__form-row">
                <label htmlFor="login-email">Email *</label>
                <input id="login-email" type="email" name="email" />
              </div>
              <div className="login__form-row">
                <label htmlFor="login-pass">Password *</label>
                <input id="login-pass" type="password" name="password" />
              </div>
              <div className="login__form-row">
                <div>
                  <button>{t("main.login.forgotPass")}</button>
                </div>
              </div>
              <div className="login__form-row">
                <div>
                  <input className="btn" type="submit" value="ĐĂNG NHẬP" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
