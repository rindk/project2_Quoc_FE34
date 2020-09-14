import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { closeModal } from "../commonFunction";
import { checkLoginStt } from "../../redux/reducer/loginStatus";
import { updateToken } from "../../redux/reducer/token";

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [loginMess, setLoginMess] = useState("");
  // Close Modal after render
  useEffect(() => closeModal(), []);

  // handle Input
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const input = e.target;
    setUser({ ...user, [input.name]: input.value });
  };

  // Log in Submit
  const loginSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_SV_LOGIN, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => ({ message: res.json(), status: res.status }))
      .then((data) => {
        if (data.status === 400)
          return data.message.then((message) => {
            setLoginMess(message);
            setTimeout(() => setLoginMess(""), 5000);
          });
        if (data.status === 200) return loginSuccessed(data.message);
      });
  };

  const loginSuccessed = (data) => {
    data.then((token) =>
      localStorage.setItem("accessToken", JSON.stringify(token))
    );
    fetch(process.env.REACT_APP_SV_PROFILE + `?email=${user.email}`)
      .then((res) => res.json())
      .then((token) => {
        dispatch(updateToken(token));
        dispatch(checkLoginStt());
      });
    document.querySelector(".login__success").classList.add("active");
    return setTimeout(() => (window.location.href = "/"), 2000);
  };

  return (
    <main className="login-main">
      <LoginSuccessPopup />
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
            <div style={{ position: "relative" }}>
              {loginMess === "" ? null : (
                <p
                  style={{
                    color: "red",
                    margin: "10px 0",
                    position: "absolute",
                    top: "-45px",
                    left: "0",
                  }}
                >
                  * {loginMess}
                </p>
              )}
            </div>
            <form className="login__form" onSubmit={loginSubmit} method="post">
              <div className="login__form-row">
                <label htmlFor="login-email">Email *</label>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  onChange={handleInput}
                />
              </div>
              <div className="login__form-row">
                <label htmlFor="login-pass">Password *</label>
                <input
                  id="login-pass"
                  type="password"
                  name="password"
                  onChange={handleInput}
                />
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

function LoginSuccessPopup() {
  return (
    <div className="login__success">
      <div>
        <i className="fas fa-check"></i>
      </div>
      <p>Bạn đã đăng nhập thành công</p>
    </div>
  );
}

export default Login;
