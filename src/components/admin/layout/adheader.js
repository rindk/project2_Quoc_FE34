import React from "react";
import { signout } from "../../commonFunction";
import { useTranslation } from "react-i18next";

function AdHeader() {
  const { t } = useTranslation();
  return (
    <header className="ad-header">
      <div className="ad-header__inner">
        <div className="logo">
          <img src="./assets/images/logo/logo.png" alt="logo" />
          <p>ADMINISTRATOR</p>
        </div>
        <div className="admin">
          <i className="fas fa-user-shield"></i>
          <button onClick={signout}>{t("header.signout")}</button>
        </div>
      </div>
    </header>
  );
}

export default AdHeader;
