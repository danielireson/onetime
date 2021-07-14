import { classList } from "../utils/style";
import styles from "./Button.module.css";

function Button({ className, disabled, onClick, children }) {
  return (
    <button
      className={classList(styles.button, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
