import useTheme from "../hooks/useTheme";
import { classList } from "../utils/style";
import styles from "./IconButton.module.css";

function IconButton({ className, icon, hidden, onClick }) {
  const { isDarkTheme, isLightTheme } = useTheme();

  if (hidden) {
    return null;
  }

  return (
    <button
      className={classList(
        styles.button,
        {
          [styles.darkTheme]: isDarkTheme,
          [styles.lightTheme]: isLightTheme,
        },
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default IconButton;
