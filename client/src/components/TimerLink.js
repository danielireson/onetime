import styles from "./TimerLink.module.css";

function TimerLink({ hidden }) {
  if (hidden) {
    return null;
  }

  const baseUrl = window.location.host;
  const shortcode = window.location.pathname.split("/")[1];

  return (
    <h2 className={styles.link}>
      <span className={styles.baseUrl}>{baseUrl}/</span>
      {shortcode}
    </h2>
  );
}

export default TimerLink;
