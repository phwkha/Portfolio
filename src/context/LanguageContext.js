import React, { createContext, useContext, useState, useEffect } from "react";
import { contentEn, contentVi } from "../data/content_option";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "vi" || saved === "en") return saved;
    if (typeof navigator !== "undefined" && navigator.language && navigator.language.startsWith("vi")) {
      return "vi";
    }
    return "en";
  });

  const setLang = (newLang) => {
    if (newLang === "vi" || newLang === "en") {
      setLangState(newLang);
      localStorage.setItem("portfolio_lang", newLang);
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "vi" : "en");
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  const currentContent = lang === "vi" ? contentVi : contentEn;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        content: currentContent,
        t: currentContent.ui,
        introdata: currentContent.introdata,
        skills: currentContent.skills,
        projects: currentContent.projects,
        meta: currentContent.meta,
        categories: currentContent.ui.skills.categories,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
