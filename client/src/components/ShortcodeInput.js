import { useForm } from "react-hook-form";
import Button from "./Button";
import useTheme from "../hooks/useTheme";
import useFormAutofocus from "../hooks/useFormAutofocus";
import { randomString } from "../utils/string";
import { classList } from "../utils/style";
import { inputSize } from "../utils/form";
import styles from "./ShortcodeInput.module.css";

const DEFAULT_SIZE = 5;
const MAX_SIZE = 30;

function ShortcodeInput({ onSubmit }) {
  const { isDarkTheme, isLightTheme } = useTheme();
  const formRef = useFormAutofocus();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const baseUrl = window.location.href;

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({ shortcode }) => onSubmit(shortcode))}
      noValidate
      ref={formRef}
    >
      <div className={styles.field}>
        <span className={styles.baseUrl}>{baseUrl}</span>
        <input
          type="text"
          className={classList(styles.input, {
            [styles.darkTheme]: isDarkTheme,
            [styles.lightTheme]: isLightTheme,
          })}
          defaultValue={randomString(DEFAULT_SIZE)}
          size={inputSize(watch("shortcode"), DEFAULT_SIZE)}
          minLength={DEFAULT_SIZE}
          maxLength={MAX_SIZE}
          {...register("shortcode", {
            required: {
              value: true,
              message: `Shortcode must be at least ${DEFAULT_SIZE} characters`,
            },
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
