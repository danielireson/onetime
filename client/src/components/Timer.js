import styles from "./Timer.module.css";

const MINUTES_IN_DAY = 1440;
const MAX_MINUTES_DIGITS = 4;

function Timer({ minutes, seconds }) {
  const showMinutes = minutes < MINUTES_IN_DAY;
  const showSeconds = minutes.toString().length < MAX_MINUTES_DIGITS;

  return (
    <h1 data-testid="timer" className={styles.time}>
      {!showMinutes && (
        <span className={styles.period}>
          &gt;1
          <span className={styles.unit}>d</span>
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
