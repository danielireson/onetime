import Icon from "./Icon";
import styles from "./CloseButton.module.css";

function CloseButton({ showButton, onClick }) {
  if (!showButton) {
    return null;
  }

  return (
    <button className={styles.button} onClick={onClick}>
      <Icon className={styles.icon} name="close" />
    </button>
  );
}

export default CloseButton;
