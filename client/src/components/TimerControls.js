import { useLayoutEffect, useRef, useState } from "react";
import "./TimerControls.css";

function TimerControls() {
  const [showCustomTime, setShowCustomTime] = useState(false);
  const customTimeInputRef = useRef(null);

  useLayoutEffect(() => {
    if (showCustomTime) {
      customTimeInputRef.current.focus();
    }
  });

  const toggleCustomTime = () => {
    setShowCustomTime(!showCustomTime);
  };

  const setCustomTime = () => {
    setShowCustomTime(false);
  };

  return (
    <div className="TimerControls">
      {showCustomTime && (
        <div className="TimerControls-custom">
          <input
            ref={customTimeInputRef}
            className="TimerControls-input"
            type="text"
            placeholder="Time in minutes"
          />
          <button className="TimerControls-button" onClick={setCustomTime}>
            Set time
          </button>
        </div>
      )}
      <button className="TimerControls-button">5 mins</button>
      <button className="TimerControls-button">10 mins</button>
      <button className="TimerControls-button">15 mins</button>
      <button className="TimerControls-button" onClick={toggleCustomTime}>
        Custom
      </button>
    </div>
  );
}

export default TimerControls;
