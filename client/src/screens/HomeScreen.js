import { useState } from "react";
import { useHistory } from "react-router-dom";
import ShortcodeInput from "../components/ShortcodeInput";
import Button from "../components/Button";
import useDocumentTitle from "../hooks/useDocumentTitle";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
  const history = useHistory();
  const [shortcode, setShortcode] = useState("");

  useDocumentTitle("Create new timer");

  const navigateTimer = () => {
    history.push(shortcode);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create new timer</h1>
      <ShortcodeInput onChange={setShortcode} />
      <Button onClick={navigateTimer}>Create timer</Button>
    </div>
  );
}

export default HomeScreen;
