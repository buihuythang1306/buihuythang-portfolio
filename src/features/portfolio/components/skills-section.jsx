import { useTranslation } from "react-i18next";
import { SKILLS } from "../constants/portfolio-data";

export default function SkillsSection() {
  const { t } = useTranslation();

  const skillCategories = [
    { title: t("portfolio.skills.programmingLanguages"), items: SKILLS.programmingLanguages, color: "var(--brand-primary)" },
    { title: t("portfolio.skills.webFrameworks"), items: SKILLS.webFrameworks, color: "var(--brand-secondary)" },
    { title: t("portfolio.skills.databases"), items: SKILLS.databases, color: "var(--brand-accent)" },
    { title: t("portfolio.skills.tools"), items: SKILLS.tools, color: "var(--brand-primary)" },
    { title: t("portfolio.skills.architecturePatterns"), items: SKILLS.architecturePatterns, color: "var(--brand-secondary)" },
    { title: t("portfolio.skills.libraries"), items: SKILLS.libraries, color: "var(--brand-accent)" }
  ];

  return (
    <section className="skills-section">
      <div className="section-container">
        <h2 className="section-title">{t("portfolio.sections.skills")}</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 
                className="category-title"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{ 
                      borderColor: category.color,
                      color: category.color
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = category.color;
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = category.color;
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}