import { useState, createContext } from "react";

export const ThemeContext = createContext();

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(DARK_THEME);

  const toggleTheme = () => {
    if (theme === DARK_THEME) {
      setTheme(LIGHT_THEME);
    } else {
      setTheme(DARK_THEME);
    }
  };

  const context = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
