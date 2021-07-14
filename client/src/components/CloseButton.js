import IconButton from "./IconButton";
import CloseIcon from "./CloseIcon";
import styles from "./CloseButton.module.css";

function CloseButton({ hidden, onClick }) {
  return (
    <IconButton
      className={styles.button}
      icon={<CloseIcon />}
      hidden={hidden}
      onClick={onClick}
    />
  );
}

export default CloseButton;
