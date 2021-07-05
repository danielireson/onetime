import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import Timer from "../components/Timer";
import TimerControls from "../components/TimerControls";
import useTimerApi from "../hooks/useTimerApi";
import styles from "./TimerScreen.module.css";

function TimerScreen() {
  const TIMER_URL = window.location.href;
  const history = useHistory();
  const { timerId } = useParams();
  const { minutes, seconds, updateEndTime } = useTimerApi(timerId);

  useEffect(() => {
    document.title = `${minutes}m ${seconds}s`;
  });

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <CloseButton onClick={navigateHome} />
      <h2 className={styles.url}>{TIMER_URL}</h2>
      <Timer minutes={minutes} seconds={seconds} />
      <TimerControls updateEndTime={updateEndTime} />
    </div>
  );
}

export default TimerScreen;
