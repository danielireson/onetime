import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import TimerControls from "../components/TimerControls";
import "./Timer.css";

function Timer() {
  const { timerId } = useParams();
  const history = useHistory();

  useEffect(() => {
    document.title = `Timer ${timerId}`;
  });

  const navigateHome = () => {
    history.push("/");
  };

  const TIMER_URL = window.location.href;

  return (
    <div className="Timer">
      <CloseButton onClose={navigateHome} />
      <h2 className="Timer-url">{TIMER_URL}</h2>
      <h1 className="Timer-time">
        4<span className="Timer-period">m</span>
        30<span className="Timer-period">s</span>
      </h1>
      <TimerControls />
    </div>
  );
}

export default Timer;
