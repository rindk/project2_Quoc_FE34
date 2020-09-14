import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../../redux/reducer/token";

function Address() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const [profile, setProfile] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (token !== null) return setProfile([...token]);
  }, [token]);

  // Handle onChange input
  const onChangeInput = (e) => {
    const target = e.target;
    setProfile([{ ...profile[0], [target.name]: target.value }]);
  };
  // Active modify profile
  const handleModify = (e) => {
    const info = document.querySelector(".address__wrapper");
    info.classList.add("active");
    e.target.classList.add("hide");

    const btn2 = document.querySelector(".btn2");
    const btn3 = document.querySelector(".btn3");
    btn2.classList.remove("hide");
    btn3.classList.remove("hide");
  };
  // Cancel modify profile
  const handleCancel = (e) => {
    const info = document.querySelector(".address__wrapper");
    info.classList.remove("active");
    e.target.classList.add("hide");

    const btn1 = document.querySelector(".btn1");
    const btn2 = document.querySelector(".btn2");
    btn1.classList.remove("hide");
    btn2.classList.add("hide");

    setProfile([...token]);
  };
  // Update profile
  const handleUpdate = (e) => {
    const info = document.querySelector(".address__wrapper");
    info.classList.remove("active");
    e.target.classList.add("hide");

    const btn1 = document.querySelector(".btn1");
    const btn3 = document.querySelector(".btn3");
    btn1.classList.remove("hide");
    btn3.classList.add("hide");

    dispatch(updateToken(profile));
    const url = process.env.REACT_APP_SV_PROFILE + `/${profile[0].id}`;
    return fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile[0]),
    }).then((res) => {
      if (res.status === 200) {
        setMessage("Bạn đã cập nhật thành công");
        return setTimeout(() => setMessage(""), 1500);
      }
    });
  };

  return (
    <main className="address-main">
      {message !== "" ? (
        <div className="address__popup">
          <div>
            <i className="fas fa-check"></i>
          </div>

          {message}
        </div>
      ) : null}
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("menu.profile")}</p>
        </div>
      </div>
      {!loginStatus ? (
        <div className="container">
          <div className="login">
            Bạn chưa đăng nhập
            <Link className="link" to="/login">
              {t("header.login")}
            </Link>
          </div>
        </div>
      ) : (
        <section className="address">
          <div className="container">
            <div className="section__arrow--title">
              <h1 className="section__arrow--header">{t("title.profile")}</h1>
              <img
                className="section__arrow--icon"
                src="assets/images/decor/2.png"
                alt="icon"
              />
            </div>
            <div className="address__head">{t("main.address.header")}</div>
            <div className="address__wrapper">
              <form
                className="address__form"
                id="address__form1"
                action="#"
                method="get"
              >
                <label htmlFor="fname">
                  <span>{t("main.address.fname")}</span>
                  <input
                    type="text"
                    name="firstName"
                    value={profile[0].firstName}
                    onChange={onChangeInput}
                  />
                </label>
                <label htmlFor="lname">
                  <span>{t("main.address.lname")}</span>
                  <input
                    type="text"
                    name="lastName"
                    value={profile[0].lastName}
                    onChange={onChangeInput}
                  />
                </label>
                <label htmlFor="add">
                  <span>{t("main.address.address")}</span>
                  <input
                    type="text"
                    name="address"
                    value={profile[0].address}
                    onChange={onChangeInput}
                  />
                </label>
                <label htmlFor="city">
                  <span>{t("main.address.city")}</span>
                  <input
                    type="text"
                    name="city"
                    value={profile[0].city}
                    onChange={onChangeInput}
                  />
                </label>
                <label htmlFor="phone">
                  <span>{t("main.address.phone")}</span>
                  <input
                    type="tel"
                    name="phone"
                    value={profile[0].phone}
                    onChange={onChangeInput}
                  />
                </label>
                <label htmlFor="email">
                  <span>{t("main.address.email")}</span>
                  <input
                    type="email"
                    name="email"
                    value={profile[0].email}
                    readOnly
                  />
                </label>
              </form>
            </div>
            <div className="address__btn">
              <button
                className="btn btn1 address__btn--modify"
                onClick={handleModify}
              >
                {t("main.address.modifyAdd")}
              </button>
              <button className="btn btn2 hide" onClick={handleUpdate}>
                {t("button.update")}
              </button>
              <button className="btn btn3 hide" onClick={handleCancel}>
                {t("button.cancel")}
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
export default Address;
