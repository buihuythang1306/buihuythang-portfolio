import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/theme-context";
import { useLocation } from "react-router-dom";
import { path } from "@/constants/path";
import { useState, useEffect } from "react";
import ThemeIcon from "@/contexts/theme-icon-context";
import ButtonExample from "@/components/ui/button-example";
import "@/components/css/main-layout.css";

export default function MainLayout({ children }) {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("about");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isPortfolioPage = location.pathname === path.Home;

  const portfolioSections = [
    { id: "about", label: t("portfolio.sections.about") },
    { id: "skills", label: t("portfolio.sections.skills") },
    { id: "experience", label: t("portfolio.sections.experience") },
    { id: "projects", label: t("portfolio.sections.projects") },
    { id: "education", label: t("portfolio.sections.education") }
  ];

  useEffect(() => {
    if (!isPortfolioPage) return;

    const handleScroll = () => {
      const sections = portfolioSections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPortfolioPage]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="header-container">
          <div className="header-left">
            <h1 className="header-title">{t("common.welcome")}</h1>
          </div>
          
          <nav className="header-nav">
            {isPortfolioPage ? (
              portfolioSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`nav-link ${activeSection === section.id ? 'nav-link-active' : ''}`}
                >
                  {section.label}
                </button>
              ))
            ) : null}
          </nav>
          
          <div className="header-right">
            <div className="header-controls">
              <ButtonExample
                variant="outline"
                size="small"
                onClick={toggleTheme}
                className="theme-toggle"
              >
                <ThemeIcon 
                  name={isDarkMode ? "sun" : "moon"} 
                  folder="common" 
                  className="control-icon" 
                />
                {t(`common.${isDarkMode ? 'light' : 'dark'}`)}
              </ButtonExample>
              
              <div className="language-selector">
                <ButtonExample
                  variant={i18n.language === 'vi' ? 'primary' : 'outline'}
                  size="small"
                  onClick={() => changeLanguage('vi')}
                >
                  VI
                </ButtonExample>
                <ButtonExample
                  variant={i18n.language === 'en' ? 'primary' : 'outline'}
                  size="small"
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </ButtonExample>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}