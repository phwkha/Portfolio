import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import { useLanguage } from "../../../context/LanguageContext";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { skills, t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills_section" id="skills" ref={sectionRef}>
      <div className="skills_container">
        <div className="section_header animate-fadeInUp">
          <span className="section_tag">{t.skills.tag}</span>
          <h2 className="section_title">{t.skills.title}</h2>
          <p className="section_subtitle">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="skills_grid">
          {skills.map((skill, index) => (
            <div
              className="skill_item"
              key={skill.name}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="skill_info">
                <span className="skill_name">{skill.name}</span>
                <span className="skill_level">{skill.level}%</span>
              </div>
              <div className="skill_bar_track">
                <div
                  className="skill_bar_fill"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech categories */}
        <div className="tech_categories">
          <div className="tech_category">
            <h4>{t.skills.categories.backend}</h4>
            <div className="tech_icons">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>JWT / RBAC</span>
              <span>Python</span>
              <span>Django</span>
              <span>REST API</span>
              <span>WebSocket</span>
              <span> JUnit/Mockito</span>
            </div>
          </div>
          <div className="tech_category">
            <h4>{t.skills.categories.frontend}</h4>
            <div className="tech_icons">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Streamlit</span>
            </div>
          </div>
          <div className="tech_category">
            <h4>{t.skills.categories.database}</h4>
            <div className="tech_icons">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Redis</span>
              <span>FAISS</span>
              <span>Kafka</span>
            </div>
          </div>
          <div className="tech_category">
            <h4>{t.skills.categories.devops}</h4>
            <div className="tech_icons">
              <span>Docker</span>
              <span>Jenkins</span>
              <span>Nginx</span>
              <span>Cloudinary</span>
              <span>Github Actions</span>
              <span>ELK Stack</span>
              <span>Ollama</span>
              <span>LangChain</span>
            </div>
          </div>
          <div className="tech_category">
            <h4>{t.skills.categories.tools}</h4>
            <div className="tech_icons">
              <span>Linux / Bash</span>
              <span>Maven</span>
              <span>Postman</span>
              <span>LaTeX</span>
              <span>Antigravity CLI</span>
              <span>Codex CLI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
