import IconButton from "./IconButton";
import CloseIcon from "./CloseIcon";
import styles from "./CloseButton.module.css";

function CloseButton({ showButton, onClick }) {
  return (
    <IconButton
      className={styles.button}
      icon={<CloseIcon />}
      onClick={onClick}
      showButton={showButton}
    />
  );
}

export default CloseButton;
