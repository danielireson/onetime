import { useState } from "react";
import Button from "./Button";
import CustomTimeInput from "./CustomTimeInput";
import styles from "./TimerControls.module.css";

function TimerControls({ hidden, onUpdateEndTime }) {
  const [showCustomTimeInput, setShowCustomTimeInput] = useState(false);

  if (hidden) {
    return null;
  }

  const toggleShowCustomTimeInput = () => {
    setShowCustomTimeInput(!showCustomTimeInput);
  };

  const updateEndTime = (mins) => {
    onUpdateEndTime(mins);
    setShowCustomTimeInput(false);
  };

  return (
    <div className={styles.wrapper}>
      {showCustomTimeInput && (
        <CustomTimeInput onUpdateEndTime={updateEndTime} />
      )}
      <div className={styles.presetButtons}>
        <Button className={styles.button} onClick={() => updateEndTime(5)}>
          5 mins
        </Button>
        <Button className={styles.button} onClick={() => updateEndTime(10)}>
          10 mins
        </Button>
        <Button className={styles.button} onClick={() => updateEndTime(15)}>
          15 mins
        </Button>
      </div>
      <Button className={styles.button} onClick={toggleShowCustomTimeInput}>
        Custom time
      </Button>
    </div>
  );
}

export default TimerControls;
