import styles from "./TimerLink.module.css";

function TimerLink({ showLink, url }) {
  if (!showLink) {
    return null;
  }

  return <h2 className={styles.link}>{url}</h2>;
}

export default TimerLink;
