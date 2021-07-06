import styles from "./Button.module.css";

function Button({ className, disabled, children, onClick }) {
  return (
    <button
      className={`${styles.button} ${className ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
