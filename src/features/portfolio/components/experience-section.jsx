import { useTranslation } from "react-i18next";
import { WORK_EXPERIENCE } from "../constants/portfolio-data";
import ThemeIcon from "@/contexts/theme-icon-context";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section className="experience-section">
      <div className="section-container">
        <h2 className="section-title">{t("portfolio.sections.experience")}</h2>
        
        <div className="timeline">
          {WORK_EXPERIENCE.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <ThemeIcon name="home" folder="home" className="marker-icon" />
              </div>
              
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="company-name">{job.company}</h3>
                  <span className="job-period">{job.period}</span>
                </div>
                
                <div className="job-details">
                  <h4 className="job-position">{job.position}</h4>
                  <div className="job-meta">
                    <span className="team-size">{t("portfolio.experience.team")}: {job.teamSize}</span>
                    <span className="job-role">{t("portfolio.experience.role")}: {job.role}</span>
                  </div>
                </div>

                <div className="projects-list">
                  {job.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="project-item">
                      <h5 className="project-name">
                        {project.name}
                        {project.type && (
                          <span className="project-type">({project.type})</span>
                        )}
                      </h5>
                      <p className="project-description">{project.description}</p>
                      
                      {project.frontend && (
                        <div className="tech-detail">
                          <strong>{t("portfolio.experience.frontend")}:</strong> {project.frontend}
                        </div>
                      )}
                      
                      {project.backend && (
                        <div className="tech-detail">
                          <strong>{t("portfolio.experience.backend")}:</strong> {project.backend}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}