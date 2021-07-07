import CloseIcon from "./CloseIcon";
import styles from "./CloseButton.module.css";

function CloseButton({ showButton, onClick }) {
  if (!showButton) {
    return null;
  }

  return (
    <button className={styles.button} onClick={onClick}>
      <CloseIcon className={styles.icon} />
    </button>
  );
}

export default CloseButton;
