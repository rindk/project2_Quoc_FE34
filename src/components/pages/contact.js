import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Contact() {
  const url = "";
  const { t } = useTranslation();
  return (
    <main className="contact-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("menu.contact")}</p>
        </div>
      </div>
      <section className="contact">
        <div className="container">
          <div className="section__arrow--title">
            <h1 className="section__arrow--header">{t("title.contact")}</h1>
            <img
              className="section__arrow--icon"
              src="assets/images/decor/2.png"
              alt="icon"
            />
          </div>
          <div className="contact__inner">
            <div className="contact__map">
              <img src="assets/images/map/map.png" alt="map" />
              <form
                className="contact__form"
                id="contact"
                action="#"
                method="get"
              >
                <div className="contact__form-row">
                  <label htmlFor="contact-name">Your Name</label>
                  <input id="contact-name" type="text" name="name" />
                </div>
                <div className="contact__form-row">
                  <label htmlFor="contact-email">Your Email</label>
                  <input id="contact-email" type="email" name="email" />
                </div>
                <div className="contact__form-row">
                  <label htmlFor="contact-sub">Subject</label>
                  <input id="contact-sub" type="text" name="subject" />
                </div>
                <div className="contact__form-row">
                  <label htmlFor="contact-mess">Your Message</label>
                  <textarea
                    id="contact-mess"
                    name="message"
                    rows="6"
                    form="contact"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <div className="contact__form-row">
                  <div>
                    <input
                      className="btn"
                      type="submit"
                      value={t("button.send")}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="contact__add">
              <img src="assets/images/logo/logo.png" alt="logo" />
              <ul className="contact__info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>{t("footer.contact.address")}</p>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <p>(04) 6674 2332</p>
                </li>
                <li>
                  <i className="fas fa-user"></i>
                  <p>support@milano.com</p>
                </li>
              </ul>
              <h3>FOLLOW US:</h3>
              <ul className="contact__media">
                <li>
                  <a href={url}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={url}>
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href={url}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={url}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href={url}>
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href={url}>
                    <i className="fab fa-vk"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
