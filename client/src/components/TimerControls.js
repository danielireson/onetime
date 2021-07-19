import Button from "./Button";
import CustomTimeInput from "./CustomTimeInput";
import useToggle from "../hooks/useToggle";
import styles from "./TimerControls.module.css";

function TimerControls({ hidden, onUpdateEndTime }) {
  const [showCustomTimeInput, toggleShowCustomTimeInput] = useToggle(false);

  if (hidden) {
    return null;
  }

  const updateEndTime = (mins) => {
    onUpdateEndTime(mins);
    toggleShowCustomTimeInput();
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
