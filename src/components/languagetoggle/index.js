import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./style.css";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      className="lang_toggle_btn"
      onClick={toggleLang}
      title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
      aria-label="Toggle language between English and Vietnamese"
    >
      <span className={`lang_label ${lang === "en" ? "active" : ""}`}>EN</span>
      <span className="lang_separator">/</span>
      <span className={`lang_label ${lang === "vi" ? "active" : ""}`}>VI</span>
    </button>
  );
};

export default LanguageToggle;
