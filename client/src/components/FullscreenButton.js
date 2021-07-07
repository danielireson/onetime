import FullscreenIcon from "./FullscreenIcon";
import styles from "./FullscreenButton.module.css";

function FullscreenButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <FullscreenIcon className={styles.icon} />
    </button>
  );
}

export default FullscreenButton;
