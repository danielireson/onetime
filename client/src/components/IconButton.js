import useTheme from "../hooks/useTheme";
import { classList } from "../utils/style";
import styles from "./IconButton.module.css";

function IconButton({ className, icon, onClick, showButton = true }) {
  const { isDarkTheme, isLightTheme } = useTheme();

  if (!showButton) {
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
