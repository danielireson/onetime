import { useForm } from "react-hook-form";
import Button from "./Button";
import useFormAutofocus from "../hooks/useFormAutofocus";
import styles from "./CustomTimeInput.module.css";

function CustomTimeInput({ onUpdateEndTime }) {
  const { register, handleSubmit } = useForm();
  const formRef = useFormAutofocus();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({ mins }) => onUpdateEndTime(mins))}
      noValidate
      ref={formRef}
    >
      <input
        type="number"
        className={styles.input}
        placeholder="Time in minutes"
        {...register("mins", { required: true, min: 0 })}
      />
      <Button className={styles.button}>Set time</Button>
    </form>
  );
}

export default CustomTimeInput;
