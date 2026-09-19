import React from "react";
import "./footer.css";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { introdata, t } = useLanguage();

  return (
    <footer className="footer_section">
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_brand">
            <div className="footer_logo">K</div>
            <span className="footer_name">Phan Huu Kha</span>
          </div>
          <p className="footer_text">
            {t.footer.caption}
          </p>
          <div className="footer_links">
            <a href={introdata.github} target="_blank" rel="noopener noreferrer">
              {t.footer.github}
            </a>
            <span className="footer_dot">·</span>
            <a href={`mailto:${introdata.email}`}>{t.footer.email}</a>
            <span className="footer_dot">·</span>
            <a href={introdata.my_cv} rel="noopener noreferrer">{t.footer.resume}</a>
          </div>
          <p className="footer_copyright">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
