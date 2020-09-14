import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { closeModal, validateUser } from "../commonFunction";

function Signup() {
  const { t } = useTranslation();
  const [signupMess, setSignupMess] = useState("");

  // Close Modal after render
  useEffect(() => closeModal(), []);

  // handle Input
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    passwordCf: "",
  });
  const handleInput = (e) => {
    const input = e.target;
    setUser({ ...user, [input.name]: input.value });
  };
  // Sign in Submit
  const signupSubmit = (e) => {
    e.preventDefault();
    const isValid =
      user.password === user.passwordCf
        ? validateUser(user)
        : "Mật khẩu không trùng nhau";
    if (isValid !== "ok") return setSignupMess(isValid);
    if (isValid === "ok") signUpNew();
  };
  const signUpNew = () => {
    const data = {
      type: "user",
      firstName: user.fname,
      lastName: user.lname,
      email: user.email,
      password: user.password,
      address: "",
      city: "",
      phone: "",
      cart: [],
      view: [],
    };
    fetch(process.env.REACT_APP_SV_USERS, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((message) =>
        typeof message === "string"
          ? setSignupMess(message)
          : setSignupMess("Bạn đã đăng ký thành công")
      );
  };
  useEffect(() => {
    if (signupMess === "Bạn đã đăng ký thành công")
      setTimeout(() => (window.location.href = "/login"), 1000);
  }, [signupMess]);
  
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
          <form
            className="register__form"
            onSubmit={signupSubmit}
            method="post"
          >
            <h3>{t("main.signup.info")}</h3>
            {signupMess === "" ? null : (
              <p style={{ color: "red", marginBottom: "30px" }}>
                * {signupMess}
              </p>
            )}
            <div className="register__form-row">
              <label htmlFor="register-fname">{t("main.signup.fname")}</label>
              <input
                id="register-fname"
                type="text"
                name="fname"
                onChange={handleInput}
              />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-lname">{t("main.signup.lname")}</label>
              <input
                id="register-lname"
                type="text"
                name="lname"
                onChange={handleInput}
              />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-email">Email *</label>
              <input
                id="register-email"
                type="email"
                name="email"
                onChange={handleInput}
              />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-pass">Password *</label>
              <input
                id="register-pass"
                type="password"
                name="password"
                onChange={handleInput}
              />
            </div>
            <div className="register__form-row">
              <label htmlFor="register-passcf">Confirm Password *</label>
              <input
                id="register-passcf"
                type="password"
                name="passwordCf"
                onChange={handleInput}
              />
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
            <div className="register__form-row">
              <div>
                <input className="btn" type="submit" value={t("button.send")} />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Signup;
