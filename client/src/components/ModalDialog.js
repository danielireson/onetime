import styles from "./ModalDialog.module.css";

function ModalDialog({ modal, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.content}>{modal}</div>
    </div>
  );
}

export default ModalDialog;
