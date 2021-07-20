import { useForm } from "react-hook-form";
import Button from "./Button";
import useFormAutofocus from "../hooks/useFormAutofocus";
import styles from "./CustomTimeInput.module.css";

const validations = {
  required: {
    value: true,
    message: `Custom time must be zero or greater`,
  },
  min: {
    value: 0,
    message: "Custom time must be zero or greater",
  },
};

function CustomTimeInput({ onUpdateEndTime }) {
  const formRef = useFormAutofocus();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({ minutes }) => onUpdateEndTime(minutes))}
      noValidate
      ref={formRef}
    >
      <input
        type="number"
        className={styles.input}
        placeholder="Time in minutes"
        {...register("minutes", validations)}
      />
      <Button className={styles.button} disabled={errors.minutes}>
        Set time
      </Button>
    </form>
  );
}

export default CustomTimeInput;
