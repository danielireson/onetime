import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { futureTime, isValid } from "../utils/time";

const SOCKET_URL = window.location.host;
const SOCKET_EVENT = "change";

export default function useTimerApi(timerId) {
  const [endTime, setEndTime] = useState(0);
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

  const updateEndTime = (timeInMinutes) => {
    socketRef.current.emit(SOCKET_EVENT, {
      endTime: futureTime(timeInMinutes),
    });
  };

  return { endTime, updateEndTime };
}
