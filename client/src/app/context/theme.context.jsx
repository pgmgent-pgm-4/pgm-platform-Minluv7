/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();
const useThemeContext = () => useContext(ThemeContext);

// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeChange = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export {
  ThemeContext,
  ThemeProvider,
  useThemeContext,
};
