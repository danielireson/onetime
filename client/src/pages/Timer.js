import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import TimerControls from "../components/TimerControls";
import useTimerApi from "../hooks/useTimerApi";
import { friendlyTime } from "../utils/time";
import styles from "./Timer.module.css";

const MAX_DISPLAY_MINUTES = 1440;

function Timer() {
  const TIMER_URL = window.location.href;
  const { timerId } = useParams();
  const { endTime, updateEndTime } = useTimerApi(timerId);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const showMinutes = minutes < MAX_DISPLAY_MINUTES;
  const showSeconds = minutes.toString().length < 4;

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

  return (
    <div className={styles.wrapper}>
      <HomeButton />
      <h2 className={styles.url}>{TIMER_URL}</h2>
      <h1 className={styles.time}>
        {!showMinutes && (
          <span className={styles.period}>
            &gt;{MAX_DISPLAY_MINUTES}
            <span className={styles.unit}>m</span>
          </span>
        )}
        {showMinutes && (
          <span className={styles.period}>
            {minutes}
            <span className={styles.unit}>m</span>
          </span>
        )}
        {showSeconds && (
          <span className={styles.period}>
            {seconds}
            <span className={styles.unit}>s</span>
          </span>
        )}
      </h1>
      <TimerControls updateEndTime={updateEndTime} />
    </div>
  );
}

export default Timer;
