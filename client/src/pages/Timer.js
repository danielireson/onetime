import { useParams } from "react-router-dom";
import "./Timer.css";

function Timer() {
  const { timerId } = useParams();

  const TIMER_URL = window.location.href;

  return (
    <div className="Timer">
      <h2 className="Timer-url">{TIMER_URL}</h2>
      <h1 className="Timer-time">
        4<span className="Timer-period">m</span>
        30<span className="Timer-period">s</span>
      </h1>
    </div>
  );
}

export default Timer;
