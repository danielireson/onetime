import styles from "./Logo.module.css";

function Logo() {
  return (
    <h1 data-testid="logo" className={styles.logo}>
      Onetime
    </h1>
  );
}

export default Logo;
