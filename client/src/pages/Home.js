import { useState } from "react";
import { useHistory } from "react-router-dom";
import ShortcodeInput from "../components/ShortcodeInput";
import "./Home.css";

function Home() {
  const [shortcode, setShortcode] = useState("");
  const history = useHistory();

  const navigateTimer = () => {
    history.push(shortcode);
  };

  return (
    <div className="Home">
      <h1 className="Home-title">Create new timer</h1>
      <ShortcodeInput onChange={setShortcode} />
      <button className="Home-button" onClick={navigateTimer}>
        Create timer
      </button>
    </div>
  );
}

export default Home;
