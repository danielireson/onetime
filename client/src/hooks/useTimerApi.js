import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import useNavigation from "./useNavigation";
import useModal from "./useModal";
import { friendlyTime, futureTime, isValid } from "../utils/time";

const SOCKET_URL = window.location.host;
const CHANGE_EVENT = "timer-change";
const ERROR_EVENT = "timer-error";

export default function useTimerApi(timerId) {
  const { navigateHome } = useNavigation();
  const { showMessageModal } = useModal();
  const [endTime, setEndTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      query: { timerId },
    });

    socketRef.current.on(CHANGE_EVENT, (message) => {
      if (isValid(message.endTime)) {
        setEndTime(message.endTime);
      }
    });

    socketRef.current.on(ERROR_EVENT, () => {
      showMessageModal("Invalid timer link");
      navigateHome();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [timerId, navigateHome, showMessageModal]);

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

  const updateEndTime = (mins) => {
    socketRef.current.emit(CHANGE_EVENT, {
      endTime: futureTime(mins),
    });
  };

  return { minutes, seconds, updateEndTime };
}
