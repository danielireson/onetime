import IconButton from "./IconButton";
import CloseIcon from "./CloseIcon";
import styles from "./CloseButton.module.css";

function CloseButton({ hidden, onClick }) {
  return (
    <IconButton
      data-testid="close-button"
      className={styles.button}
      icon={<CloseIcon />}
      hidden={hidden}
      onClick={onClick}
    />
  );
}

export default CloseButton;
