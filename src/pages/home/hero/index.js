import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../../context/LanguageContext";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaDownload } from "react-icons/fa";

const Hero = () => {
  const { lang, introdata, projects, t } = useLanguage();

  return (
    <div className="hero_section" id="about">
      {/* Background decorative elements */}
      <div className="hero_bg_decor">
        <div className="hero_orb hero_orb_1"></div>
        <div className="hero_orb hero_orb_2"></div>
        <div className="hero_orb hero_orb_3"></div>
        <div className="hero_grid_overlay"></div>
      </div>

      <div className="hero_container">
        <div className="hero_content">
          {/* Left: Info */}
          <div className="hero_info animate-fadeInUp">
            <div className="hero_badge">
              <span className="hero_badge_dot"></span>
              {t.hero.badge}
            </div>

            <h1 className="hero_title">
              {introdata.title}
              <span className="hero_title_accent">.</span>
            </h1>

            <div className="hero_typewriter">
              <Typewriter
                key={lang}
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                    introdata.animated.fourth,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 15,
                }}
              />
            </div>

            <p className="hero_desc">{introdata.description}</p>

            <div className="hero_actions">
              <a
                href={introdata.my_cv}
                rel="noopener noreferrer"
                className="hero_btn hero_btn_primary"
              >
                <FaDownload />
                <span>{t.hero.resumeBtn}</span>
              </a>
              <a
                href={introdata.github}
                rel="noopener noreferrer"
                className="hero_btn hero_btn_secondary"
              >
                <FaGithub />
                <span>{t.hero.githubBtn}</span>
              </a>
            </div>

            <div className="hero_contact_links">
              <a href={`mailto:${introdata.email}`} className="hero_contact_item">
                <FaEnvelope />
                <span>{introdata.email}</span>
              </a>
              <a
                href={`tel:${introdata.phone.replace(/\s+/g, "")}`}
                className="hero_contact_item"
              >
                <FaPhoneAlt />
                <span>{introdata.phone}</span>
              </a>
            </div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="hero_visual animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="hero_avatar_wrapper">
              <div className="hero_avatar_ring"></div>
              <img
                src={introdata.my_img_url}
                alt="Phan Huu Kha"
                className="hero_avatar"
              />
            </div>

            <div className="hero_stats">
              <div className="hero_stat_item">
                <span className="hero_stat_number">{projects.length}</span>
                <span className="hero_stat_label">{t.hero.statProjects}</span>
              </div>
              <div className="hero_stat_divider"></div>
              <div className="hero_stat_item">
                <span className="hero_stat_number">10+</span>
                <span className="hero_stat_label">{t.hero.statLearning}</span>
              </div>
              <div className="hero_stat_divider"></div>
              <div className="hero_stat_item">
                <span className="hero_stat_number">∞</span>
                <span className="hero_stat_label">{t.hero.statTrying}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
