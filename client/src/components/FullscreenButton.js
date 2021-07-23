import IconButton from "./IconButton";
import FullscreenIcon from "./FullscreenIcon";
import styles from "./FullscreenButton.module.css";

function FullscreenButton({ hidden, onClick }) {
  return (
    <IconButton
      data-testid="fullscreen-button"
      className={styles.button}
      icon={<FullscreenIcon />}
      hidden={hidden}
      onClick={onClick}
    />
  );
}

export default FullscreenButton;
