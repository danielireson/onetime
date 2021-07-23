import styles from "./TimerLink.module.css";

const BASE_URL = window.location.host;

function TimerLink({ hidden }) {
  if (hidden) {
    return null;
  }

  const shortcode = window.location.pathname.split("/")[1];

  return (
    <h2 data-testid="timer-link" className={styles.link}>
      <span className={styles.baseUrl}>{BASE_URL}/</span>
      {shortcode}
    </h2>
  );
}

export default TimerLink;
