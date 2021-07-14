import { classList } from "../utils/style";
import useTheme from "../hooks/useTheme";
import styles from "./ScreenWrapper.module.css";

function ScreenWrapper({ children }) {
  const { isDarkTheme, isLightTheme } = useTheme();

  return (
    <div
      className={classList(styles.wrapper, {
        [styles.darkTheme]: isDarkTheme,
        [styles.lightTheme]: isLightTheme,
      })}
    >
      {children}
    </div>
  );
}

export default ScreenWrapper;
