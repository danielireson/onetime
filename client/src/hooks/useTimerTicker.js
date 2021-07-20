import { useEffect, useState } from "react";
import { friendlyTime } from "../utils/time";

export default function useTimerTicker(endTime) {
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
  }, [endTime]);

  return { minutes, seconds };
}
