import { useState } from "react";
import { useHistory } from "react-router-dom";
import ShortcodeInput from "../components/ShortcodeInput";
import "./Home.css";

function Home() {
  const [shortcode, setShortcode] = useState("");
  const history = useHistory();

  return (
    <div className="Home">
      <h1 className="Home-title">Create new timer</h1>
      <ShortcodeInput onChange={setShortcode} />
      <button className="Home-button" onClick={() => history.push(shortcode)}>
        Create timer
      </button>
    </div>
  );
}

export default Home;
