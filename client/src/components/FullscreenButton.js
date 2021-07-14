import IconButton from "./IconButton";
import FullscreenIcon from "./FullscreenIcon";
import styles from "./FullscreenButton.module.css";

function FullscreenButton({ onClick }) {
  return (
    <IconButton
      className={styles.button}
      icon={<FullscreenIcon />}
      onClick={onClick}
    />
  );
}

export default FullscreenButton;
