import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const url = "";
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brands">
          <img src="http://localhost:4000/assets/images/brands/brands.png" alt="Brands" />
        </div>
        <div className="footer__menu">
          <div className="footer__menu--info">
            <h4 className="footer__menu--header">{t("footer.info.header")}</h4>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.info.about")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.info.delivery")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.info.feeling")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.info.store")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.info.policy")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu--order">
            <h4 className="footer__menu--header">
              {t("footer.purchase.header")}
            </h4>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.purchase.ship")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.purchase.buy")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.purchase.internationnal-ship")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.purchase.link")}
                </a>
              </li>
            </ul>
            <ul className="footer__menu--list">
              <li className="footer__menu--items">
                <a href={url} className="footer__menu--link">
                  {t("footer.purchase.discount")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu--email">
            <h4 className="footer__menu--header">{t("footer.mail.header")}</h4>
            <div className="footer__menu--form">
              <p>{t("footer.mail.desc")}</p>
              <form action="#" method="get">
                <input
                  type="email"
                  placeholder={t("footer.mail.placeholher")}
                />
                <button type="Submit" value="Submit">
                  {t("footer.mail.send")}
                </button>
              </form>
            </div>
            <div className="footer__menu--media">
              <a href={url}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href={url}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href={url}>
                <i className="fab fa-dribbble"></i>
              </a>
              <a href={url}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href={url}>
                <i className="fas fa-rss"></i>
              </a>
            </div>
          </div>
          <div className="footer__menu--contact">
            <h4 className="footer__menu--header">
              {t("footer.contact.header")}
            </h4>
            <ul className="footer__menu--contact-wrapper">
              <li className="footer__menu--contact-list">
                <i className="fas fa-map-marker-alt"></i>
                <span>{t("footer.contact.address")}</span>
              </li>
              <li className="footer__menu--contact-list">
                <a href="tel: +840466742332">
                  <i className="fas fa-phone"></i>
                  <span>(04) 6674 2332</span>
                </a>
                <a href="tel: +840437868904">
                  <i className="fas fa-phone"></i>
                  <span>(04) 3786 8904</span>
                </a>
              </li>
              <li className="footer__menu--contact-list">
                <a href="tel: +840866809686">
                  <i className="fas fa-phone"></i>
                  <span>(08) 6680 9686</span>
                </a>
                <a href="mailto:Support@bizweb.vn">
                  <i className="fas fa-envelope"></i>
                  <span>Support@bizweb.vn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bot">
        <div className="container footer__bot--inner">
          <div className="footer__bot--left">
            <p>&#169; Copyright 2008-2014 DKT Technology JSC</p>
          </div>
          <div className="footer__bot--right">
            <a href={url}>
              <i className="fab fa-cc-mastercard"></i>
            </a>
            <a href={url}>
              <i className="fab fa-cc-visa"></i>
            </a>
            <a href={url}>
              <i className="fab fa-cc-paypal"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
