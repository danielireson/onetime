import { Link, useParams } from "react-router-dom";
import "./Timer.css";

function Timer() {
  const { timerId } = useParams();

  return (
    <div className="Timer">
      <header className="Timer-header">
        <p>
          Go <Link to="/">/home</Link>
        </p>
      </header>
    </div>
  );
}

export default Timer;
