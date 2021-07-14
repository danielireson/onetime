import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkTheme = theme === "dark";
  const isLightTheme = theme === "light";

  return { isDarkTheme, isLightTheme, toggleTheme };
}
