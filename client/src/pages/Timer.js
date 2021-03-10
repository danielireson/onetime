import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import TimerControls from "../components/TimerControls";
import useTimerApi from "../hooks/useTimerApi";
import { friendlyTime } from "../utils/time";
import styles from "./Timer.module.css";

function Timer() {
  const TIMER_URL = window.location.href;
  const history = useHistory();
  const { timerId } = useParams();
  const { endTime, updateEndTime } = useTimerApi(timerId);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const calculateMinutesAndSeconds = () => {
      const { minutes: m, seconds: s } = friendlyTime(endTime);
      setMinutes(m);
      setSeconds(s);
    };

    calculateMinutesAndSeconds();

    const interval = setInterval(() => {
      calculateMinutesAndSeconds();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    document.title = `${minutes}m ${seconds}s`;
  });

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <CloseButton onClose={navigateHome} />
      <h2 className={styles.url}>{TIMER_URL}</h2>
      <h1 className={styles.time}>
        {minutes}
        <span className={styles.period}>m</span>
        {seconds}
        <span className={styles.period}>s</span>
      </h1>
      <TimerControls updateEndTime={updateEndTime} />
    </div>
  );
}

export default Timer;
