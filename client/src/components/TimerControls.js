import { useLayoutEffect, useRef, useState } from "react";
import "./TimerControls.css";

function TimerControls({ updateEndTime }) {
  const [showCustomTimePanel, setShowCustomTimePanel] = useState(false);
  const [customTimeInMins, setCustomTimeInMins] = useState("");
  const customTimeInputRef = useRef();

  useLayoutEffect(() => {
    if (showCustomTimePanel) {
      customTimeInputRef.current.focus();
    }
  });

  const toggleShowCustomTimePanel = () => {
    setShowCustomTimePanel(!showCustomTimePanel);
  };

  const resetCustomTimePanel = () => {
    setShowCustomTimePanel(false);
    setCustomTimeInMins("");
  };

  const updateEndTimeFromCustomTime = () => {
    updateEndTime(customTimeInMins);
    resetCustomTimePanel();
  };

  const updateEndTimeFromFixedTime = (timeInMinutes) => {
    updateEndTime(timeInMinutes);
    resetCustomTimePanel();
  };

  return (
    <div className="TimerControls">
      {showCustomTimePanel && (
        <div className="TimerControls-panel">
          <input
            type="text"
            className="TimerControls-panel-input"
            placeholder="Time in minutes"
            value={customTimeInMins}
            ref={customTimeInputRef}
            onChange={(e) => setCustomTimeInMins(e.target.value)}
          />
          <button
            className="TimerControls-button"
            onClick={updateEndTimeFromCustomTime}
          >
            Set time
          </button>
        </div>
      )}
      <button
        className="TimerControls-button"
        onClick={() => updateEndTimeFromFixedTime(5)}
      >
        5 mins
      </button>
      <button
        className="TimerControls-button"
        onClick={() => updateEndTimeFromFixedTime(10)}
      >
        10 mins
      </button>
      <button
        className="TimerControls-button"
        onClick={() => updateEndTimeFromFixedTime(15)}
      >
        15 mins
      </button>
      <button
        className="TimerControls-button"
        onClick={toggleShowCustomTimePanel}
      >
        Custom
      </button>
    </div>
  );
}

export default TimerControls;
