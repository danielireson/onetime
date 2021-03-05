import { useState } from "react";
import { useHistory } from "react-router-dom";
import { randomString } from "../utils/string";
import "./Home.css";

function Home() {
  const [shortcode, setShortcode] = useState(randomString(5));
  const history = useHistory();

  const BASE_URL = window.location.href;

  return (
    <div className="Home">
      <h1 className="Home-title">Create new timer</h1>
      <div className="Home-timer-url">
        <span className="Home-base-url">{BASE_URL}</span>
        <input
          type="text"
          className="Home-shortcode"
          value={shortcode}
          size={shortcode.length || 1}
          onChange={(e) => setShortcode(e.target.value)}
        />
      </div>
      <button className="Home-button" onClick={() => history.push(shortcode)}>
        Create timer
      </button>
    </div>
  );
}

export default Home;
