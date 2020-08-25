import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Signup() {
  const url = "";
  const { t } = useTranslation();

  return (
    <main className="register-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("title.signup")}</p>
        </div>
      </div>
      <section className="register">
        <div className="container">
          <div className="register__top">
            <div className="section__arrow--title">
              <h1 className="section__arrow--header">{t("title.signup")}</h1>
              <img
                className="section__arrow--icon"
                src="assets/images/decor/2.png"
                alt="icon"
              />
            </div>
            <Link className="btn btn-big" to="/login">
              {t("title.login")}
            </Link>
            <i className="fas fa-sign-in-alt"></i>
          </div>
          <form className="register__form" action="#" method="post">
            <h3>{t("main.signup.info")}</h3>
            <div className="register__form-row">
              <label htmlFor="register-fname">{t("main.signup.fname")}</label>
              <input id="register-fname" type="text" name="fName" />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-lname">{t("main.signup.lname")}</label>
              <input id="register-lname" type="text" name="lName" />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-email">Email *</label>
              <input id="register-email" type="email" name="email" />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-pass">Password *</label>
              <input id="register-pass" type="password" name="password" />
            </div>
            <div className="register__form-row">
              <div>
                <input
                  id="register-check"
                  type="checkbox"
                  name="checkbox"
                  defaultChecked
                />
                <label htmlFor="register-check">
                  {t("main.signup.checkbox")}
                </label>
              </div>
            </div>
            <h3>{t("main.signup.infoLogin")}</h3>
            <div className="register__form-row">
              <label htmlFor="register-password">{t("main.signup.pass")}</label>
              <input id="register-password" type="password" name="password" />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-passcf">
                {t("main.signup.passConfirm")}
              </label>
              <input
                id="register-passcf"
                type="password"
                name="password-confirm"
              />
            </div>
            <div className="register__form-row">
              <div>
                <input className="btn" type="submit" value={t("button.send")} />
                <a href={url} className="btn">
                  {t("button.back")}
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Signup;
