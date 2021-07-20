import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import useNavigation from "./useNavigation";
import useModal from "./useModal";
import { friendlyTime, futureTime, isValidTimestamp } from "../utils/time";

const SOCKET_URL = window.location.host;
const CHANGE_EVENT = "timer change";
const ERROR_EVENT = "timer error";
const CONNECT_EVENT = "connect";
const DISCONNECT_EVENT = "disconnect";
const DISCONNECT_REASONS = [
  "io server disconnect",
  "ping timeout",
  "transport close",
  "transport error",
];

export default function useTimerApi(timerId) {
  const { navigateHome } = useNavigation();
  const { showMessageModal, showAlertModal, hideModal } = useModal();
  const [endTime, setEndTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      query: { timerId },
    });

    socketRef.current.on(CHANGE_EVENT, (message) => {
      if (isValidTimestamp(message.endTime)) {
        setEndTime(message.endTime);
      }
    });

    socketRef.current.on(ERROR_EVENT, () => {
      showMessageModal("Timer not found");
      navigateHome();
    });

    socketRef.current.on(DISCONNECT_EVENT, (reason) => {
      if (DISCONNECT_REASONS.includes(reason)) {
        showAlertModal("Attempting to reconnect...");
      }
    });

    socketRef.current.on(CONNECT_EVENT, () => {
      hideModal();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [timerId, navigateHome, showMessageModal, showAlertModal, hideModal]);

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
