import { useEffect, useState } from "react";
import { randomString } from "../utils/string";
import "./ShortcodeInput.css";

function ShortcodeInput({ onChange }) {
  const [shortcode, setShortcode] = useState(randomString(5));

  useEffect(() => {
    onChange(shortcode);
  });

  const BASE_URL = window.location.href;

  return (
    <div className="ShortcodeInput">
      <span className="ShortcodeInput-base-url">{BASE_URL}</span>
      <input
        type="text"
        className="ShortcodeInput-input"
        value={shortcode}
        size={shortcode.length || 1}
        onChange={(e) => setShortcode(e.target.value)}
      />
    </div>
  );
}

export default ShortcodeInput;
