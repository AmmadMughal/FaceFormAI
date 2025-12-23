'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { colors, darkColors } from '../utils/constants';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    let mounted = true;
    
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        const parsedTheme = JSON.parse(savedTheme);
        if (mounted) {
          setIsDarkMode(parsedTheme);
        }
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (mounted) {
          setIsDarkMode(prefersDark);
        }
      }
    };

    initializeTheme();
    
    return () => {
      mounted = false;
    };
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Get current colors based on theme
  const currentColors = isDarkMode ? darkColors : colors;

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: currentColors,
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: currentColors.primary,
        dark: currentColors.primaryDark,
      },
      secondary: {
        main: currentColors.secondary,
      },
      background: {
        default: currentColors.paper,
        paper: currentColors.surface,
      },
      text: {
        primary: currentColors.textPrimary,
        secondary: currentColors.textMuted,
      },
      error: {
        main: currentColors.highlight,
      },
    },
    typography: {
      fontFamily: '"Inter", "SF Pro Display", "Poppins", "Roboto", sans-serif',
      h1: { fontFamily: '"Inter", "SF Pro Display", "Poppins", "Roboto", sans-serif' },
      h2: { fontFamily: '"Inter", "SF Pro Display", "Poppins", "Roboto", sans-serif' },
      h3: { fontFamily: '"Inter", "SF Pro Display", "Poppins", "Roboto", sans-serif' },
      h4: { fontFamily: '"Inter", "SF Pro Display", "Poppins", "Roboto", sans-serif' },
      h5: { fontFamily: '"Inter", "SF Pro Display", "Poppins", "Roboto", sans-serif' },
      h6: { fontFamily: '"Inter", "SF Pro Display", "Poppins", "Roboto", sans-serif' },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
