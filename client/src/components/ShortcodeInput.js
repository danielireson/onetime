import { useForm } from "react-hook-form";
import Button from "./Button";
import { randomString } from "../utils/string";
import styles from "./ShortcodeInput.module.css";

const DEFAULT_SIZE = 5;
const MAX_SIZE = 30;

function ShortcodeInput({ onSubmit }) {
  const BASE_URL = window.location.href;
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentValue = watch("shortcode");

  let inputSize = DEFAULT_SIZE;

  if (currentValue?.length > DEFAULT_SIZE) {
    inputSize = currentValue.length;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({ shortcode }) => onSubmit(shortcode))}
      noValidate
    >
      <div className={styles.field}>
        <span className={styles.baseUrl}>{BASE_URL}</span>
        <input
          type="text"
          className={styles.input}
          defaultValue={randomString(DEFAULT_SIZE)}
          size={inputSize}
          minLength={DEFAULT_SIZE}
          maxLength={MAX_SIZE}
          {...register("shortcode", {
            required: true,
            minLength: {
              value: DEFAULT_SIZE,
              message: `Shortcode must be at least ${DEFAULT_SIZE} characters`,
            },
            maxLength: {
              value: MAX_SIZE,
              message: `Shortcode must be less than ${MAX_SIZE} characters`,
            },
            pattern: {
              value: /^[A-Z0-9]+$/i,
              message: "Shortcode can only contain letters and numbers",
            },
          })}
        />
        {errors.shortcode && (
          <span className={styles.error}>{errors.shortcode.message}</span>
        )}
      </div>
      <Button className={styles.button}>Join timer</Button>
    </form>
  );
}

export default ShortcodeInput;
