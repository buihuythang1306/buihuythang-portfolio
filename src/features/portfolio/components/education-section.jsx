import { useTranslation } from "react-i18next";
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "../constants/portfolio-data";
import ThemeIcon from "@/contexts/theme-icon-context";

export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <section className="education-section">
      <div className="section-container">
        <h2 className="section-title">{t("portfolio.sections.education")}</h2>
        
        <div className="education-grid">
          <div className="education-card">
            <div className="card-header">
              <ThemeIcon name="info" folder="info" className="card-icon" />
              <h3 className="card-title">{t("portfolio.education.education")}</h3>
            </div>
            
            <div className="education-details">
              <h4 className="university-name">{EDUCATION.university}</h4>
              <p className="degree-info">{EDUCATION.degree}</p>
              <div className="education-meta">
                <span className="period">{EDUCATION.period}</span>
                <span className="gpa">{t("portfolio.education.gpa")}: {EDUCATION.gpa}</span>
              </div>
              <span className="status">{t("portfolio.education.graduated")}</span>
            </div>
          </div>

          <div className="certifications-card">
            <div className="card-header">
              <ThemeIcon name="home" folder="home" className="card-icon" />
              <h3 className="card-title">{t("portfolio.education.certifications")}</h3>
            </div>
            
            <div className="certifications-list">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="cert-item">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-card">
            <div className="card-header">
              <ThemeIcon name="info" folder="info" className="card-icon" />
              <h3 className="card-title">{t("portfolio.education.honorsAwards")}</h3>
            </div>
            
            <div className="achievements-list">
              {ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <ThemeIcon name="home" folder="home" className="achievement-icon" />
                  <span className="achievement-text">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}