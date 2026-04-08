import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/theme-context";
import { NavLink } from "react-router-dom";
import { path } from "@/constants/path";
import ThemeIcon from "@/contexts/theme-icon-context";
import ButtonExample from "@/components/ui/button-example";
import "@/components/css/main-layout.css";

export default function MainLayout({ children }) {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="header-container">
          <div className="header-left">
            <h1 className="header-title">{t("common.welcome")}</h1>
          </div>
          
          <nav className="header-nav">
            <NavLink 
              to={path.Home} 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              <ThemeIcon name="home" folder="home" className="nav-icon" />
              {t("common.portfolio")}
            </NavLink>
            
            <NavLink 
              to={path.Demo} 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              <ThemeIcon name="info" folder="info" className="nav-icon" />
              {t("common.demo")}
            </NavLink>

            <NavLink 
              to={path.Info} 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              <ThemeIcon name="info" folder="info" className="nav-icon" />
              {t("common.info")}
            </NavLink>
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