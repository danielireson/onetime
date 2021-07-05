import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { friendlyTime, futureTime, isValid } from "../utils/time";

const SOCKET_URL = window.location.host;
const SOCKET_EVENT = "change";

export default function useTimerApi(timerId) {
  const [endTime, setEndTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      query: { timerId },
    });

    socketRef.current.on(SOCKET_EVENT, (message) => {
      if (isValid(message.endTime)) {
        setEndTime(message.endTime);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [timerId]);

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

  const updateEndTime = (timeInMinutes) => {
    socketRef.current.emit(SOCKET_EVENT, {
      endTime: futureTime(timeInMinutes),
    });
  };

  return { minutes, seconds, updateEndTime };
}
