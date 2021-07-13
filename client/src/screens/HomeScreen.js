import ShortcodeInput from "../components/ShortcodeInput";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useNavigation from "../hooks/useNavigation";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
  const { navigateTimer } = useNavigation();

  useDocumentTitle("Onetime");

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Onetime</h1>
      <ShortcodeInput onSubmit={navigateTimer} />
    </div>
  );
}

export default HomeScreen;
