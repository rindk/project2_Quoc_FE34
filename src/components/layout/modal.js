import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { closeModal } from "../commonFunction";

function Modal() {
  const { t } = useTranslation();

  return (
    <section className="modal">
      <div className="modal__inner">
        <div className="modal__close" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </div>
        <div className="modal__content">
          <img
            src="http://localhost:4000/assets/images/popup/pic.png"
            alt="modal"
          />
          <div className="modal__content--wrapper">
            <div className="modal__content--text">
              <h1>{t("modal.header")}</h1>
              <p>{t("modal.desc")}</p>
              <Link className="btn" to="/login">
                {t("button.login")}
              </Link>
              <Link className="btn" to="/signup">
                {t("button.signup")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
