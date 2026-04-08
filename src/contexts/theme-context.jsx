//src\contexts\ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Kiểm tra localStorage hoặc system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Track if this is the initial mount
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Cập nhật class trên html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Only save to localStorage after initial mount (i.e., user interactions)
    if (!isInitialMount.current) {
      const newTheme = isDarkMode ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
    } else {
      // On initial mount, just apply the theme to DOM without saving
      isInitialMount.current = false;
    }
  }, [isDarkMode]);

  // Listen for external localStorage changes (from AuthContext)
  useEffect(() => {
    const checkThemeChange = () => {
      const currentTheme = localStorage.getItem('theme');
      const shouldBeDark = currentTheme === 'dark';
      
      if (shouldBeDark !== isDarkMode) {
        setIsDarkMode(shouldBeDark);
      }
    };

    // Check immediately
    checkThemeChange();
    
    // Set up interval to check for changes (fallback if events don't work)
    const interval = setInterval(checkThemeChange, 100);
    
    // Clean up
    return () => clearInterval(interval);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};