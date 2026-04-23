import { useTranslation } from "react-i18next";
import ThemeIcon from "@/contexts/theme-icon-context";
import ButtonExample from "@/components/ui/button-example";
import { PERSONAL_INFO } from "../constants/portfolio-data";
import avatarImage from "@/assets/Avarta.jpg";

export default function HeroSection() {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    window.open(PERSONAL_INFO.website, '_blank');
  };

  const handleContact = () => {
    window.location.href = `mailto:${PERSONAL_INFO.email}`;
  };

  return (
    <section id="about" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{t("portfolio.name")}</h1>
            <h2 className="hero-title">{t("portfolio.title")}</h2>
            <p className="hero-description">
              {t("portfolio.description")}
            </p>
            
            <div className="hero-info">
              <div className="info-item">
                <ThemeIcon name="info" folder="info" className="info-icon" />
                <span>{PERSONAL_INFO.address}</span>
              </div>
              <div className="info-item">
                <ThemeIcon name="home" folder="home" className="info-icon" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="hero-actions">
              <ButtonExample variant="primary" size="large" onClick={handleContact}>
                {t("portfolio.contactMe")}
              </ButtonExample>
              <ButtonExample variant="outline" size="large" onClick={handleDownloadCV}>
                {t("portfolio.viewGithub")}
              </ButtonExample>
            </div>
          </div>

          <div className="hero-avatar">
            <div className="avatar-container">
              <img 
                src={avatarImage} 
                alt={t("portfolio.name")}
                className="avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}