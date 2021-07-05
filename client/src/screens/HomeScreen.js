import { useState } from "react";
import { useHistory } from "react-router-dom";
import ShortcodeInput from "../components/ShortcodeInput";
import useDocumentTitle from "../hooks/useDocumentTitle";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
  const [shortcode, setShortcode] = useState("");
  const history = useHistory();

  useDocumentTitle("Create new timer");

  const navigateTimer = () => {
    history.push(shortcode);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create new timer</h1>
      <ShortcodeInput onChange={setShortcode} />
      <button onClick={navigateTimer}>Create timer</button>
    </div>
  );
}

export default HomeScreen;
