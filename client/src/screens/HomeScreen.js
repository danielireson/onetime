import { useHistory } from "react-router-dom";
import ShortcodeInput from "../components/ShortcodeInput";
import useDocumentTitle from "../hooks/useDocumentTitle";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
  const history = useHistory();

  useDocumentTitle("Create new timer");

  const navigateTimer = (shortcode) => {
    history.push(shortcode);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Onetime</h1>
      <ShortcodeInput onSubmit={navigateTimer} />
    </div>
  );
}

export default HomeScreen;
