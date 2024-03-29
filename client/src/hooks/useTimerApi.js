import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import useNavigation from "./useNavigation";
import useModal from "./useModal";
import { futureTime, isValidTimestamp } from "../utils/time";

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
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      query: { timerId },
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [timerId]);

  useEffect(() => {
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
  }, [navigateHome, showMessageModal, showAlertModal, hideModal]);

  const updateEndTime = (minutes) => {
    socketRef.current.emit(CHANGE_EVENT, {
      endTime: futureTime(minutes),
    });
  };

  return { endTime, updateEndTime };
}
