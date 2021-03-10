import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ShortcodeInput from "../components/ShortcodeInput";
import styles from "./Home.module.css";

function Home() {
  const [shortcode, setShortcode] = useState("");
  const history = useHistory();

  useEffect(() => {
    document.title = "Create new timer";
  });

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

export default Home;
