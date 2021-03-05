import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Go <Link to="/timer">/timer</Link>
        </p>
      </header>
    </div>
  );
}

export default Home;
