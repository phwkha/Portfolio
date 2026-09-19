import React from "react";
import "./style.css";
import Themetoggle from "../themetoggle";
import LanguageToggle from "../languagetoggle";
import { logotext } from "../../data/content_option";
import { useLanguage } from "../../context/LanguageContext";

const Headermain = () => {
  const { t, introdata } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="site__header">
        <div className="header_inner">
          <div className="brand_block">
            <div className="brand_logo">K</div>
            <div className="brand_text">
              <h1 className="brand_name">{logotext}</h1>
              <p className="brand_subtitle">{introdata.roleSubtitle}</p>
            </div>
          </div>
          <div className="header_nav">
            <button className="nav_link" onClick={() => scrollTo("about")}>
              {t.nav.about}
            </button>
            <button className="nav_link" onClick={() => scrollTo("projects")}>
              {t.nav.projects}
            </button>
            <button className="nav_link" onClick={() => scrollTo("skills")}>
              {t.nav.skills}
            </button>
            <button className="nav_link" onClick={() => scrollTo("contact")}>
              {t.nav.contact}
            </button>
            <div className="lang_toggle_border" aria-label="Language toggle">
              <LanguageToggle />
            </div>
            <div className="theme_toggle_border" aria-label="Theme toggle">
              <Themetoggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
