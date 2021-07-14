import { useRef, useState } from "react";
import Button from "./Button";
import useAutofocus from "../hooks/useAutofocus";
import styles from "./TimerControls.module.css";

function TimerControls({ hidden, updateEndTime }) {
  const [showCustomTimePanel, setShowCustomTimePanel] = useState(false);
  const [customTimeInMins, setCustomTimeInMins] = useState("");
  const customTimeInputRef = useRef();
  useAutofocus(customTimeInputRef);

  if (hidden) {
    return null;
  }

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
          <Button
            className={styles.button}
            onClick={updateEndTimeFromCustomTime}
          >
            Set time
          </Button>
        </div>
      )}
      <div className={styles.presetButtons}>
        <Button
          className={styles.button}
          onClick={() => updateEndTimeFromFixedTime(5)}
        >
          5 mins
        </Button>
        <Button
          className={styles.button}
          onClick={() => updateEndTimeFromFixedTime(10)}
        >
          10 mins
        </Button>
        <Button
          className={styles.button}
          onClick={() => updateEndTimeFromFixedTime(15)}
        >
          15 mins
        </Button>
      </div>
      <Button className={styles.button} onClick={toggleShowCustomTimePanel}>
        Custom time
      </Button>
    </div>
  );
}

export default TimerControls;
