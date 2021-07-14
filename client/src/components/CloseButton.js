import IconButton from "./IconButton";
import CloseIcon from "./CloseIcon";
import styles from "./CloseButton.module.css";

function CloseButton({ showButton, onClick }) {
  return (
    <IconButton
      className={styles.button}
      showButton={showButton}
      icon={<CloseIcon />}
      onClick={onClick}
    />
  );
}

export default CloseButton;
