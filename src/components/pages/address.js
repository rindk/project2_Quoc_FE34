import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Address() {
  const url = "";
  const { t } = useTranslation();

  return (
    <main className="address-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("menu.address")}</p>
        </div>
      </div>
      <section className="address">
        <div className="container">
          <div className="section__arrow--title">
            <h1 className="section__arrow--header">{t("title.address")}</h1>
            <img
              className="section__arrow--icon"
              src="assets/images/decor/2.png"
              alt="icon"
            />
          </div>
          <div className="address__head">
            <p>{t("main.address.header")}</p>
            <div>
              <a href={url}>{t("main.address.newAdd")}</a>
            </div>
          </div>
          <div className="address__wrapper">
            <div className="address__added">
              <div className="address__added--inner active">
                <form
                  className="address__form"
                  id="address__form1"
                  action="#"
                  method="get"
                >
                  <label htmlFor="fname">
                    <span>{t("main.address.fname")}</span>
                    <input type="text" name="fname" value="Giang" />
                  </label>
                  <label htmlFor="lname">
                    <span>{t("main.address.lname")}</span>
                    <input type="text" name="lname" value="Lê Anh" />
                  </label>
                  <label htmlFor="add">
                    <span>{t("main.address.address")}</span>
                    <input
                      type="text"
                      name="address"
                      value="Tòa nhà Hanoi Group, 442 Đội Cấn, Ba Đình, Hà Nội"
                    />
                  </label>
                  <label htmlFor="city">
                    <span>{t("main.address.city")}</span>
                    <input type="text" name="city" value="Hà Nội" />
                  </label>
                  <label htmlFor="phone">
                    <span>{t("main.address.phone")}</span>
                    <input type="tel" name="phone" value="0974554928" />
                  </label>
                </form>
                <div className="address__btn">
                  <label htmlFor="check">
                    <input
                      type="checkbox"
                      name="check"
                      form="address__form1"
                      defaultChecked
                    />
                    <span>{t("main.address.checkbox")}</span>
                  </label>
                  <div>
                    <button
                      className="btn address__btn--submit"
                      type="submit"
                      form="address__form1"
                    >
                      {t("main.address.modifyAdd")}
                    </button>
                    <button
                      className="btn address__btn--del"
                      type="submit"
                      form="address__form1"
                    >
                      {t("button.delete")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="address__added--inner">
                <form
                  className="address__form"
                  id="address__form2"
                  action="#"
                  method="get"
                >
                  <label htmlFor="fname">
                    <span>{t("main.address.fname")}</span>
                    <input type="text" name="fname" value="Giang" />
                  </label>
                  <label htmlFor="lname">
                    <span>{t("main.address.lname")}</span>
                    <input type="text" name="lname" value="Lê Anh" />
                  </label>

                  <label htmlFor="add">
                    <span>{t("main.address.address")}</span>
                    <input
                      type="text"
                      name="address"
                      value="Tòa nhà Hanoi Group, 442 Đội Cấn, Ba Đình, Hà Nội"
                    />
                  </label>
                  <label htmlFor="city">
                    <span>{t("main.address.city")}</span>
                    <input type="text" name="city" value="Hà Nội" />
                  </label>
                  <label htmlFor="phone">
                    <span>{t("main.address.phone")}</span>
                    <input type="tel" name="phone" value="0974554928" />
                  </label>
                </form>
                <div className="address__added--modified">
                  <a href={url}>{t("main.address.modifyAdd")}</a>
                </div>
              </div>
              <div className="address__added--inner">
                <form
                  className="address__form"
                  id="address__form3"
                  action="#"
                  method="get"
                >
                  <label htmlFor="fname">
                    <span>{t("main.address.fname")}</span>
                    <input type="text" name="fname" value="Giang" />
                  </label>
                  <label htmlFor="lname">
                    <span>{t("main.address.lname")}</span>
                    <input type="text" name="lname" value="Lê Anh" />
                  </label>
                  <label htmlFor="add">
                    <span>{t("main.address.address")}</span>
                    <input
                      type="text"
                      name="address"
                      value="Tòa nhà Hanoi Group, 442 Đội Cấn, Ba Đình, Hà Nội"
                    />
                  </label>
                  <label htmlFor="city">
                    <span>{t("main.address.city")}</span>
                    <input type="text" name="city" value="Hà Nội" />
                  </label>
                  <label htmlFor="phone">
                    <span>{t("main.address.phone")}</span>
                    <input type="tel" name="phone" value="0974554928" />
                  </label>
                </form>
                <div className="address__added--modified">
                  <a href={url}>{t("main.address.modifyAdd")}</a>
                </div>
              </div>
            </div>
            <div className="address__new active">
              <form
                className="address__form"
                id="address__form4"
                action="#"
                method="get"
              >
                <label htmlFor="fname">
                  <span>{t("main.address.fname")}</span>
                  <input type="text" name="fname" value="Giang" />
                </label>
                <label htmlFor="lname">
                  <span>{t("main.address.lname")}</span>
                  <input type="text" name="lname" value="Lê Anh" />
                </label>
                <label htmlFor="add">
                  <span>{t("main.address.address")}</span>
                  <input
                    type="text"
                    name="address"
                    value="Tòa nhà Hanoi Group, 442 Đội Cấn, Ba Đình, Hà Nội"
                  />
                </label>
                <label htmlFor="city">
                  <span>{t("main.address.city")}</span>
                  <input type="text" name="city" value="Hà Nội" />
                </label>
                <label htmlFor="phone">
                  <span>{t("main.address.phone")}</span>
                  <input type="tel" name="phone" value="0974554928" />
                </label>
              </form>
              <div className="address__btn">
                <label htmlFor="check">
                  <input
                    type="checkbox"
                    name="check"
                    form="address__form4"
                    defaultChecked
                  />
                  <span>{t("main.address.checkbox")}</span>
                </label>
                <div>
                  <button
                    className="btn address__btn--submit"
                    type="submit"
                    form="address__form4"
                  >
                    {t("button.updateAdd")}
                  </button>
                  <button
                    className="btn address__btn--del"
                    type="submit"
                    form="address__form4"
                  >
                    {t("button.exit")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Address;
