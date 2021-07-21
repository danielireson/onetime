import Button from "./Button";
import styles from "./Message.module.css";

function Message({ message, onClose }) {
  return (
    <>
      <p className={styles.message}>{message}</p>
      {onClose && <Button onClick={onClose}>Okay</Button>}
    </>
  );
}

export default Message;
