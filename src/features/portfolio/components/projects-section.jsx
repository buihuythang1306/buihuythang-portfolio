import { useTranslation } from "react-i18next";
import { PERSONAL_PROJECTS } from "../constants/portfolio-data";
import ButtonExample from "@/components/ui/button-example";
import ThemeIcon from "@/contexts/theme-icon-context";

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section className="projects-section">
      <div className="section-container">
        <h2 className="section-title">{t("portfolio.sections.projects")}</h2>
        
        <div className="projects-grid">
          {PERSONAL_PROJECTS.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <ThemeIcon name="info" folder="info" className="project-icon-svg" />
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.name}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="tech-stack">
                  <h4 className="tech-title">{t("portfolio.projects.technologyStack")}</h4>
                  <p className="tech-list">{project.technology}</p>
                </div>

                {project.features && (
                  <div className="project-features">
                    <h4 className="features-title">{t("portfolio.projects.keyFeatures")}</h4>
                    <p className="features-list">{project.features}</p>
                  </div>
                )}
              </div>

              <div className="project-actions">
                <ButtonExample 
                  variant="outline" 
                  size="small"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <ThemeIcon name="home" folder="home" className="button-icon" />
                  {t("portfolio.projects.viewCode")}
                </ButtonExample>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}