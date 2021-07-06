import Icon from "./Icon";
import styles from "./FullscreenButton.module.css";

function FullscreenButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Icon className={styles.icon} name="fullscreen" />
    </button>
  );
}

export default FullscreenButton;
