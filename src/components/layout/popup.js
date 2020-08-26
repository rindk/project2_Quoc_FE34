import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Popup() {
  const { t } = useTranslation();

  // Show popup after loading page 1s
  useEffect(() => {
    const popup = document.querySelector(".popup");
    setTimeout(() => {
      popup.classList.remove("close");
      popup.scrollIntoView({ behavior: "smooth" });
    }, 1000);
    window.onclick = (e) => {
      return e.target === popup ? closePopup() : null;
    };
  }, []);

  // Close popup func
  const closePopup = () => {
    document.querySelector(".popup").classList.add("close");
  };

  return (
    <section className="popup close">
      <div className="popup__inner">
        <div className="popup__close" onClick={closePopup}>
          <i className="fas fa-times"></i>
        </div>
        <div className="popup__content">
          <img
            src="http://localhost:4000/assets/images/popup/pic.png"
            alt="popup"
          />
          <div className="popup__content--wrapper">
            <div className="popup__content--text">
              <h1>{t("popup.header")}</h1>
              <p>{t("popup.desc")}</p>
              <form action="#" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Email của bạn..."
                />
                <button className="btn" type="submit">
                  {t("button.sendEmail")}
                </button>
                <div>
                  <input id="popup-check" type="checkbox" name="get-noti" />
                  <label htmlFor="popup-check">{t("popup.checkbox")}</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popup;
