import styles from "./TimerLink.module.css";

function TimerLink({ url }) {
  return <h2 className={styles.link}>{url}</h2>;
}

export default TimerLink;
