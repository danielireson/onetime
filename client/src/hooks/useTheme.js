import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("'useTheme' must be used within a 'ThemeProvider'");
  }

  const { theme, toggleTheme } = context;

  const isDarkTheme = theme === "dark";
  const isLightTheme = theme === "light";

  return { isDarkTheme, isLightTheme, toggleTheme };
}
