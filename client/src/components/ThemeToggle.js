import IconButton from "./IconButton";
import ThemeIcon from "./ThemeIcon";
import useTheme from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

function ThemeToggle({ showButton }) {
  const { toggleTheme } = useTheme();

  return (
    <IconButton
      className={styles.button}
      showButton={showButton}
      icon={<ThemeIcon />}
      onClick={toggleTheme}
    />
  );
}

export default ThemeToggle;
