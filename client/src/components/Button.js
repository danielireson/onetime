import { classList } from "../utils/style";
import styles from "./Button.module.css";

function Button({ className, children, ...props }) {
  return (
    <button className={classList(styles.button, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
