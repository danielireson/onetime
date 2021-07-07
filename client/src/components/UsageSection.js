import styles from "./Usage.module.css";

function Usage() {
  return (
    <div className={styles.section}>
      <div className={styles.box}>1. Choose shortcode</div>
      <div className={styles.box}>2. Share shortcode</div>
      <div className={styles.box}>3. Control remotely</div>
    </div>
  );
}

export default Usage;
