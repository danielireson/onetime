import styles from "./Timer.module.css";

const MAX_DISPLAY_MINUTES = 1440;
const MAX_MINUTES_DIGITS = 4;

function Timer({ minutes, seconds }) {
  const showMinutes = minutes < MAX_DISPLAY_MINUTES;
  const showSeconds = minutes.toString().length < MAX_MINUTES_DIGITS;

  return (
    <h1 className={styles.time}>
      {!showMinutes && (
        <span className={styles.period}>
          &gt;{MAX_DISPLAY_MINUTES}
          <span className={styles.unit}>m</span>
        </span>
      )}
      {showMinutes && (
        <span className={styles.period}>
          {minutes}
          <span className={styles.unit}>m</span>
        </span>
      )}
      {showSeconds && (
        <span className={styles.period}>
          {seconds}
          <span className={styles.unit}>s</span>
        </span>
      )}
    </h1>
  );
}

export default Timer;
