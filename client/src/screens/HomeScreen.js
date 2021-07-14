import ShortcodeInput from "../components/ShortcodeInput";
import ThemeToggle from "../components/ThemeToggle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useNavigation from "../hooks/useNavigation";
import useTheme from "../hooks/useTheme";
import { classList } from "../utils/style";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
  const { navigateTimer } = useNavigation();
  const { isDarkTheme, isLightTheme } = useTheme();

  useDocumentTitle("Onetime");

  return (
    <div
      className={classList(styles.wrapper, {
        [styles.darkTheme]: isDarkTheme,
        [styles.lightTheme]: isLightTheme,
      })}
    >
      <Logo />
      <ShortcodeInput onSubmit={navigateTimer} />
      <ThemeToggle />
    </div>
  );
}

export default HomeScreen;
