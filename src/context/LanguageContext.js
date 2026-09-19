import React, { createContext, useContext, useState, useEffect } from "react";
import { contentEn, contentVi } from "../data/content_option";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_user_lang");
      if (saved === "vi" || saved === "en") return saved;
    } catch (e) {
      // ignore
    }
    return "en";
  });

  const setLang = (newLang) => {
    if (newLang === "vi" || newLang === "en") {
      setLangState(newLang);
      try {
        localStorage.setItem("portfolio_user_lang", newLang);
      } catch (e) {
        // ignore
      }
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "vi" : "en");
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
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
        skillCategories: currentContent.skillCategories,
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
