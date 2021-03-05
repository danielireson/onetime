import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const history = useHistory();

  function handleCreateTimer() {
    history.push("/a7s6d");
  }

  return (
    <div className="Home">
      <h1 className="Home-title">Create new timer</h1>
      <div className="Home-shortcode-input">
        <span>http://localhost/</span>
        <input type="text" id="shortcode" defaultValue="a7s6d" size="5" />
      </div>
      <button className="Home-button" onClick={handleCreateTimer}>
        Create timer
      </button>
    </div>
  );
}

export default Home;
