import { useHistory } from "react-router-dom";
import ShortcodeInput from "../components/ShortcodeInput";
import useDocumentTitle from "../hooks/useDocumentTitle";
import styles from "./HomeScreen.module.css";
import UsageSection from "../components/UsageSection";

function HomeScreen() {
  const history = useHistory();

  useDocumentTitle("Create new timer");

  const navigateTimer = (shortcode) => {
    history.push(shortcode);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create new timer</h1>
      <UsageSection />
      <ShortcodeInput onSubmit={navigateTimer} />
    </div>
  );
}

export default HomeScreen;
