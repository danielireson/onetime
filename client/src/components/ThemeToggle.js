import ThemeIcon from "./ThemeIcon";
import useTheme from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      <ThemeIcon className={styles.icon} />
    </button>
  );
}

export default ThemeToggle;
