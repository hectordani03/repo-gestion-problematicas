import { createContext, useEffect, useState, useContext } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  // Modo oscuro
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Texto grande
  const [largeText, setLargeText] = useState(() => {
    return localStorage.getItem('largeText') === 'true';
  });

  // Alto contraste
  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('highContrast') === 'true';
  });

  // Fuente amigable para dislexia
  const [dyslexiaFont, setDyslexiaFont] = useState(() => {
    return localStorage.getItem('dyslexiaFont') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    if (largeText) {
      root.classList.add('large-text');
      localStorage.setItem('largeText', 'true');
    } else {
      root.classList.remove('large-text');
      localStorage.setItem('largeText', 'false');
    }

    if (highContrast) {
      root.classList.add('high-contrast');
      localStorage.setItem('highContrast', 'true');
    } else {
      root.classList.remove('high-contrast');
      localStorage.setItem('highContrast', 'false');
    }

    if (dyslexiaFont) {
      root.classList.add('dyslexia-font');
      localStorage.setItem('dyslexiaFont', 'true');
    } else {
      root.classList.remove('dyslexia-font');
      localStorage.setItem('dyslexiaFont', 'false');
    }

  }, [isDark, largeText, highContrast, dyslexiaFont]);

  // Toggles
  const toggleTheme = () => setIsDark(prev => !prev);
  const toggleLargeText = () => setLargeText(prev => !prev);
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleDyslexiaFont = () => setDyslexiaFont(prev => !prev);

  return (
    <AccessibilityContext.Provider value={{
      isDark,
      toggleTheme,
      largeText,
      toggleLargeText,
      highContrast,
      toggleHighContrast,
      dyslexiaFont,
      toggleDyslexiaFont
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}