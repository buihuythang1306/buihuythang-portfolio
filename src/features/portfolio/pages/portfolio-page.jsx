import HeroSection from "../components/hero-section";
import SkillsSection from "../components/skills-section";
import ExperienceSection from "../components/experience-section";
import ProjectsSection from "../components/projects-section";
import EducationSection from "../components/education-section";
import "../styles/portfolio-page.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}