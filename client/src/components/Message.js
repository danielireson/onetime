import Button from "./Button";
import styles from "./Message.module.css";

function Message({ message, onClose }) {
  return (
    <>
      <p data-testid="message-text" className={styles.message}>
        {message}
      </p>
      {onClose && (
        <Button data-testid="message-button" onClick={onClose}>
          Okay
        </Button>
      )}
    </>
  );
}

export default Message;
