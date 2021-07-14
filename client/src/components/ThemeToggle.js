import IconButton from "./IconButton";
import ThemeIcon from "./ThemeIcon";
import useTheme from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

function ThemeToggle({ hidden }) {
  const { toggleTheme } = useTheme();

  return (
    <IconButton
      className={styles.button}
      icon={<ThemeIcon />}
      hidden={hidden}
      onClick={toggleTheme}
    />
  );
}

export default ThemeToggle;
