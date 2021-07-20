import styles from "./ModalDialog.module.css";

function ModalDialog({ modal }) {
  return (
    <div className={styles.modal}>
      <div className={styles.background}></div>
      <div className={styles.content}>{modal}</div>
    </div>
  );
}

export default ModalDialog;
