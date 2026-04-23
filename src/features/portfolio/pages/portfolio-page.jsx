import { useEffect, useState } from "react";
import HeroSection from "../components/hero-section";
import SkillsSection from "../components/skills-section";
import ExperienceSection from "../components/experience-section";
import ProjectsSection from "../components/projects-section";
import EducationSection from "../components/education-section";
import "../styles/portfolio-page.css";

export default function PortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(starArray);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(scrolled > 500);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-page">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      
      <div className="animated-background">
        <div 
          className="gradient-orb orb-1" 
          style={{ 
            transform: `translate(calc(${scrollProgress * 2}px + ${mousePosition.x * 0.5}px), calc(${scrollProgress * 1.5}px + ${mousePosition.y * 0.3}px))` 
          }}
        />
        <div 
          className="gradient-orb orb-2" 
          style={{ 
            transform: `translate(calc(-${scrollProgress * 1.5}px - ${mousePosition.x * 0.3}px), calc(${scrollProgress * 2}px + ${mousePosition.y * 0.5}px))` 
          }}
        />
        <div 
          className="gradient-orb orb-3" 
          style={{ 
            transform: `translate(calc(${scrollProgress * 1}px + ${mousePosition.x * 0.4}px), calc(-${scrollProgress * 1}px - ${mousePosition.y * 0.4}px))` 
          }}
        />
        
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`
              }}
            />
          ))}
        </div>

        <div className="particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        <div className="floating-shapes">
          <div className="shape shape-circle" />
          <div className="shape shape-square" />
          <div className="shape shape-triangle" />
          <div className="shape shape-hexagon" />
        </div>

        <div className="grid-overlay" />
        
        <div 
          className="mouse-glow" 
          style={{ 
            left: `${mousePosition.x}%`, 
            top: `${mousePosition.y}%` 
          }} 
        />
      </div>
      
      <div className="content-wrapper">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </div>

      <button
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}