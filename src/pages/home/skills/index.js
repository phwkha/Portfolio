import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import { useLanguage } from "../../../context/LanguageContext";
import {
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt,
  FaVial,
  FaProjectDiagram,
  FaInfinity,
  FaTools,
} from "react-icons/fa";

const categoryIcons = {
  backend: <FaServer className="category_icon" />,
  frontend: <FaLaptopCode className="category_icon" />,
  database: <FaDatabase className="category_icon" />,
  security: <FaShieldAlt className="category_icon" />,
  testing: <FaVial className="category_icon" />,
  architecture: <FaProjectDiagram className="category_icon" />,
  devops: <FaInfinity className="category_icon" />,
  others: <FaTools className="category_icon" />,
};

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { skills, skillCategories = [], t } = useLanguage();

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
          <p className="section_subtitle">{t.skills.subtitle}</p>
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

        {/* Tech categories: backend, frontend, database, security, testing, architecture, devops */}
        <div className="tech_categories">
          {skillCategories.map((category, index) => (
            <div
              className="tech_category"
              key={category.key || index}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h4>
                {categoryIcons[category.key]}
                <span>{category.title}</span>
              </h4>
              <div className="tech_icons">
                {category.skills.map((skillName, i) => (
                  <span key={i}>{skillName}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
