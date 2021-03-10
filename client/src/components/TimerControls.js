import { useLayoutEffect, useRef, useState } from "react";
import styles from "./TimerControls.module.css";

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
    if (customTimeInputRef.current.checkValidity()) {
      updateEndTime(customTimeInMins);
      resetCustomTimePanel();
    }
  };

  const updateEndTimeFromFixedTime = (timeInMinutes) => {
    updateEndTime(timeInMinutes);
    resetCustomTimePanel();
  };

  return (
    <div className={styles.wrapper}>
      {showCustomTimePanel && (
        <div className={styles.panel}>
          <input
            type="number"
            className={styles.panelInput}
            placeholder="Time in minutes"
            value={customTimeInMins}
            ref={customTimeInputRef}
            onChange={(e) => setCustomTimeInMins(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={updateEndTimeFromCustomTime}
          >
            Set time
          </button>
        </div>
      )}
      <button
        className={styles.button}
        onClick={() => updateEndTimeFromFixedTime(5)}
      >
        5 mins
      </button>
      <button
        className={styles.button}
        onClick={() => updateEndTimeFromFixedTime(10)}
      >
        10 mins
      </button>
      <button
        className={styles.button}
        onClick={() => updateEndTimeFromFixedTime(15)}
      >
        15 mins
      </button>
      <button className={styles.button} onClick={toggleShowCustomTimePanel}>
        Custom
      </button>
    </div>
  );
}

export default TimerControls;
