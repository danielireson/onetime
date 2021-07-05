import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import Timer from "../components/Timer";
import TimerControls from "../components/TimerControls";
import TimerLink from "../components/TimerLink";
import useTimerApi from "../hooks/useTimerApi";
import styles from "./TimerScreen.module.css";

function TimerScreen() {
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
      <TimerLink url={window.location.href} />
      <Timer minutes={minutes} seconds={seconds} />
      <TimerControls updateEndTime={updateEndTime} />
    </div>
  );
}

export default TimerScreen;
