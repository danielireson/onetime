import { useEffect, useState } from "react";
import { randomString } from "../utils/string";
import styles from "./ShortcodeInput.module.css";

function ShortcodeInput({ onChange }) {
  const [shortcode, setShortcode] = useState(randomString(5));

  useEffect(() => {
    onChange(shortcode);
  });

  const BASE_URL = window.location.href;

  return (
    <div className={styles.wrapper}>
      <span className={styles.baseUrl}>{BASE_URL}</span>
      <input
        type="text"
        className={styles.input}
        value={shortcode}
        size={shortcode.length || 1}
        required
        minLength="5"
        maxLength="30"
        onChange={(e) => setShortcode(e.target.value)}
      />
    </div>
  );
}

export default ShortcodeInput;
